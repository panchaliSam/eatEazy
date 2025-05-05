import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getAccessToken } from "@app_utils/helper/TokenHelper";
import RestaurantApi from "@app_utils/api/RestaurantApi";
import OrderApi from "@app_utils/api/OrderApi";
import { IOrder } from "../../interfaces/IOrder";

const imageList = [
  { src: "Image1.jpg", alt: "Restaurant 1" },
  { src: "Image2.jpg", alt: "Restaurant 2" },
  { src: "Image3.jpg", alt: "Restaurant 3" },
  { src: "Image4.jpg", alt: "Restaurant 4" },
  { src: "Image5.jpg", alt: "Restaurant 5" },
  { src: "Image6.jpg", alt: "Restaurant 6" },
];
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust locale and options if needed
  };

export const OrderContent = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    number | null
  >(null);

  const navigate = useNavigate();

  const handleRestaurantClick = async (restaurantId: number) => {
    setSelectedRestaurantId(restaurantId);
    try {
      const orderData = await OrderApi.getOrderByRestaurantId(restaurantId);
      setOrders(orderData); // Set fetched orders
    } catch (err: any) {
      setError(err.message || "Failed to fetch orders.");
    }
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const token = getAccessToken();
        if (!token) throw new Error("No access token found.");
        const userId = JSON.parse(atob(token.split(".")[1])).id;
        const data = await RestaurantApi.getAllRestaurants();

        const filteredRestaurants = data.filter(
          (restaurant: any) => restaurant.OwnerID === userId
        );

        const restaurantsWithImages = filteredRestaurants.map(
          (restaurant: any) => ({
            ...restaurant,
            randomImage:
              imageList[Math.floor(Math.random() * imageList.length)],
          })
        );

        setRestaurants(restaurantsWithImages);
      } catch (err: any) {
        setError(err.message || "Failed to fetch restaurants.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ py: 4, ml: 2, mr: 2 }}>
      <Typography sx={{ fontSize: 24, mb: 3 }}>Restaurants</Typography>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
              <th style={{ padding: "12px" }}>Restaurant ID</th>
              <th style={{ padding: "12px" }}>Restaurant Name</th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr
                key={restaurant.RestaurantID}
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <td style={{ padding: "12px" }}>{restaurant.RestaurantID}</td>
                <td style={{ padding: "12px" }}>{restaurant.RestaurantName}</td>
                <td style={{ padding: "12px" }}>
                  <button
                    onClick={() =>
                      handleRestaurantClick(restaurant.RestaurantID)
                    }
                    style={{
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      backgroundColor: "#FE7743",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    View Orders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      {/* Render orders if a restaurant is selected */}
      {selectedRestaurantId && (
        <Box sx={{ py: 4, ml: 2, mr: 2 }}>
          <Typography sx={{ fontSize: 24, mb: 3 }}>
            Orders for Restaurant {selectedRestaurantId}
          </Typography>
          <Box sx={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
                  <th style={{ padding: "12px" }}>Order ID</th>
                  <th style={{ padding: "12px" }}>Order Status</th>
                  <th style={{ padding: "12px" }}>Price in Rs</th>
                  <th style={{ padding: "12px" }}>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.OrderID}
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    <td style={{ padding: "12px" }}>{order.OrderID}</td>
                    <td style={{ padding: "12px" }}>{order.Status}</td>
                    <td style={{ padding: "12px" }}>{order.TotalAmount}</td>
                    <td style={{ padding: "12px" }}>{order.CreatedAt}</td>
                    <td style={{ padding: "12px" }}>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      )}
    </Box>
  );
};
