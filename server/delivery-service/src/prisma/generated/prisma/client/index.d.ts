
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cartitems
 * 
 */
export type cartitems = $Result.DefaultSelection<Prisma.$cartitemsPayload>
/**
 * Model carts
 * 
 */
export type carts = $Result.DefaultSelection<Prisma.$cartsPayload>
/**
 * Model delivery
 * 
 */
export type delivery = $Result.DefaultSelection<Prisma.$deliveryPayload>
/**
 * Model deliveryroutes
 * 
 */
export type deliveryroutes = $Result.DefaultSelection<Prisma.$deliveryroutesPayload>
/**
 * Model menuitems
 * 
 */
export type menuitems = $Result.DefaultSelection<Prisma.$menuitemsPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model orderdetails
 * 
 */
export type orderdetails = $Result.DefaultSelection<Prisma.$orderdetailsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model restaurants
 * 
 */
export type restaurants = $Result.DefaultSelection<Prisma.$restaurantsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const payments_PaymentMethod: {
  PayHere: 'PayHere',
  Dialog_Genie: 'Dialog_Genie',
  FriMi: 'FriMi',
  Stripe: 'Stripe',
  PayPal: 'PayPal'
};

export type payments_PaymentMethod = (typeof payments_PaymentMethod)[keyof typeof payments_PaymentMethod]


export const orders_OrderStatus: {
  Pending: 'Pending',
  Confirmed: 'Confirmed',
  Preparing: 'Preparing',
  Out_for_Delivery: 'Out_for_Delivery',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled'
};

export type orders_OrderStatus = (typeof orders_OrderStatus)[keyof typeof orders_OrderStatus]


export const payments_PaymentStatus: {
  Pending: 'Pending',
  Completed: 'Completed',
  Failed: 'Failed'
};

export type payments_PaymentStatus = (typeof payments_PaymentStatus)[keyof typeof payments_PaymentStatus]


export const delivery_DeliveryStatus: {
  Assigned: 'Assigned',
  In_Transit: 'In_Transit',
  Delivered: 'Delivered',
  Failed: 'Failed'
};

export type delivery_DeliveryStatus = (typeof delivery_DeliveryStatus)[keyof typeof delivery_DeliveryStatus]


export const users_Role: {
  Admin: 'Admin',
  Restaurant: 'Restaurant',
  Customer: 'Customer',
  DeliveryPerson: 'DeliveryPerson'
};

export type users_Role = (typeof users_Role)[keyof typeof users_Role]

}

export type payments_PaymentMethod = $Enums.payments_PaymentMethod

export const payments_PaymentMethod: typeof $Enums.payments_PaymentMethod

export type orders_OrderStatus = $Enums.orders_OrderStatus

export const orders_OrderStatus: typeof $Enums.orders_OrderStatus

export type payments_PaymentStatus = $Enums.payments_PaymentStatus

export const payments_PaymentStatus: typeof $Enums.payments_PaymentStatus

export type delivery_DeliveryStatus = $Enums.delivery_DeliveryStatus

export const delivery_DeliveryStatus: typeof $Enums.delivery_DeliveryStatus

export type users_Role = $Enums.users_Role

