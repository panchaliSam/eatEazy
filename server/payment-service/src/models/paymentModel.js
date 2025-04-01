// models/paymentModel.js
const PaymentRepository = require('../repository/paymentRepository');

const PaymentModel = {
    createPayment: async (paymentData) => {
        try {
            if (!paymentData || !paymentData.OrderID || !paymentData.PaymentMethod) {
                throw new Error('Missing required payment details.');
            }
            return await PaymentRepository.createPayment(paymentData);
        } catch (err) {
            console.error('Error creating payment:', err);
            throw err;
        }
    },

    getOrderDetails: async (OrderID) => {
        try {
            if (!OrderID) throw new Error('OrderID is required.');
            return await PaymentRepository.getOrderDetails(OrderID);
        } catch (err) {
            console.error('Error fetching order details:', err);
            throw err;
        }
    },

    updatePaymentStatus: async (PaymentID, PaymentStatus) => {
        try {
            if (!PaymentID || !PaymentStatus) {
                throw new Error('PaymentID and PaymentStatus are required.');
            }
            return await PaymentRepository.updatePaymentStatus(PaymentID, PaymentStatus);
        } catch (err) {
            console.error('Error updating payment status:', err);
            throw err;
        }
    }
};

module.exports = PaymentModel;
