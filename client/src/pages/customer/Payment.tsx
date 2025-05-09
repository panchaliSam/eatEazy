import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Stack,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentIcon from "@mui/icons-material/Payment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import OrderApi from "../../utils/api/OrderApi";
import PaymentApi from "@app_utils/api/PaymentApi";
import UserApi from "@app_utils/api/UserApi";
import { getAccessToken} from "@app_utils/helper/TokenHelper";

interface PaymentState {
  orderIds: number[];
  totalAmount: number;
  items: number;
  restaurantName: string;
}

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderIds, totalAmount, items, restaurantName } =
    (location.state as PaymentState) || {
      orderIds: [],
      totalAmount: 0,
      items: 0,
      restaurantName: "",
    };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1); // 0: Cart, 1: Payment, 2: Confirmation

  // Validate if we have order IDs
  React.useEffect(() => {
    if (!orderIds || orderIds.length === 0) {
      navigate("/cart");
    }
  }, [orderIds, navigate]);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const token = getAccessToken();
      if (!token) throw new Error("Authentication required");

      // Log the order details
    console.log('Initiating payment for order:', {
      orderId: orderIds[0],
      amount: totalAmount
    });
 
    const response = await PaymentApi.initiatePayment(orderIds[0], "PayHere");
    console.log('Payment initiation response:', response);

      // Configure PayHere
      // @ts-ignore - PayHere is loaded from external script
      const payhere = window.payhere;

      // Payment configuration
      const payment = {
        sandbox: true, // Set to false in production
        merchant_id: response.payHerePayload.merchant_id,
        return_url: response.payHerePayload.return_url,
        cancel_url: response.payHerePayload.cancel_url,
        notify_url: response.payHerePayload.notify_url,
        order_id: response.payHerePayload.order_id,
        items: response.payHerePayload.items,
        amount: response.payHerePayload.payhere_amount,
        currency: response.payHerePayload.payhere_currency,
        first_name: response.payHerePayload.first_name,
        last_name: response.payHerePayload.last_name,
        email: response.payHerePayload.email,
        phone: response.payHerePayload.phone,
        address: response.payHerePayload.address,
        city: response.payHerePayload.city,
        country: response.payHerePayload.country,

        onCompleted: function onCompleted(orderId: string) {
          // Payment completed. Update UI
          setActiveStep(2);
          setLoading(false);
        },
        onDismissed: function onDismissed() {
          // Payment dismissed. Show error
          setError("Payment was cancelled");
          setLoading(false);
        },
        onError: function onError(error: string) {
          // Payment error. Show message
          setError(`Payment error: ${error}`);
          setLoading(false);
        },
      };

      // Show PayHere payment window
      payhere.startPayment(payment);
    } catch (error: any) {
      console.error("Payment processing error:", error);
      setError(error.message || "Failed to process payment");
      setLoading(false);
    }
  };

  const handleViewOrders = () => {
    navigate("/orders/order");
  };
  const handleBackToCart = () => {
    navigate("/orders/cart");
  };

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
        {/* Header */}
        <Box
          sx={{
            bgcolor: "#EA7300",
            p: 3,
            color: "white",
            backgroundImage:
              "linear-gradient(135deg, #EA7300 0%, #f08c28 100%)",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {activeStep === 2 ? "Payment Complete" : "Complete Your Payment"}
          </Typography>
        </Box>

        {/* Stepper */}
        <Box sx={{ p: 3, bgcolor: "#f9f9f9" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step>
              <StepLabel>Cart</StepLabel>
            </Step>
            <Step>
              <StepLabel>Payment</StepLabel>
            </Step>
            <Step>
              <StepLabel>Confirmation</StepLabel>
            </Step>
          </Stepper>
        </Box>

        {/* Content */}
        <Box sx={{ p: 3 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {activeStep === 1 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              {/* Left side - Order Summary */}
              <Box sx={{ flex: { md: "0 0 35%" } }}>
                <Card sx={{ bgcolor: "#f9f9f9", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                      Order Summary
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography>Restaurant</Typography>
                      <Typography fontWeight="bold">
                        {restaurantName}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography>Items</Typography>
                      <Typography>{items}</Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h6">Total</Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="#EA7300"
                      >
                        Rs.{totalAmount.toFixed(2)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    bgcolor: "#f5f5f5",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <LockOutlinedIcon sx={{ mr: 1, color: "#4CAF50" }} />
                    <Typography variant="body2" color="text.secondary">
                      Secure payment processing
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Your payment information is encrypted and securely
                    processed. We do not store your card details.
                  </Typography>
                </Box>
              </Box>

              {/* Right side - Payment Form */}
              <Box sx={{ flex: { md: "1 1 auto" } }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                  Payment Information
                </Typography>

                <form onSubmit={handlePaymentSubmit}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={loading}
                    startIcon={<CreditCardIcon />}
                    sx={{
                      py: 1.5,
                      backgroundColor: "#EA7300",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#D66A00" },
                      borderRadius: 2,
                    }}
                  >
                    {loading ? (
                      <>
                        <CircularProgress
                          size={24}
                          sx={{ mr: 2, color: "white" }}
                        />
                        Processing...
                      </>
                    ) : (
                      `Proceed to Payment - Rs.${totalAmount.toFixed(2)}`
                    )}
                  </Button>
                </form>
              </Box>
            </Box>
          )}

          {activeStep === 2 && (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <CheckCircleOutlineIcon
                sx={{ fontSize: 80, color: "#4CAF50", mb: 3 }}
              />

              <Typography
                variant="h4"
                sx={{ mb: 2, fontWeight: "bold", color: "#4CAF50" }}
              >
                Payment Successful!
              </Typography>

              <Typography variant="body1" sx={{ mb: 4 }}>
                Thank you for your order. Your payment of Rs.
                {totalAmount.toFixed(2)} has been processed successfully.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Order ID{orderIds.length > 1 ? "s" : ""}: {orderIds.join(", ")}
              </Typography>

              <Button
                variant="contained"
                onClick={handleViewOrders}
                startIcon={<PaymentIcon />}
                sx={{
                  mt: 4,
                  py: 1.5,
                  backgroundColor: "#EA7300",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#D66A00" },
                  borderRadius: 2,
                }}
              >
                View My Orders
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default PaymentPage;
