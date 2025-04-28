// services/notificationTemplates.js
module.exports = {
  emailTemplates: {
    // Existing templates
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
    }),
    
    // New templates
    deliveryPicked: (data) => ({
      subject: "Your Order is on the Way",
      text: `Hi ${data.customerName},
      
Your order #${data.orderId} has been picked up by ${data.driverName} and is on the way to you.
      
Estimated delivery time: ${data.eta || 'soon'}
      
Thank you for using EatEazy!`
    }),
    
    orderUpdate: (data) => ({
      subject: `Order #${data.orderId} Status Update`,
      text: `Hi ${data.customerName},
      
The status of your order #${data.orderId} has been updated to: ${data.status}
      
${data.additionalInfo || ''}
      
Thank you for using EatEazy!`
    }),
    
    welcomeUser: (data) => ({
      subject: "Welcome to EatEazy!",
      text: `Hi ${data.name},
      
Welcome to EatEazy! We're thrilled to have you join our platform.
      
Explore restaurants near you and enjoy delicious meals delivered right to your doorstep.
      
Happy ordering!
The EatEazy Team`
    }),
    
    passwordReset: (data) => ({
      subject: "Password Reset Request",
      text: `Hi ${data.name},
      
We've received a request to reset your password. To proceed, please use the following code:
      
${data.resetCode}
      
This code will expire in 15 minutes.
      
If you didn't request this change, please ignore this email or contact support.
      
The EatEazy Team`
    })
  },

  smsTemplates: {
    // Existing templates
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
      `EatEazy: Your order #${data.orderId} is out for delivery by ${data.driverName}.`,
      
    // New templates
    deliveryPicked: (data) =>
      `EatEazy: Your order #${data.orderId} has been picked up and is on the way. ETA: ${data.eta || 'soon'}`,
      
    orderUpdate: (data) =>
      `EatEazy: Order #${data.orderId} update: ${data.status}`,
      
    welcomeUser: (data) =>
      `Welcome to EatEazy, ${data.name}! Your food delivery app for convenient ordering.`,
      
    passwordReset: (data) =>
      `EatEazy: Your password reset code is ${data.resetCode}. Valid for 15 minutes.`,
      
    driverAssignment: (data) =>
      `EatEazy: New delivery assigned! Order #${data.orderId} from ${data.restaurantName}. Pickup at: ${data.restaurantAddress}`
  }
};
