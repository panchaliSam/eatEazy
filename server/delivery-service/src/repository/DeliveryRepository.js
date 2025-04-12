const db = require("../config/db.js");

class DeliveryRepository {
  static async assignDeliveryPerson(orderId, deliveryPersonId) {
    return db.query(
      "INSERT INTO Delivery (OrderID, DeliveryPersonID, DeliveryStatus) VALUES (?, ?, 'Assigned')",
      [orderId, deliveryPersonId]
    );
  }

  static async getDeliveryStatus(orderId) {
    const [rows] = await db.query(
      `SELECT d.OrderID, d.DeliveryStatus, d.AssignedAt, d.DeliveredAt,
              u.Firstname AS DriverName, u.Phone AS DriverPhone
       FROM Delivery d
       JOIN Users u ON d.DeliveryPersonID = u.UserID
       WHERE d.OrderID = ?`,
      [orderId]
    );
    return rows[0] || null;
  }

  static async updateDeliveryStatus(deliveryId, status) {
    return db.query(
      "UPDATE Delivery SET DeliveryStatus = ? WHERE DeliveryID = ?",
      [status, deliveryId]
    );
  }

  static async getDeliveryRoute(deliveryId) {
    const [rows] = await db.query(
      `SELECT ST_X(StartLocation) AS StartLat, ST_Y(StartLocation) AS StartLng,
              ST_X(EndLocation) AS EndLat, ST_Y(EndLocation) AS EndLng
       FROM DeliveryRoutes WHERE DeliveryID = ?`,
      [deliveryId]
    );
    return rows[0];
  }

  static async insertRoute(deliveryId, startLat, startLng, endLat, endLng) {
    return db.query(
      `INSERT INTO DeliveryRoutes (DeliveryID, StartLocation, EndLocation)
       VALUES (?, ST_GeomFromText(?), ST_GeomFromText(?))`,
      [
        deliveryId,
        `POINT(${startLng} ${startLat})`,
        `POINT(${endLng} ${endLat})`,
      ]
    );
  }
}

module.exports = DeliveryRepository;
