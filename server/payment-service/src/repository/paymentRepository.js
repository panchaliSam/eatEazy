const pool = require('../config/db');

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
    const query = 'SELECT * FROM Orders WHERE OrderID = ?';
    const [rows] = await pool.execute(query, [OrderID]);
    if (rows.length === 0) throw new Error('Order not found.');
    return rows[0];
  },
  updatePaymentStatus: async (PaymentID, PaymentStatus) => {
    const query = 'UPDATE Payments SET PaymentStatus = ? WHERE PaymentID = ?';
    await pool.execute(query, [PaymentStatus, PaymentID]);
  }
};

module.exports = PaymentRepository;