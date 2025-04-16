const pool = require('../config/db');
const axios = require('axios');

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
  getOrderDetails: async (OrderID) => {
    const response = await axios.get(`http://localhost:5006/getOrder/${OrderID}`);
    return response.data;
  },
  updatePaymentStatus: async (PaymentID, PaymentStatus) => {
    const query = 'UPDATE Payments SET PaymentStatus = ? WHERE PaymentID = ?';
    await pool.execute(query, [PaymentStatus, PaymentID]);
  }
};

module.exports = PaymentRepository;