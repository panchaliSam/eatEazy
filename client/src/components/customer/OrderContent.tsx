import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  CircularProgress,
  TextField,
  Card,
  CardContent,
  Collapse,
  IconButton,
  Divider,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReceiptIcon from "@mui/icons-material/Receipt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import OrderApi from "@app_utils/api/OrderApi";
import RestaurantApi from "@app_utils/api/RestaurantApi";
import UserApi from "@app_utils/api/UserApi";
import { getAccessToken} from "@app_utils/helper/TokenHelper";


// Function to format the date in a more readable format
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date);
};

// Function to get status chip color
const getStatusColor = (status: string) => {
  switch (status.toUpperCase()) {
    case 'Completed':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Failed':
      return 'error';
    default:
      return 'default';
  }
};

interface ExpandableRowProps {
  order: any;
  restaurantName: string;
}

// Component for expandable row details
const ExpandableRow: React.FC<ExpandableRowProps> = ({ order, restaurantName }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            size="small"
            onClick={() => setOpen(!open)}
            aria-label="expand row"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{order.OrderID}</TableCell>
        <TableCell>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <RestaurantIcon fontSize="small" color="action" />
            <Typography>{restaurantName}</Typography>
          </Box>
        </TableCell>
        <TableCell>Rs.{order.TotalAmount.toFixed(2)}</TableCell>
        <TableCell>
          <Chip 
            label={order.Status}
            color={getStatusColor(order.Status) as any}
            size="small"
            sx={{ fontWeight: 500 }}
          />
        </TableCell>
        <TableCell>{formatDate(order.CreatedAt)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Payment Status: {order.PaymentStatus || "Pending"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Order Type: {order.OrderType || "Delivery"}
                </Typography>
                {order.DeliveryAddress && (
                  <Typography variant="body2" color="text.secondary">
                    Delivery Address: {order.DeliveryAddress}
                  </Typography>
                )}
              </Box>
              
              <Divider sx={{ my: 1.5 }} />
              
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button 
                  variant="outlined"
                  size="small"
                  startIcon={<ReceiptIcon />}
                >
                  Download Receipt
                </Button>
                {order.Status.toUpperCase() === 'PENDING' && (
                  <Button 
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Cancel Order
                  </Button>
                )}
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export const CustomerOrderContent = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [restaurantMap, setRestaurantMap] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const navigate = useNavigate();

  // Stats 
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(0);
  const [favoriteRestaurant, setFavoriteRestaurant] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAccessToken();
      if (!token) throw new Error("Authentication required");

      // Use the existing API function to get user data including ID
      const userData = await UserApi.verifyToken();
      if (!userData || !userData.id) throw new Error("User ID not found");
      
      const userId = userData.id;


        // Fetch only current user's orders and all restaurants
        const [ordersData, restaurantsData] = await Promise.all([
          OrderApi.getOrderByUserId(parseInt(userId)),
          RestaurantApi.getAllRestaurants(),
        ]);

        // Map restaurant data for easy access
        const restaurantMapData: { [key: string]: string } = {};
        restaurantsData.forEach((rest: any) => {
          restaurantMapData[rest.RestaurantID] = rest.RestaurantName;
        });

        // Calculate user stats
        let total = 0;
        const restaurantFrequency: { [key: string]: number } = {};

        ordersData.forEach((order: any) => {
          total += order.TotalAmount;
          
          const restaurantId = order.RestaurantID;
          if (!restaurantFrequency[restaurantId]) {
            restaurantFrequency[restaurantId] = 0;
          }
          restaurantFrequency[restaurantId]++;
        });

        // Find favorite restaurant (most ordered from)
        let maxOrders = 0;
        let favoriteRestaurantId = "";
        
        Object.entries(restaurantFrequency).forEach(([restId, count]) => {
          if (count > maxOrders) {
            maxOrders = count;
            favoriteRestaurantId = restId;
          }
        });

        setOrders(ordersData);
        setRestaurantMap(restaurantMapData);
        setTotalSpent(total);
        setOrderCount(ordersData.length);
        setFavoriteRestaurant(restaurantMapData[favoriteRestaurantId] || "");
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to fetch order data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter orders based on status
  const filteredOrders = orders.filter((order) => {
    return order.Status.toLowerCase().includes(statusFilter.toLowerCase());
  });

  // Get the most recent orders first
  const sortedOrders = [...filteredOrders].sort((a, b) => 
    new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
  );

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
        My Orders
      </Typography>

      {/* Stats Cards */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 3,
        mb: 4
      }}>
        <Card elevation={1} sx={{ borderRadius: 2, bgcolor: '#f5fcff' }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Total Orders
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {orderCount}
            </Typography>
          </CardContent>
        </Card>
        
        <Card elevation={1} sx={{ borderRadius: 2, bgcolor: '#fff5f5' }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Total Spent
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Rs.{totalSpent.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
        
        {favoriteRestaurant && (
          <Card elevation={1} sx={{ borderRadius: 2, bgcolor: '#f5fff5' }}>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Favorite Restaurant
              </Typography>
              <Typography variant="h6" noWrap sx={{ fontWeight: 600 }}>
                {favoriteRestaurant}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>

      {/* Filter Input */}
      <Box sx={{ mb: 3 }}>
        <TextField
          label="Filter by Status"
          variant="outlined"
          size="small"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ width: { xs: '100%', sm: 300 } }}
        />
      </Box>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      )}
      
      {error && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}

      {!loading && orders.length === 0 && (
        <Box sx={{ 
          py: 8, 
          textAlign: 'center',
          border: '1px dashed #ccc',
          borderRadius: 2,
          bgcolor: '#fafafa'
        }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            You haven't placed any orders yet
          </Typography>
          <Button 
            variant="contained"
            onClick={() => navigate('/restaurants')}
            sx={{ 
              mt: 2,
              bgcolor: "#EA7300",
              "&:hover": { bgcolor: "#d66a00" }
            }}
          >
            Browse Restaurants
          </Button>
        </Box>
      )}

      {/* Orders Table */}
      {!loading && orders.length > 0 && (
        <TableContainer component={Paper} sx={{ borderRadius: 2, mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                <TableCell />
                <TableCell>Order ID</TableCell>
                <TableCell>Restaurant</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedOrders.map((order) => (
                <ExpandableRow 
                  key={order.OrderID}
                  order={order}
                  restaurantName={restaurantMap[order.RestaurantID] || "Unknown Restaurant"} 
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

    </Box>
  );
};