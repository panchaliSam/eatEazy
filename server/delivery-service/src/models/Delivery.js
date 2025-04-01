class Delivery {
  constructor(orderId, deliveryPersonId, status, assignedAt, deliveredAt) {
    this.orderId = orderId;
    this.deliveryPersonId = deliveryPersonId;
    this.status = status;
    this.assignedAt = assignedAt;
    this.deliveredAt = deliveredAt;
  }
}

module.exports = Delivery;
