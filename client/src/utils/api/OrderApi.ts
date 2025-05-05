import axios from "axios";
import { API_URL } from "./ApiURL";
import { getAuthHeaders } from "../helper/AuthHelper";
import { getAccessToken } from "../helper/TokenHelper";
import { IOrder } from "@app_interfaces/IOrder";
import { ICart } from "@app_interfaces/ICart";
import { ICartItem } from "@app_interfaces/ICartItem";

const OrderApi = {
  addToCart: async (restaurantId: number, items: any[]) => {
    try {
      // Get authentication token
      const accessToken = getAccessToken();
      if (!accessToken) {
        console.error("No access token found");
        throw new Error("Authentication required. Please login.");
      }

      // Debug what we're sending to the API
      console.log("Adding to cart with:", {
        restaurantId,
        items,
        accessToken: accessToken ? "Present" : "Missing",
      });

      // Make sure the data format matches exactly what the backend expects
      const requestData = {
        items: items.map((item) => ({
          menuItemId: Number(item.menuItemId || item.MenuItemID),
          quantity: Number(item.quantity || item.Quantity),
        })),
      };
      console.log("Formatted request data:", requestData);

      const response = await axios.post(
        `${API_URL}/orders/addToCart/${restaurantId}`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Full response data:", response);
      return response.data;
    } catch (error: any) {
      // Enhanced error handling with more details
      console.error("API Error Details:", error.response?.data);

      if (error.response?.status === 401) {
        throw new Error("Authentication error. Please login again.");
      }

      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Failed to add item to cart. Please try again.");
    }
  },

  // Update checkout to include restaurantId parameter
  // Update checkout function with correct property name handling
checkout: async (restaurantId: number) => {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found");
    }
    
    console.log(`Making checkout request for restaurantId: ${restaurantId}`);
    
    const response = await axios.post(
      `${API_URL}/orders/checkout/${restaurantId}`,
      {}, // Empty body, as the backend should use the user's active cart
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      }
    );
    
    console.log("Full checkout response:", response);
    
    // The response contains OrderID or orderId (case-sensitive check)
    if (!response.data) {
      console.error("Empty checkout response");
      throw new Error("Empty checkout response");
    }
    
    // Normalize the response to ensure we have orderId in the expected format
    const responseData = {
      orderId: response.data.OrderID || response.data.orderId || response.data.orderID,
      restaurantId: response.data.RestaurantID || response.data.restaurantId,
      // Add any other fields you need
    };
    
    if (!responseData.orderId) {
      console.error("Invalid checkout response:", response.data);
      throw new Error("Checkout response did not include an order ID");
    }
    
    console.log("Normalized checkout data:", responseData);
    return responseData;
  } catch (error: any) {
    console.error("Checkout API error:", error.response?.data || error);
    
    if (error.response?.status === 500) {
      console.error("Server error during checkout. Check backend logs.");
    }
    
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    
    throw new Error(error.message || "Failed to checkout");
  }
},

  // This function is fine as is
  getOrderByUserId: async (userId: number) => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.get(
        `${API_URL}/orders/getOrderByUserId/${userId}`,
        {
          headers: getAuthHeaders(),
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to fetch order."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // This function is fine as is
  getOrderById: async (orderId: number) => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.get(
        `${API_URL}/orders/getOrderByOrderId/${orderId}`,
        {
          headers: getAuthHeaders(),
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to fetch order items."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // This function is fine as is
  getOrderByRestaurantId: async (restaurantId: number) => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.get(
        `${API_URL}/orders/getAllOrderbyRestaurantId/${restaurantId}`,
        {
          headers: getAuthHeaders(),
        }
      );
      console.log("Order by Restaurant: ", response.data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to fetch order items."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // This function is fine as is
  getAllOrdersForAdmin: async () => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.get(
        `${API_URL}/orders/getAllOrdersForAdmin`,
        {
          headers: getAuthHeaders(),
        }
      );
      console.log("Order by Restaurant: ", response.data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to fetch order items."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // Add new function to get order total
  getOrderTotal: async (orderId: number) => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.get(`${API_URL}/orders/total/${orderId}`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to get order total."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // Add this to OrderApi.ts
  getCartById: async (cartId: number) => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.get(
        `${API_URL}/orders/getCartByCartId/${cartId}`,
        {
          headers: {
            ...getAuthHeaders(),
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to fetch cart details."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  updateCart: async (cartId: number, items: any[]) => {
    try {
      const accessToken = getAccessToken();
      if (!accessToken) {
        console.error("No access token found");
        throw new Error("Authentication required. Please login.");
      }

      console.log("Updating cart with:", {
        cartId,
        items,
        accessToken: accessToken ? "Present" : "Missing",
      });

      // Make sure we're sending the CartItemsID (critical for updates!)
      const requestData = {
        items: items.map((item) => {
          // If we have CartItemsID, use it, otherwise fall back to menuItemId
          if (item.CartItemsID) {
            return {
              CartItemsID: Number(item.CartItemsID),
              Quantity: Number(item.Quantity || item.quantity),
            };
          } else {
            return {
              menuItemId: Number(item.menuItemId || item.MenuItemID || item.id),
              quantity: Number(item.quantity || item.Quantity),
            };
          }
        }),
      };

      console.log("Formatted request data for update:", requestData);

      // Make sure we're using the right HTTP method (PUT) and correct endpoint
      const response = await axios.put(
        `${API_URL}/orders/updateCartByCartId/${cartId}`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Update response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("API Error Details:", error.response?.data);

      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      }

      throw new Error("Failed to update cart");
    }
  },

  // Update function to match controller endpoint
  updatePaymentStatus: async (orderId: number, paymentStatus: string) => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.put(
        `${API_URL}/orders/${orderId}/payment-status`,
        { paymentStatus },
        {
          headers: {
            ...getAuthHeaders(),
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to update payment status."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // This function is fine but endpoint path updated
  deleteOrder: async (orderId: number) => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found.");
    try {
      const response = await axios.delete(
        `${API_URL}/orders/deleteOrderByOrderId/${orderId}`,
        {
          headers: {
            ...getAuthHeaders(),
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to delete order"
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },
};

export default OrderApi;
