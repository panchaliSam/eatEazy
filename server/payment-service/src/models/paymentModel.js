// models/paymentModel.js
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
    }
};

module.exports = PaymentModel;
