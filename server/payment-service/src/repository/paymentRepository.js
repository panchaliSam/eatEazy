// repository/paymentRepository.js
const pool = require('../config/db');
const axios = require('axios');
const { ORDER_SERVICE_URL } = require('../config/env');
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
  
  // getOrderDetailsFromService: async (OrderID) => {
  //   const orderServiceUrl = ORDER_SERVICE_URL || 'http://localhost:4000';
  //   try {
  //     const response = await axios.get(`${orderServiceUrl}/orders/getOrderByOrderId/${OrderID}`);
  //     return response.data;
  //   } catch (error) {
  //     console.error(`Error fetching order details for OrderID ${OrderID}:`, error.response?.data || error.message);
  //     return null;
  //   }
  // },
  // getOrderDetailsFromService: async (OrderID, token) => {
  //   try {
  //     const url = `http://localhost:4000/orders/getOrderByOrderId/${OrderID}`; // this works as you confirmed
  //     const response = await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  
  //     return response.data; // you can also destructure if needed
  //   } catch (error) {
  //     console.error(`Error fetching order details for OrderID ${OrderID}:`, error.response?.data || error.message);
  //     return null;
  //   }
  // },
  getPaymentById: async (PaymentID) => {
    const query = 'SELECT * FROM Payments WHERE PaymentID = ?';
    const [rows] = await pool.execute(query, [PaymentID]);
    return rows[0];
  },
  // update payment status manually by admin
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