import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Box,Card,CardHeader,CardMedia,CardContent,Typography,CircularProgress,CardActions,Button,Chip,Snackbar,Alert,} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantApi from "../../utils/api/RestaurantApi";
import OrderApi from "../../utils/api/OrderApi"; // Add this import
import { ICartItem } from "../../interfaces/ICartItem"; // Add this import
import Image1 from "@app_assets/restaurants/Restaurant1.jpg";
import Image2 from "@app_assets/restaurants/Restaurant2.jpg";
import Image3 from "@app_assets/restaurants/Restaurant3.jpg";
import Image4 from "@app_assets/restaurants/Restaurant4.jpg";
import Image5 from "@app_assets/restaurants/Restaurant5.jpg";
import Image6 from "@app_assets/restaurants/Restaurant6.jpg";

const imageList = [
  { src: Image1, alt: "Menu Item 1" },
  { src: Image2, alt: "Menu Item 2" },
  { src: Image3, alt: "Menu Item 3" },
  { src: Image4, alt: "Menu Item 4" },
  { src: Image5, alt: "Menu Item 5" },
  { src: Image6, alt: "Menu Item 6" },
];

interface MenuItemsContentProps {
  restaurantId: string;
  restaurantName: string;
}

// Define cart item interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
  image: string;
}

