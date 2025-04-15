const crypto = require('crypto');
const PaymentModel = require('../models/paymentModel');
const {
  PAYHERE_MERCHANT_SECRET,
  PAYHERE_MERCHANT_ID,
  PAYHERE_RETURN_URL,
  PAYHERE_CANCEL_URL,
  PAYHERE_NOTIFY_URL
} = require('../config/env');

const generateSignature = (orderDetails, merchantSecret) => {
    const stringToHash = `${orderDetails.merchant_id}${orderDetails.order_id}${orderDetails.amount}${orderDetails.currency}${merchantSecret}`;
    
    // Generate the MD5 hash of the string
    const signature = crypto.createHash('md5').update(stringToHash).digest('hex').toUpperCase();
    
    return signature;
  };

const initiatePayment = async (OrderID, PaymentMethod) => {
    const orderDetails = await PaymentModel.getOrderDetails(OrderID);
    if (!orderDetails) throw new Error(`Order #${OrderID} not found`);
  
    // Check if OrderTotal is a valid number and convert it if necessary
    let orderTotal = orderDetails.TotalAmount;
    if (typeof orderTotal !== 'number') {
      orderTotal = parseFloat(orderTotal);
      if (isNaN(orderTotal)) {
        throw new Error('Invalid TotalAmount value');
      }
    }
  
    const TransactionID = `TEMP_${Date.now()}`;
    const paymentData = {
      OrderID,
      TransactionID,
      PaymentMethod,
      PaymentStatus: 'Pending',
      Amount: orderTotal
    };
  
    const PaymentID = await PaymentModel.createPayment(paymentData);
  
    const baseUrl = 'https://sandbox.payhere.lk/pay/checkout';
    const queryParams = new URLSearchParams({
      merchant_id: PAYHERE_MERCHANT_ID,
      return_url: PAYHERE_RETURN_URL,
      cancel_url: PAYHERE_CANCEL_URL,
      notify_url: PAYHERE_NOTIFY_URL,
      order_id: OrderID.toString(),
      items: `Order #${OrderID}`,
      amount: orderTotal.toFixed(2),
      currency: 'LKR'
    }).toString();
  
    const redirectUrl = `${baseUrl}?${queryParams}`;
  
    return {
      PaymentID,
      redirectUrl,
      PaymentStatus: 'Pending'
    };
  };
  

const processPayHereNotification = async (data) => {
  const {
    merchant_id,
    order_id,
    payment_id,
    payhere_amount,
    payhere_currency,
    status_code,
    md5sig
  } = data;

  const mid = String(merchant_id).trim();
  const oid = String(order_id).trim();
  const amount = String(payhere_amount).trim();
  const currency = String(payhere_currency).trim();
  const code = String(status_code).trim();

  const merchantSecretMd5 = crypto.createHash('md5')
    .update(PAYHERE_MERCHANT_SECRET)
    .digest('hex');

  const stringToHash = mid + oid + amount + currency + code + merchantSecretMd5;
  const localSig = crypto.createHash('md5')
    .update(stringToHash)
    .digest('hex')
    .toUpperCase();

  console.log("Expected Signature:", localSig);
  console.log("Received Signature:", md5sig);

  if (md5sig !== localSig) {
    throw new Error('MD5 signature mismatch');
  }

  const paymentStatus = status_code === '2' ? 'Completed' : 'Failed';
  const paymentData = {
    OrderID: order_id,
    TransactionID: payment_id,
    PaymentMethod: 'PayHere',
    PaymentStatus: paymentStatus,
    Amount: payhere_amount
  };

  const paymentID = await PaymentModel.createPayment(paymentData);
  return {
    message: 'Payment processed and saved',
    paymentID
  };
};

const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
  await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
};

module.exports = {
  initiatePayment,
  processPayHereNotification,
  updatePaymentStatus,
  generateSignature
};
