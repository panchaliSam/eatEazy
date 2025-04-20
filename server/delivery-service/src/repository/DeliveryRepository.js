const prisma = require("../config/prisma");

class DeliveryRepository {
  static async assignDeliveryPerson(orderId, deliveryPersonId) {
    const existingDelivery = await prisma.delivery.findUnique({
      where: {
        OrderID: orderId,
      },
    });

    if (existingDelivery) {
      throw new Error("Delivery already assigned for this order.");
    }
    return prisma.delivery.create({
      data: {
        OrderID: orderId,
        DeliveryPersonID: deliveryPersonId,
        DeliveryStatus: "Assigned",
      },
    });
  }

  static async getDeliveryStatus(orderId) {
    const delivery = await prisma.delivery.findUnique({
      where: {
        OrderID: orderId,
      },
    });
    
    if (!delivery) return null;

    return {
      OrderID: delivery.OrderID,
      DeliveryStatus: delivery.DeliveryStatus,
      AssignedAt: delivery.AssignedAt,
      DeliveredAt: delivery.DeliveredAt,
      DriverName: delivery.DeliveryPerson?.Firstname || null,
      DriverPhone: delivery.DeliveryPerson?.Phone || null,
    };
  }

  static async updateDeliveryStatus(deliveryId, status) {
    return prisma.delivery.update({
      where: {
        DeliveryID: deliveryId,
      },
      data: {
        DeliveryStatus: status,
      },
    });
  }

  static async getDeliveryRoute(deliveryId) {
    const route = await prisma.deliveryRoutes.findUnique({
      where: {
        DeliveryID: deliveryId,
      },
    });

    if (!route) return null;

    // Decode POINT bytes into lat/lng using raw query (MySQL limitation)
    const [rows] = await prisma.$queryRawUnsafe(`
      SELECT 
        ST_X(StartLocation) AS StartLat,
        ST_Y(StartLocation) AS StartLng,
        ST_X(EndLocation) AS EndLat,
        ST_Y(EndLocation) AS EndLng
      FROM DeliveryRoutes
      WHERE DeliveryID = ${deliveryId};
    `);

    return rows;
  }

  static async insertRoute(deliveryId, startLat, startLng, endLat, endLng) {
    console.log(
      `Inserting route: startLat=${startLat}, startLng=${startLng}, endLat=${endLat}, endLng=${endLng}`
    );
    return prisma.$executeRawUnsafe(`
      INSERT INTO DeliveryRoutes (DeliveryID, StartLocation, EndLocation)
      VALUES (
        ${deliveryId},
        ST_GeomFromText('POINT(${startLng} ${startLat})'),
        ST_GeomFromText('POINT(${endLng} ${endLat})')
      )
    `);
  }
}

module.exports = DeliveryRepository;
