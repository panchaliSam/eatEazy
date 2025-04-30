import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Paper,
  Divider,
  IconButton,
  TextField,
  Button,
  Card,
  CardContent,
  Container,
  Avatar,
  Chip,
  Stack,
  Fade,
  CircularProgress,
  Alert,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PaymentIcon from "@mui/icons-material/Payment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import OrderApi from "../../utils/api/OrderApi";
import { useNavigate } from "react-router-dom";

interface CartItemProps {
  CartItemsID: number;
  MenuItemID: number;
  Name: string;
  Price: number;
  Quantity: number;
}

interface CartItemsContentProps {
  restaurantId: number;
  restaurantName?: string;
  menuItemId?: string;
  menuItemName?: string;
  menuItemPrice?: number;
}

export const CartItemsContent: React.FC<CartItemsContentProps> = ({
  restaurantId,
  restaurantName,
  menuItemId,
  menuItemName,
  menuItemPrice,
}) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const navigate = useNavigate();

  // Same functionality code remains unchanged
  useEffect(() => {
    console.log("CartItemsContent Props:", {
      restaurantId,
      restaurantName,
      menuItemId,
      menuItemName,
      menuItemPrice,
    });

    // Only try to add to cart if we have all the necessary item information
    if (menuItemId && menuItemName && menuItemPrice) {
      console.log("Adding item to cart with data:", {
        menuItemId,
        menuItemName,
        menuItemPrice,
      });
      handleAddToCart();
    } else {
      console.log("No item data, fetching existing cart items");
      fetchCartItems();
    }
  }, [restaurantId, menuItemId, menuItemName, menuItemPrice]);

  // fetchCartItems, handleAddToCart, handleUpdateQuantity, handleRemoveItem, handleCheckout
  // functions remain unchanged

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      console.log("Fetching cart items for restaurant:", restaurantId);

      if (menuItemId && menuItemName && menuItemPrice) {
        const mockCartItem = {
          CartItemsID: Date.now(),
          MenuItemID: parseInt(menuItemId),
          Name: menuItemName,
          Price: menuItemPrice,
          Quantity: quantity,
        };

        setCartItems([mockCartItem]);
        setTotalAmount(mockCartItem.Price * mockCartItem.Quantity);
        setLoading(false);
        return;
      }

      setCartItems([]);
      setTotalAmount(0);
      setLoading(false);
    } catch (error: any) {
      console.error("Error fetching cart items:", error);
      setError(error.message || "Failed to load cart items");
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!menuItemId) {
      console.error("MenuItemId is undefined - cannot add to cart");
      setError("Missing menu item information");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      console.log(
        `Adding item to cart: MenuItemID=${menuItemId}, Quantity=${quantity}`
      );

      const items = [
        {
          menuItemId: parseInt(menuItemId),
          quantity: quantity,
        },
      ];

      const response = await OrderApi.addToCart(restaurantId, items);
      console.log("Add to cart response:", response);

      if (menuItemName && menuItemPrice) {
        const newItem = {
          CartItemsID: response?.cartItemId || Date.now(),
          MenuItemID: parseInt(menuItemId),
          Name: menuItemName,
          Price: menuItemPrice,
          Quantity: quantity,
        };

        setCartItems([newItem]);
        setTotalAmount(menuItemPrice * quantity);
      } else {
        fetchCartItems();
      }

      setLoading(false);
    } catch (error: any) {
      console.error("Error adding to cart:", error);
      setError(error.message || "Failed to add item to cart");
      setLoading(false);
    }
  };

  const handleUpdateQuantity = async (
    cartItemId: number,
    newQuantity: number
  ) => {
    if (newQuantity < 1) return;

    try {
      setError(null);
      const items = [
        {
          CartItemsID: cartItemId,
          Quantity: newQuantity,
        },
      ];

      await OrderApi.updateCart(restaurantId, items);

      const updatedItems = cartItems.map((item) => {
        if (item.CartItemsID === cartItemId) {
          return { ...item, Quantity: newQuantity };
        }
        return item;
      });

      setCartItems(updatedItems);

      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.Price * item.Quantity,
        0
      );
      setTotalAmount(newTotal);
    } catch (error: any) {
      console.error("Error updating item quantity:", error);
      setError(error.message || "Failed to update quantity");
    }
  };

  const handleRemoveItem = async (cartItemId: number) => {
    try {
      setError(null);
      const items = [
        {
          CartItemsID: cartItemId,
          Quantity: 0,
        },
      ];

      await OrderApi.updateCart(restaurantId, items);

      const updatedItems = cartItems.filter(
        (item) => item.CartItemsID !== cartItemId
      );
      setCartItems(updatedItems);

      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.Price * item.Quantity,
        0
      );
      setTotalAmount(newTotal);
    } catch (error: any) {
      console.error("Error removing item:", error);
      setError(error.message || "Failed to remove item");
    }
  };

  const handleCheckout = async () => {
    try {
      setError(null);
      await OrderApi.checkout(restaurantId);
      navigate("/orders");
    } catch (error: any) {
      console.error("Error during checkout:", error);
      setError(error.message || "Failed to complete checkout");
    }
  };

  // Calculate additional values
  const deliveryFee = 2.99;
  const taxRate = 0.08;
  const tax = totalAmount * taxRate;
  const finalTotal = totalAmount + deliveryFee + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.Quantity, 0);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          backgroundImage: loading
            ? "none"
            : "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))",
          backgroundSize: "cover",
        }}
      >
        {/* Header section */}
        {/* Header section */}
        <Box
          sx={{
            bgcolor: "#EA7300",
            p: 3,
            backgroundImage:
              "linear-gradient(135deg, #EA7300 0%, #f08c28 100%)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ShoppingCartIcon sx={{ mr: 1.5, fontSize: 36 }} />
              Your Cart
            </Typography>
            <Chip
              label={restaurantName || `Restaurant #${restaurantId}`}
              icon={<RestaurantIcon sx={{ color: "#fff !important" }} />}
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "0.9rem",
              }}
            />
          </Box>
        </Box>
        {/* Main content */}
        <Box sx={{ p: { xs: 2, sm: 4 }, bgcolor: "rgba(255,255,255,0.9)" }}>
          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                py: 8,
              }}
            >
              <CircularProgress sx={{ color: "#EA7300", mb: 3 }} />
              <Typography variant="h6" sx={{ color: "#555" }}>
                Loading your cart...
              </Typography>
            </Box>
          )}

          {error && (
            <Alert
              severity="error"
              sx={{ mb: 3, borderLeft: "4px solid #f44336" }}
            >
              {error}
            </Alert>
          )}

          {!loading && cartItems.length === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "white",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: 100, color: "#ddd", mb: 3 }} />
              <Typography
                variant="h5"
                sx={{ color: "#555", mb: 2, fontWeight: "500" }}
              >
                Your cart is empty
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#888", maxWidth: 400, mb: 4 }}
              >
                Looks like you haven't added any items to your cart yet. Browse
                the menu to discover delicious options.
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate(`/menu/${restaurantId}`)}
                startIcon={<MenuBookIcon />}
                sx={{
                  bgcolor: "#EA7300",
                  "&:hover": { bgcolor: "#d66a00" },
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: "500",
                }}
              >
                Browse Menu
              </Button>
            </Box>
          ) : (
            !loading && (
              <Fade in={true} timeout={500}>
                <Stack spacing={4}>
                  {/* Cart items section */}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, fontWeight: "500", color: "#444" }}
                    >
                      Cart Items ({itemCount})
                    </Typography>

                    <Stack spacing={2}>
                      {cartItems.map((item) => (
                        <Card
                          key={item.CartItemsID}
                          sx={{
                            borderRadius: 2,
                            boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-3px)",
                              boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
                            },
                          }}
                        >
                          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                            {/* Using Box with flexbox instead of Grid */}
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              {/* Item info */}
                              <Box
                                sx={{
                                  flex: { xs: "1 1 100%", sm: "1 1 45%" },
                                  display: "flex",
                                  alignItems: "center",
                                  mb: { xs: 2, sm: 0 },
                                }}
                              >
                                <Avatar
                                  sx={{
                                    bgcolor: "#EA7300",
                                    width: 50,
                                    height: 50,
                                    mr: 2,
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  {item.Name.charAt(0)}
                                </Avatar>
                                <Box>
                                  <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "500", mb: 0.5 }}
                                  >
                                    {item.Name}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      color: "#EA7300",
                                      fontWeight: "500",
                                    }}
                                  >
                                    <LocalOfferIcon
                                      sx={{ fontSize: 16, mr: 0.5 }}
                                    />
                                    ${item.Price.toFixed(2)}
                                  </Typography>
                                </Box>
                              </Box>

                              {/* Quantity controls */}
                              <Box
                                sx={{
                                  flex: { xs: "1 1 60%", sm: "0 0 auto" },
                                  order: { xs: 3, sm: 2 },
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "1px solid #ddd",
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    width: "fit-content",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                                  }}
                                >
                                  <IconButton
                                    onClick={() =>
                                      handleUpdateQuantity(
                                        item.CartItemsID,
                                        item.Quantity - 1
                                      )
                                    }
                                    disabled={item.Quantity <= 1}
                                    size="small"
                                    sx={{
                                      borderRadius: 0,
                                      px: 1,
                                      color:
                                        item.Quantity <= 1 ? "#ccc" : "#555",
                                    }}
                                  >
                                    <RemoveIcon fontSize="small" />
                                  </IconButton>

                                  <Typography
                                    sx={{
                                      px: 2,
                                      fontWeight: "500",
                                    }}
                                  >
                                    {item.Quantity}
                                  </Typography>

                                  <IconButton
                                    onClick={() =>
                                      handleUpdateQuantity(
                                        item.CartItemsID,
                                        item.Quantity + 1
                                      )
                                    }
                                    size="small"
                                    sx={{
                                      borderRadius: 0,
                                      px: 1,
                                      color: "#555",
                                    }}
                                  >
                                    <AddIcon fontSize="small" />
                                  </IconButton>
                                </Box>
                              </Box>

                              {/* Item total & remove button */}
                              <Box
                                sx={{
                                  flex: { xs: "1 1 40%", sm: "0 1 auto" },
                                  ml: { xs: 0, sm: "auto" },
                                  textAlign: { xs: "right", sm: "right" },
                                  order: { xs: 2, sm: 3 },
                                }}
                              >
                                <Typography sx={{ fontWeight: "500", mb: 1 }}>
                                  ${(item.Price * item.Quantity).toFixed(2)}
                                </Typography>
                                <IconButton
                                  onClick={() =>
                                    handleRemoveItem(item.CartItemsID)
                                  }
                                  color="error"
                                  size="small"
                                  sx={{
                                    border: "1px solid rgba(211, 47, 47, 0.5)",
                                    "&:hover": {
                                      bgcolor: "rgba(211, 47, 47, 0.1)",
                                    },
                                  }}
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      ))}
                    </Stack>
                  </Box>

                  {/* Order summary section */}
                  <Paper
                    elevation={2}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      borderRadius: 2,
                      bgcolor: "white",
                      backgroundImage:
                        "linear-gradient(to top, #f9f9f9, white)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
                    >
                      Order Summary
                    </Typography>

                    <Stack spacing={1.5} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography color="text.secondary">
                          Subtotal ({itemCount}{" "}
                          {itemCount === 1 ? "item" : "items"})
                        </Typography>
                        <Typography fontWeight="500">
                          ${totalAmount.toFixed(2)}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography color="text.secondary">
                          Delivery Fee
                        </Typography>
                        <Typography fontWeight="500">
                          ${deliveryFee.toFixed(2)}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography color="text.secondary">Tax (8%)</Typography>
                        <Typography fontWeight="500">
                          ${tax.toFixed(2)}
                        </Typography>
                      </Box>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 4,
                        alignItems: "baseline",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#333" }}
                      >
                        Total
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#EA7300" }}
                      >
                        ${finalTotal.toFixed(2)}
                      </Typography>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleCheckout}
                      startIcon={<PaymentIcon />}
                      size="large"
                      sx={{
                        py: 1.5,
                        backgroundColor: "#EA7300",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#D66A00",
                        },
                        borderRadius: 2,
                        boxShadow: "0 4px 10px rgba(234, 115, 0, 0.3)",
                        transition: "all 0.2s ease",
                        "&:active": {
                          transform: "scale(0.98)",
                        },
                      }}
                    >
                      Proceed to Checkout
                    </Button>
                  </Paper>
                </Stack>
              </Fade>
            )
          )}
        </Box>
      </Paper>
    </Container>
  );
};
