<<<<<<< HEAD
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
=======
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
>>>>>>> 3d4f402a39c80d79e1809a4c29ce3c43474529c0
