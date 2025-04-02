const pool = require('../config/db');

const PaymentRepository = {
    createPayment: async (paymentData) => {
        try {
            const { OrderID, PaymentMethod, PaymentStatus, TransactionID } = paymentData;

            if (!OrderID || !PaymentMethod || !PaymentStatus || !TransactionID) {
                throw new Error('Missing required payment details.');
            }

            const query = `
                INSERT INTO Payments (OrderID, PaymentMethod, PaymentStatus, TransactionID) 
                VALUES (?, ?, ?, ?)
            `;
            const [result] = await pool.execute(query, [OrderID, PaymentMethod, PaymentStatus, TransactionID]);
            return result.insertId;
        } catch (error) {
            console.error('Database Error - createPayment:', error);
            throw new Error('Database error occurred while creating payment.');
        }
    },

    getOrderDetails: async (OrderID) => {
        try {
            if (!OrderID) throw new Error('OrderID is required.');

            const query = 'SELECT * FROM Orders WHERE OrderID = ?';
            const [rows] = await pool.execute(query, [OrderID]);

            if (rows.length === 0) {
                throw new Error('Order not found.');
            }
            return rows[0]; 
        } catch (error) {
            console.error('Database Error - getOrderDetails:', error);
            throw new Error('Database error occurred while retrieving order details.');
        }
    },

    updatePaymentStatus: async (PaymentID, PaymentStatus) => {
        try {
            if (!PaymentID || !PaymentStatus) {
                throw new Error('PaymentID and PaymentStatus are required.');
            }

            const query = 'UPDATE Payments SET PaymentStatus = ? WHERE PaymentID = ?';
            const [result] = await pool.execute(query, [PaymentStatus, PaymentID]);

            if (result.affectedRows === 0) {
                throw new Error('PaymentID not found or status unchanged.');
            }
            return result;
        } catch (error) {
            console.error('Database Error - updatePaymentStatus:', error);
            throw new Error('Database error occurred while updating payment status.');
        }
    },
    
    getPaymentByOrderId: async (OrderID) => {
        try {
            if (!OrderID) throw new Error('OrderID is required.');

            const query = 'SELECT * FROM Payments WHERE OrderID = ? ORDER BY PaymentDate DESC LIMIT 1';
            const [rows] = await pool.execute(query, [OrderID]);

            if (rows.length === 0) {
                return null;
            }
            return rows[0]; 
        } catch (error) {
            console.error('Database Error - getPaymentByOrderId:', error);
            throw new Error('Database error occurred while retrieving payment.');
        }
    }
};

module.exports = PaymentRepository;