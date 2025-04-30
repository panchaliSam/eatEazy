import axios from "axios";
import {API_URL} from "./ApiURL";
import { getAuthHeaders } from "../helper/AuthHelper";
import { getAccessToken } from "../helper/TokenHelper";
import {IOrder} from "../../interfaces/IOrder";
import { ICart } from "../../interfaces/ICart";
import { ICartItem } from "../../interfaces/ICartItem";

const OrderApi = {
    // Update addToCart to include restaurantId parameter
    // Update addToCart to include better error handling
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
          accessToken: accessToken ? "Present" : "Missing"
        });
  
        // Make sure the data format matches exactly what the backend expects
        const requestData = {
          items: items.map(item => ({
            menuItemId: Number(item.menuItemId),
            quantity: Number(item.quantity)
          }))
        };
        console.log("Formatted request data:", requestData);

      const response = await axios.post(
        `${API_URL}/orders/addToCart/${restaurantId}`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          }
        }
      );

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
      checkout: async (restaurantId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) {
          throw new Error("No access token found.");
        }
        try {
          const response = await axios.post(
            `${API_URL}/orders/checkout/${restaurantId}`,
            {},
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
              error.response.data.message || "Failed to complete checkout."
            );
          }
          throw new Error("An unexpected error occurred.");
        }
      },
      
      // This function is fine as is
      getOrderByUserId: async (userId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.get(`${API_URL}/orders/getOrderByUserId/${userId}`, {
            headers: getAuthHeaders(),
          });
          return response.data;
        } catch (error: unknown) {
          if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message || "Failed to fetch order.");
          }
          throw new Error("An unexpected error occurred.");
        }
      },
      
      // This function is fine as is
      getOrderById: async (orderId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.get(`${API_URL}/orders/getOrderByOrderId/${orderId}`, {
            headers: getAuthHeaders(),
          });
          return response.data;
        } catch (error: unknown) {
          if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message || "Failed to fetch order items.");
          }
          throw new Error("An unexpected error occurred.");
        }
      },
      
      // This function is fine as is
      getOrderByRestaurantId: async (restaurantId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.get(`${API_URL}/orders/getAllOrderbyRestaurantId/${restaurantId}`, 
            {
            headers: getAuthHeaders(),
          });
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
          const response = await axios.get(`${API_URL}/orders/getAllOrdersForAdmin`, 
            {
            headers: getAuthHeaders(),
          });
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
            throw new Error(error.response.data.message || "Failed to get order total.");
          }
          throw new Error("An unexpected error occurred.");
        }
      },
    
      // Update function to match the controller
      updateCart: async (cartId: number, items: ICartItem[]) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.put(
            `${API_URL}/orders/updateCartByCartId/${cartId}`,
            { items },
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
            throw new Error(error.response.data.message || "Failed to update cart.");
          }
          throw new Error("An unexpected error occurred.");
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
            throw new Error(error.response.data.message || "Failed to update payment status.");
          }
          throw new Error("An unexpected error occurred.");
        }
      },
    
      // This function is fine but endpoint path updated
      deleteOrder: async (orderId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.delete(`${API_URL}/orders/deleteOrderByOrderId/${orderId}`, {
            headers: {
              ...getAuthHeaders(),
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return response.data;
        } catch (error: unknown) {
          if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message || "Failed to delete order");
          }
          throw new Error("An unexpected error occurred.");
        }
      },
    };

    export default OrderApi;