module.exports = {
  emailTemplates: {
    orderConfirmation: (data) => ({
      subject: "Order Confirmation",
      text: `Hi ${data.customerName}, your order ${data.orderId} was confirmed!`
    }),
    paymentSuccess: (data) => ({
      subject: "Payment Received",
      text: `We’ve received LKR ${data.totalAmount} for order ${data.orderId}. Thank you!`
    }),
    orderDelivered: (data) => ({
      subject: "Order Delivered",
      text: `Hi ${data.customerName}, your order ${data.orderId} has been delivered! 🍽️`
    }),
    orderCancelled: (data) => ({
      subject: "Order Cancelled",
      text: `Hi ${data.customerName}, your order ${data.orderId} was cancelled. Reason: ${data.reason || 'not specified'}`
    }),
    deliveryAssigned: (data) => ({
      subject: "Delivery Assigned",
      text: `Hi ${data.customerName}, your order ${data.orderId} is out for delivery by ${data.driverName}.`
    })
  },

  smsTemplates: {
    orderConfirmation: (data) =>
      `EatEazy: Order #${data.orderId} confirmed. ETA: ${data.eta}.`,
    paymentSuccess: (data) =>
      `EatEazy: Payment of LKR ${data.totalAmount} for order ${data.orderId} received.`,
    orderDelivered: (data) =>
      `EatEazy: Order #${data.orderId} delivered. Enjoy your meal! 🍽️`,
    orderCancelled: (data) =>
      `EatEazy: Order #${data.orderId} was cancelled. ${data.reason || ''}`,
    deliveryAssigned: (data) =>
      `EatEazy: Your order #${data.orderId} is out for delivery by ${data.driverName}.`
  },
};