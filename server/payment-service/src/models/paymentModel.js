// models/paymentModel.js
const PaymentRepository = require('../repository/paymentRepository');

const PaymentModel = {
  createPayment: async (paymentData) => {
    return await PaymentRepository.createPayment(paymentData);
  },
  
  getOrderDetailsFromService: async (OrderID, userToken) => {
    return await PaymentRepository.getOrderDetailsFromService(OrderID, userToken);
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