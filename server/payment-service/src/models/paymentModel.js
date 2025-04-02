const PaymentRepository = require('../repository/paymentRepository');

const PaymentModel = {
    createPayment: async (paymentData) => {
        return await PaymentRepository.createPayment(paymentData);
    },
    
    getOrderDetails: async (OrderID) => {
        return await PaymentRepository.getOrderDetails(OrderID);
    },
    
    updatePaymentStatus: async (PaymentID, PaymentStatus) => {
        return await PaymentRepository.updatePaymentStatus(PaymentID, PaymentStatus);
    },
    
    getPaymentByOrderId: async (OrderID) => {
        return await PaymentRepository.getPaymentByOrderId(OrderID);
    }
};

module.exports = PaymentModel;
