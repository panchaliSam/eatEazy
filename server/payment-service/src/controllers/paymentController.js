const PaymentService = require('../services/paymentService');

const initiatePayment = async (req, res) => {
  try {
    const { OrderID, PaymentMethod } = req.body;
    if (!OrderID || !PaymentMethod) {
      return res.status(400).json({ error: 'OrderID and PaymentMethod are required' });
    }
    const paymentDetails = await PaymentService.initiatePayment(OrderID, PaymentMethod);
    res.status(201).json({ message: 'Payment initiated successfully', paymentDetails });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const handlePayHereNotify = async (req, res) => {
  try {
    const result = await PaymentService.processPayHereNotification(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Payment notification error:', error);
    res.status(400).json({ message: error.message });
  }
};

const updatePaymentStatus = async (req, res) => {
  try {
    const { PaymentID, PaymentStatus } = req.body;
    if (!PaymentID || !PaymentStatus) {
      return res.status(400).json({ error: 'PaymentID and PaymentStatus are required' });
    }
    await PaymentService.updatePaymentStatus(PaymentID, PaymentStatus);
    res.status(200).json({ message: 'Payment status updated successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = {
  initiatePayment,
  handlePayHereNotify,
  updatePaymentStatus
};
