import axios from "axios";
import { API_URL } from "./ApiURL";
import { getAccessToken } from "../helper/TokenHelper";
import { getAuthHeaders } from "../helper/AuthHelper";
import { IPayment } from "../../interfaces/IPayment";

const PaymentApi = {
  initiatePayment: async (
    OrderID: number,
    PaymentMethod: 'PayHere' | 'Dialog Genie' | 'FriMi' | 'Stripe' | 'PayPal'
  ): Promise<{ paymentId: number; payHerePayload: any }> => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found. Please log in again.");

    try {
      const response = await axios.post(
        `${API_URL}/payments/initiate`,
        { OrderID, PaymentMethod }, 
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
        throw new Error(error.response.data.message || "Failed to initiate payment.");
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  getPaymentById: async (PaymentID: number): Promise<IPayment> => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found. Please log in again.");

    try {
      const response = await axios.get(`${API_URL}/payments/${PaymentID}`, {
        headers: {
          ...getAuthHeaders(),
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.payment; 
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Failed to fetch payment details.");
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  getPaymentsByOrderId: async (OrderID: number): Promise<IPayment[]> => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found. Please log in again.");

    try {
      const response = await axios.get(`${API_URL}/payments/order/${OrderID}`, {
        headers: {
          ...getAuthHeaders(),
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.payments; 
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Failed to fetch payments by order ID.");
      }
      throw new Error("An unexpected error occurred.");
    }
  },
};

export default PaymentApi;
