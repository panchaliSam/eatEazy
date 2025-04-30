import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import UserApi from "@app_utils/api/UserApi";
import OrderApi from "@app_utils/api/OrderApi";
import RestaurantApi from "@app_utils/api/RestaurantApi";
import { getAccessToken } from "@app_utils/helper/TokenHelper";

// Function to format the date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString(); // Adjust locale and options if needed
};

// Function to format the month (YYYY-MM format)
const formatMonth = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;
};

export const OrderContent = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [restaurantMap, setRestaurantMap] = useState<{ [key: string]: string }>({});
  const [userMap, setUserMap] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState<any>({});
  const [deleteOrder, setDeleteOrder] = useState<any>({});

  // Filter states
  const [restaurantFilter, setRestaurantFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [usernameFilter, setUsernameFilter] = useState<string>("");

  // Monthly income by restaurant
  const [restaurantIncome, setRestaurantIncome] = useState<{ [key: string]: { [key: string]: number } }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAccessToken();
        if (!token) throw new Error("No access token found.");

        // Fetch data concurrently
        const [ordersData, restaurantsData, usersData] = await Promise.all([
          OrderApi.getAllOrdersForAdmin(),
          RestaurantApi.getAllRestaurants(),
          UserApi.getAllUser(),
        ]);

        // Map restaurant and user data for easy access
        const restaurantMapData: { [key: string]: string } = {};
        const userMapData: { [key: string]: string } = {};
        const incomeData: { [key: string]: { [key: string]: number } } = {}; // RestaurantID -> { Month -> Total Income }

        restaurantsData.forEach((rest: any) => {
          restaurantMapData[rest.RestaurantID] = rest.RestaurantName;
        });

        usersData.forEach((user: any) => {
          userMapData[user.UserID] = `${user.Firstname} ${user.Lastname}`;
        });

        // Calculate monthly income per restaurant
        ordersData.forEach((order: any) => {
          const restaurantID = order.RestaurantID;
          const orderMonth = formatMonth(order.CreatedAt); // Get the month (YYYY-MM format)
          const amount = order.TotalAmount;

          // Initialize restaurant income if not exists
          if (!incomeData[restaurantID]) {
            incomeData[restaurantID] = {};
          }

          // Initialize month income if not exists
          if (!incomeData[restaurantID][orderMonth]) {
            incomeData[restaurantID][orderMonth] = 0;
          }

          // Accumulate income for the month
          incomeData[restaurantID][orderMonth] += amount;
        });

        setOrders(ordersData);
        setRestaurantMap(restaurantMapData);
        setUserMap(userMapData);
        setRestaurantIncome(incomeData);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (order: any) => {
    setSelectedOrder(order);
    setOpenEdit(true);
  };

  const handleDeleteClick = (order: any) => {
    setDeleteOrder(order);
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      setLoading(true);
      const response = await OrderApi.deleteOrder(deleteOrder.OrderID);
      console.log("Delete response:", response); // Log the response
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.OrderID !== deleteOrder.OrderID)
      );
      setOpenDelete(false);
    } catch (error) {
      console.error("Delete error:", error); // Log error
      setError("Failed to delete order");
    } finally {
      setLoading(false);
    }
  };

  // Filtered orders based on search criteria
  const filteredOrders = orders.filter((order) => {
    const restaurantMatches = restaurantMap[order.RestaurantID]
      .toLowerCase()
      .includes(restaurantFilter.toLowerCase());
    const statusMatches = order.Status.toLowerCase().includes(statusFilter.toLowerCase());
    const usernameMatches = userMap[order.UserID]
      .toLowerCase()
      .includes(usernameFilter.toLowerCase());

    return restaurantMatches && statusMatches && usernameMatches;
  });

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Orders
      </Typography>

      {/* Filter Inputs */}
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Filter by Restaurant"
          variant="outlined"
          value={restaurantFilter}
          onChange={(e) => setRestaurantFilter(e.target.value)}
        />
        <TextField
          label="Filter by Status"
          variant="outlined"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        />
        <TextField
          label="Filter by Username"
          variant="outlined"
          value={usernameFilter}
          onChange={(e) => setUsernameFilter(e.target.value)}
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

      {/* Order Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>OrderID</TableCell>
              <TableCell>UserID</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Restaurant Name</TableCell>
              <TableCell>RestaurantID</TableCell>
              <TableCell>CartID</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ordered Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.OrderID}>
                <TableCell>{order.OrderID}</TableCell>
                <TableCell>{order.UserID}</TableCell>
                <TableCell>{userMap[order.UserID]}</TableCell>
                <TableCell>{restaurantMap[order.RestaurantID]}</TableCell>
                <TableCell>{order.RestaurantID}</TableCell>
                <TableCell>{order.CartID}</TableCell>
                <TableCell>{order.TotalAmount}</TableCell>
                <TableCell>{order.Status}</TableCell>
                <TableCell>{formatDate(order.CreatedAt)}</TableCell>
                <TableCell>
                  <IconButton sx={{ color: "red" }} onClick={() => handleDeleteClick(order)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Monthly Income Summary by Restaurant */}
      <Box mt={4}>
        <Typography variant="h6">Monthly Income Summary</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Restaurant Name</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>Total Income</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(restaurantIncome).map((restaurantID) => {
                const restaurantName = restaurantMap[restaurantID];
                return Object.keys(restaurantIncome[restaurantID]).map((month) => (
                  <TableRow key={`${restaurantID}-${month}`}>
                    <TableCell>{restaurantName}</TableCell>
                    <TableCell>{month}</TableCell>
                    <TableCell>{restaurantIncome[restaurantID][month]}</TableCell>
                  </TableRow>
                ));
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDelete} onClose={handleDeleteClose} fullWidth>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the order {deleteOrder.OrderID}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
