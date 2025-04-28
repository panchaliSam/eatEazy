module.exports = {
  emailTemplates: {
    orderConfirmation: (data) => ({
      subject: "Order Confirmation",
      text: `Hi ${data.customerName}, your order ${data.orderId} was confirmed!`
    }),
    paymentSuccess: (data) => ({
      subject: "Payment Successful for Your Order",
      text: `Dear ${data.customerName},
    
    Your payment of LKR ${data.totalAmount.toFixed(2)} for order #${data.orderId} has been successfully processed.
    
    Order details:
    - Order ID: ${data.orderId}
    - Amount paid: LKR ${data.totalAmount.toFixed(2)}
    - Payment method: ${data.paymentMethod || 'PayHere'}
    
    Your order is now being processed by the restaurant. You'll receive updates as your order progresses.
    
    Thank you for choosing EatEazy!
    `
    }),
    paymentFailed: (data) => ({
      subject: "Payment Failed for Your Order",
      text: `Dear ${data.customerName},
    
    We're sorry, but the payment for your order #${data.orderId} of LKR ${data.totalAmount.toFixed(2)} has failed.
    
    Please try again with a different payment method or contact our support if you need assistance.
    
    Thank you for choosing EatEazy!
    `
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
    paymentFailed: (data) =>
      `EatEazy: Payment for order #${data.orderId} failed. Please try again.`,
    orderDelivered: (data) =>
      `EatEazy: Order #${data.orderId} delivered. Enjoy your meal! 🍽️`,
    orderCancelled: (data) =>
      `EatEazy: Order #${data.orderId} was cancelled. ${data.reason || ''}`,
    deliveryAssigned: (data) =>
      `EatEazy: Your order #${data.orderId} is out for delivery by ${data.driverName}.`
  }
};
