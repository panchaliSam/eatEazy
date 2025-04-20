// repository/paymentRepository.js
const pool = require('../config/db');
const axios = require('axios');
const { ORDER_SERVICE_URL, SERVICE_API_KEY } = require('../config/env');
require('dotenv').config();

const PaymentRepository = {
  createPayment: async (paymentData) => {
    const { OrderID, TransactionID, PaymentMethod, PaymentStatus, Amount } = paymentData;
    const query = `
      INSERT INTO Payments (OrderID, Amount, TransactionID, PaymentMethod, PaymentStatus)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(query, [OrderID, Amount, TransactionID, PaymentMethod, PaymentStatus]);
    return result.insertId;
  },
  
  getOrderDetailsFromService: async (OrderID, token) => {
    try {
      // Use the passed token or fallback to SERVICE_API_KEY
      const authToken = token || SERVICE_API_KEY;
      
      const url = `http://localhost:4000/orders/getOrderByOrderId/${OrderID}`; 
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        timeout: 5000
      });
  
      return response.data;
    } catch (error) {
      console.error(`Error fetching order details for OrderID ${OrderID}:`, error.response?.data || error.message);
      throw new Error(`Invalid or expired token.`);
    }
  },
  
  getPaymentById: async (PaymentID) => {
    const query = 'SELECT * FROM Payments WHERE PaymentID = ?';
    const [rows] = await pool.execute(query, [PaymentID]);
    return rows[0];
  },
  
  updatePaymentStatus: async (PaymentID, PaymentStatus) => {
    const query = 'UPDATE Payments SET PaymentStatus = ? WHERE PaymentID = ?';
    await pool.execute(query, [PaymentStatus, PaymentID]);
  },
  
  getPaymentsByOrderId: async (OrderID) => {
    const query = 'SELECT * FROM Payments WHERE OrderID = ?';
    const [rows] = await pool.execute(query, [OrderID]);
    return rows;
  }
};

module.exports = PaymentRepository;