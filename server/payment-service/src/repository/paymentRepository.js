// repository/paymentRepository.js
const pool = require('../config/db');

const PaymentRepository = {
    createPayment: async (paymentData) => {
        const { OrderID, PaymentMethod, PaymentStatus, TransactionID } = paymentData;
        const query = 'INSERT INTO Payments (OrderID, PaymentMethod, PaymentStatus, TransactionID) VALUES (?, ?, ?, ?)';
        const [result] = await pool.execute(query, [OrderID, PaymentMethod, PaymentStatus, TransactionID]);
        return result.insertId;
    },

    getOrderDetails: async (OrderID) => {
        const query = 'SELECT * FROM Orders WHERE OrderID = ?';
        const [rows] = await pool.execute(query, [OrderID]);
        if (rows.length === 0) {
            throw new Error('Order not found');
        }
        return rows[0]; 
    },

    updatePaymentStatus: async (PaymentID, PaymentStatus) => {
        const query = 'UPDATE Payments SET PaymentStatus = ? WHERE PaymentID = ?';
        const [result] = await pool.execute(query, [PaymentStatus, PaymentID]);
        return result;
    }
};

module.exports = PaymentRepository;
