
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CartitemsScalarFieldEnum = {
  ID: 'ID',
  CartID: 'CartID',
  MenuItemID: 'MenuItemID',
  Quantity: 'Quantity'
};

exports.Prisma.CartsScalarFieldEnum = {
  CartID: 'CartID',
  UserID: 'UserID',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.DeliveryScalarFieldEnum = {
  DeliveryID: 'DeliveryID',
  OrderID: 'OrderID',
  DeliveryPersonID: 'DeliveryPersonID',
  AssignedAt: 'AssignedAt',
  DeliveredAt: 'DeliveredAt',
  DeliveryStatus: 'DeliveryStatus'
};

exports.Prisma.DeliveryroutesScalarFieldEnum = {
  RouteID: 'RouteID',
  DeliveryID: 'DeliveryID'
};

exports.Prisma.MenuitemsScalarFieldEnum = {
  MenuItemID: 'MenuItemID',
  RestaurantID: 'RestaurantID',
  Name: 'Name',
  Description: 'Description',
  Price: 'Price',
  IsAvailable: 'IsAvailable'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  NotificationID: 'NotificationID',
  UserID: 'UserID',
  Message: 'Message',
  NotificationDate: 'NotificationDate',
  IsRead: 'IsRead'
};

exports.Prisma.OrderdetailsScalarFieldEnum = {
  OrderDetailID: 'OrderDetailID',
  OrderID: 'OrderID',
  MenuItemID: 'MenuItemID',
  Quantity: 'Quantity',
  ItemPrice: 'ItemPrice'
};

exports.Prisma.OrdersScalarFieldEnum = {
  OrderID: 'OrderID',
  CustomerID: 'CustomerID',
  RestaurantID: 'RestaurantID',
  OrderStatus: 'OrderStatus',
  OrderTotal: 'OrderTotal',
  OrderDate: 'OrderDate'
};

exports.Prisma.PaymentsScalarFieldEnum = {
  PaymentID: 'PaymentID',
  OrderID: 'OrderID',
  PaymentMethod: 'PaymentMethod',
  PaymentStatus: 'PaymentStatus',
  TransactionID: 'TransactionID',
  PaymentDate: 'PaymentDate'
};

exports.Prisma.RestaurantsScalarFieldEnum = {
  RestaurantID: 'RestaurantID',
  OwnerID: 'OwnerID',
  RestaurantName: 'RestaurantName',
  Address: 'Address',
  Phone: 'Phone',
  Email: 'Email',
  Availability: 'Availability'
};

exports.Prisma.UsersScalarFieldEnum = {
  UserID: 'UserID',
  Firstname: 'Firstname',
  Lastname: 'Lastname',
  PasswordHash: 'PasswordHash',
  Email: 'Email',
  Phone: 'Phone',
  Role: 'Role'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.menuitemsOrderByRelevanceFieldEnum = {
  Name: 'Name',
  Description: 'Description'
};

exports.Prisma.notificationsOrderByRelevanceFieldEnum = {
  Message: 'Message'
};

exports.Prisma.paymentsOrderByRelevanceFieldEnum = {
  TransactionID: 'TransactionID'
};

exports.Prisma.restaurantsOrderByRelevanceFieldEnum = {
  RestaurantName: 'RestaurantName',
  Address: 'Address',
  Phone: 'Phone',
  Email: 'Email',
  Availability: 'Availability'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  Firstname: 'Firstname',
  Lastname: 'Lastname',
  PasswordHash: 'PasswordHash',
  Email: 'Email',
  Phone: 'Phone'
};
exports.payments_PaymentMethod = exports.$Enums.payments_PaymentMethod = {
  PayHere: 'PayHere',
  Dialog_Genie: 'Dialog_Genie',
  FriMi: 'FriMi',
  Stripe: 'Stripe',
  PayPal: 'PayPal'
};

exports.orders_OrderStatus = exports.$Enums.orders_OrderStatus = {
  Pending: 'Pending',
  Confirmed: 'Confirmed',
  Preparing: 'Preparing',
  Out_for_Delivery: 'Out_for_Delivery',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled'
};

exports.payments_PaymentStatus = exports.$Enums.payments_PaymentStatus = {
  Pending: 'Pending',
  Completed: 'Completed',
  Failed: 'Failed'
};

exports.delivery_DeliveryStatus = exports.$Enums.delivery_DeliveryStatus = {
  Assigned: 'Assigned',
  In_Transit: 'In_Transit',
  Delivered: 'Delivered',
  Failed: 'Failed'
};

exports.users_Role = exports.$Enums.users_Role = {
  Admin: 'Admin',
  Restaurant: 'Restaurant',
  Customer: 'Customer',
  DeliveryPerson: 'DeliveryPerson'
};

exports.Prisma.ModelName = {
  cartitems: 'cartitems',
  carts: 'carts',
  delivery: 'delivery',
  deliveryroutes: 'deliveryroutes',
  menuitems: 'menuitems',
  notifications: 'notifications',
  orderdetails: 'orderdetails',
  orders: 'orders',
  payments: 'payments',
  restaurants: 'restaurants',
  users: 'users'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Projects\\DS-Assingment\\eatEazy\\server\\delivery-service\\src\\prisma\\generated\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\Projects\\DS-Assingment\\eatEazy\\server\\delivery-service\\src\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../..",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/prisma/client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel cartitems {\n  ID         Int @id @default(autoincrement())\n  CartID     Int\n  MenuItemID Int\n  Quantity   Int\n\n  @@index([CartID], map: \"FK_Cart_CartItem\")\n  @@index([MenuItemID], map: \"FK_Menu_CartItem\")\n}\n\nmodel carts {\n  CartID    Int       @id @default(autoincrement())\n  UserID    Int\n  CreatedAt DateTime? @default(now()) @db.DateTime(0)\n\n  @@index([UserID], map: \"UserID\")\n}\n\nmodel delivery {\n  DeliveryID       Int                     @id @default(autoincrement())\n  OrderID          Int?\n  DeliveryPersonID Int?\n  AssignedAt       DateTime?               @default(now()) @db.DateTime(0)\n  DeliveredAt      DateTime?               @db.DateTime(0)\n  DeliveryStatus   delivery_DeliveryStatus\n\n  @@index([DeliveryPersonID], map: \"DeliveryPersonID\")\n  @@index([OrderID], map: \"OrderID\")\n}\n\nmodel deliveryroutes {\n  RouteID       Int                  @id @default(autoincrement())\n  DeliveryID    Int?\n  StartLocation Unsupported(\"point\")\n  EndLocation   Unsupported(\"point\")\n\n  @@index([DeliveryID], map: \"DeliveryID\")\n}\n\nmodel menuitems {\n  MenuItemID   Int      @id @default(autoincrement())\n  RestaurantID Int?\n  Name         String   @db.VarChar(255)\n  Description  String?  @db.Text\n  Price        Decimal  @db.Decimal(10, 2)\n  IsAvailable  Boolean? @default(true)\n\n  @@index([RestaurantID], map: \"RestaurantID\")\n}\n\nmodel notifications {\n  NotificationID   Int       @id @default(autoincrement())\n  UserID           Int?\n  Message          String    @db.Text\n  NotificationDate DateTime? @default(now()) @db.DateTime(0)\n  IsRead           Boolean?  @default(false)\n\n  @@index([UserID], map: \"UserID\")\n}\n\nmodel orderdetails {\n  OrderDetailID Int     @id @default(autoincrement())\n  OrderID       Int?\n  MenuItemID    Int?\n  Quantity      Int\n  ItemPrice     Decimal @db.Decimal(10, 2)\n\n  @@index([MenuItemID], map: \"MenuItemID\")\n  @@index([OrderID], map: \"OrderID\")\n}\n\nmodel orders {\n  OrderID      Int                @id @default(autoincrement())\n  CustomerID   Int?\n  RestaurantID Int?\n  OrderStatus  orders_OrderStatus\n  OrderTotal   Decimal            @db.Decimal(10, 2)\n  OrderDate    DateTime?          @default(now()) @db.DateTime(0)\n\n  @@index([CustomerID], map: \"CustomerID\")\n  @@index([RestaurantID], map: \"RestaurantID\")\n}\n\nmodel payments {\n  PaymentID     Int                    @id @default(autoincrement())\n  OrderID       Int?\n  PaymentMethod payments_PaymentMethod\n  PaymentStatus payments_PaymentStatus\n  TransactionID String                 @db.VarChar(255)\n  PaymentDate   DateTime?              @default(now()) @db.DateTime(0)\n\n  @@index([OrderID], map: \"OrderID\")\n}\n\nmodel restaurants {\n  RestaurantID   Int     @id @default(autoincrement())\n  OwnerID        Int?\n  RestaurantName String  @db.VarChar(255)\n  Address        String  @db.Text\n  Phone          String? @db.VarChar(15)\n  Email          String? @db.VarChar(255)\n  Availability   String  @db.VarChar(255)\n\n  @@index([OwnerID], map: \"OwnerID\")\n}\n\nmodel users {\n  UserID       Int        @id @default(autoincrement())\n  Firstname    String     @db.VarChar(255)\n  Lastname     String     @db.VarChar(255)\n  PasswordHash String     @db.VarChar(255)\n  Email        String     @unique(map: \"Email\") @db.VarChar(255)\n  Phone        String?    @db.VarChar(15)\n  Role         users_Role\n}\n\nenum payments_PaymentMethod {\n  PayHere\n  Dialog_Genie @map(\"Dialog Genie\")\n  FriMi\n  Stripe\n  PayPal\n}\n\nenum orders_OrderStatus {\n  Pending\n  Confirmed\n  Preparing\n  Out_for_Delivery @map(\"Out for Delivery\")\n  Delivered\n  Cancelled\n}\n\nenum payments_PaymentStatus {\n  Pending\n  Completed\n  Failed\n}\n\nenum delivery_DeliveryStatus {\n  Assigned\n  In_Transit @map(\"In Transit\")\n  Delivered\n  Failed\n}\n\nenum users_Role {\n  Admin\n  Restaurant\n  Customer\n  DeliveryPerson\n}\n",
  "inlineSchemaHash": "901d93bfffe30644ce6ed63f1c0d2412b58fdc6da22d0f0704f40fab1f0d1158",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"cartitems\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CartID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MenuItemID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"carts\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"CartID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"delivery\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"DeliveryID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DeliveryPersonID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AssignedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DeliveredAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DeliveryStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"delivery_DeliveryStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"deliveryroutes\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"RouteID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DeliveryID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"menuitems\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"MenuItemID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsAvailable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"notifications\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"NotificationID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NotificationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsRead\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"orderdetails\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"OrderDetailID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MenuItemID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ItemPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"orders\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"OrderID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CustomerID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders_OrderStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"payments\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"PaymentID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentMethod\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payments_PaymentMethod\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payments_PaymentStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TransactionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"restaurants\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"RestaurantID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OwnerID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Availability\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PasswordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users_Role\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"payments_PaymentMethod\":{\"values\":[{\"name\":\"PayHere\",\"dbName\":null},{\"name\":\"Dialog_Genie\",\"dbName\":\"Dialog Genie\"},{\"name\":\"FriMi\",\"dbName\":null},{\"name\":\"Stripe\",\"dbName\":null},{\"name\":\"PayPal\",\"dbName\":null}],\"dbName\":null},\"orders_OrderStatus\":{\"values\":[{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Confirmed\",\"dbName\":null},{\"name\":\"Preparing\",\"dbName\":null},{\"name\":\"Out_for_Delivery\",\"dbName\":\"Out for Delivery\"},{\"name\":\"Delivered\",\"dbName\":null},{\"name\":\"Cancelled\",\"dbName\":null}],\"dbName\":null},\"payments_PaymentStatus\":{\"values\":[{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Completed\",\"dbName\":null},{\"name\":\"Failed\",\"dbName\":null}],\"dbName\":null},\"delivery_DeliveryStatus\":{\"values\":[{\"name\":\"Assigned\",\"dbName\":null},{\"name\":\"In_Transit\",\"dbName\":\"In Transit\"},{\"name\":\"Delivered\",\"dbName\":null},{\"name\":\"Failed\",\"dbName\":null}],\"dbName\":null},\"users_Role\":{\"values\":[{\"name\":\"Admin\",\"dbName\":null},{\"name\":\"Restaurant\",\"dbName\":null},{\"name\":\"Customer\",\"dbName\":null},{\"name\":\"DeliveryPerson\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

