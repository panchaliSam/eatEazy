// repository/paymentRepository.js
require('dotenv').config();
const pool = require('../config/db');
const axios = require('axios');
const { ORDER_SERVICE_URL } = require('../config/env');

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
  
  getOrderDetailsFromService: async (OrderID, userToken) => {
    try {
      const url = `http://localhost:4000/orders/getOrderByOrderId/${OrderID}`;
      
      console.log(`Fetching order details from: ${url}`);
      
      // Format the token properly if it exists
      const headers = {
        'Content-Type': 'application/json'
      };
      
      if (userToken) {
        // Make sure token has the Bearer prefix
        if (!userToken.startsWith('Bearer ')) {
          headers.Authorization = `Bearer ${userToken}`;
        } else {
          headers.Authorization = userToken;
        }
        console.log(`Using authorization header: ${headers.Authorization.substring(0, 15)}...`);
      } else {
        console.warn('No user token provided for authentication');
      }
      
      const response = await axios.get(url, {
        headers,
        timeout: 5000
      });
  
      if (!response.data) {
        console.error(`Order service returned empty data for OrderID ${OrderID}`);
        return null;
      }
      
      return response.data;
    } catch (error) {
      // Enhanced error logging
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.error(`Error fetching order details for OrderID ${OrderID}: Status ${error.response.status}`, 
          error.response.data);
        
        // Check for authentication errors specifically
        if (error.response.status === 401 || error.response.status === 403) {
          console.error('Authentication failed. User authorization may be required.');
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error(`Error fetching order details for OrderID ${OrderID}: No response received`, 
          error.message);
      } else {
        // Something happened in setting up the request
        console.error(`Error fetching order details for OrderID ${OrderID}: Request setup failed`, 
          error.message);
      }
      
      return null;
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