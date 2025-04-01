const db = require("../config/db.js");

class DeliveryRepository {
  static async assignDekiveryPerson(orderId, deliveryPersonId) {
    return db.query(
      "INSERT INTO Delivery (OrderID, DeliveryPersonID, DeliveryStatus) VALUES (?, ?, 'Assigned')",
      [orderId, deliveryPersonId]
    );
  }

  static async getDeliveryStatus(orderId) {
    cosnt[rows] = await db.query(
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
    /*
    This function retrieves the start and end locations of a delivery from the DeliveryRoutes table.
    It extracts the latitude and longitude of both pickup (restaurant) and drop-off (customer) locations.

    SQL Query Explanation:
    - SELECT ST_X(StartLocation) AS StartLat, ST_Y(StartLocation) AS StartLng:
      -> Extracts the longitude (ST_X) and latitude (ST_Y) of StartLocation (pickup point).
    - SELECT ST_X(EndLocation) AS EndLat, ST_Y(EndLocation) AS EndLng:
      -> Extracts the longitude (ST_X) and latitude (ST_Y) of EndLocation (drop-off point).
    - FROM DeliveryRoutes WHERE DeliveryID = ?:
      -> Retrieves the route details for the specific delivery identified by deliveryId.

    Example Data in DeliveryRoutes Table:
    | RouteID | DeliveryID | StartLocation (POINT) | EndLocation (POINT) |
    |---------|-----------|---------------------|------------------|
    | 1       | 101       | (6.9271, 79.8612)  | (6.9275, 79.8655) |

    Expected Output:
    {
        "StartLat": 6.9271,
        "StartLng": 79.8612,
        "EndLat": 6.9275,
        "EndLng": 79.8655
    }

    Purpose:
    - Enables tracking of deliveries by retrieving geographical coordinates.
    - Can be used to integrate with a mapping service (e.g., Google Maps, OpenStreetMap) for visualization.
    */
    const [rows] = await db.query(
      `SELECT ST_X(StartLocation) AS StartLat, ST_Y(StartLocation) AS StartLng,
                ST_X(EndLocation) AS EndLat, ST_Y(EndLocation) AS EndLng
         FROM DeliveryRoutes WHERE DeliveryID = ?`,
      [deliveryId]
    );
    return rows[0];
  }
}

module.exports = DeliveryRepository;
