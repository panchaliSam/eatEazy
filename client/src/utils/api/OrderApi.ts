import axios from "axios";
import {API_URL} from "./ApiURL";
import { getAuthHeaders } from "../helper/AuthHelper";
import { getAccessToken } from "../helper/TokenHelper";
import {IOrder} from "../../interfaces/IOrder";
//import { ICart } from "../../interfaces/ICart";

const OrderApi={
    addOrder: async (orderData: IOrder) => {
        const accessToken = getAccessToken();
        if (!accessToken) {
          throw new Error("No access token found.");
        }
        try {
          const response = await axios.post(
            `${API_URL}/orders/addOrder`,
            orderData,
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
              error.response.data.message || "Failed to add order."
            );
          }
          throw new Error("An unexpected error occurred.");
        }
      },
    getOrderByUserId: async (userId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.get(`${API_URL}/orders/${userId}`, 
            {
            headers: getAuthHeaders(),
          });
          console.log("Orders of user: ", response.data);
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
    
      getOrderById: async (orderId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.get(`${API_URL}/orders/${orderId}`, {
            headers: getAuthHeaders(),
          });
          console.log("Order by order id: ", response.data);
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
      getOrderByRestaurantId: async (restaurantId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.get(`${API_URL}/orders/${restaurantId}`, 
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
    
    
      updateOrderStatus: async (orderId: number, status: string) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.put(
            `${API_URL}/orders/${orderId}`,
            { status },
            {
              headers: {
                ...getAuthHeaders(),
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log("Updated data: ",response.data);
          return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(
                  error.response.data.message || "Failed to update order status."
                );
              }
              throw new Error("An unexpected error occurred.");
        }
      },
    
      deleteOrder: async (orderId: number) => {
        const accessToken = getAccessToken();
        if (!accessToken) throw new Error("No access token found.");
        try {
          const response = await axios.delete(`${API_URL}/orders/${orderId}`, {
            headers: {
              ...getAuthHeaders(),
              Authorization: `Bearer ${accessToken}`,
            },
          });
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