export const users_Role: typeof $Enums.users_Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cartitems
 * const cartitems = await prisma.cartitems.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cartitems
   * const cartitems = await prisma.cartitems.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cartitems`: Exposes CRUD operations for the **cartitems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartitems
    * const cartitems = await prisma.cartitems.findMany()
    * ```
    */
  get cartitems(): Prisma.cartitemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.deliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryroutes`: Exposes CRUD operations for the **deliveryroutes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveryroutes
    * const deliveryroutes = await prisma.deliveryroutes.findMany()
    * ```
    */
  get deliveryroutes(): Prisma.deliveryroutesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuitems`: Exposes CRUD operations for the **menuitems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menuitems
    * const menuitems = await prisma.menuitems.findMany()
    * ```
    */
  get menuitems(): Prisma.menuitemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderdetails`: Exposes CRUD operations for the **orderdetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderdetails
    * const orderdetails = await prisma.orderdetails.findMany()
    * ```
    */
  get orderdetails(): Prisma.orderdetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurants`: Exposes CRUD operations for the **restaurants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurants.findMany()
    * ```
    */
  get restaurants(): Prisma.restaurantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cartitems" | "carts" | "delivery" | "deliveryroutes" | "menuitems" | "notifications" | "orderdetails" | "orders" | "payments" | "restaurants" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cartitems: {
        payload: Prisma.$cartitemsPayload<ExtArgs>
        fields: Prisma.cartitemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartitemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartitemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload>
          }
          findFirst: {
            args: Prisma.cartitemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartitemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload>
          }
          findMany: {
            args: Prisma.cartitemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload>[]
          }
          create: {
            args: Prisma.cartitemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload>
          }
          createMany: {
            args: Prisma.cartitemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cartitemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload>
          }
          update: {
            args: Prisma.cartitemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload>
          }
          deleteMany: {
            args: Prisma.cartitemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartitemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartitemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartitemsPayload>
          }
          aggregate: {
            args: Prisma.CartitemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartitems>
          }
          groupBy: {
            args: Prisma.cartitemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartitemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartitemsCountArgs<ExtArgs>
            result: $Utils.Optional<CartitemsCountAggregateOutputType> | number
          }
        }
      }
      carts: {
        payload: Prisma.$cartsPayload<ExtArgs>
        fields: Prisma.cartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findFirst: {
            args: Prisma.cartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findMany: {
            args: Prisma.cartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          create: {
            args: Prisma.cartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          createMany: {
            args: Prisma.cartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          update: {
            args: Prisma.cartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          deleteMany: {
            args: Prisma.cartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.cartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      delivery: {
        payload: Prisma.$deliveryPayload<ExtArgs>
        fields: Prisma.deliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          findFirst: {
            args: Prisma.deliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          findMany: {
            args: Prisma.deliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>[]
          }
          create: {
            args: Prisma.deliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          createMany: {
            args: Prisma.deliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.deliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          update: {
            args: Prisma.deliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          deleteMany: {
            args: Prisma.deliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.deliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.deliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.deliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      deliveryroutes: {
        payload: Prisma.$deliveryroutesPayload<ExtArgs>
        fields: Prisma.deliveryroutesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deliveryroutesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deliveryroutesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload>
          }
          findFirst: {
            args: Prisma.deliveryroutesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deliveryroutesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload>
          }
          findMany: {
            args: Prisma.deliveryroutesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload>[]
          }
          delete: {
            args: Prisma.deliveryroutesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload>
          }
          update: {
            args: Prisma.deliveryroutesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload>
          }
          deleteMany: {
            args: Prisma.deliveryroutesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deliveryroutesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          aggregate: {
            args: Prisma.DeliveryroutesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryroutes>
          }
          groupBy: {
            args: Prisma.deliveryroutesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryroutesGroupByOutputType>[]
          }
          count: {
            args: Prisma.deliveryroutesCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryroutesCountAggregateOutputType> | number
          }
        }
      }
      menuitems: {
        payload: Prisma.$menuitemsPayload<ExtArgs>
        fields: Prisma.menuitemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuitemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuitemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload>
          }
          findFirst: {
            args: Prisma.menuitemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuitemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload>
          }
          findMany: {
            args: Prisma.menuitemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload>[]
          }
          create: {
            args: Prisma.menuitemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload>
          }
          createMany: {
            args: Prisma.menuitemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menuitemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload>
          }
          update: {
            args: Prisma.menuitemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload>
          }
          deleteMany: {
            args: Prisma.menuitemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuitemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menuitemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemsPayload>
          }
          aggregate: {
            args: Prisma.MenuitemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuitems>
          }
          groupBy: {
            args: Prisma.menuitemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuitemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuitemsCountArgs<ExtArgs>
            result: $Utils.Optional<MenuitemsCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      orderdetails: {
        payload: Prisma.$orderdetailsPayload<ExtArgs>
        fields: Prisma.orderdetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderdetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderdetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload>
          }
          findFirst: {
            args: Prisma.orderdetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderdetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload>
          }
          findMany: {
            args: Prisma.orderdetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload>[]
          }
          create: {
            args: Prisma.orderdetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload>
          }
          createMany: {
            args: Prisma.orderdetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderdetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload>
          }
          update: {
            args: Prisma.orderdetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload>
          }
          deleteMany: {
            args: Prisma.orderdetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderdetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderdetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderdetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderdetails>
          }
          groupBy: {
            args: Prisma.orderdetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderdetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      restaurants: {
        payload: Prisma.$restaurantsPayload<ExtArgs>
        fields: Prisma.restaurantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          findFirst: {
            args: Prisma.restaurantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          findMany: {
            args: Prisma.restaurantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>[]
          }
          create: {
            args: Prisma.restaurantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          createMany: {
            args: Prisma.restaurantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.restaurantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          update: {
            args: Prisma.restaurantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          deleteMany: {
            args: Prisma.restaurantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.restaurantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          aggregate: {
            args: Prisma.RestaurantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurants>
          }
          groupBy: {
            args: Prisma.restaurantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurantsCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cartitems?: cartitemsOmit
    carts?: cartsOmit
    delivery?: deliveryOmit
    deliveryroutes?: deliveryroutesOmit
    menuitems?: menuitemsOmit
    notifications?: notificationsOmit
    orderdetails?: orderdetailsOmit
    orders?: ordersOmit
    payments?: paymentsOmit
    restaurants?: restaurantsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model cartitems
   */

  export type AggregateCartitems = {
    _count: CartitemsCountAggregateOutputType | null
    _avg: CartitemsAvgAggregateOutputType | null
    _sum: CartitemsSumAggregateOutputType | null
    _min: CartitemsMinAggregateOutputType | null
    _max: CartitemsMaxAggregateOutputType | null
  }

  export type CartitemsAvgAggregateOutputType = {
    ID: number | null
    CartID: number | null
    MenuItemID: number | null
    Quantity: number | null
  }

  export type CartitemsSumAggregateOutputType = {
    ID: number | null
    CartID: number | null
    MenuItemID: number | null
    Quantity: number | null
  }

  export type CartitemsMinAggregateOutputType = {
    ID: number | null
    CartID: number | null
    MenuItemID: number | null
    Quantity: number | null
  }

  export type CartitemsMaxAggregateOutputType = {
    ID: number | null
    CartID: number | null
    MenuItemID: number | null
    Quantity: number | null
  }

  export type CartitemsCountAggregateOutputType = {
    ID: number
    CartID: number
    MenuItemID: number
    Quantity: number
    _all: number
  }


  export type CartitemsAvgAggregateInputType = {
    ID?: true
    CartID?: true
    MenuItemID?: true
    Quantity?: true
  }

  export type CartitemsSumAggregateInputType = {
    ID?: true
    CartID?: true
    MenuItemID?: true
    Quantity?: true
  }

  export type CartitemsMinAggregateInputType = {
    ID?: true
    CartID?: true
    MenuItemID?: true
    Quantity?: true
  }

  export type CartitemsMaxAggregateInputType = {
    ID?: true
    CartID?: true
    MenuItemID?: true
    Quantity?: true
  }

  export type CartitemsCountAggregateInputType = {
    ID?: true
    CartID?: true
    MenuItemID?: true
    Quantity?: true
    _all?: true
  }

  export type CartitemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartitems to aggregate.
     */
    where?: cartitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemsOrderByWithRelationInput | cartitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cartitems
    **/
    _count?: true | CartitemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartitemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartitemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartitemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartitemsMaxAggregateInputType
  }

  export type GetCartitemsAggregateType<T extends CartitemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCartitems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartitems[P]>
      : GetScalarType<T[P], AggregateCartitems[P]>
  }




  export type cartitemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartitemsWhereInput
    orderBy?: cartitemsOrderByWithAggregationInput | cartitemsOrderByWithAggregationInput[]
    by: CartitemsScalarFieldEnum[] | CartitemsScalarFieldEnum
    having?: cartitemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartitemsCountAggregateInputType | true
    _avg?: CartitemsAvgAggregateInputType
    _sum?: CartitemsSumAggregateInputType
    _min?: CartitemsMinAggregateInputType
    _max?: CartitemsMaxAggregateInputType
  }

  export type CartitemsGroupByOutputType = {
    ID: number
    CartID: number
    MenuItemID: number
    Quantity: number
    _count: CartitemsCountAggregateOutputType | null
    _avg: CartitemsAvgAggregateOutputType | null
    _sum: CartitemsSumAggregateOutputType | null
    _min: CartitemsMinAggregateOutputType | null
    _max: CartitemsMaxAggregateOutputType | null
  }

  type GetCartitemsGroupByPayload<T extends cartitemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartitemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartitemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartitemsGroupByOutputType[P]>
            : GetScalarType<T[P], CartitemsGroupByOutputType[P]>
        }
      >
    >


  export type cartitemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    CartID?: boolean
    MenuItemID?: boolean
    Quantity?: boolean
  }, ExtArgs["result"]["cartitems"]>



  export type cartitemsSelectScalar = {
    ID?: boolean
    CartID?: boolean
    MenuItemID?: boolean
    Quantity?: boolean
  }

  export type cartitemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "CartID" | "MenuItemID" | "Quantity", ExtArgs["result"]["cartitems"]>

  export type $cartitemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cartitems"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      CartID: number
      MenuItemID: number
      Quantity: number
    }, ExtArgs["result"]["cartitems"]>
    composites: {}
  }

  type cartitemsGetPayload<S extends boolean | null | undefined | cartitemsDefaultArgs> = $Result.GetResult<Prisma.$cartitemsPayload, S>

  type cartitemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartitemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartitemsCountAggregateInputType | true
    }

  export interface cartitemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cartitems'], meta: { name: 'cartitems' } }
    /**
     * Find zero or one Cartitems that matches the filter.
     * @param {cartitemsFindUniqueArgs} args - Arguments to find a Cartitems
     * @example
     * // Get one Cartitems
     * const cartitems = await prisma.cartitems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartitemsFindUniqueArgs>(args: SelectSubset<T, cartitemsFindUniqueArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cartitems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartitemsFindUniqueOrThrowArgs} args - Arguments to find a Cartitems
     * @example
     * // Get one Cartitems
     * const cartitems = await prisma.cartitems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartitemsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartitemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemsFindFirstArgs} args - Arguments to find a Cartitems
     * @example
     * // Get one Cartitems
     * const cartitems = await prisma.cartitems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartitemsFindFirstArgs>(args?: SelectSubset<T, cartitemsFindFirstArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartitems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemsFindFirstOrThrowArgs} args - Arguments to find a Cartitems
     * @example
     * // Get one Cartitems
     * const cartitems = await prisma.cartitems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartitemsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartitemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartitems
     * const cartitems = await prisma.cartitems.findMany()
     * 
     * // Get first 10 Cartitems
     * const cartitems = await prisma.cartitems.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const cartitemsWithIDOnly = await prisma.cartitems.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends cartitemsFindManyArgs>(args?: SelectSubset<T, cartitemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cartitems.
     * @param {cartitemsCreateArgs} args - Arguments to create a Cartitems.
     * @example
     * // Create one Cartitems
     * const Cartitems = await prisma.cartitems.create({
     *   data: {
     *     // ... data to create a Cartitems
     *   }
     * })
     * 
     */
    create<T extends cartitemsCreateArgs>(args: SelectSubset<T, cartitemsCreateArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartitems.
     * @param {cartitemsCreateManyArgs} args - Arguments to create many Cartitems.
     * @example
     * // Create many Cartitems
     * const cartitems = await prisma.cartitems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartitemsCreateManyArgs>(args?: SelectSubset<T, cartitemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cartitems.
     * @param {cartitemsDeleteArgs} args - Arguments to delete one Cartitems.
     * @example
     * // Delete one Cartitems
     * const Cartitems = await prisma.cartitems.delete({
     *   where: {
     *     // ... filter to delete one Cartitems
     *   }
     * })
     * 
     */
    delete<T extends cartitemsDeleteArgs>(args: SelectSubset<T, cartitemsDeleteArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cartitems.
     * @param {cartitemsUpdateArgs} args - Arguments to update one Cartitems.
     * @example
     * // Update one Cartitems
     * const cartitems = await prisma.cartitems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartitemsUpdateArgs>(args: SelectSubset<T, cartitemsUpdateArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartitems.
     * @param {cartitemsDeleteManyArgs} args - Arguments to filter Cartitems to delete.
     * @example
     * // Delete a few Cartitems
     * const { count } = await prisma.cartitems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartitemsDeleteManyArgs>(args?: SelectSubset<T, cartitemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartitems
     * const cartitems = await prisma.cartitems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartitemsUpdateManyArgs>(args: SelectSubset<T, cartitemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cartitems.
     * @param {cartitemsUpsertArgs} args - Arguments to update or create a Cartitems.
     * @example
     * // Update or create a Cartitems
     * const cartitems = await prisma.cartitems.upsert({
     *   create: {
     *     // ... data to create a Cartitems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cartitems we want to update
     *   }
     * })
     */
    upsert<T extends cartitemsUpsertArgs>(args: SelectSubset<T, cartitemsUpsertArgs<ExtArgs>>): Prisma__cartitemsClient<$Result.GetResult<Prisma.$cartitemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemsCountArgs} args - Arguments to filter Cartitems to count.
     * @example
     * // Count the number of Cartitems
     * const count = await prisma.cartitems.count({
     *   where: {
     *     // ... the filter for the Cartitems we want to count
     *   }
     * })
    **/
    count<T extends cartitemsCountArgs>(
      args?: Subset<T, cartitemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartitemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cartitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartitemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartitemsAggregateArgs>(args: Subset<T, CartitemsAggregateArgs>): Prisma.PrismaPromise<GetCartitemsAggregateType<T>>

    /**
     * Group by Cartitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartitemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartitemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartitemsGroupByArgs['orderBy'] }
        : { orderBy?: cartitemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartitemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartitemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cartitems model
   */
  readonly fields: cartitemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cartitems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartitemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cartitems model
   */
  interface cartitemsFieldRefs {
    readonly ID: FieldRef<"cartitems", 'Int'>
    readonly CartID: FieldRef<"cartitems", 'Int'>
    readonly MenuItemID: FieldRef<"cartitems", 'Int'>
    readonly Quantity: FieldRef<"cartitems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cartitems findUnique
   */
  export type cartitemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * Filter, which cartitems to fetch.
     */
    where: cartitemsWhereUniqueInput
  }

  /**
   * cartitems findUniqueOrThrow
   */
  export type cartitemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * Filter, which cartitems to fetch.
     */
    where: cartitemsWhereUniqueInput
  }

  /**
   * cartitems findFirst
   */
  export type cartitemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * Filter, which cartitems to fetch.
     */
    where?: cartitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemsOrderByWithRelationInput | cartitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartitems.
     */
    cursor?: cartitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartitems.
     */
    distinct?: CartitemsScalarFieldEnum | CartitemsScalarFieldEnum[]
  }

  /**
   * cartitems findFirstOrThrow
   */
  export type cartitemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * Filter, which cartitems to fetch.
     */
    where?: cartitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemsOrderByWithRelationInput | cartitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartitems.
     */
    cursor?: cartitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartitems.
     */
    distinct?: CartitemsScalarFieldEnum | CartitemsScalarFieldEnum[]
  }

  /**
   * cartitems findMany
   */
  export type cartitemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * Filter, which cartitems to fetch.
     */
    where?: cartitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartitems to fetch.
     */
    orderBy?: cartitemsOrderByWithRelationInput | cartitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cartitems.
     */
    cursor?: cartitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartitems.
     */
    skip?: number
    distinct?: CartitemsScalarFieldEnum | CartitemsScalarFieldEnum[]
  }

  /**
   * cartitems create
   */
  export type cartitemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * The data needed to create a cartitems.
     */
    data: XOR<cartitemsCreateInput, cartitemsUncheckedCreateInput>
  }

  /**
   * cartitems createMany
   */
  export type cartitemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cartitems.
     */
    data: cartitemsCreateManyInput | cartitemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cartitems update
   */
  export type cartitemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * The data needed to update a cartitems.
     */
    data: XOR<cartitemsUpdateInput, cartitemsUncheckedUpdateInput>
    /**
     * Choose, which cartitems to update.
     */
    where: cartitemsWhereUniqueInput
  }

  /**
   * cartitems updateMany
   */
  export type cartitemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cartitems.
     */
    data: XOR<cartitemsUpdateManyMutationInput, cartitemsUncheckedUpdateManyInput>
    /**
     * Filter which cartitems to update
     */
    where?: cartitemsWhereInput
    /**
     * Limit how many cartitems to update.
     */
    limit?: number
  }

  /**
   * cartitems upsert
   */
  export type cartitemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * The filter to search for the cartitems to update in case it exists.
     */
    where: cartitemsWhereUniqueInput
    /**
     * In case the cartitems found by the `where` argument doesn't exist, create a new cartitems with this data.
     */
    create: XOR<cartitemsCreateInput, cartitemsUncheckedCreateInput>
    /**
     * In case the cartitems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartitemsUpdateInput, cartitemsUncheckedUpdateInput>
  }

  /**
   * cartitems delete
   */
  export type cartitemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
    /**
     * Filter which cartitems to delete.
     */
    where: cartitemsWhereUniqueInput
  }

  /**
   * cartitems deleteMany
   */
  export type cartitemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartitems to delete
     */
    where?: cartitemsWhereInput
    /**
     * Limit how many cartitems to delete.
     */
    limit?: number
  }

  /**
   * cartitems without action
   */
  export type cartitemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartitems
     */
    select?: cartitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartitems
     */
    omit?: cartitemsOmit<ExtArgs> | null
  }


  /**
   * Model carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    CartID: number | null
    UserID: number | null
  }

  export type CartsSumAggregateOutputType = {
    CartID: number | null
    UserID: number | null
  }

  export type CartsMinAggregateOutputType = {
    CartID: number | null
    UserID: number | null
    CreatedAt: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    CartID: number | null
    UserID: number | null
    CreatedAt: Date | null
  }

  export type CartsCountAggregateOutputType = {
    CartID: number
    UserID: number
    CreatedAt: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    CartID?: true
    UserID?: true
  }

  export type CartsSumAggregateInputType = {
    CartID?: true
    UserID?: true
  }

  export type CartsMinAggregateInputType = {
    CartID?: true
    UserID?: true
    CreatedAt?: true
  }

  export type CartsMaxAggregateInputType = {
    CartID?: true
    UserID?: true
    CreatedAt?: true
  }

  export type CartsCountAggregateInputType = {
    CartID?: true
    UserID?: true
    CreatedAt?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type cartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithAggregationInput | cartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    CartID: number
    UserID: number
    CreatedAt: Date | null
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CartID?: boolean
    UserID?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["carts"]>



  export type cartsSelectScalar = {
    CartID?: boolean
    UserID?: boolean
    CreatedAt?: boolean
  }

  export type cartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CartID" | "UserID" | "CreatedAt", ExtArgs["result"]["carts"]>

  export type $cartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CartID: number
      UserID: number
      CreatedAt: Date | null
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = $Result.GetResult<Prisma.$cartsPayload, S>

  type cartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carts'], meta: { name: 'carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartsFindUniqueArgs>(args: SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartsFindFirstArgs>(args?: SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `CartID`
     * const cartsWithCartIDOnly = await prisma.carts.findMany({ select: { CartID: true } })
     * 
     */
    findMany<T extends cartsFindManyArgs>(args?: SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends cartsCreateArgs>(args: SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartsCreateManyArgs>(args?: SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends cartsDeleteArgs>(args: SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartsUpdateArgs>(args: SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartsDeleteManyArgs>(args?: SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartsUpdateManyArgs>(args: SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends cartsUpsertArgs>(args: SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartsGroupByArgs['orderBy'] }
        : { orderBy?: cartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carts model
   */
  readonly fields: cartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carts model
   */
  interface cartsFieldRefs {
    readonly CartID: FieldRef<"carts", 'Int'>
    readonly UserID: FieldRef<"carts", 'Int'>
    readonly CreatedAt: FieldRef<"carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carts findUnique
   */
  export type cartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findFirst
   */
  export type cartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findMany
   */
  export type cartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts create
   */
  export type cartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data needed to create a carts.
     */
    data: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }

  /**
   * carts createMany
   */
  export type cartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carts update
   */
  export type cartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * carts upsert
   */
  export type cartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }

  /**
   * carts delete
   */
  export type cartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * carts without action
   */
  export type cartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
  }


  /**
   * Model delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    DeliveryID: number | null
    OrderID: number | null
    DeliveryPersonID: number | null
  }

  export type DeliverySumAggregateOutputType = {
    DeliveryID: number | null
    OrderID: number | null
    DeliveryPersonID: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    DeliveryID: number | null
    OrderID: number | null
    DeliveryPersonID: number | null
    AssignedAt: Date | null
    DeliveredAt: Date | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus | null
  }

  export type DeliveryMaxAggregateOutputType = {
    DeliveryID: number | null
    OrderID: number | null
    DeliveryPersonID: number | null
    AssignedAt: Date | null
    DeliveredAt: Date | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus | null
  }

  export type DeliveryCountAggregateOutputType = {
    DeliveryID: number
    OrderID: number
    DeliveryPersonID: number
    AssignedAt: number
    DeliveredAt: number
    DeliveryStatus: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    DeliveryID?: true
    OrderID?: true
    DeliveryPersonID?: true
  }

  export type DeliverySumAggregateInputType = {
    DeliveryID?: true
    OrderID?: true
    DeliveryPersonID?: true
  }

  export type DeliveryMinAggregateInputType = {
    DeliveryID?: true
    OrderID?: true
    DeliveryPersonID?: true
    AssignedAt?: true
    DeliveredAt?: true
    DeliveryStatus?: true
  }

  export type DeliveryMaxAggregateInputType = {
    DeliveryID?: true
    OrderID?: true
    DeliveryPersonID?: true
    AssignedAt?: true
    DeliveredAt?: true
    DeliveryStatus?: true
  }

  export type DeliveryCountAggregateInputType = {
    DeliveryID?: true
    OrderID?: true
    DeliveryPersonID?: true
    AssignedAt?: true
    DeliveredAt?: true
    DeliveryStatus?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which delivery to aggregate.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type deliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deliveryWhereInput
    orderBy?: deliveryOrderByWithAggregationInput | deliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: deliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    DeliveryID: number
    OrderID: number | null
    DeliveryPersonID: number | null
    AssignedAt: Date | null
    DeliveredAt: Date | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends deliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type deliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DeliveryID?: boolean
    OrderID?: boolean
    DeliveryPersonID?: boolean
    AssignedAt?: boolean
    DeliveredAt?: boolean
    DeliveryStatus?: boolean
  }, ExtArgs["result"]["delivery"]>



  export type deliverySelectScalar = {
    DeliveryID?: boolean
    OrderID?: boolean
    DeliveryPersonID?: boolean
    AssignedAt?: boolean
    DeliveredAt?: boolean
    DeliveryStatus?: boolean
  }

  export type deliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DeliveryID" | "OrderID" | "DeliveryPersonID" | "AssignedAt" | "DeliveredAt" | "DeliveryStatus", ExtArgs["result"]["delivery"]>

  export type $deliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "delivery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      DeliveryID: number
      OrderID: number | null
      DeliveryPersonID: number | null
      AssignedAt: Date | null
      DeliveredAt: Date | null
      DeliveryStatus: $Enums.delivery_DeliveryStatus
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type deliveryGetPayload<S extends boolean | null | undefined | deliveryDefaultArgs> = $Result.GetResult<Prisma.$deliveryPayload, S>

  type deliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface deliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['delivery'], meta: { name: 'delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {deliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deliveryFindUniqueArgs>(args: SelectSubset<T, deliveryFindUniqueArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, deliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deliveryFindFirstArgs>(args?: SelectSubset<T, deliveryFindFirstArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, deliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `DeliveryID`
     * const deliveryWithDeliveryIDOnly = await prisma.delivery.findMany({ select: { DeliveryID: true } })
     * 
     */
    findMany<T extends deliveryFindManyArgs>(args?: SelectSubset<T, deliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {deliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends deliveryCreateArgs>(args: SelectSubset<T, deliveryCreateArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {deliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deliveryCreateManyArgs>(args?: SelectSubset<T, deliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Delivery.
     * @param {deliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends deliveryDeleteArgs>(args: SelectSubset<T, deliveryDeleteArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {deliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deliveryUpdateArgs>(args: SelectSubset<T, deliveryUpdateArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {deliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deliveryDeleteManyArgs>(args?: SelectSubset<T, deliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deliveryUpdateManyArgs>(args: SelectSubset<T, deliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delivery.
     * @param {deliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends deliveryUpsertArgs>(args: SelectSubset<T, deliveryUpsertArgs<ExtArgs>>): Prisma__deliveryClient<$Result.GetResult<Prisma.$deliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends deliveryCountArgs>(
      args?: Subset<T, deliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends deliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deliveryGroupByArgs['orderBy'] }
        : { orderBy?: deliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, deliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the delivery model
   */
  readonly fields: deliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the delivery model
   */
  interface deliveryFieldRefs {
    readonly DeliveryID: FieldRef<"delivery", 'Int'>
    readonly OrderID: FieldRef<"delivery", 'Int'>
    readonly DeliveryPersonID: FieldRef<"delivery", 'Int'>
    readonly AssignedAt: FieldRef<"delivery", 'DateTime'>
    readonly DeliveredAt: FieldRef<"delivery", 'DateTime'>
    readonly DeliveryStatus: FieldRef<"delivery", 'delivery_DeliveryStatus'>
  }
    

  // Custom InputTypes
  /**
   * delivery findUnique
   */
  export type deliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery findUniqueOrThrow
   */
  export type deliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery findFirst
   */
  export type deliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveries.
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * delivery findFirstOrThrow
   */
  export type deliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Filter, which delivery to fetch.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveries.
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * delivery findMany
   */
  export type deliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Filter, which deliveries to fetch.
     */
    where?: deliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveryOrderByWithRelationInput | deliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deliveries.
     */
    cursor?: deliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * delivery create
   */
  export type deliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * The data needed to create a delivery.
     */
    data: XOR<deliveryCreateInput, deliveryUncheckedCreateInput>
  }

  /**
   * delivery createMany
   */
  export type deliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deliveries.
     */
    data: deliveryCreateManyInput | deliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * delivery update
   */
  export type deliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * The data needed to update a delivery.
     */
    data: XOR<deliveryUpdateInput, deliveryUncheckedUpdateInput>
    /**
     * Choose, which delivery to update.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery updateMany
   */
  export type deliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deliveries.
     */
    data: XOR<deliveryUpdateManyMutationInput, deliveryUncheckedUpdateManyInput>
    /**
     * Filter which deliveries to update
     */
    where?: deliveryWhereInput
    /**
     * Limit how many deliveries to update.
     */
    limit?: number
  }

  /**
   * delivery upsert
   */
  export type deliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * The filter to search for the delivery to update in case it exists.
     */
    where: deliveryWhereUniqueInput
    /**
     * In case the delivery found by the `where` argument doesn't exist, create a new delivery with this data.
     */
    create: XOR<deliveryCreateInput, deliveryUncheckedCreateInput>
    /**
     * In case the delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deliveryUpdateInput, deliveryUncheckedUpdateInput>
  }

  /**
   * delivery delete
   */
  export type deliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
    /**
     * Filter which delivery to delete.
     */
    where: deliveryWhereUniqueInput
  }

  /**
   * delivery deleteMany
   */
  export type deliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deliveries to delete
     */
    where?: deliveryWhereInput
    /**
     * Limit how many deliveries to delete.
     */
    limit?: number
  }

  /**
   * delivery without action
   */
  export type deliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery
     */
    select?: deliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery
     */
    omit?: deliveryOmit<ExtArgs> | null
  }


  /**
   * Model deliveryroutes
   */

  export type AggregateDeliveryroutes = {
    _count: DeliveryroutesCountAggregateOutputType | null
    _avg: DeliveryroutesAvgAggregateOutputType | null
    _sum: DeliveryroutesSumAggregateOutputType | null
    _min: DeliveryroutesMinAggregateOutputType | null
    _max: DeliveryroutesMaxAggregateOutputType | null
  }

  export type DeliveryroutesAvgAggregateOutputType = {
    RouteID: number | null
    DeliveryID: number | null
  }

  export type DeliveryroutesSumAggregateOutputType = {
    RouteID: number | null
    DeliveryID: number | null
  }

  export type DeliveryroutesMinAggregateOutputType = {
    RouteID: number | null
    DeliveryID: number | null
  }

  export type DeliveryroutesMaxAggregateOutputType = {
    RouteID: number | null
    DeliveryID: number | null
  }

  export type DeliveryroutesCountAggregateOutputType = {
    RouteID: number
    DeliveryID: number
    _all: number
  }


  export type DeliveryroutesAvgAggregateInputType = {
    RouteID?: true
    DeliveryID?: true
  }

  export type DeliveryroutesSumAggregateInputType = {
    RouteID?: true
    DeliveryID?: true
  }

  export type DeliveryroutesMinAggregateInputType = {
    RouteID?: true
    DeliveryID?: true
  }

  export type DeliveryroutesMaxAggregateInputType = {
    RouteID?: true
    DeliveryID?: true
  }

  export type DeliveryroutesCountAggregateInputType = {
    RouteID?: true
    DeliveryID?: true
    _all?: true
  }

  export type DeliveryroutesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deliveryroutes to aggregate.
     */
    where?: deliveryroutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveryroutes to fetch.
     */
    orderBy?: deliveryroutesOrderByWithRelationInput | deliveryroutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deliveryroutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveryroutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveryroutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deliveryroutes
    **/
    _count?: true | DeliveryroutesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryroutesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryroutesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryroutesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryroutesMaxAggregateInputType
  }

  export type GetDeliveryroutesAggregateType<T extends DeliveryroutesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryroutes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryroutes[P]>
      : GetScalarType<T[P], AggregateDeliveryroutes[P]>
  }




  export type deliveryroutesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deliveryroutesWhereInput
    orderBy?: deliveryroutesOrderByWithAggregationInput | deliveryroutesOrderByWithAggregationInput[]
    by: DeliveryroutesScalarFieldEnum[] | DeliveryroutesScalarFieldEnum
    having?: deliveryroutesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryroutesCountAggregateInputType | true
    _avg?: DeliveryroutesAvgAggregateInputType
    _sum?: DeliveryroutesSumAggregateInputType
    _min?: DeliveryroutesMinAggregateInputType
    _max?: DeliveryroutesMaxAggregateInputType
  }

  export type DeliveryroutesGroupByOutputType = {
    RouteID: number
    DeliveryID: number | null
    _count: DeliveryroutesCountAggregateOutputType | null
    _avg: DeliveryroutesAvgAggregateOutputType | null
    _sum: DeliveryroutesSumAggregateOutputType | null
    _min: DeliveryroutesMinAggregateOutputType | null
    _max: DeliveryroutesMaxAggregateOutputType | null
  }

  type GetDeliveryroutesGroupByPayload<T extends deliveryroutesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryroutesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryroutesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryroutesGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryroutesGroupByOutputType[P]>
        }
      >
    >


  export type deliveryroutesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RouteID?: boolean
    DeliveryID?: boolean
  }, ExtArgs["result"]["deliveryroutes"]>



  export type deliveryroutesSelectScalar = {
    RouteID?: boolean
    DeliveryID?: boolean
  }

  export type deliveryroutesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RouteID" | "DeliveryID", ExtArgs["result"]["deliveryroutes"]>

  export type $deliveryroutesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deliveryroutes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      RouteID: number
      DeliveryID: number | null
    }, ExtArgs["result"]["deliveryroutes"]>
    composites: {}
  }

  type deliveryroutesGetPayload<S extends boolean | null | undefined | deliveryroutesDefaultArgs> = $Result.GetResult<Prisma.$deliveryroutesPayload, S>

  type deliveryroutesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deliveryroutesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryroutesCountAggregateInputType | true
    }

  export interface deliveryroutesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deliveryroutes'], meta: { name: 'deliveryroutes' } }
    /**
     * Find zero or one Deliveryroutes that matches the filter.
     * @param {deliveryroutesFindUniqueArgs} args - Arguments to find a Deliveryroutes
     * @example
     * // Get one Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deliveryroutesFindUniqueArgs>(args: SelectSubset<T, deliveryroutesFindUniqueArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliveryroutes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deliveryroutesFindUniqueOrThrowArgs} args - Arguments to find a Deliveryroutes
     * @example
     * // Get one Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deliveryroutesFindUniqueOrThrowArgs>(args: SelectSubset<T, deliveryroutesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveryroutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryroutesFindFirstArgs} args - Arguments to find a Deliveryroutes
     * @example
     * // Get one Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deliveryroutesFindFirstArgs>(args?: SelectSubset<T, deliveryroutesFindFirstArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveryroutes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryroutesFindFirstOrThrowArgs} args - Arguments to find a Deliveryroutes
     * @example
     * // Get one Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deliveryroutesFindFirstOrThrowArgs>(args?: SelectSubset<T, deliveryroutesFindFirstOrThrowArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveryroutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryroutesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.findMany()
     * 
     * // Get first 10 Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.findMany({ take: 10 })
     * 
     * // Only select the `RouteID`
     * const deliveryroutesWithRouteIDOnly = await prisma.deliveryroutes.findMany({ select: { RouteID: true } })
     * 
     */
    findMany<T extends deliveryroutesFindManyArgs>(args?: SelectSubset<T, deliveryroutesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Deliveryroutes.
     * @param {deliveryroutesDeleteArgs} args - Arguments to delete one Deliveryroutes.
     * @example
     * // Delete one Deliveryroutes
     * const Deliveryroutes = await prisma.deliveryroutes.delete({
     *   where: {
     *     // ... filter to delete one Deliveryroutes
     *   }
     * })
     * 
     */
    delete<T extends deliveryroutesDeleteArgs>(args: SelectSubset<T, deliveryroutesDeleteArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliveryroutes.
     * @param {deliveryroutesUpdateArgs} args - Arguments to update one Deliveryroutes.
     * @example
     * // Update one Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deliveryroutesUpdateArgs>(args: SelectSubset<T, deliveryroutesUpdateArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveryroutes.
     * @param {deliveryroutesDeleteManyArgs} args - Arguments to filter Deliveryroutes to delete.
     * @example
     * // Delete a few Deliveryroutes
     * const { count } = await prisma.deliveryroutes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deliveryroutesDeleteManyArgs>(args?: SelectSubset<T, deliveryroutesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveryroutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryroutesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deliveryroutesUpdateManyArgs>(args: SelectSubset<T, deliveryroutesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>


    /**
     * Count the number of Deliveryroutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryroutesCountArgs} args - Arguments to filter Deliveryroutes to count.
     * @example
     * // Count the number of Deliveryroutes
     * const count = await prisma.deliveryroutes.count({
     *   where: {
     *     // ... the filter for the Deliveryroutes we want to count
     *   }
     * })
    **/
    count<T extends deliveryroutesCountArgs>(
      args?: Subset<T, deliveryroutesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryroutesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliveryroutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryroutesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryroutesAggregateArgs>(args: Subset<T, DeliveryroutesAggregateArgs>): Prisma.PrismaPromise<GetDeliveryroutesAggregateType<T>>

    /**
     * Group by Deliveryroutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveryroutesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends deliveryroutesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deliveryroutesGroupByArgs['orderBy'] }
        : { orderBy?: deliveryroutesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, deliveryroutesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryroutesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deliveryroutes model
   */
  readonly fields: deliveryroutesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deliveryroutes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deliveryroutesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the deliveryroutes model
   */
  interface deliveryroutesFieldRefs {
    readonly RouteID: FieldRef<"deliveryroutes", 'Int'>
    readonly DeliveryID: FieldRef<"deliveryroutes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * deliveryroutes findUnique
   */
  export type deliveryroutesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * Filter, which deliveryroutes to fetch.
     */
    where: deliveryroutesWhereUniqueInput
  }

  /**
   * deliveryroutes findUniqueOrThrow
   */
  export type deliveryroutesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * Filter, which deliveryroutes to fetch.
     */
    where: deliveryroutesWhereUniqueInput
  }

  /**
   * deliveryroutes findFirst
   */
  export type deliveryroutesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * Filter, which deliveryroutes to fetch.
     */
    where?: deliveryroutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveryroutes to fetch.
     */
    orderBy?: deliveryroutesOrderByWithRelationInput | deliveryroutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveryroutes.
     */
    cursor?: deliveryroutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveryroutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveryroutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveryroutes.
     */
    distinct?: DeliveryroutesScalarFieldEnum | DeliveryroutesScalarFieldEnum[]
  }

  /**
   * deliveryroutes findFirstOrThrow
   */
  export type deliveryroutesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * Filter, which deliveryroutes to fetch.
     */
    where?: deliveryroutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveryroutes to fetch.
     */
    orderBy?: deliveryroutesOrderByWithRelationInput | deliveryroutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveryroutes.
     */
    cursor?: deliveryroutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveryroutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveryroutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveryroutes.
     */
    distinct?: DeliveryroutesScalarFieldEnum | DeliveryroutesScalarFieldEnum[]
  }

  /**
   * deliveryroutes findMany
   */
  export type deliveryroutesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * Filter, which deliveryroutes to fetch.
     */
    where?: deliveryroutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveryroutes to fetch.
     */
    orderBy?: deliveryroutesOrderByWithRelationInput | deliveryroutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deliveryroutes.
     */
    cursor?: deliveryroutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveryroutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveryroutes.
     */
    skip?: number
    distinct?: DeliveryroutesScalarFieldEnum | DeliveryroutesScalarFieldEnum[]
  }

  /**
   * deliveryroutes update
   */
  export type deliveryroutesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * The data needed to update a deliveryroutes.
     */
    data: XOR<deliveryroutesUpdateInput, deliveryroutesUncheckedUpdateInput>
    /**
     * Choose, which deliveryroutes to update.
     */
    where: deliveryroutesWhereUniqueInput
  }

  /**
   * deliveryroutes updateMany
   */
  export type deliveryroutesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deliveryroutes.
     */
    data: XOR<deliveryroutesUpdateManyMutationInput, deliveryroutesUncheckedUpdateManyInput>
    /**
     * Filter which deliveryroutes to update
     */
    where?: deliveryroutesWhereInput
    /**
     * Limit how many deliveryroutes to update.
     */
    limit?: number
  }

  /**
   * deliveryroutes delete
   */
  export type deliveryroutesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * Filter which deliveryroutes to delete.
     */
    where: deliveryroutesWhereUniqueInput
  }

  /**
   * deliveryroutes deleteMany
   */
  export type deliveryroutesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deliveryroutes to delete
     */
    where?: deliveryroutesWhereInput
    /**
     * Limit how many deliveryroutes to delete.
     */
    limit?: number
  }

  /**
   * deliveryroutes without action
   */
  export type deliveryroutesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
  }


  /**
   * Model menuitems
   */

  export type AggregateMenuitems = {
    _count: MenuitemsCountAggregateOutputType | null
    _avg: MenuitemsAvgAggregateOutputType | null
    _sum: MenuitemsSumAggregateOutputType | null
    _min: MenuitemsMinAggregateOutputType | null
    _max: MenuitemsMaxAggregateOutputType | null
  }

  export type MenuitemsAvgAggregateOutputType = {
    MenuItemID: number | null
    RestaurantID: number | null
    Price: Decimal | null
  }

  export type MenuitemsSumAggregateOutputType = {
    MenuItemID: number | null
    RestaurantID: number | null
    Price: Decimal | null
  }

  export type MenuitemsMinAggregateOutputType = {
    MenuItemID: number | null
    RestaurantID: number | null
    Name: string | null
    Description: string | null
    Price: Decimal | null
    IsAvailable: boolean | null
  }

  export type MenuitemsMaxAggregateOutputType = {
    MenuItemID: number | null
    RestaurantID: number | null
    Name: string | null
    Description: string | null
    Price: Decimal | null
    IsAvailable: boolean | null
  }

  export type MenuitemsCountAggregateOutputType = {
    MenuItemID: number
    RestaurantID: number
    Name: number
    Description: number
    Price: number
    IsAvailable: number
    _all: number
  }


  export type MenuitemsAvgAggregateInputType = {
    MenuItemID?: true
    RestaurantID?: true
    Price?: true
  }

  export type MenuitemsSumAggregateInputType = {
    MenuItemID?: true
    RestaurantID?: true
    Price?: true
  }

  export type MenuitemsMinAggregateInputType = {
    MenuItemID?: true
    RestaurantID?: true
    Name?: true
    Description?: true
    Price?: true
    IsAvailable?: true
  }

  export type MenuitemsMaxAggregateInputType = {
    MenuItemID?: true
    RestaurantID?: true
    Name?: true
    Description?: true
    Price?: true
    IsAvailable?: true
  }

  export type MenuitemsCountAggregateInputType = {
    MenuItemID?: true
    RestaurantID?: true
    Name?: true
    Description?: true
    Price?: true
    IsAvailable?: true
    _all?: true
  }

  export type MenuitemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menuitems to aggregate.
     */
    where?: menuitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemsOrderByWithRelationInput | menuitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menuitems
    **/
    _count?: true | MenuitemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuitemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuitemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuitemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuitemsMaxAggregateInputType
  }

  export type GetMenuitemsAggregateType<T extends MenuitemsAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuitems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuitems[P]>
      : GetScalarType<T[P], AggregateMenuitems[P]>
  }




  export type menuitemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuitemsWhereInput
    orderBy?: menuitemsOrderByWithAggregationInput | menuitemsOrderByWithAggregationInput[]
    by: MenuitemsScalarFieldEnum[] | MenuitemsScalarFieldEnum
    having?: menuitemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuitemsCountAggregateInputType | true
    _avg?: MenuitemsAvgAggregateInputType
    _sum?: MenuitemsSumAggregateInputType
    _min?: MenuitemsMinAggregateInputType
    _max?: MenuitemsMaxAggregateInputType
  }

  export type MenuitemsGroupByOutputType = {
    MenuItemID: number
    RestaurantID: number | null
    Name: string
    Description: string | null
    Price: Decimal
    IsAvailable: boolean | null
    _count: MenuitemsCountAggregateOutputType | null
    _avg: MenuitemsAvgAggregateOutputType | null
    _sum: MenuitemsSumAggregateOutputType | null
    _min: MenuitemsMinAggregateOutputType | null
    _max: MenuitemsMaxAggregateOutputType | null
  }

  type GetMenuitemsGroupByPayload<T extends menuitemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuitemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuitemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuitemsGroupByOutputType[P]>
            : GetScalarType<T[P], MenuitemsGroupByOutputType[P]>
        }
      >
    >


  export type menuitemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MenuItemID?: boolean
    RestaurantID?: boolean
    Name?: boolean
    Description?: boolean
    Price?: boolean
    IsAvailable?: boolean
  }, ExtArgs["result"]["menuitems"]>



  export type menuitemsSelectScalar = {
    MenuItemID?: boolean
    RestaurantID?: boolean
    Name?: boolean
    Description?: boolean
    Price?: boolean
    IsAvailable?: boolean
  }

  export type menuitemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MenuItemID" | "RestaurantID" | "Name" | "Description" | "Price" | "IsAvailable", ExtArgs["result"]["menuitems"]>

  export type $menuitemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menuitems"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MenuItemID: number
      RestaurantID: number | null
      Name: string
      Description: string | null
      Price: Prisma.Decimal
      IsAvailable: boolean | null
    }, ExtArgs["result"]["menuitems"]>
    composites: {}
  }

  type menuitemsGetPayload<S extends boolean | null | undefined | menuitemsDefaultArgs> = $Result.GetResult<Prisma.$menuitemsPayload, S>

  type menuitemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuitemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuitemsCountAggregateInputType | true
    }

  export interface menuitemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menuitems'], meta: { name: 'menuitems' } }
    /**
     * Find zero or one Menuitems that matches the filter.
     * @param {menuitemsFindUniqueArgs} args - Arguments to find a Menuitems
     * @example
     * // Get one Menuitems
     * const menuitems = await prisma.menuitems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuitemsFindUniqueArgs>(args: SelectSubset<T, menuitemsFindUniqueArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menuitems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuitemsFindUniqueOrThrowArgs} args - Arguments to find a Menuitems
     * @example
     * // Get one Menuitems
     * const menuitems = await prisma.menuitems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuitemsFindUniqueOrThrowArgs>(args: SelectSubset<T, menuitemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menuitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemsFindFirstArgs} args - Arguments to find a Menuitems
     * @example
     * // Get one Menuitems
     * const menuitems = await prisma.menuitems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuitemsFindFirstArgs>(args?: SelectSubset<T, menuitemsFindFirstArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menuitems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemsFindFirstOrThrowArgs} args - Arguments to find a Menuitems
     * @example
     * // Get one Menuitems
     * const menuitems = await prisma.menuitems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuitemsFindFirstOrThrowArgs>(args?: SelectSubset<T, menuitemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menuitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menuitems
     * const menuitems = await prisma.menuitems.findMany()
     * 
     * // Get first 10 Menuitems
     * const menuitems = await prisma.menuitems.findMany({ take: 10 })
     * 
     * // Only select the `MenuItemID`
     * const menuitemsWithMenuItemIDOnly = await prisma.menuitems.findMany({ select: { MenuItemID: true } })
     * 
     */
    findMany<T extends menuitemsFindManyArgs>(args?: SelectSubset<T, menuitemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menuitems.
     * @param {menuitemsCreateArgs} args - Arguments to create a Menuitems.
     * @example
     * // Create one Menuitems
     * const Menuitems = await prisma.menuitems.create({
     *   data: {
     *     // ... data to create a Menuitems
     *   }
     * })
     * 
     */
    create<T extends menuitemsCreateArgs>(args: SelectSubset<T, menuitemsCreateArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menuitems.
     * @param {menuitemsCreateManyArgs} args - Arguments to create many Menuitems.
     * @example
     * // Create many Menuitems
     * const menuitems = await prisma.menuitems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuitemsCreateManyArgs>(args?: SelectSubset<T, menuitemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menuitems.
     * @param {menuitemsDeleteArgs} args - Arguments to delete one Menuitems.
     * @example
     * // Delete one Menuitems
     * const Menuitems = await prisma.menuitems.delete({
     *   where: {
     *     // ... filter to delete one Menuitems
     *   }
     * })
     * 
     */
    delete<T extends menuitemsDeleteArgs>(args: SelectSubset<T, menuitemsDeleteArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menuitems.
     * @param {menuitemsUpdateArgs} args - Arguments to update one Menuitems.
     * @example
     * // Update one Menuitems
     * const menuitems = await prisma.menuitems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuitemsUpdateArgs>(args: SelectSubset<T, menuitemsUpdateArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menuitems.
     * @param {menuitemsDeleteManyArgs} args - Arguments to filter Menuitems to delete.
     * @example
     * // Delete a few Menuitems
     * const { count } = await prisma.menuitems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuitemsDeleteManyArgs>(args?: SelectSubset<T, menuitemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menuitems
     * const menuitems = await prisma.menuitems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuitemsUpdateManyArgs>(args: SelectSubset<T, menuitemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menuitems.
     * @param {menuitemsUpsertArgs} args - Arguments to update or create a Menuitems.
     * @example
     * // Update or create a Menuitems
     * const menuitems = await prisma.menuitems.upsert({
     *   create: {
     *     // ... data to create a Menuitems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menuitems we want to update
     *   }
     * })
     */
    upsert<T extends menuitemsUpsertArgs>(args: SelectSubset<T, menuitemsUpsertArgs<ExtArgs>>): Prisma__menuitemsClient<$Result.GetResult<Prisma.$menuitemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemsCountArgs} args - Arguments to filter Menuitems to count.
     * @example
     * // Count the number of Menuitems
     * const count = await prisma.menuitems.count({
     *   where: {
     *     // ... the filter for the Menuitems we want to count
     *   }
     * })
    **/
    count<T extends menuitemsCountArgs>(
      args?: Subset<T, menuitemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuitemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuitemsAggregateArgs>(args: Subset<T, MenuitemsAggregateArgs>): Prisma.PrismaPromise<GetMenuitemsAggregateType<T>>

    /**
     * Group by Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menuitemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuitemsGroupByArgs['orderBy'] }
        : { orderBy?: menuitemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menuitemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuitemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menuitems model
   */
  readonly fields: menuitemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menuitems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuitemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menuitems model
   */
  interface menuitemsFieldRefs {
    readonly MenuItemID: FieldRef<"menuitems", 'Int'>
    readonly RestaurantID: FieldRef<"menuitems", 'Int'>
    readonly Name: FieldRef<"menuitems", 'String'>
    readonly Description: FieldRef<"menuitems", 'String'>
    readonly Price: FieldRef<"menuitems", 'Decimal'>
    readonly IsAvailable: FieldRef<"menuitems", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * menuitems findUnique
   */
  export type menuitemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * Filter, which menuitems to fetch.
     */
    where: menuitemsWhereUniqueInput
  }

  /**
   * menuitems findUniqueOrThrow
   */
  export type menuitemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * Filter, which menuitems to fetch.
     */
    where: menuitemsWhereUniqueInput
  }

  /**
   * menuitems findFirst
   */
  export type menuitemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * Filter, which menuitems to fetch.
     */
    where?: menuitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemsOrderByWithRelationInput | menuitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menuitems.
     */
    cursor?: menuitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menuitems.
     */
    distinct?: MenuitemsScalarFieldEnum | MenuitemsScalarFieldEnum[]
  }

  /**
   * menuitems findFirstOrThrow
   */
  export type menuitemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * Filter, which menuitems to fetch.
     */
    where?: menuitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemsOrderByWithRelationInput | menuitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menuitems.
     */
    cursor?: menuitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menuitems.
     */
    distinct?: MenuitemsScalarFieldEnum | MenuitemsScalarFieldEnum[]
  }

  /**
   * menuitems findMany
   */
  export type menuitemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * Filter, which menuitems to fetch.
     */
    where?: menuitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemsOrderByWithRelationInput | menuitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menuitems.
     */
    cursor?: menuitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    distinct?: MenuitemsScalarFieldEnum | MenuitemsScalarFieldEnum[]
  }

  /**
   * menuitems create
   */
  export type menuitemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * The data needed to create a menuitems.
     */
    data: XOR<menuitemsCreateInput, menuitemsUncheckedCreateInput>
  }

  /**
   * menuitems createMany
   */
  export type menuitemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menuitems.
     */
    data: menuitemsCreateManyInput | menuitemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menuitems update
   */
  export type menuitemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * The data needed to update a menuitems.
     */
    data: XOR<menuitemsUpdateInput, menuitemsUncheckedUpdateInput>
    /**
     * Choose, which menuitems to update.
     */
    where: menuitemsWhereUniqueInput
  }

  /**
   * menuitems updateMany
   */
  export type menuitemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menuitems.
     */
    data: XOR<menuitemsUpdateManyMutationInput, menuitemsUncheckedUpdateManyInput>
    /**
     * Filter which menuitems to update
     */
    where?: menuitemsWhereInput
    /**
     * Limit how many menuitems to update.
     */
    limit?: number
  }

  /**
   * menuitems upsert
   */
  export type menuitemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * The filter to search for the menuitems to update in case it exists.
     */
    where: menuitemsWhereUniqueInput
    /**
     * In case the menuitems found by the `where` argument doesn't exist, create a new menuitems with this data.
     */
    create: XOR<menuitemsCreateInput, menuitemsUncheckedCreateInput>
    /**
     * In case the menuitems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuitemsUpdateInput, menuitemsUncheckedUpdateInput>
  }

  /**
   * menuitems delete
   */
  export type menuitemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
    /**
     * Filter which menuitems to delete.
     */
    where: menuitemsWhereUniqueInput
  }

  /**
   * menuitems deleteMany
   */
  export type menuitemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menuitems to delete
     */
    where?: menuitemsWhereInput
    /**
     * Limit how many menuitems to delete.
     */
    limit?: number
  }

  /**
   * menuitems without action
   */
  export type menuitemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitems
     */
    select?: menuitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitems
     */
    omit?: menuitemsOmit<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    NotificationID: number | null
    UserID: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    NotificationID: number | null
    UserID: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    NotificationID: number | null
    UserID: number | null
    Message: string | null
    NotificationDate: Date | null
    IsRead: boolean | null
  }

  export type NotificationsMaxAggregateOutputType = {
    NotificationID: number | null
    UserID: number | null
    Message: string | null
    NotificationDate: Date | null
    IsRead: boolean | null
  }

  export type NotificationsCountAggregateOutputType = {
    NotificationID: number
    UserID: number
    Message: number
    NotificationDate: number
    IsRead: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    NotificationID?: true
    UserID?: true
  }

  export type NotificationsSumAggregateInputType = {
    NotificationID?: true
    UserID?: true
  }

  export type NotificationsMinAggregateInputType = {
    NotificationID?: true
    UserID?: true
    Message?: true
    NotificationDate?: true
    IsRead?: true
  }

  export type NotificationsMaxAggregateInputType = {
    NotificationID?: true
    UserID?: true
    Message?: true
    NotificationDate?: true
    IsRead?: true
  }

  export type NotificationsCountAggregateInputType = {
    NotificationID?: true
    UserID?: true
    Message?: true
    NotificationDate?: true
    IsRead?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    NotificationID: number
    UserID: number | null
    Message: string
    NotificationDate: Date | null
    IsRead: boolean | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NotificationID?: boolean
    UserID?: boolean
    Message?: boolean
    NotificationDate?: boolean
    IsRead?: boolean
  }, ExtArgs["result"]["notifications"]>



  export type notificationsSelectScalar = {
    NotificationID?: boolean
    UserID?: boolean
    Message?: boolean
    NotificationDate?: boolean
    IsRead?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"NotificationID" | "UserID" | "Message" | "NotificationDate" | "IsRead", ExtArgs["result"]["notifications"]>

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      NotificationID: number
      UserID: number | null
      Message: string
      NotificationDate: Date | null
      IsRead: boolean | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `NotificationID`
     * const notificationsWithNotificationIDOnly = await prisma.notifications.findMany({ select: { NotificationID: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly NotificationID: FieldRef<"notifications", 'Int'>
    readonly UserID: FieldRef<"notifications", 'Int'>
    readonly Message: FieldRef<"notifications", 'String'>
    readonly NotificationDate: FieldRef<"notifications", 'DateTime'>
    readonly IsRead: FieldRef<"notifications", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
  }


  /**
   * Model orderdetails
   */

  export type AggregateOrderdetails = {
    _count: OrderdetailsCountAggregateOutputType | null
    _avg: OrderdetailsAvgAggregateOutputType | null
    _sum: OrderdetailsSumAggregateOutputType | null
    _min: OrderdetailsMinAggregateOutputType | null
    _max: OrderdetailsMaxAggregateOutputType | null
  }

  export type OrderdetailsAvgAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    MenuItemID: number | null
    Quantity: number | null
    ItemPrice: Decimal | null
  }

  export type OrderdetailsSumAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    MenuItemID: number | null
    Quantity: number | null
    ItemPrice: Decimal | null
  }

  export type OrderdetailsMinAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    MenuItemID: number | null
    Quantity: number | null
    ItemPrice: Decimal | null
  }

  export type OrderdetailsMaxAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    MenuItemID: number | null
    Quantity: number | null
    ItemPrice: Decimal | null
  }

  export type OrderdetailsCountAggregateOutputType = {
    OrderDetailID: number
    OrderID: number
    MenuItemID: number
    Quantity: number
    ItemPrice: number
    _all: number
  }


  export type OrderdetailsAvgAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    MenuItemID?: true
    Quantity?: true
    ItemPrice?: true
  }

  export type OrderdetailsSumAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    MenuItemID?: true
    Quantity?: true
    ItemPrice?: true
  }

  export type OrderdetailsMinAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    MenuItemID?: true
    Quantity?: true
    ItemPrice?: true
  }

  export type OrderdetailsMaxAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    MenuItemID?: true
    Quantity?: true
    ItemPrice?: true
  }

  export type OrderdetailsCountAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    MenuItemID?: true
    Quantity?: true
    ItemPrice?: true
    _all?: true
  }

  export type OrderdetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderdetails to aggregate.
     */
    where?: orderdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailsOrderByWithRelationInput | orderdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderdetails
    **/
    _count?: true | OrderdetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderdetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderdetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderdetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderdetailsMaxAggregateInputType
  }

  export type GetOrderdetailsAggregateType<T extends OrderdetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderdetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderdetails[P]>
      : GetScalarType<T[P], AggregateOrderdetails[P]>
  }




  export type orderdetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderdetailsWhereInput
    orderBy?: orderdetailsOrderByWithAggregationInput | orderdetailsOrderByWithAggregationInput[]
    by: OrderdetailsScalarFieldEnum[] | OrderdetailsScalarFieldEnum
    having?: orderdetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderdetailsCountAggregateInputType | true
    _avg?: OrderdetailsAvgAggregateInputType
    _sum?: OrderdetailsSumAggregateInputType
    _min?: OrderdetailsMinAggregateInputType
    _max?: OrderdetailsMaxAggregateInputType
  }

  export type OrderdetailsGroupByOutputType = {
    OrderDetailID: number
    OrderID: number | null
    MenuItemID: number | null
    Quantity: number
    ItemPrice: Decimal
    _count: OrderdetailsCountAggregateOutputType | null
    _avg: OrderdetailsAvgAggregateOutputType | null
    _sum: OrderdetailsSumAggregateOutputType | null
    _min: OrderdetailsMinAggregateOutputType | null
    _max: OrderdetailsMaxAggregateOutputType | null
  }

  type GetOrderdetailsGroupByPayload<T extends orderdetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderdetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderdetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderdetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderdetailsGroupByOutputType[P]>
        }
      >
    >


  export type orderdetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderDetailID?: boolean
    OrderID?: boolean
    MenuItemID?: boolean
    Quantity?: boolean
    ItemPrice?: boolean
  }, ExtArgs["result"]["orderdetails"]>



  export type orderdetailsSelectScalar = {
    OrderDetailID?: boolean
    OrderID?: boolean
    MenuItemID?: boolean
    Quantity?: boolean
    ItemPrice?: boolean
  }

  export type orderdetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderDetailID" | "OrderID" | "MenuItemID" | "Quantity" | "ItemPrice", ExtArgs["result"]["orderdetails"]>

  export type $orderdetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderdetails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      OrderDetailID: number
      OrderID: number | null
      MenuItemID: number | null
      Quantity: number
      ItemPrice: Prisma.Decimal
    }, ExtArgs["result"]["orderdetails"]>
    composites: {}
  }

  type orderdetailsGetPayload<S extends boolean | null | undefined | orderdetailsDefaultArgs> = $Result.GetResult<Prisma.$orderdetailsPayload, S>

  type orderdetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderdetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderdetailsCountAggregateInputType | true
    }

  export interface orderdetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderdetails'], meta: { name: 'orderdetails' } }
    /**
     * Find zero or one Orderdetails that matches the filter.
     * @param {orderdetailsFindUniqueArgs} args - Arguments to find a Orderdetails
     * @example
     * // Get one Orderdetails
     * const orderdetails = await prisma.orderdetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderdetailsFindUniqueArgs>(args: SelectSubset<T, orderdetailsFindUniqueArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderdetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderdetailsFindUniqueOrThrowArgs} args - Arguments to find a Orderdetails
     * @example
     * // Get one Orderdetails
     * const orderdetails = await prisma.orderdetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderdetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, orderdetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailsFindFirstArgs} args - Arguments to find a Orderdetails
     * @example
     * // Get one Orderdetails
     * const orderdetails = await prisma.orderdetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderdetailsFindFirstArgs>(args?: SelectSubset<T, orderdetailsFindFirstArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailsFindFirstOrThrowArgs} args - Arguments to find a Orderdetails
     * @example
     * // Get one Orderdetails
     * const orderdetails = await prisma.orderdetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderdetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, orderdetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderdetails
     * const orderdetails = await prisma.orderdetails.findMany()
     * 
     * // Get first 10 Orderdetails
     * const orderdetails = await prisma.orderdetails.findMany({ take: 10 })
     * 
     * // Only select the `OrderDetailID`
     * const orderdetailsWithOrderDetailIDOnly = await prisma.orderdetails.findMany({ select: { OrderDetailID: true } })
     * 
     */
    findMany<T extends orderdetailsFindManyArgs>(args?: SelectSubset<T, orderdetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderdetails.
     * @param {orderdetailsCreateArgs} args - Arguments to create a Orderdetails.
     * @example
     * // Create one Orderdetails
     * const Orderdetails = await prisma.orderdetails.create({
     *   data: {
     *     // ... data to create a Orderdetails
     *   }
     * })
     * 
     */
    create<T extends orderdetailsCreateArgs>(args: SelectSubset<T, orderdetailsCreateArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderdetails.
     * @param {orderdetailsCreateManyArgs} args - Arguments to create many Orderdetails.
     * @example
     * // Create many Orderdetails
     * const orderdetails = await prisma.orderdetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderdetailsCreateManyArgs>(args?: SelectSubset<T, orderdetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orderdetails.
     * @param {orderdetailsDeleteArgs} args - Arguments to delete one Orderdetails.
     * @example
     * // Delete one Orderdetails
     * const Orderdetails = await prisma.orderdetails.delete({
     *   where: {
     *     // ... filter to delete one Orderdetails
     *   }
     * })
     * 
     */
    delete<T extends orderdetailsDeleteArgs>(args: SelectSubset<T, orderdetailsDeleteArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderdetails.
     * @param {orderdetailsUpdateArgs} args - Arguments to update one Orderdetails.
     * @example
     * // Update one Orderdetails
     * const orderdetails = await prisma.orderdetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderdetailsUpdateArgs>(args: SelectSubset<T, orderdetailsUpdateArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderdetails.
     * @param {orderdetailsDeleteManyArgs} args - Arguments to filter Orderdetails to delete.
     * @example
     * // Delete a few Orderdetails
     * const { count } = await prisma.orderdetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderdetailsDeleteManyArgs>(args?: SelectSubset<T, orderdetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderdetails
     * const orderdetails = await prisma.orderdetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderdetailsUpdateManyArgs>(args: SelectSubset<T, orderdetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orderdetails.
     * @param {orderdetailsUpsertArgs} args - Arguments to update or create a Orderdetails.
     * @example
     * // Update or create a Orderdetails
     * const orderdetails = await prisma.orderdetails.upsert({
     *   create: {
     *     // ... data to create a Orderdetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderdetails we want to update
     *   }
     * })
     */
    upsert<T extends orderdetailsUpsertArgs>(args: SelectSubset<T, orderdetailsUpsertArgs<ExtArgs>>): Prisma__orderdetailsClient<$Result.GetResult<Prisma.$orderdetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailsCountArgs} args - Arguments to filter Orderdetails to count.
     * @example
     * // Count the number of Orderdetails
     * const count = await prisma.orderdetails.count({
     *   where: {
     *     // ... the filter for the Orderdetails we want to count
     *   }
     * })
    **/
    count<T extends orderdetailsCountArgs>(
      args?: Subset<T, orderdetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderdetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderdetailsAggregateArgs>(args: Subset<T, OrderdetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderdetailsAggregateType<T>>

    /**
     * Group by Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderdetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderdetailsGroupByArgs['orderBy'] }
        : { orderBy?: orderdetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderdetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderdetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderdetails model
   */
  readonly fields: orderdetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderdetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderdetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderdetails model
   */
  interface orderdetailsFieldRefs {
    readonly OrderDetailID: FieldRef<"orderdetails", 'Int'>
    readonly OrderID: FieldRef<"orderdetails", 'Int'>
    readonly MenuItemID: FieldRef<"orderdetails", 'Int'>
    readonly Quantity: FieldRef<"orderdetails", 'Int'>
    readonly ItemPrice: FieldRef<"orderdetails", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * orderdetails findUnique
   */
  export type orderdetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * Filter, which orderdetails to fetch.
     */
    where: orderdetailsWhereUniqueInput
  }

  /**
   * orderdetails findUniqueOrThrow
   */
  export type orderdetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * Filter, which orderdetails to fetch.
     */
    where: orderdetailsWhereUniqueInput
  }

  /**
   * orderdetails findFirst
   */
  export type orderdetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * Filter, which orderdetails to fetch.
     */
    where?: orderdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailsOrderByWithRelationInput | orderdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderdetails.
     */
    cursor?: orderdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderdetails.
     */
    distinct?: OrderdetailsScalarFieldEnum | OrderdetailsScalarFieldEnum[]
  }

  /**
   * orderdetails findFirstOrThrow
   */
  export type orderdetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * Filter, which orderdetails to fetch.
     */
    where?: orderdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailsOrderByWithRelationInput | orderdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderdetails.
     */
    cursor?: orderdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderdetails.
     */
    distinct?: OrderdetailsScalarFieldEnum | OrderdetailsScalarFieldEnum[]
  }

  /**
   * orderdetails findMany
   */
  export type orderdetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * Filter, which orderdetails to fetch.
     */
    where?: orderdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailsOrderByWithRelationInput | orderdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderdetails.
     */
    cursor?: orderdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    distinct?: OrderdetailsScalarFieldEnum | OrderdetailsScalarFieldEnum[]
  }

  /**
   * orderdetails create
   */
  export type orderdetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * The data needed to create a orderdetails.
     */
    data: XOR<orderdetailsCreateInput, orderdetailsUncheckedCreateInput>
  }

  /**
   * orderdetails createMany
   */
  export type orderdetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderdetails.
     */
    data: orderdetailsCreateManyInput | orderdetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderdetails update
   */
  export type orderdetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * The data needed to update a orderdetails.
     */
    data: XOR<orderdetailsUpdateInput, orderdetailsUncheckedUpdateInput>
    /**
     * Choose, which orderdetails to update.
     */
    where: orderdetailsWhereUniqueInput
  }

  /**
   * orderdetails updateMany
   */
  export type orderdetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderdetails.
     */
    data: XOR<orderdetailsUpdateManyMutationInput, orderdetailsUncheckedUpdateManyInput>
    /**
     * Filter which orderdetails to update
     */
    where?: orderdetailsWhereInput
    /**
     * Limit how many orderdetails to update.
     */
    limit?: number
  }

  /**
   * orderdetails upsert
   */
  export type orderdetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * The filter to search for the orderdetails to update in case it exists.
     */
    where: orderdetailsWhereUniqueInput
    /**
     * In case the orderdetails found by the `where` argument doesn't exist, create a new orderdetails with this data.
     */
    create: XOR<orderdetailsCreateInput, orderdetailsUncheckedCreateInput>
    /**
     * In case the orderdetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderdetailsUpdateInput, orderdetailsUncheckedUpdateInput>
  }

  /**
   * orderdetails delete
   */
  export type orderdetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
    /**
     * Filter which orderdetails to delete.
     */
    where: orderdetailsWhereUniqueInput
  }

  /**
   * orderdetails deleteMany
   */
  export type orderdetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderdetails to delete
     */
    where?: orderdetailsWhereInput
    /**
     * Limit how many orderdetails to delete.
     */
    limit?: number
  }

  /**
   * orderdetails without action
   */
  export type orderdetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetails
     */
    select?: orderdetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetails
     */
    omit?: orderdetailsOmit<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    OrderID: number | null
    CustomerID: number | null
    RestaurantID: number | null
    OrderTotal: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    OrderID: number | null
    CustomerID: number | null
    RestaurantID: number | null
    OrderTotal: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    OrderID: number | null
    CustomerID: number | null
    RestaurantID: number | null
    OrderStatus: $Enums.orders_OrderStatus | null
    OrderTotal: Decimal | null
    OrderDate: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    OrderID: number | null
    CustomerID: number | null
    RestaurantID: number | null
    OrderStatus: $Enums.orders_OrderStatus | null
    OrderTotal: Decimal | null
    OrderDate: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    OrderID: number
    CustomerID: number
    RestaurantID: number
    OrderStatus: number
    OrderTotal: number
    OrderDate: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    RestaurantID?: true
    OrderTotal?: true
  }

  export type OrdersSumAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    RestaurantID?: true
    OrderTotal?: true
  }

  export type OrdersMinAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    RestaurantID?: true
    OrderStatus?: true
    OrderTotal?: true
    OrderDate?: true
  }

  export type OrdersMaxAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    RestaurantID?: true
    OrderStatus?: true
    OrderTotal?: true
    OrderDate?: true
  }

  export type OrdersCountAggregateInputType = {
    OrderID?: true
    CustomerID?: true
    RestaurantID?: true
    OrderStatus?: true
    OrderTotal?: true
    OrderDate?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    OrderID: number
    CustomerID: number | null
    RestaurantID: number | null
    OrderStatus: $Enums.orders_OrderStatus
    OrderTotal: Decimal
    OrderDate: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    CustomerID?: boolean
    RestaurantID?: boolean
    OrderStatus?: boolean
    OrderTotal?: boolean
    OrderDate?: boolean
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    OrderID?: boolean
    CustomerID?: boolean
    RestaurantID?: boolean
    OrderStatus?: boolean
    OrderTotal?: boolean
    OrderDate?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderID" | "CustomerID" | "RestaurantID" | "OrderStatus" | "OrderTotal" | "OrderDate", ExtArgs["result"]["orders"]>

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      OrderID: number
      CustomerID: number | null
      RestaurantID: number | null
      OrderStatus: $Enums.orders_OrderStatus
      OrderTotal: Prisma.Decimal
      OrderDate: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `OrderID`
     * const ordersWithOrderIDOnly = await prisma.orders.findMany({ select: { OrderID: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly OrderID: FieldRef<"orders", 'Int'>
    readonly CustomerID: FieldRef<"orders", 'Int'>
    readonly RestaurantID: FieldRef<"orders", 'Int'>
    readonly OrderStatus: FieldRef<"orders", 'orders_OrderStatus'>
    readonly OrderTotal: FieldRef<"orders", 'Decimal'>
    readonly OrderDate: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    PaymentID: number | null
    OrderID: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    PaymentID: number | null
    OrderID: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    PaymentID: number | null
    OrderID: number | null
    PaymentMethod: $Enums.payments_PaymentMethod | null
    PaymentStatus: $Enums.payments_PaymentStatus | null
    TransactionID: string | null
    PaymentDate: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    PaymentID: number | null
    OrderID: number | null
    PaymentMethod: $Enums.payments_PaymentMethod | null
    PaymentStatus: $Enums.payments_PaymentStatus | null
    TransactionID: string | null
    PaymentDate: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    PaymentID: number
    OrderID: number
    PaymentMethod: number
    PaymentStatus: number
    TransactionID: number
    PaymentDate: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    PaymentID?: true
    OrderID?: true
  }

  export type PaymentsSumAggregateInputType = {
    PaymentID?: true
    OrderID?: true
  }

  export type PaymentsMinAggregateInputType = {
    PaymentID?: true
    OrderID?: true
    PaymentMethod?: true
    PaymentStatus?: true
    TransactionID?: true
    PaymentDate?: true
  }

  export type PaymentsMaxAggregateInputType = {
    PaymentID?: true
    OrderID?: true
    PaymentMethod?: true
    PaymentStatus?: true
    TransactionID?: true
    PaymentDate?: true
  }

  export type PaymentsCountAggregateInputType = {
    PaymentID?: true
    OrderID?: true
    PaymentMethod?: true
    PaymentStatus?: true
    TransactionID?: true
    PaymentDate?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    PaymentID: number
    OrderID: number | null
    PaymentMethod: $Enums.payments_PaymentMethod
    PaymentStatus: $Enums.payments_PaymentStatus
    TransactionID: string
    PaymentDate: Date | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PaymentID?: boolean
    OrderID?: boolean
    PaymentMethod?: boolean
    PaymentStatus?: boolean
    TransactionID?: boolean
    PaymentDate?: boolean
  }, ExtArgs["result"]["payments"]>



  export type paymentsSelectScalar = {
    PaymentID?: boolean
    OrderID?: boolean
    PaymentMethod?: boolean
    PaymentStatus?: boolean
    TransactionID?: boolean
    PaymentDate?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PaymentID" | "OrderID" | "PaymentMethod" | "PaymentStatus" | "TransactionID" | "PaymentDate", ExtArgs["result"]["payments"]>

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      PaymentID: number
      OrderID: number | null
      PaymentMethod: $Enums.payments_PaymentMethod
      PaymentStatus: $Enums.payments_PaymentStatus
      TransactionID: string
      PaymentDate: Date | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `PaymentID`
     * const paymentsWithPaymentIDOnly = await prisma.payments.findMany({ select: { PaymentID: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly PaymentID: FieldRef<"payments", 'Int'>
    readonly OrderID: FieldRef<"payments", 'Int'>
    readonly PaymentMethod: FieldRef<"payments", 'payments_PaymentMethod'>
    readonly PaymentStatus: FieldRef<"payments", 'payments_PaymentStatus'>
    readonly TransactionID: FieldRef<"payments", 'String'>
    readonly PaymentDate: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
  }


  /**
   * Model restaurants
   */

  export type AggregateRestaurants = {
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  export type RestaurantsAvgAggregateOutputType = {
    RestaurantID: number | null
    OwnerID: number | null
  }

  export type RestaurantsSumAggregateOutputType = {
    RestaurantID: number | null
    OwnerID: number | null
  }

  export type RestaurantsMinAggregateOutputType = {
    RestaurantID: number | null
    OwnerID: number | null
    RestaurantName: string | null
    Address: string | null
    Phone: string | null
    Email: string | null
    Availability: string | null
  }

  export type RestaurantsMaxAggregateOutputType = {
    RestaurantID: number | null
    OwnerID: number | null
    RestaurantName: string | null
    Address: string | null
    Phone: string | null
    Email: string | null
    Availability: string | null
  }

  export type RestaurantsCountAggregateOutputType = {
    RestaurantID: number
    OwnerID: number
    RestaurantName: number
    Address: number
    Phone: number
    Email: number
    Availability: number
    _all: number
  }


  export type RestaurantsAvgAggregateInputType = {
    RestaurantID?: true
    OwnerID?: true
  }

  export type RestaurantsSumAggregateInputType = {
    RestaurantID?: true
    OwnerID?: true
  }

  export type RestaurantsMinAggregateInputType = {
    RestaurantID?: true
    OwnerID?: true
    RestaurantName?: true
    Address?: true
    Phone?: true
    Email?: true
    Availability?: true
  }

  export type RestaurantsMaxAggregateInputType = {
    RestaurantID?: true
    OwnerID?: true
    RestaurantName?: true
    Address?: true
    Phone?: true
    Email?: true
    Availability?: true
  }

  export type RestaurantsCountAggregateInputType = {
    RestaurantID?: true
    OwnerID?: true
    RestaurantName?: true
    Address?: true
    Phone?: true
    Email?: true
    Availability?: true
    _all?: true
  }

  export type RestaurantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to aggregate.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurants
    **/
    _count?: true | RestaurantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantsMaxAggregateInputType
  }

  export type GetRestaurantsAggregateType<T extends RestaurantsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurants[P]>
      : GetScalarType<T[P], AggregateRestaurants[P]>
  }




  export type restaurantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantsWhereInput
    orderBy?: restaurantsOrderByWithAggregationInput | restaurantsOrderByWithAggregationInput[]
    by: RestaurantsScalarFieldEnum[] | RestaurantsScalarFieldEnum
    having?: restaurantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantsCountAggregateInputType | true
    _avg?: RestaurantsAvgAggregateInputType
    _sum?: RestaurantsSumAggregateInputType
    _min?: RestaurantsMinAggregateInputType
    _max?: RestaurantsMaxAggregateInputType
  }

  export type RestaurantsGroupByOutputType = {
    RestaurantID: number
    OwnerID: number | null
    RestaurantName: string
    Address: string
    Phone: string | null
    Email: string | null
    Availability: string
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  type GetRestaurantsGroupByPayload<T extends restaurantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
        }
      >
    >


  export type restaurantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RestaurantID?: boolean
    OwnerID?: boolean
    RestaurantName?: boolean
    Address?: boolean
    Phone?: boolean
    Email?: boolean
    Availability?: boolean
  }, ExtArgs["result"]["restaurants"]>



  export type restaurantsSelectScalar = {
    RestaurantID?: boolean
    OwnerID?: boolean
    RestaurantName?: boolean
    Address?: boolean
    Phone?: boolean
    Email?: boolean
    Availability?: boolean
  }

  export type restaurantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RestaurantID" | "OwnerID" | "RestaurantName" | "Address" | "Phone" | "Email" | "Availability", ExtArgs["result"]["restaurants"]>

  export type $restaurantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurants"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      RestaurantID: number
      OwnerID: number | null
      RestaurantName: string
      Address: string
      Phone: string | null
      Email: string | null
      Availability: string
    }, ExtArgs["result"]["restaurants"]>
    composites: {}
  }

  type restaurantsGetPayload<S extends boolean | null | undefined | restaurantsDefaultArgs> = $Result.GetResult<Prisma.$restaurantsPayload, S>

  type restaurantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantsCountAggregateInputType | true
    }

  export interface restaurantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurants'], meta: { name: 'restaurants' } }
    /**
     * Find zero or one Restaurants that matches the filter.
     * @param {restaurantsFindUniqueArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurantsFindUniqueArgs>(args: SelectSubset<T, restaurantsFindUniqueArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurantsFindUniqueOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurantsFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindFirstArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurantsFindFirstArgs>(args?: SelectSubset<T, restaurantsFindFirstArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindFirstOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurantsFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurants.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurants.findMany({ take: 10 })
     * 
     * // Only select the `RestaurantID`
     * const restaurantsWithRestaurantIDOnly = await prisma.restaurants.findMany({ select: { RestaurantID: true } })
     * 
     */
    findMany<T extends restaurantsFindManyArgs>(args?: SelectSubset<T, restaurantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurants.
     * @param {restaurantsCreateArgs} args - Arguments to create a Restaurants.
     * @example
     * // Create one Restaurants
     * const Restaurants = await prisma.restaurants.create({
     *   data: {
     *     // ... data to create a Restaurants
     *   }
     * })
     * 
     */
    create<T extends restaurantsCreateArgs>(args: SelectSubset<T, restaurantsCreateArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {restaurantsCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurants = await prisma.restaurants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurantsCreateManyArgs>(args?: SelectSubset<T, restaurantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurants.
     * @param {restaurantsDeleteArgs} args - Arguments to delete one Restaurants.
     * @example
     * // Delete one Restaurants
     * const Restaurants = await prisma.restaurants.delete({
     *   where: {
     *     // ... filter to delete one Restaurants
     *   }
     * })
     * 
     */
    delete<T extends restaurantsDeleteArgs>(args: SelectSubset<T, restaurantsDeleteArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurants.
     * @param {restaurantsUpdateArgs} args - Arguments to update one Restaurants.
     * @example
     * // Update one Restaurants
     * const restaurants = await prisma.restaurants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurantsUpdateArgs>(args: SelectSubset<T, restaurantsUpdateArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantsDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurantsDeleteManyArgs>(args?: SelectSubset<T, restaurantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurantsUpdateManyArgs>(args: SelectSubset<T, restaurantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurants.
     * @param {restaurantsUpsertArgs} args - Arguments to update or create a Restaurants.
     * @example
     * // Update or create a Restaurants
     * const restaurants = await prisma.restaurants.upsert({
     *   create: {
     *     // ... data to create a Restaurants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurants we want to update
     *   }
     * })
     */
    upsert<T extends restaurantsUpsertArgs>(args: SelectSubset<T, restaurantsUpsertArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurants.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends restaurantsCountArgs>(
      args?: Subset<T, restaurantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantsAggregateArgs>(args: Subset<T, RestaurantsAggregateArgs>): Prisma.PrismaPromise<GetRestaurantsAggregateType<T>>

    /**
     * Group by Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends restaurantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantsGroupByArgs['orderBy'] }
        : { orderBy?: restaurantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, restaurantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurants model
   */
  readonly fields: restaurantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the restaurants model
   */
  interface restaurantsFieldRefs {
    readonly RestaurantID: FieldRef<"restaurants", 'Int'>
    readonly OwnerID: FieldRef<"restaurants", 'Int'>
    readonly RestaurantName: FieldRef<"restaurants", 'String'>
    readonly Address: FieldRef<"restaurants", 'String'>
    readonly Phone: FieldRef<"restaurants", 'String'>
    readonly Email: FieldRef<"restaurants", 'String'>
    readonly Availability: FieldRef<"restaurants", 'String'>
  }
    

  // Custom InputTypes
  /**
   * restaurants findUnique
   */
  export type restaurantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants findUniqueOrThrow
   */
  export type restaurantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants findFirst
   */
  export type restaurantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants findFirstOrThrow
   */
  export type restaurantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants findMany
   */
  export type restaurantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants create
   */
  export type restaurantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * The data needed to create a restaurants.
     */
    data: XOR<restaurantsCreateInput, restaurantsUncheckedCreateInput>
  }

  /**
   * restaurants createMany
   */
  export type restaurantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantsCreateManyInput | restaurantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurants update
   */
  export type restaurantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * The data needed to update a restaurants.
     */
    data: XOR<restaurantsUpdateInput, restaurantsUncheckedUpdateInput>
    /**
     * Choose, which restaurants to update.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants updateMany
   */
  export type restaurantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantsUpdateManyMutationInput, restaurantsUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantsWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurants upsert
   */
  export type restaurantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * The filter to search for the restaurants to update in case it exists.
     */
    where: restaurantsWhereUniqueInput
    /**
     * In case the restaurants found by the `where` argument doesn't exist, create a new restaurants with this data.
     */
    create: XOR<restaurantsCreateInput, restaurantsUncheckedCreateInput>
    /**
     * In case the restaurants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantsUpdateInput, restaurantsUncheckedUpdateInput>
  }

  /**
   * restaurants delete
   */
  export type restaurantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Filter which restaurants to delete.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants deleteMany
   */
  export type restaurantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantsWhereInput
    /**
     * Limit how many restaurants to delete.
     */
    limit?: number
  }

  /**
   * restaurants without action
   */
  export type restaurantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    UserID: number | null
  }

  export type UsersSumAggregateOutputType = {
    UserID: number | null
  }

  export type UsersMinAggregateOutputType = {
    UserID: number | null
    Firstname: string | null
    Lastname: string | null
    PasswordHash: string | null
    Email: string | null
    Phone: string | null
    Role: $Enums.users_Role | null
  }

  export type UsersMaxAggregateOutputType = {
    UserID: number | null
    Firstname: string | null
    Lastname: string | null
    PasswordHash: string | null
    Email: string | null
    Phone: string | null
    Role: $Enums.users_Role | null
  }

  export type UsersCountAggregateOutputType = {
    UserID: number
    Firstname: number
    Lastname: number
    PasswordHash: number
    Email: number
    Phone: number
    Role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    UserID?: true
  }

  export type UsersSumAggregateInputType = {
    UserID?: true
  }

  export type UsersMinAggregateInputType = {
    UserID?: true
    Firstname?: true
    Lastname?: true
    PasswordHash?: true
    Email?: true
    Phone?: true
    Role?: true
  }

  export type UsersMaxAggregateInputType = {
    UserID?: true
    Firstname?: true
    Lastname?: true
    PasswordHash?: true
    Email?: true
    Phone?: true
    Role?: true
  }

  export type UsersCountAggregateInputType = {
    UserID?: true
    Firstname?: true
    Lastname?: true
    PasswordHash?: true
    Email?: true
    Phone?: true
    Role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    UserID: number
    Firstname: string
    Lastname: string
    PasswordHash: string
    Email: string
    Phone: string | null
    Role: $Enums.users_Role
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Firstname?: boolean
    Lastname?: boolean
    PasswordHash?: boolean
    Email?: boolean
    Phone?: boolean
    Role?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    UserID?: boolean
    Firstname?: boolean
    Lastname?: boolean
    PasswordHash?: boolean
    Email?: boolean
    Phone?: boolean
    Role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "Firstname" | "Lastname" | "PasswordHash" | "Email" | "Phone" | "Role", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      Firstname: string
      Lastname: string
      PasswordHash: string
      Email: string
      Phone: string | null
      Role: $Enums.users_Role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly UserID: FieldRef<"users", 'Int'>
    readonly Firstname: FieldRef<"users", 'String'>
    readonly Lastname: FieldRef<"users", 'String'>
    readonly PasswordHash: FieldRef<"users", 'String'>
    readonly Email: FieldRef<"users", 'String'>
    readonly Phone: FieldRef<"users", 'String'>
    readonly Role: FieldRef<"users", 'users_Role'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CartitemsScalarFieldEnum: {
    ID: 'ID',
    CartID: 'CartID',
    MenuItemID: 'MenuItemID',
    Quantity: 'Quantity'
  };

  export type CartitemsScalarFieldEnum = (typeof CartitemsScalarFieldEnum)[keyof typeof CartitemsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    CartID: 'CartID',
    UserID: 'UserID',
    CreatedAt: 'CreatedAt'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    DeliveryID: 'DeliveryID',
    OrderID: 'OrderID',
    DeliveryPersonID: 'DeliveryPersonID',
    AssignedAt: 'AssignedAt',
    DeliveredAt: 'DeliveredAt',
    DeliveryStatus: 'DeliveryStatus'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const DeliveryroutesScalarFieldEnum: {
    RouteID: 'RouteID',
    DeliveryID: 'DeliveryID'
  };

  export type DeliveryroutesScalarFieldEnum = (typeof DeliveryroutesScalarFieldEnum)[keyof typeof DeliveryroutesScalarFieldEnum]


  export const MenuitemsScalarFieldEnum: {
    MenuItemID: 'MenuItemID',
    RestaurantID: 'RestaurantID',
    Name: 'Name',
    Description: 'Description',
    Price: 'Price',
    IsAvailable: 'IsAvailable'
  };

  export type MenuitemsScalarFieldEnum = (typeof MenuitemsScalarFieldEnum)[keyof typeof MenuitemsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    NotificationID: 'NotificationID',
    UserID: 'UserID',
    Message: 'Message',
    NotificationDate: 'NotificationDate',
    IsRead: 'IsRead'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const OrderdetailsScalarFieldEnum: {
    OrderDetailID: 'OrderDetailID',
    OrderID: 'OrderID',
    MenuItemID: 'MenuItemID',
    Quantity: 'Quantity',
    ItemPrice: 'ItemPrice'
  };

  export type OrderdetailsScalarFieldEnum = (typeof OrderdetailsScalarFieldEnum)[keyof typeof OrderdetailsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    OrderID: 'OrderID',
    CustomerID: 'CustomerID',
    RestaurantID: 'RestaurantID',
    OrderStatus: 'OrderStatus',
    OrderTotal: 'OrderTotal',
    OrderDate: 'OrderDate'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    PaymentID: 'PaymentID',
    OrderID: 'OrderID',
    PaymentMethod: 'PaymentMethod',
    PaymentStatus: 'PaymentStatus',
    TransactionID: 'TransactionID',
    PaymentDate: 'PaymentDate'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const RestaurantsScalarFieldEnum: {
    RestaurantID: 'RestaurantID',
    OwnerID: 'OwnerID',
    RestaurantName: 'RestaurantName',
    Address: 'Address',
    Phone: 'Phone',
    Email: 'Email',
    Availability: 'Availability'
  };

  export type RestaurantsScalarFieldEnum = (typeof RestaurantsScalarFieldEnum)[keyof typeof RestaurantsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    UserID: 'UserID',
    Firstname: 'Firstname',
    Lastname: 'Lastname',
    PasswordHash: 'PasswordHash',
    Email: 'Email',
    Phone: 'Phone',
    Role: 'Role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const menuitemsOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Description: 'Description'
  };

  export type menuitemsOrderByRelevanceFieldEnum = (typeof menuitemsOrderByRelevanceFieldEnum)[keyof typeof menuitemsOrderByRelevanceFieldEnum]


  export const notificationsOrderByRelevanceFieldEnum: {
    Message: 'Message'
  };

  export type notificationsOrderByRelevanceFieldEnum = (typeof notificationsOrderByRelevanceFieldEnum)[keyof typeof notificationsOrderByRelevanceFieldEnum]


  export const paymentsOrderByRelevanceFieldEnum: {
    TransactionID: 'TransactionID'
  };

  export type paymentsOrderByRelevanceFieldEnum = (typeof paymentsOrderByRelevanceFieldEnum)[keyof typeof paymentsOrderByRelevanceFieldEnum]


  export const restaurantsOrderByRelevanceFieldEnum: {
    RestaurantName: 'RestaurantName',
    Address: 'Address',
    Phone: 'Phone',
    Email: 'Email',
    Availability: 'Availability'
  };

  export type restaurantsOrderByRelevanceFieldEnum = (typeof restaurantsOrderByRelevanceFieldEnum)[keyof typeof restaurantsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    Firstname: 'Firstname',
    Lastname: 'Lastname',
    PasswordHash: 'PasswordHash',
    Email: 'Email',
    Phone: 'Phone'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'delivery_DeliveryStatus'
   */
  export type Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'delivery_DeliveryStatus'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'orders_OrderStatus'
   */
  export type Enumorders_OrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orders_OrderStatus'>
    


  /**
   * Reference to a field of type 'payments_PaymentMethod'
   */
  export type Enumpayments_PaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payments_PaymentMethod'>
    


  /**
   * Reference to a field of type 'payments_PaymentStatus'
   */
  export type Enumpayments_PaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payments_PaymentStatus'>
    


  /**
   * Reference to a field of type 'users_Role'
   */
  export type Enumusers_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cartitemsWhereInput = {
    AND?: cartitemsWhereInput | cartitemsWhereInput[]
    OR?: cartitemsWhereInput[]
    NOT?: cartitemsWhereInput | cartitemsWhereInput[]
    ID?: IntFilter<"cartitems"> | number
    CartID?: IntFilter<"cartitems"> | number
    MenuItemID?: IntFilter<"cartitems"> | number
    Quantity?: IntFilter<"cartitems"> | number
  }

  export type cartitemsOrderByWithRelationInput = {
    ID?: SortOrder
    CartID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
  }

  export type cartitemsWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: cartitemsWhereInput | cartitemsWhereInput[]
    OR?: cartitemsWhereInput[]
    NOT?: cartitemsWhereInput | cartitemsWhereInput[]
    CartID?: IntFilter<"cartitems"> | number
    MenuItemID?: IntFilter<"cartitems"> | number
    Quantity?: IntFilter<"cartitems"> | number
  }, "ID">

  export type cartitemsOrderByWithAggregationInput = {
    ID?: SortOrder
    CartID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
    _count?: cartitemsCountOrderByAggregateInput
    _avg?: cartitemsAvgOrderByAggregateInput
    _max?: cartitemsMaxOrderByAggregateInput
    _min?: cartitemsMinOrderByAggregateInput
    _sum?: cartitemsSumOrderByAggregateInput
  }

  export type cartitemsScalarWhereWithAggregatesInput = {
    AND?: cartitemsScalarWhereWithAggregatesInput | cartitemsScalarWhereWithAggregatesInput[]
    OR?: cartitemsScalarWhereWithAggregatesInput[]
    NOT?: cartitemsScalarWhereWithAggregatesInput | cartitemsScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"cartitems"> | number
    CartID?: IntWithAggregatesFilter<"cartitems"> | number
    MenuItemID?: IntWithAggregatesFilter<"cartitems"> | number
    Quantity?: IntWithAggregatesFilter<"cartitems"> | number
  }

  export type cartsWhereInput = {
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    CartID?: IntFilter<"carts"> | number
    UserID?: IntFilter<"carts"> | number
    CreatedAt?: DateTimeNullableFilter<"carts"> | Date | string | null
  }

  export type cartsOrderByWithRelationInput = {
    CartID?: SortOrder
    UserID?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
  }

  export type cartsWhereUniqueInput = Prisma.AtLeast<{
    CartID?: number
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    UserID?: IntFilter<"carts"> | number
    CreatedAt?: DateTimeNullableFilter<"carts"> | Date | string | null
  }, "CartID">

  export type cartsOrderByWithAggregationInput = {
    CartID?: SortOrder
    UserID?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    _count?: cartsCountOrderByAggregateInput
    _avg?: cartsAvgOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
    _sum?: cartsSumOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    OR?: cartsScalarWhereWithAggregatesInput[]
    NOT?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    CartID?: IntWithAggregatesFilter<"carts"> | number
    UserID?: IntWithAggregatesFilter<"carts"> | number
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
  }

  export type deliveryWhereInput = {
    AND?: deliveryWhereInput | deliveryWhereInput[]
    OR?: deliveryWhereInput[]
    NOT?: deliveryWhereInput | deliveryWhereInput[]
    DeliveryID?: IntFilter<"delivery"> | number
    OrderID?: IntNullableFilter<"delivery"> | number | null
    DeliveryPersonID?: IntNullableFilter<"delivery"> | number | null
    AssignedAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveredAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFilter<"delivery"> | $Enums.delivery_DeliveryStatus
  }

  export type deliveryOrderByWithRelationInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrderInput | SortOrder
    DeliveryPersonID?: SortOrderInput | SortOrder
    AssignedAt?: SortOrderInput | SortOrder
    DeliveredAt?: SortOrderInput | SortOrder
    DeliveryStatus?: SortOrder
  }

  export type deliveryWhereUniqueInput = Prisma.AtLeast<{
    DeliveryID?: number
    AND?: deliveryWhereInput | deliveryWhereInput[]
    OR?: deliveryWhereInput[]
    NOT?: deliveryWhereInput | deliveryWhereInput[]
    OrderID?: IntNullableFilter<"delivery"> | number | null
    DeliveryPersonID?: IntNullableFilter<"delivery"> | number | null
    AssignedAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveredAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFilter<"delivery"> | $Enums.delivery_DeliveryStatus
  }, "DeliveryID">

  export type deliveryOrderByWithAggregationInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrderInput | SortOrder
    DeliveryPersonID?: SortOrderInput | SortOrder
    AssignedAt?: SortOrderInput | SortOrder
    DeliveredAt?: SortOrderInput | SortOrder
    DeliveryStatus?: SortOrder
    _count?: deliveryCountOrderByAggregateInput
    _avg?: deliveryAvgOrderByAggregateInput
    _max?: deliveryMaxOrderByAggregateInput
    _min?: deliveryMinOrderByAggregateInput
    _sum?: deliverySumOrderByAggregateInput
  }

  export type deliveryScalarWhereWithAggregatesInput = {
    AND?: deliveryScalarWhereWithAggregatesInput | deliveryScalarWhereWithAggregatesInput[]
    OR?: deliveryScalarWhereWithAggregatesInput[]
    NOT?: deliveryScalarWhereWithAggregatesInput | deliveryScalarWhereWithAggregatesInput[]
    DeliveryID?: IntWithAggregatesFilter<"delivery"> | number
    OrderID?: IntNullableWithAggregatesFilter<"delivery"> | number | null
    DeliveryPersonID?: IntNullableWithAggregatesFilter<"delivery"> | number | null
    AssignedAt?: DateTimeNullableWithAggregatesFilter<"delivery"> | Date | string | null
    DeliveredAt?: DateTimeNullableWithAggregatesFilter<"delivery"> | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusWithAggregatesFilter<"delivery"> | $Enums.delivery_DeliveryStatus
  }

  export type deliveryroutesWhereInput = {
    AND?: deliveryroutesWhereInput | deliveryroutesWhereInput[]
    OR?: deliveryroutesWhereInput[]
    NOT?: deliveryroutesWhereInput | deliveryroutesWhereInput[]
    RouteID?: IntFilter<"deliveryroutes"> | number
    DeliveryID?: IntNullableFilter<"deliveryroutes"> | number | null
  }

  export type deliveryroutesOrderByWithRelationInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrderInput | SortOrder
  }

  export type deliveryroutesWhereUniqueInput = Prisma.AtLeast<{
    RouteID?: number
    AND?: deliveryroutesWhereInput | deliveryroutesWhereInput[]
    OR?: deliveryroutesWhereInput[]
    NOT?: deliveryroutesWhereInput | deliveryroutesWhereInput[]
    DeliveryID?: IntNullableFilter<"deliveryroutes"> | number | null
  }, "RouteID">

  export type deliveryroutesOrderByWithAggregationInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrderInput | SortOrder
    _count?: deliveryroutesCountOrderByAggregateInput
    _avg?: deliveryroutesAvgOrderByAggregateInput
    _max?: deliveryroutesMaxOrderByAggregateInput
    _min?: deliveryroutesMinOrderByAggregateInput
    _sum?: deliveryroutesSumOrderByAggregateInput
  }

  export type deliveryroutesScalarWhereWithAggregatesInput = {
    AND?: deliveryroutesScalarWhereWithAggregatesInput | deliveryroutesScalarWhereWithAggregatesInput[]
    OR?: deliveryroutesScalarWhereWithAggregatesInput[]
    NOT?: deliveryroutesScalarWhereWithAggregatesInput | deliveryroutesScalarWhereWithAggregatesInput[]
    RouteID?: IntWithAggregatesFilter<"deliveryroutes"> | number
    DeliveryID?: IntNullableWithAggregatesFilter<"deliveryroutes"> | number | null
  }

  export type menuitemsWhereInput = {
    AND?: menuitemsWhereInput | menuitemsWhereInput[]
    OR?: menuitemsWhereInput[]
    NOT?: menuitemsWhereInput | menuitemsWhereInput[]
    MenuItemID?: IntFilter<"menuitems"> | number
    RestaurantID?: IntNullableFilter<"menuitems"> | number | null
    Name?: StringFilter<"menuitems"> | string
    Description?: StringNullableFilter<"menuitems"> | string | null
    Price?: DecimalFilter<"menuitems"> | Decimal | DecimalJsLike | number | string
    IsAvailable?: BoolNullableFilter<"menuitems"> | boolean | null
  }

  export type menuitemsOrderByWithRelationInput = {
    MenuItemID?: SortOrder
    RestaurantID?: SortOrderInput | SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Price?: SortOrder
    IsAvailable?: SortOrderInput | SortOrder
    _relevance?: menuitemsOrderByRelevanceInput
  }

  export type menuitemsWhereUniqueInput = Prisma.AtLeast<{
    MenuItemID?: number
    AND?: menuitemsWhereInput | menuitemsWhereInput[]
    OR?: menuitemsWhereInput[]
    NOT?: menuitemsWhereInput | menuitemsWhereInput[]
    RestaurantID?: IntNullableFilter<"menuitems"> | number | null
    Name?: StringFilter<"menuitems"> | string
    Description?: StringNullableFilter<"menuitems"> | string | null
    Price?: DecimalFilter<"menuitems"> | Decimal | DecimalJsLike | number | string
    IsAvailable?: BoolNullableFilter<"menuitems"> | boolean | null
  }, "MenuItemID">

  export type menuitemsOrderByWithAggregationInput = {
    MenuItemID?: SortOrder
    RestaurantID?: SortOrderInput | SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Price?: SortOrder
    IsAvailable?: SortOrderInput | SortOrder
    _count?: menuitemsCountOrderByAggregateInput
    _avg?: menuitemsAvgOrderByAggregateInput
    _max?: menuitemsMaxOrderByAggregateInput
    _min?: menuitemsMinOrderByAggregateInput
    _sum?: menuitemsSumOrderByAggregateInput
  }

  export type menuitemsScalarWhereWithAggregatesInput = {
    AND?: menuitemsScalarWhereWithAggregatesInput | menuitemsScalarWhereWithAggregatesInput[]
    OR?: menuitemsScalarWhereWithAggregatesInput[]
    NOT?: menuitemsScalarWhereWithAggregatesInput | menuitemsScalarWhereWithAggregatesInput[]
    MenuItemID?: IntWithAggregatesFilter<"menuitems"> | number
    RestaurantID?: IntNullableWithAggregatesFilter<"menuitems"> | number | null
    Name?: StringWithAggregatesFilter<"menuitems"> | string
    Description?: StringNullableWithAggregatesFilter<"menuitems"> | string | null
    Price?: DecimalWithAggregatesFilter<"menuitems"> | Decimal | DecimalJsLike | number | string
    IsAvailable?: BoolNullableWithAggregatesFilter<"menuitems"> | boolean | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    NotificationID?: IntFilter<"notifications"> | number
    UserID?: IntNullableFilter<"notifications"> | number | null
    Message?: StringFilter<"notifications"> | string
    NotificationDate?: DateTimeNullableFilter<"notifications"> | Date | string | null
    IsRead?: BoolNullableFilter<"notifications"> | boolean | null
  }

  export type notificationsOrderByWithRelationInput = {
    NotificationID?: SortOrder
    UserID?: SortOrderInput | SortOrder
    Message?: SortOrder
    NotificationDate?: SortOrderInput | SortOrder
    IsRead?: SortOrderInput | SortOrder
    _relevance?: notificationsOrderByRelevanceInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    NotificationID?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    UserID?: IntNullableFilter<"notifications"> | number | null
    Message?: StringFilter<"notifications"> | string
    NotificationDate?: DateTimeNullableFilter<"notifications"> | Date | string | null
    IsRead?: BoolNullableFilter<"notifications"> | boolean | null
  }, "NotificationID">

  export type notificationsOrderByWithAggregationInput = {
    NotificationID?: SortOrder
    UserID?: SortOrderInput | SortOrder
    Message?: SortOrder
    NotificationDate?: SortOrderInput | SortOrder
    IsRead?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    NotificationID?: IntWithAggregatesFilter<"notifications"> | number
    UserID?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    Message?: StringWithAggregatesFilter<"notifications"> | string
    NotificationDate?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    IsRead?: BoolNullableWithAggregatesFilter<"notifications"> | boolean | null
  }

  export type orderdetailsWhereInput = {
    AND?: orderdetailsWhereInput | orderdetailsWhereInput[]
    OR?: orderdetailsWhereInput[]
    NOT?: orderdetailsWhereInput | orderdetailsWhereInput[]
    OrderDetailID?: IntFilter<"orderdetails"> | number
    OrderID?: IntNullableFilter<"orderdetails"> | number | null
    MenuItemID?: IntNullableFilter<"orderdetails"> | number | null
    Quantity?: IntFilter<"orderdetails"> | number
    ItemPrice?: DecimalFilter<"orderdetails"> | Decimal | DecimalJsLike | number | string
  }

  export type orderdetailsOrderByWithRelationInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrderInput | SortOrder
    MenuItemID?: SortOrderInput | SortOrder
    Quantity?: SortOrder
    ItemPrice?: SortOrder
  }

  export type orderdetailsWhereUniqueInput = Prisma.AtLeast<{
    OrderDetailID?: number
    AND?: orderdetailsWhereInput | orderdetailsWhereInput[]
    OR?: orderdetailsWhereInput[]
    NOT?: orderdetailsWhereInput | orderdetailsWhereInput[]
    OrderID?: IntNullableFilter<"orderdetails"> | number | null
    MenuItemID?: IntNullableFilter<"orderdetails"> | number | null
    Quantity?: IntFilter<"orderdetails"> | number
    ItemPrice?: DecimalFilter<"orderdetails"> | Decimal | DecimalJsLike | number | string
  }, "OrderDetailID">

  export type orderdetailsOrderByWithAggregationInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrderInput | SortOrder
    MenuItemID?: SortOrderInput | SortOrder
    Quantity?: SortOrder
    ItemPrice?: SortOrder
    _count?: orderdetailsCountOrderByAggregateInput
    _avg?: orderdetailsAvgOrderByAggregateInput
    _max?: orderdetailsMaxOrderByAggregateInput
    _min?: orderdetailsMinOrderByAggregateInput
    _sum?: orderdetailsSumOrderByAggregateInput
  }

  export type orderdetailsScalarWhereWithAggregatesInput = {
    AND?: orderdetailsScalarWhereWithAggregatesInput | orderdetailsScalarWhereWithAggregatesInput[]
    OR?: orderdetailsScalarWhereWithAggregatesInput[]
    NOT?: orderdetailsScalarWhereWithAggregatesInput | orderdetailsScalarWhereWithAggregatesInput[]
    OrderDetailID?: IntWithAggregatesFilter<"orderdetails"> | number
    OrderID?: IntNullableWithAggregatesFilter<"orderdetails"> | number | null
    MenuItemID?: IntNullableWithAggregatesFilter<"orderdetails"> | number | null
    Quantity?: IntWithAggregatesFilter<"orderdetails"> | number
    ItemPrice?: DecimalWithAggregatesFilter<"orderdetails"> | Decimal | DecimalJsLike | number | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    OrderID?: IntFilter<"orders"> | number
    CustomerID?: IntNullableFilter<"orders"> | number | null
    RestaurantID?: IntNullableFilter<"orders"> | number | null
    OrderStatus?: Enumorders_OrderStatusFilter<"orders"> | $Enums.orders_OrderStatus
    OrderTotal?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    OrderDate?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type ordersOrderByWithRelationInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrderInput | SortOrder
    RestaurantID?: SortOrderInput | SortOrder
    OrderStatus?: SortOrder
    OrderTotal?: SortOrder
    OrderDate?: SortOrderInput | SortOrder
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    OrderID?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    CustomerID?: IntNullableFilter<"orders"> | number | null
    RestaurantID?: IntNullableFilter<"orders"> | number | null
    OrderStatus?: Enumorders_OrderStatusFilter<"orders"> | $Enums.orders_OrderStatus
    OrderTotal?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    OrderDate?: DateTimeNullableFilter<"orders"> | Date | string | null
  }, "OrderID">

  export type ordersOrderByWithAggregationInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrderInput | SortOrder
    RestaurantID?: SortOrderInput | SortOrder
    OrderStatus?: SortOrder
    OrderTotal?: SortOrder
    OrderDate?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OrderID?: IntWithAggregatesFilter<"orders"> | number
    CustomerID?: IntNullableWithAggregatesFilter<"orders"> | number | null
    RestaurantID?: IntNullableWithAggregatesFilter<"orders"> | number | null
    OrderStatus?: Enumorders_OrderStatusWithAggregatesFilter<"orders"> | $Enums.orders_OrderStatus
    OrderTotal?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    OrderDate?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    PaymentID?: IntFilter<"payments"> | number
    OrderID?: IntNullableFilter<"payments"> | number | null
    PaymentMethod?: Enumpayments_PaymentMethodFilter<"payments"> | $Enums.payments_PaymentMethod
    PaymentStatus?: Enumpayments_PaymentStatusFilter<"payments"> | $Enums.payments_PaymentStatus
    TransactionID?: StringFilter<"payments"> | string
    PaymentDate?: DateTimeNullableFilter<"payments"> | Date | string | null
  }

  export type paymentsOrderByWithRelationInput = {
    PaymentID?: SortOrder
    OrderID?: SortOrderInput | SortOrder
    PaymentMethod?: SortOrder
    PaymentStatus?: SortOrder
    TransactionID?: SortOrder
    PaymentDate?: SortOrderInput | SortOrder
    _relevance?: paymentsOrderByRelevanceInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    PaymentID?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    OrderID?: IntNullableFilter<"payments"> | number | null
    PaymentMethod?: Enumpayments_PaymentMethodFilter<"payments"> | $Enums.payments_PaymentMethod
    PaymentStatus?: Enumpayments_PaymentStatusFilter<"payments"> | $Enums.payments_PaymentStatus
    TransactionID?: StringFilter<"payments"> | string
    PaymentDate?: DateTimeNullableFilter<"payments"> | Date | string | null
  }, "PaymentID">

  export type paymentsOrderByWithAggregationInput = {
    PaymentID?: SortOrder
    OrderID?: SortOrderInput | SortOrder
    PaymentMethod?: SortOrder
    PaymentStatus?: SortOrder
    TransactionID?: SortOrder
    PaymentDate?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    PaymentID?: IntWithAggregatesFilter<"payments"> | number
    OrderID?: IntNullableWithAggregatesFilter<"payments"> | number | null
    PaymentMethod?: Enumpayments_PaymentMethodWithAggregatesFilter<"payments"> | $Enums.payments_PaymentMethod
    PaymentStatus?: Enumpayments_PaymentStatusWithAggregatesFilter<"payments"> | $Enums.payments_PaymentStatus
    TransactionID?: StringWithAggregatesFilter<"payments"> | string
    PaymentDate?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
  }

  export type restaurantsWhereInput = {
    AND?: restaurantsWhereInput | restaurantsWhereInput[]
    OR?: restaurantsWhereInput[]
    NOT?: restaurantsWhereInput | restaurantsWhereInput[]
    RestaurantID?: IntFilter<"restaurants"> | number
    OwnerID?: IntNullableFilter<"restaurants"> | number | null
    RestaurantName?: StringFilter<"restaurants"> | string
    Address?: StringFilter<"restaurants"> | string
    Phone?: StringNullableFilter<"restaurants"> | string | null
    Email?: StringNullableFilter<"restaurants"> | string | null
    Availability?: StringFilter<"restaurants"> | string
  }

  export type restaurantsOrderByWithRelationInput = {
    RestaurantID?: SortOrder
    OwnerID?: SortOrderInput | SortOrder
    RestaurantName?: SortOrder
    Address?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Availability?: SortOrder
    _relevance?: restaurantsOrderByRelevanceInput
  }

  export type restaurantsWhereUniqueInput = Prisma.AtLeast<{
    RestaurantID?: number
    AND?: restaurantsWhereInput | restaurantsWhereInput[]
    OR?: restaurantsWhereInput[]
    NOT?: restaurantsWhereInput | restaurantsWhereInput[]
    OwnerID?: IntNullableFilter<"restaurants"> | number | null
    RestaurantName?: StringFilter<"restaurants"> | string
    Address?: StringFilter<"restaurants"> | string
    Phone?: StringNullableFilter<"restaurants"> | string | null
    Email?: StringNullableFilter<"restaurants"> | string | null
    Availability?: StringFilter<"restaurants"> | string
  }, "RestaurantID">

  export type restaurantsOrderByWithAggregationInput = {
    RestaurantID?: SortOrder
    OwnerID?: SortOrderInput | SortOrder
    RestaurantName?: SortOrder
    Address?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Availability?: SortOrder
    _count?: restaurantsCountOrderByAggregateInput
    _avg?: restaurantsAvgOrderByAggregateInput
    _max?: restaurantsMaxOrderByAggregateInput
    _min?: restaurantsMinOrderByAggregateInput
    _sum?: restaurantsSumOrderByAggregateInput
  }

  export type restaurantsScalarWhereWithAggregatesInput = {
    AND?: restaurantsScalarWhereWithAggregatesInput | restaurantsScalarWhereWithAggregatesInput[]
    OR?: restaurantsScalarWhereWithAggregatesInput[]
    NOT?: restaurantsScalarWhereWithAggregatesInput | restaurantsScalarWhereWithAggregatesInput[]
    RestaurantID?: IntWithAggregatesFilter<"restaurants"> | number
    OwnerID?: IntNullableWithAggregatesFilter<"restaurants"> | number | null
    RestaurantName?: StringWithAggregatesFilter<"restaurants"> | string
    Address?: StringWithAggregatesFilter<"restaurants"> | string
    Phone?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    Email?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    Availability?: StringWithAggregatesFilter<"restaurants"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    UserID?: IntFilter<"users"> | number
    Firstname?: StringFilter<"users"> | string
    Lastname?: StringFilter<"users"> | string
    PasswordHash?: StringFilter<"users"> | string
    Email?: StringFilter<"users"> | string
    Phone?: StringNullableFilter<"users"> | string | null
    Role?: Enumusers_RoleFilter<"users"> | $Enums.users_Role
  }

  export type usersOrderByWithRelationInput = {
    UserID?: SortOrder
    Firstname?: SortOrder
    Lastname?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Role?: SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    Email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    Firstname?: StringFilter<"users"> | string
    Lastname?: StringFilter<"users"> | string
    PasswordHash?: StringFilter<"users"> | string
    Phone?: StringNullableFilter<"users"> | string | null
    Role?: Enumusers_RoleFilter<"users"> | $Enums.users_Role
  }, "UserID" | "Email">

  export type usersOrderByWithAggregationInput = {
    UserID?: SortOrder
    Firstname?: SortOrder
    Lastname?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"users"> | number
    Firstname?: StringWithAggregatesFilter<"users"> | string
    Lastname?: StringWithAggregatesFilter<"users"> | string
    PasswordHash?: StringWithAggregatesFilter<"users"> | string
    Email?: StringWithAggregatesFilter<"users"> | string
    Phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    Role?: Enumusers_RoleWithAggregatesFilter<"users"> | $Enums.users_Role
  }

  export type cartitemsCreateInput = {
    CartID: number
    MenuItemID: number
    Quantity: number
  }

  export type cartitemsUncheckedCreateInput = {
    ID?: number
    CartID: number
    MenuItemID: number
    Quantity: number
  }

  export type cartitemsUpdateInput = {
    CartID?: IntFieldUpdateOperationsInput | number
    MenuItemID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartitemsUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    CartID?: IntFieldUpdateOperationsInput | number
    MenuItemID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartitemsCreateManyInput = {
    ID?: number
    CartID: number
    MenuItemID: number
    Quantity: number
  }

  export type cartitemsUpdateManyMutationInput = {
    CartID?: IntFieldUpdateOperationsInput | number
    MenuItemID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartitemsUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    CartID?: IntFieldUpdateOperationsInput | number
    MenuItemID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartsCreateInput = {
    UserID: number
    CreatedAt?: Date | string | null
  }

  export type cartsUncheckedCreateInput = {
    CartID?: number
    UserID: number
    CreatedAt?: Date | string | null
  }

  export type cartsUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsUncheckedUpdateInput = {
    CartID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsCreateManyInput = {
    CartID?: number
    UserID: number
    CreatedAt?: Date | string | null
  }

  export type cartsUpdateManyMutationInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsUncheckedUpdateManyInput = {
    CartID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveryCreateInput = {
    OrderID?: number | null
    DeliveryPersonID?: number | null
    AssignedAt?: Date | string | null
    DeliveredAt?: Date | string | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus
  }

  export type deliveryUncheckedCreateInput = {
    DeliveryID?: number
    OrderID?: number | null
    DeliveryPersonID?: number | null
    AssignedAt?: Date | string | null
    DeliveredAt?: Date | string | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus
  }

  export type deliveryUpdateInput = {
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryUncheckedUpdateInput = {
    DeliveryID?: IntFieldUpdateOperationsInput | number
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryCreateManyInput = {
    DeliveryID?: number
    OrderID?: number | null
    DeliveryPersonID?: number | null
    AssignedAt?: Date | string | null
    DeliveredAt?: Date | string | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus
  }

  export type deliveryUpdateManyMutationInput = {
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryUncheckedUpdateManyInput = {
    DeliveryID?: IntFieldUpdateOperationsInput | number
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryroutesUpdateInput = {
    DeliveryID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type deliveryroutesUncheckedUpdateInput = {
    RouteID?: IntFieldUpdateOperationsInput | number
    DeliveryID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type deliveryroutesUpdateManyMutationInput = {
    DeliveryID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type deliveryroutesUncheckedUpdateManyInput = {
    RouteID?: IntFieldUpdateOperationsInput | number
    DeliveryID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type menuitemsCreateInput = {
    RestaurantID?: number | null
    Name: string
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    IsAvailable?: boolean | null
  }

  export type menuitemsUncheckedCreateInput = {
    MenuItemID?: number
    RestaurantID?: number | null
    Name: string
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    IsAvailable?: boolean | null
  }

  export type menuitemsUpdateInput = {
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menuitemsUncheckedUpdateInput = {
    MenuItemID?: IntFieldUpdateOperationsInput | number
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menuitemsCreateManyInput = {
    MenuItemID?: number
    RestaurantID?: number | null
    Name: string
    Description?: string | null
    Price: Decimal | DecimalJsLike | number | string
    IsAvailable?: boolean | null
  }

  export type menuitemsUpdateManyMutationInput = {
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menuitemsUncheckedUpdateManyInput = {
    MenuItemID?: IntFieldUpdateOperationsInput | number
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsCreateInput = {
    UserID?: number | null
    Message: string
    NotificationDate?: Date | string | null
    IsRead?: boolean | null
  }

  export type notificationsUncheckedCreateInput = {
    NotificationID?: number
    UserID?: number | null
    Message: string
    NotificationDate?: Date | string | null
    IsRead?: boolean | null
  }

  export type notificationsUpdateInput = {
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    Message?: StringFieldUpdateOperationsInput | string
    NotificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsUncheckedUpdateInput = {
    NotificationID?: IntFieldUpdateOperationsInput | number
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    Message?: StringFieldUpdateOperationsInput | string
    NotificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsCreateManyInput = {
    NotificationID?: number
    UserID?: number | null
    Message: string
    NotificationDate?: Date | string | null
    IsRead?: boolean | null
  }

  export type notificationsUpdateManyMutationInput = {
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    Message?: StringFieldUpdateOperationsInput | string
    NotificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    NotificationID?: IntFieldUpdateOperationsInput | number
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    Message?: StringFieldUpdateOperationsInput | string
    NotificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type orderdetailsCreateInput = {
    OrderID?: number | null
    MenuItemID?: number | null
    Quantity: number
    ItemPrice: Decimal | DecimalJsLike | number | string
  }

  export type orderdetailsUncheckedCreateInput = {
    OrderDetailID?: number
    OrderID?: number | null
    MenuItemID?: number | null
    Quantity: number
    ItemPrice: Decimal | DecimalJsLike | number | string
  }

  export type orderdetailsUpdateInput = {
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    MenuItemID?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    ItemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orderdetailsUncheckedUpdateInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    MenuItemID?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    ItemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orderdetailsCreateManyInput = {
    OrderDetailID?: number
    OrderID?: number | null
    MenuItemID?: number | null
    Quantity: number
    ItemPrice: Decimal | DecimalJsLike | number | string
  }

  export type orderdetailsUpdateManyMutationInput = {
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    MenuItemID?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    ItemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orderdetailsUncheckedUpdateManyInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    MenuItemID?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    ItemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateInput = {
    CustomerID?: number | null
    RestaurantID?: number | null
    OrderStatus: $Enums.orders_OrderStatus
    OrderTotal: Decimal | DecimalJsLike | number | string
    OrderDate?: Date | string | null
  }

  export type ordersUncheckedCreateInput = {
    OrderID?: number
    CustomerID?: number | null
    RestaurantID?: number | null
    OrderStatus: $Enums.orders_OrderStatus
    OrderTotal: Decimal | DecimalJsLike | number | string
    OrderDate?: Date | string | null
  }

  export type ordersUpdateInput = {
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderStatus?: Enumorders_OrderStatusFieldUpdateOperationsInput | $Enums.orders_OrderStatus
    OrderTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderStatus?: Enumorders_OrderStatusFieldUpdateOperationsInput | $Enums.orders_OrderStatus
    OrderTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateManyInput = {
    OrderID?: number
    CustomerID?: number | null
    RestaurantID?: number | null
    OrderStatus: $Enums.orders_OrderStatus
    OrderTotal: Decimal | DecimalJsLike | number | string
    OrderDate?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderStatus?: Enumorders_OrderStatusFieldUpdateOperationsInput | $Enums.orders_OrderStatus
    OrderTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantID?: NullableIntFieldUpdateOperationsInput | number | null
    OrderStatus?: Enumorders_OrderStatusFieldUpdateOperationsInput | $Enums.orders_OrderStatus
    OrderTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateInput = {
    OrderID?: number | null
    PaymentMethod: $Enums.payments_PaymentMethod
    PaymentStatus: $Enums.payments_PaymentStatus
    TransactionID: string
    PaymentDate?: Date | string | null
  }

  export type paymentsUncheckedCreateInput = {
    PaymentID?: number
    OrderID?: number | null
    PaymentMethod: $Enums.payments_PaymentMethod
    PaymentStatus: $Enums.payments_PaymentStatus
    TransactionID: string
    PaymentDate?: Date | string | null
  }

  export type paymentsUpdateInput = {
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    PaymentMethod?: Enumpayments_PaymentMethodFieldUpdateOperationsInput | $Enums.payments_PaymentMethod
    PaymentStatus?: Enumpayments_PaymentStatusFieldUpdateOperationsInput | $Enums.payments_PaymentStatus
    TransactionID?: StringFieldUpdateOperationsInput | string
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateInput = {
    PaymentID?: IntFieldUpdateOperationsInput | number
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    PaymentMethod?: Enumpayments_PaymentMethodFieldUpdateOperationsInput | $Enums.payments_PaymentMethod
    PaymentStatus?: Enumpayments_PaymentStatusFieldUpdateOperationsInput | $Enums.payments_PaymentStatus
    TransactionID?: StringFieldUpdateOperationsInput | string
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateManyInput = {
    PaymentID?: number
    OrderID?: number | null
    PaymentMethod: $Enums.payments_PaymentMethod
    PaymentStatus: $Enums.payments_PaymentStatus
    TransactionID: string
    PaymentDate?: Date | string | null
  }

  export type paymentsUpdateManyMutationInput = {
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    PaymentMethod?: Enumpayments_PaymentMethodFieldUpdateOperationsInput | $Enums.payments_PaymentMethod
    PaymentStatus?: Enumpayments_PaymentStatusFieldUpdateOperationsInput | $Enums.payments_PaymentStatus
    TransactionID?: StringFieldUpdateOperationsInput | string
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    PaymentID?: IntFieldUpdateOperationsInput | number
    OrderID?: NullableIntFieldUpdateOperationsInput | number | null
    PaymentMethod?: Enumpayments_PaymentMethodFieldUpdateOperationsInput | $Enums.payments_PaymentMethod
    PaymentStatus?: Enumpayments_PaymentStatusFieldUpdateOperationsInput | $Enums.payments_PaymentStatus
    TransactionID?: StringFieldUpdateOperationsInput | string
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type restaurantsCreateInput = {
    OwnerID?: number | null
    RestaurantName: string
    Address: string
    Phone?: string | null
    Email?: string | null
    Availability: string
  }

  export type restaurantsUncheckedCreateInput = {
    RestaurantID?: number
    OwnerID?: number | null
    RestaurantName: string
    Address: string
    Phone?: string | null
    Email?: string | null
    Availability: string
  }

  export type restaurantsUpdateInput = {
    OwnerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Availability?: StringFieldUpdateOperationsInput | string
  }

  export type restaurantsUncheckedUpdateInput = {
    RestaurantID?: IntFieldUpdateOperationsInput | number
    OwnerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Availability?: StringFieldUpdateOperationsInput | string
  }

  export type restaurantsCreateManyInput = {
    RestaurantID?: number
    OwnerID?: number | null
    RestaurantName: string
    Address: string
    Phone?: string | null
    Email?: string | null
    Availability: string
  }

  export type restaurantsUpdateManyMutationInput = {
    OwnerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Availability?: StringFieldUpdateOperationsInput | string
  }

  export type restaurantsUncheckedUpdateManyInput = {
    RestaurantID?: IntFieldUpdateOperationsInput | number
    OwnerID?: NullableIntFieldUpdateOperationsInput | number | null
    RestaurantName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Availability?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    Firstname: string
    Lastname: string
    PasswordHash: string
    Email: string
    Phone?: string | null
    Role: $Enums.users_Role
  }

  export type usersUncheckedCreateInput = {
    UserID?: number
    Firstname: string
    Lastname: string
    PasswordHash: string
    Email: string
    Phone?: string | null
    Role: $Enums.users_Role
  }

  export type usersUpdateInput = {
    Firstname?: StringFieldUpdateOperationsInput | string
    Lastname?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
  }

  export type usersUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Firstname?: StringFieldUpdateOperationsInput | string
    Lastname?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
  }

  export type usersCreateManyInput = {
    UserID?: number
    Firstname: string
    Lastname: string
    PasswordHash: string
    Email: string
    Phone?: string | null
    Role: $Enums.users_Role
  }

  export type usersUpdateManyMutationInput = {
    Firstname?: StringFieldUpdateOperationsInput | string
    Lastname?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
  }

  export type usersUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Firstname?: StringFieldUpdateOperationsInput | string
    Lastname?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type cartitemsCountOrderByAggregateInput = {
    ID?: SortOrder
    CartID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
  }

  export type cartitemsAvgOrderByAggregateInput = {
    ID?: SortOrder
    CartID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
  }

  export type cartitemsMaxOrderByAggregateInput = {
    ID?: SortOrder
    CartID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
  }

  export type cartitemsMinOrderByAggregateInput = {
    ID?: SortOrder
    CartID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
  }

  export type cartitemsSumOrderByAggregateInput = {
    ID?: SortOrder
    CartID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cartsCountOrderByAggregateInput = {
    CartID?: SortOrder
    UserID?: SortOrder
    CreatedAt?: SortOrder
  }

  export type cartsAvgOrderByAggregateInput = {
    CartID?: SortOrder
    UserID?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    CartID?: SortOrder
    UserID?: SortOrder
    CreatedAt?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    CartID?: SortOrder
    UserID?: SortOrder
    CreatedAt?: SortOrder
  }

  export type cartsSumOrderByAggregateInput = {
    CartID?: SortOrder
    UserID?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumdelivery_DeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
  }

  export type deliveryCountOrderByAggregateInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrder
    DeliveryPersonID?: SortOrder
    AssignedAt?: SortOrder
    DeliveredAt?: SortOrder
    DeliveryStatus?: SortOrder
  }

  export type deliveryAvgOrderByAggregateInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrder
    DeliveryPersonID?: SortOrder
  }

  export type deliveryMaxOrderByAggregateInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrder
    DeliveryPersonID?: SortOrder
    AssignedAt?: SortOrder
    DeliveredAt?: SortOrder
    DeliveryStatus?: SortOrder
  }

  export type deliveryMinOrderByAggregateInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrder
    DeliveryPersonID?: SortOrder
    AssignedAt?: SortOrder
    DeliveredAt?: SortOrder
    DeliveryStatus?: SortOrder
  }

  export type deliverySumOrderByAggregateInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrder
    DeliveryPersonID?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
  }

  export type deliveryroutesCountOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
  }

  export type deliveryroutesAvgOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
  }

  export type deliveryroutesMaxOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
  }

  export type deliveryroutesMinOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
  }

  export type deliveryroutesSumOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type menuitemsOrderByRelevanceInput = {
    fields: menuitemsOrderByRelevanceFieldEnum | menuitemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type menuitemsCountOrderByAggregateInput = {
    MenuItemID?: SortOrder
    RestaurantID?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Price?: SortOrder
    IsAvailable?: SortOrder
  }

  export type menuitemsAvgOrderByAggregateInput = {
    MenuItemID?: SortOrder
    RestaurantID?: SortOrder
    Price?: SortOrder
  }

  export type menuitemsMaxOrderByAggregateInput = {
    MenuItemID?: SortOrder
    RestaurantID?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Price?: SortOrder
    IsAvailable?: SortOrder
  }

  export type menuitemsMinOrderByAggregateInput = {
    MenuItemID?: SortOrder
    RestaurantID?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Price?: SortOrder
    IsAvailable?: SortOrder
  }

  export type menuitemsSumOrderByAggregateInput = {
    MenuItemID?: SortOrder
    RestaurantID?: SortOrder
    Price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type notificationsOrderByRelevanceInput = {
    fields: notificationsOrderByRelevanceFieldEnum | notificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationsCountOrderByAggregateInput = {
    NotificationID?: SortOrder
    UserID?: SortOrder
    Message?: SortOrder
    NotificationDate?: SortOrder
    IsRead?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    NotificationID?: SortOrder
    UserID?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    NotificationID?: SortOrder
    UserID?: SortOrder
    Message?: SortOrder
    NotificationDate?: SortOrder
    IsRead?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    NotificationID?: SortOrder
    UserID?: SortOrder
    Message?: SortOrder
    NotificationDate?: SortOrder
    IsRead?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    NotificationID?: SortOrder
    UserID?: SortOrder
  }

  export type orderdetailsCountOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
    ItemPrice?: SortOrder
  }

  export type orderdetailsAvgOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
    ItemPrice?: SortOrder
  }

  export type orderdetailsMaxOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
    ItemPrice?: SortOrder
  }

  export type orderdetailsMinOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
    ItemPrice?: SortOrder
  }

  export type orderdetailsSumOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    MenuItemID?: SortOrder
    Quantity?: SortOrder
    ItemPrice?: SortOrder
  }

  export type Enumorders_OrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_OrderStatus | Enumorders_OrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orders_OrderStatus[]
    notIn?: $Enums.orders_OrderStatus[]
    not?: NestedEnumorders_OrderStatusFilter<$PrismaModel> | $Enums.orders_OrderStatus
  }

  export type ordersCountOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    RestaurantID?: SortOrder
    OrderStatus?: SortOrder
    OrderTotal?: SortOrder
    OrderDate?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    RestaurantID?: SortOrder
    OrderTotal?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    RestaurantID?: SortOrder
    OrderStatus?: SortOrder
    OrderTotal?: SortOrder
    OrderDate?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    RestaurantID?: SortOrder
    OrderStatus?: SortOrder
    OrderTotal?: SortOrder
    OrderDate?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
    RestaurantID?: SortOrder
    OrderTotal?: SortOrder
  }

  export type Enumorders_OrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_OrderStatus | Enumorders_OrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orders_OrderStatus[]
    notIn?: $Enums.orders_OrderStatus[]
    not?: NestedEnumorders_OrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.orders_OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorders_OrderStatusFilter<$PrismaModel>
    _max?: NestedEnumorders_OrderStatusFilter<$PrismaModel>
  }

  export type Enumpayments_PaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentMethod | Enumpayments_PaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentMethod[]
    notIn?: $Enums.payments_PaymentMethod[]
    not?: NestedEnumpayments_PaymentMethodFilter<$PrismaModel> | $Enums.payments_PaymentMethod
  }

  export type Enumpayments_PaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentStatus | Enumpayments_PaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentStatus[]
    notIn?: $Enums.payments_PaymentStatus[]
    not?: NestedEnumpayments_PaymentStatusFilter<$PrismaModel> | $Enums.payments_PaymentStatus
  }

  export type paymentsOrderByRelevanceInput = {
    fields: paymentsOrderByRelevanceFieldEnum | paymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentsCountOrderByAggregateInput = {
    PaymentID?: SortOrder
    OrderID?: SortOrder
    PaymentMethod?: SortOrder
    PaymentStatus?: SortOrder
    TransactionID?: SortOrder
    PaymentDate?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    PaymentID?: SortOrder
    OrderID?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    PaymentID?: SortOrder
    OrderID?: SortOrder
    PaymentMethod?: SortOrder
    PaymentStatus?: SortOrder
    TransactionID?: SortOrder
    PaymentDate?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    PaymentID?: SortOrder
    OrderID?: SortOrder
    PaymentMethod?: SortOrder
    PaymentStatus?: SortOrder
    TransactionID?: SortOrder
    PaymentDate?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    PaymentID?: SortOrder
    OrderID?: SortOrder
  }

  export type Enumpayments_PaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentMethod | Enumpayments_PaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentMethod[]
    notIn?: $Enums.payments_PaymentMethod[]
    not?: NestedEnumpayments_PaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.payments_PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayments_PaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumpayments_PaymentMethodFilter<$PrismaModel>
  }

  export type Enumpayments_PaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentStatus | Enumpayments_PaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentStatus[]
    notIn?: $Enums.payments_PaymentStatus[]
    not?: NestedEnumpayments_PaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.payments_PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayments_PaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumpayments_PaymentStatusFilter<$PrismaModel>
  }

  export type restaurantsOrderByRelevanceInput = {
    fields: restaurantsOrderByRelevanceFieldEnum | restaurantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type restaurantsCountOrderByAggregateInput = {
    RestaurantID?: SortOrder
    OwnerID?: SortOrder
    RestaurantName?: SortOrder
    Address?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Availability?: SortOrder
  }

  export type restaurantsAvgOrderByAggregateInput = {
    RestaurantID?: SortOrder
    OwnerID?: SortOrder
  }

  export type restaurantsMaxOrderByAggregateInput = {
    RestaurantID?: SortOrder
    OwnerID?: SortOrder
    RestaurantName?: SortOrder
    Address?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Availability?: SortOrder
  }

  export type restaurantsMinOrderByAggregateInput = {
    RestaurantID?: SortOrder
    OwnerID?: SortOrder
    RestaurantName?: SortOrder
    Address?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Availability?: SortOrder
  }

  export type restaurantsSumOrderByAggregateInput = {
    RestaurantID?: SortOrder
    OwnerID?: SortOrder
  }

  export type Enumusers_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleFilter<$PrismaModel> | $Enums.users_Role
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    UserID?: SortOrder
    Firstname?: SortOrder
    Lastname?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    UserID?: SortOrder
    Firstname?: SortOrder
    Lastname?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    UserID?: SortOrder
    Firstname?: SortOrder
    Lastname?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Phone?: SortOrder
    Role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type Enumusers_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleWithAggregatesFilter<$PrismaModel> | $Enums.users_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_RoleFilter<$PrismaModel>
    _max?: NestedEnumusers_RoleFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumdelivery_DeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.delivery_DeliveryStatus
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Enumorders_OrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.orders_OrderStatus
  }

  export type Enumpayments_PaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.payments_PaymentMethod
  }

  export type Enumpayments_PaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.payments_PaymentStatus
  }

  export type Enumusers_RoleFieldUpdateOperationsInput = {
    set?: $Enums.users_Role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumorders_OrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_OrderStatus | Enumorders_OrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orders_OrderStatus[]
    notIn?: $Enums.orders_OrderStatus[]
    not?: NestedEnumorders_OrderStatusFilter<$PrismaModel> | $Enums.orders_OrderStatus
  }

  export type NestedEnumorders_OrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_OrderStatus | Enumorders_OrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orders_OrderStatus[]
    notIn?: $Enums.orders_OrderStatus[]
    not?: NestedEnumorders_OrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.orders_OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorders_OrderStatusFilter<$PrismaModel>
    _max?: NestedEnumorders_OrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumpayments_PaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentMethod | Enumpayments_PaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentMethod[]
    notIn?: $Enums.payments_PaymentMethod[]
    not?: NestedEnumpayments_PaymentMethodFilter<$PrismaModel> | $Enums.payments_PaymentMethod
  }

  export type NestedEnumpayments_PaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentStatus | Enumpayments_PaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentStatus[]
    notIn?: $Enums.payments_PaymentStatus[]
    not?: NestedEnumpayments_PaymentStatusFilter<$PrismaModel> | $Enums.payments_PaymentStatus
  }

  export type NestedEnumpayments_PaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentMethod | Enumpayments_PaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentMethod[]
    notIn?: $Enums.payments_PaymentMethod[]
    not?: NestedEnumpayments_PaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.payments_PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayments_PaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumpayments_PaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumpayments_PaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_PaymentStatus | Enumpayments_PaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.payments_PaymentStatus[]
    notIn?: $Enums.payments_PaymentStatus[]
    not?: NestedEnumpayments_PaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.payments_PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayments_PaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumpayments_PaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumusers_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleFilter<$PrismaModel> | $Enums.users_Role
  }

  export type NestedEnumusers_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleWithAggregatesFilter<$PrismaModel> | $Enums.users_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_RoleFilter<$PrismaModel>
    _max?: NestedEnumusers_RoleFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}