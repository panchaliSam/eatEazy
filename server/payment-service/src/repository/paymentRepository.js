// // repository/paymentRepository.js
// const pool = require('../config/db');

// const PaymentRepository = {
//     createPayment: async (paymentData) => {
//         const { orderId, paymentMethod, paymentStatus, transactionId } = paymentData;
//         const query = 'INSERT INTO Payments (OrderID, PaymentMethod, PaymentStatus, TransactionID) VALUES (?, ?, ?, ?)';
//         const [result] = await pool.execute(query, [orderId, paymentMethod, paymentStatus, transactionId]);
//         return result.insertId;
//     },

//     getOrderDetails: async (orderId) => {
//         const query = 'SELECT * FROM Orders WHERE OrderID = ?';
//         const [rows] = await pool.execute(query, [orderId]);
//         if (rows.length === 0) {
//             throw new Error('Order not found');
//         }
//         return rows[0];
//     },

//     updatePaymentStatus: async (paymentId, status) => {
//         const query = 'UPDATE Payments SET PaymentStatus = ? WHERE PaymentID = ?';
//         const [result] = await pool.execute(query, [status, paymentId]);
//         return result;
//     }
// };

// module.exports = PaymentRepository;
