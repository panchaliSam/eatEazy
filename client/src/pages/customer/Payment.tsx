import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box, Paper, Typography, TextField, Button,
  Container, CircularProgress, Alert, Card, CardContent,
  Divider, Stepper, Step, StepLabel, Stack
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import OrderApi from '../../utils/api/OrderApi';

interface PaymentState {
  orderIds: number[];
  totalAmount: number;
  items: number;
  restaurantName: string;
}

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderIds, totalAmount, items, restaurantName } = (location.state as PaymentState) || 
    { orderIds: [], totalAmount: 0, items: 0, restaurantName: '' };
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1); // 0: Cart, 1: Payment, 2: Confirmation
  
  // Validate if we have order IDs
  React.useEffect(() => {
    if (!orderIds || orderIds.length === 0) {
      navigate('/cart');
    }
  }, [orderIds, navigate]);
  
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      setError('Please fill in all payment details');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Process payment for each order
      for (const orderId of orderIds) {
        // This should be your actual payment processing API call
        await OrderApi.updatePaymentStatus(orderId, 'PAID');
      }
      
      // Payment successful
      setActiveStep(2);
    } catch (error: any) {
      console.error('Payment processing error:', error);
      setError(error.message || 'Failed to process payment');
    } finally {
      setLoading(false);
    }
  };
  
  const handleViewOrders = () => {
    navigate('/orders/order');
  };
  const handleBackToCart = () => {
    navigate("/orders/cart");
  };
  
  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        {/* Header */}
        <Box sx={{ 
          bgcolor: '#EA7300', 
          p: 3, 
          color: 'white',
          backgroundImage: 'linear-gradient(135deg, #EA7300 0%, #f08c28 100%)'
        }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {activeStep === 2 ? 'Payment Complete' : 'Complete Your Payment'}
          </Typography>
        </Box>
        
        {/* Stepper */}
        <Box sx={{ p: 3, bgcolor: '#f9f9f9' }}>
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
            <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 4 }}>
              {/* Left side - Order Summary */}
              <Box sx={{ flex: {md: '0 0 35%'} }}>
                <Card sx={{ bgcolor: '#f9f9f9', borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                      Order Summary
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography>Restaurant</Typography>
                      <Typography fontWeight="bold">{restaurantName}</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography>Items</Typography>
                      <Typography>{items}</Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6">Total</Typography>
                      <Typography variant="h6" fontWeight="bold" color="#EA7300">
                        Rs.{totalAmount.toFixed(2)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                
                <Box sx={{ mt: 3, p: 2, border: '1px solid #e0e0e0', borderRadius: 2, bgcolor: '#f5f5f5' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LockOutlinedIcon sx={{ mr: 1, color: '#4CAF50' }} />
                    <Typography variant="body2" color="text.secondary">
                      Secure payment processing
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Your payment information is encrypted and securely processed. We do not store your card details.
                  </Typography>
                </Box>
              </Box>
              
              {/* Right side - Payment Form */}
              <Box sx={{ flex: {md: '1 1 auto'} }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                  Payment Information
                </Typography>
                
                <form onSubmit={handlePaymentSubmit}>
                  <Stack spacing={3}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 1,
                      p: 2,
                      border: '1px solid #e0e0e0',
                      borderRadius: 2,
                      bgcolor: '#fff'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CreditCardOutlinedIcon sx={{ mr: 1, color: '#EA7300' }} />
                        <Typography fontWeight="500">Card Information</Typography>
                      </Box>
                      
                      <TextField
                        label="Card Number"
                        variant="outlined"
                        fullWidth
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        inputProps={{ maxLength: 19 }}
                        required
                      />
                      
                      <TextField
                        label="Cardholder Name"
                        variant="outlined"
                        fullWidth
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                      
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                          label="Expiry Date"
                          variant="outlined"
                          fullWidth
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          placeholder="MM/YY"
                          inputProps={{ maxLength: 5 }}
                          required
                        />
                        
                        <TextField
                          label="CVV"
                          variant="outlined"
                          fullWidth
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="123"
                          inputProps={{ maxLength: 3 }}
                          type="password"
                          required
                        />
                      </Box>
                    </Box>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 1,
                      p: 2,
                      border: '1px solid #e0e0e0',
                      borderRadius: 2,
                      bgcolor: '#fff'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <AccountBalanceIcon sx={{ mr: 1, color: '#EA7300' }} />
                        <Typography fontWeight="500">Billing Address</Typography>
                      </Box>
                      
                      <TextField
                        label="Street Address"
                        variant="outlined"
                        fullWidth
                        placeholder="123 Main St"
                      />
                      
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                          label="City"
                          variant="outlined"
                          fullWidth
                          placeholder="City"
                        />
                        
                        <TextField
                          label="ZIP Code"
                          variant="outlined"
                          fullWidth
                          placeholder="10001"
                        />
                      </Box>
                    </Box>
                    
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
                          <CircularProgress size={24} sx={{ mr: 2, color: 'white' }} />
                          Processing...
                        </>
                      ) : (
                        `Pay Rs.${totalAmount.toFixed(2)}`
                      )}
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Box>
          )}
          
          {activeStep === 2 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 80, color: '#4CAF50', mb: 3 }} />
              
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#4CAF50' }}>
                Payment Successful!
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4 }}>
                Thank you for your order. Your payment of Rs.{totalAmount.toFixed(2)} has been processed successfully.
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Order ID{orderIds.length > 1 ? 's' : ''}: {orderIds.join(', ')}
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