export const MenuItemsContent: React.FC<MenuItemsContentProps> = ({
  restaurantId,
  restaurantName,
}) => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [updatingCart, setUpdatingCart] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = async (menuItem: any) => {
    try {
      setUpdatingCart(true);
      
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      const itemIndex = existingCart.findIndex((item: CartItem) => item.id === menuItem.MenuItemID.toString());
      
      let newQuantity = 1;
      
      if (itemIndex >= 0) {
        existingCart[itemIndex].quantity += 1;
        newQuantity = existingCart[itemIndex].quantity;
        setSnackbarMessage(`Increased quantity of ${menuItem.Name} in your cart`);
      } else {
        const newCartItem: CartItem = {
          id: menuItem.MenuItemID.toString(),
          name: menuItem.Name,
          price: parseFloat(menuItem.Price),
          quantity: 1,
          restaurantId,
          restaurantName,
          image: menuItem.randomImage.src
        };
        
        existingCart.push(newCartItem);
        setSnackbarMessage(`${menuItem.Name} added to your cart`);
      }
      
      localStorage.setItem('cart', JSON.stringify(existingCart));
  
      try {
        const backendItem: ICartItem = {
          MenuItemID: parseInt(menuItem.MenuItemID),
          Quantity: newQuantity
        };
        
        console.log("Updating cart in database with:", {
          restaurantId: parseInt(restaurantId),
          cartItem: backendItem
        });
        
        const response = await OrderApi.addToCart(
          parseInt(restaurantId), 
          [{
            menuItemId: parseInt(menuItem.MenuItemID),
            quantity: newQuantity
          }]
        );
        
        // Debug lines
        /*console.log("========= API RESPONSE =========");
        console.log(JSON.stringify(response, null, 2));
        console.log("================================");*/
        
        // Extract CartItemsID
        if (response) {
          const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
          
          //error checking due to misspelling of words
          const possibleCartItems = [
            response.cartItems,
            response.items,
            response.cart?.items,
            response.cart?.cartItems,
            response.data?.cartItems,
            response.data?.items
          ].filter(Boolean)[0] || [];
          
          if (possibleCartItems && possibleCartItems.length > 0) {
            console.log("Found cart items in response:", possibleCartItems);
            
            const responseItem = possibleCartItems.find((item: any) => {
              const responseMID = item.menuItemId || item.MenuItemID;
              return responseMID === parseInt(menuItem.MenuItemID);
            });
            
            if (responseItem) {
              // Extract CartItemsID from response (might be cartItemId or CartItemsID)
              const cartItemsID = responseItem.CartItemsID || responseItem.cartItemId || responseItem.cartItemsID || responseItem.id;
              
              if (cartItemsID) {
                console.log(`Found CartItemsID: ${cartItemsID} for menu item ${menuItem.MenuItemID}`);
                
                // Find item in updatedCart and update it
                const localItemIndex = updatedCart.findIndex(
                  (item: CartItem) => item.id === menuItem.MenuItemID.toString()
                );
                
                if (localItemIndex >= 0) {
                  updatedCart[localItemIndex].CartItemsID = cartItemsID;
                  localStorage.setItem('cart', JSON.stringify(updatedCart));
                  console.log("Updated cart with CartItemsID:", updatedCart[localItemIndex]);
                }
              }
            }
          } else {
            console.log("Response doesn't contain expected cart items structure. Full response:", response);
          }
        }
      } catch (backendError: any) {
        console.error("Failed to update cart in database:", backendError);
      }
      
      // Show snackbar notification
      setSnackbarOpen(true);
      
    } catch (error: any) {
      console.error("Error adding to cart:", error);
      setSnackbarMessage("Failed to add item to cart");
      setSnackbarOpen(true);
    } finally {
      setUpdatingCart(false);
    }
  };
  const handleViewCart = () => {
    navigate("/cart", { state: { restaurantId: parseInt(restaurantId), restaurantName } });
  };
  
  const handleGoToCheckout = () => {
    navigate("/cart", { state: { restaurantId: parseInt(restaurantId), restaurantName } });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data =
          await RestaurantApi.getMenuItemsByRestaurantId(restaurantId);
        const menuItemsWithImages = data.map((menuItem: any) => ({
          ...menuItem,
          randomImage: imageList[Math.floor(Math.random() * imageList.length)],
        }));
        setMenuItems(menuItemsWithImages);
      } catch (err: any) {
        setError(err.message || "Failed to fetch menu items.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [restaurantId]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" textAlign="center">
        {error}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        py: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        ml: 6,
        mr: 6,
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button 
          variant="contained" 
          onClick={handleViewCart}
          startIcon={<ShoppingCartIcon />}
          sx={{ 
            backgroundColor: "#EA7300",
            '&:hover': {
              backgroundColor: "#D56C00",
            }
          }}
        >
          View Cart
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {menuItems.map((menuItem) => (
          <Card
            key={menuItem.MenuItemID}
            sx={{
              maxWidth: 345,
              transition: "border-color 0.3s",
              border: "1px solid transparent",
              "&:hover": {
                borderColor: "orange",
              },
            }}
          >
            <CardHeader
              title={menuItem.Name}
              subheader={`Price: Rs.${menuItem.Price}`}
            />
            <CardMedia
              component="img"
              height="194"
              sx={{
                width: 300,
                height: 200,
                objectFit: "cover",
              }}
              image={menuItem.randomImage.src}
              alt={menuItem.Name}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {menuItem.Description || "No description available"}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ justifyContent: "space-between" }}
            >
              <Chip
                label={menuItem.IsAvailable ? "Available" : "Not Available"}
                sx={{
                  backgroundColor: menuItem.IsAvailable ? "#4CAF50" : "#F44336",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  padding: "0 8px",
                }}
              />
              <Button
                variant="outlined"
                onClick={() => handleAddToCart(menuItem)}
                disabled={!menuItem.IsAvailable || updatingCart}
                sx={{
                  backgroundColor: menuItem.IsAvailable ? "#EA7300" : "#cccccc",
                  color: "white",
                  border: "none",
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                startIcon={updatingCart ? <CircularProgress size={16} color="inherit" /> : <ShoppingCartIcon />}
              >
                {updatingCart ? "Adding..." : "Add to Cart"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        action={
          <Button 
            color="inherit" 
            size="small" 
            onClick={handleGoToCheckout}
            sx={{ 
              color: 'white', 
              fontWeight: 'bold',
              backgroundColor: '#4caf50',
              '&:hover': { backgroundColor: '#3d8b40' },
              ml: 2
            }}
          >
            GO TO CHECKOUT
          </Button>
        }
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};