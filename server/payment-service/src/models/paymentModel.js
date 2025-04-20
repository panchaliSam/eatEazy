// models/paymentModel.js
const PaymentRepository = require('../repository/paymentRepository');

const PaymentModel = {
  createPayment: async (paymentData) => {
    return await PaymentRepository.createPayment(paymentData);
  },
  
  getOrderDetailsFromService: async (OrderID, token) => {
    // Ensure token is always provided
    if (!token) {
      console.warn('Token not provided to getOrderDetailsFromService, using SERVICE_API_KEY');
      // We could use SERVICE_API_KEY from config here as a fallback
      // but it's better for the calling code to provide the token
    }
    return await PaymentRepository.getOrderDetailsFromService(OrderID, token);
  },
  
  getPaymentById: async (PaymentID) => {
    return await PaymentRepository.getPaymentById(PaymentID);
  },
  
  updatePaymentStatus: async (PaymentID, PaymentStatus) => {
    return await PaymentRepository.updatePaymentStatus(PaymentID, PaymentStatus);
  },
  
  getPaymentsByOrderId: async (OrderID) => {
    return await PaymentRepository.getPaymentsByOrderId(OrderID);
  }
};

module.exports = PaymentModel;