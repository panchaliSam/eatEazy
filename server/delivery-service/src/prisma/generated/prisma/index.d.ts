
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
 * Enums
 */
export namespace $Enums {
  export const delivery_DeliveryStatus: {
  Assigned: 'Assigned',
  In_Transit: 'In_Transit',
  Delivered: 'Delivered',
  Failed: 'Failed'
};

export type delivery_DeliveryStatus = (typeof delivery_DeliveryStatus)[keyof typeof delivery_DeliveryStatus]

}

export type delivery_DeliveryStatus = $Enums.delivery_DeliveryStatus

export const delivery_DeliveryStatus: typeof $Enums.delivery_DeliveryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Deliveries
 * const deliveries = await prisma.delivery.findMany()
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
   * // Fetch zero or more Deliveries
   * const deliveries = await prisma.delivery.findMany()
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
    delivery: 'delivery',
    deliveryroutes: 'deliveryroutes'
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
      modelProps: "delivery" | "deliveryroutes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          create: {
            args: Prisma.deliveryroutesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload>
          }
          createMany: {
            args: Prisma.deliveryroutesCreateManyArgs<ExtArgs>
            result: BatchPayload
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
          upsert: {
            args: Prisma.deliveryroutesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveryroutesPayload>
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
    delivery?: deliveryOmit
    deliveryroutes?: deliveryroutesOmit
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
    OrderID: number
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
      OrderID: number
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
    StartLocation: Uint8Array | null
    EndLocation: Uint8Array | null
  }

  export type DeliveryroutesMaxAggregateOutputType = {
    RouteID: number | null
    DeliveryID: number | null
    StartLocation: Uint8Array | null
    EndLocation: Uint8Array | null
  }

  export type DeliveryroutesCountAggregateOutputType = {
    RouteID: number
    DeliveryID: number
    StartLocation: number
    EndLocation: number
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
    StartLocation?: true
    EndLocation?: true
  }

  export type DeliveryroutesMaxAggregateInputType = {
    RouteID?: true
    DeliveryID?: true
    StartLocation?: true
    EndLocation?: true
  }

  export type DeliveryroutesCountAggregateInputType = {
    RouteID?: true
    DeliveryID?: true
    StartLocation?: true
    EndLocation?: true
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
    DeliveryID: number
    StartLocation: Uint8Array
    EndLocation: Uint8Array
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
    StartLocation?: boolean
    EndLocation?: boolean
  }, ExtArgs["result"]["deliveryroutes"]>



  export type deliveryroutesSelectScalar = {
    RouteID?: boolean
    DeliveryID?: boolean
    StartLocation?: boolean
    EndLocation?: boolean
  }

  export type deliveryroutesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RouteID" | "DeliveryID" | "StartLocation" | "EndLocation", ExtArgs["result"]["deliveryroutes"]>

  export type $deliveryroutesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deliveryroutes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      RouteID: number
      DeliveryID: number
      StartLocation: Uint8Array
      EndLocation: Uint8Array
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
     * Create a Deliveryroutes.
     * @param {deliveryroutesCreateArgs} args - Arguments to create a Deliveryroutes.
     * @example
     * // Create one Deliveryroutes
     * const Deliveryroutes = await prisma.deliveryroutes.create({
     *   data: {
     *     // ... data to create a Deliveryroutes
     *   }
     * })
     * 
     */
    create<T extends deliveryroutesCreateArgs>(args: SelectSubset<T, deliveryroutesCreateArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveryroutes.
     * @param {deliveryroutesCreateManyArgs} args - Arguments to create many Deliveryroutes.
     * @example
     * // Create many Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deliveryroutesCreateManyArgs>(args?: SelectSubset<T, deliveryroutesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * Create or update one Deliveryroutes.
     * @param {deliveryroutesUpsertArgs} args - Arguments to update or create a Deliveryroutes.
     * @example
     * // Update or create a Deliveryroutes
     * const deliveryroutes = await prisma.deliveryroutes.upsert({
     *   create: {
     *     // ... data to create a Deliveryroutes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliveryroutes we want to update
     *   }
     * })
     */
    upsert<T extends deliveryroutesUpsertArgs>(args: SelectSubset<T, deliveryroutesUpsertArgs<ExtArgs>>): Prisma__deliveryroutesClient<$Result.GetResult<Prisma.$deliveryroutesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    readonly StartLocation: FieldRef<"deliveryroutes", 'Bytes'>
    readonly EndLocation: FieldRef<"deliveryroutes", 'Bytes'>
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
   * deliveryroutes create
   */
  export type deliveryroutesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * The data needed to create a deliveryroutes.
     */
    data: XOR<deliveryroutesCreateInput, deliveryroutesUncheckedCreateInput>
  }

  /**
   * deliveryroutes createMany
   */
  export type deliveryroutesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deliveryroutes.
     */
    data: deliveryroutesCreateManyInput | deliveryroutesCreateManyInput[]
    skipDuplicates?: boolean
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
   * deliveryroutes upsert
   */
  export type deliveryroutesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveryroutes
     */
    select?: deliveryroutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveryroutes
     */
    omit?: deliveryroutesOmit<ExtArgs> | null
    /**
     * The filter to search for the deliveryroutes to update in case it exists.
     */
    where: deliveryroutesWhereUniqueInput
    /**
     * In case the deliveryroutes found by the `where` argument doesn't exist, create a new deliveryroutes with this data.
     */
    create: XOR<deliveryroutesCreateInput, deliveryroutesUncheckedCreateInput>
    /**
     * In case the deliveryroutes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deliveryroutesUpdateInput, deliveryroutesUncheckedUpdateInput>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


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
    DeliveryID: 'DeliveryID',
    StartLocation: 'StartLocation',
    EndLocation: 'EndLocation'
  };

  export type DeliveryroutesScalarFieldEnum = (typeof DeliveryroutesScalarFieldEnum)[keyof typeof DeliveryroutesScalarFieldEnum]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type deliveryWhereInput = {
    AND?: deliveryWhereInput | deliveryWhereInput[]
    OR?: deliveryWhereInput[]
    NOT?: deliveryWhereInput | deliveryWhereInput[]
    DeliveryID?: IntFilter<"delivery"> | number
    OrderID?: IntFilter<"delivery"> | number
    DeliveryPersonID?: IntNullableFilter<"delivery"> | number | null
    AssignedAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveredAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFilter<"delivery"> | $Enums.delivery_DeliveryStatus
  }

  export type deliveryOrderByWithRelationInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrder
    DeliveryPersonID?: SortOrderInput | SortOrder
    AssignedAt?: SortOrderInput | SortOrder
    DeliveredAt?: SortOrderInput | SortOrder
    DeliveryStatus?: SortOrder
  }

  export type deliveryWhereUniqueInput = Prisma.AtLeast<{
    DeliveryID?: number
    OrderID?: number
    AND?: deliveryWhereInput | deliveryWhereInput[]
    OR?: deliveryWhereInput[]
    NOT?: deliveryWhereInput | deliveryWhereInput[]
    DeliveryPersonID?: IntNullableFilter<"delivery"> | number | null
    AssignedAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveredAt?: DateTimeNullableFilter<"delivery"> | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFilter<"delivery"> | $Enums.delivery_DeliveryStatus
  }, "DeliveryID" | "OrderID">

  export type deliveryOrderByWithAggregationInput = {
    DeliveryID?: SortOrder
    OrderID?: SortOrder
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
    OrderID?: IntWithAggregatesFilter<"delivery"> | number
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
    DeliveryID?: IntFilter<"deliveryroutes"> | number
    StartLocation?: BytesFilter<"deliveryroutes"> | Uint8Array
    EndLocation?: BytesFilter<"deliveryroutes"> | Uint8Array
  }

  export type deliveryroutesOrderByWithRelationInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
    StartLocation?: SortOrder
    EndLocation?: SortOrder
  }

  export type deliveryroutesWhereUniqueInput = Prisma.AtLeast<{
    RouteID?: number
    DeliveryID?: number
    AND?: deliveryroutesWhereInput | deliveryroutesWhereInput[]
    OR?: deliveryroutesWhereInput[]
    NOT?: deliveryroutesWhereInput | deliveryroutesWhereInput[]
    StartLocation?: BytesFilter<"deliveryroutes"> | Uint8Array
    EndLocation?: BytesFilter<"deliveryroutes"> | Uint8Array
  }, "RouteID" | "DeliveryID">

  export type deliveryroutesOrderByWithAggregationInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
    StartLocation?: SortOrder
    EndLocation?: SortOrder
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
    DeliveryID?: IntWithAggregatesFilter<"deliveryroutes"> | number
    StartLocation?: BytesWithAggregatesFilter<"deliveryroutes"> | Uint8Array
    EndLocation?: BytesWithAggregatesFilter<"deliveryroutes"> | Uint8Array
  }

  export type deliveryCreateInput = {
    OrderID: number
    DeliveryPersonID?: number | null
    AssignedAt?: Date | string | null
    DeliveredAt?: Date | string | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus
  }

  export type deliveryUncheckedCreateInput = {
    DeliveryID?: number
    OrderID: number
    DeliveryPersonID?: number | null
    AssignedAt?: Date | string | null
    DeliveredAt?: Date | string | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus
  }

  export type deliveryUpdateInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryUncheckedUpdateInput = {
    DeliveryID?: IntFieldUpdateOperationsInput | number
    OrderID?: IntFieldUpdateOperationsInput | number
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryCreateManyInput = {
    DeliveryID?: number
    OrderID: number
    DeliveryPersonID?: number | null
    AssignedAt?: Date | string | null
    DeliveredAt?: Date | string | null
    DeliveryStatus: $Enums.delivery_DeliveryStatus
  }

  export type deliveryUpdateManyMutationInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryUncheckedUpdateManyInput = {
    DeliveryID?: IntFieldUpdateOperationsInput | number
    OrderID?: IntFieldUpdateOperationsInput | number
    DeliveryPersonID?: NullableIntFieldUpdateOperationsInput | number | null
    AssignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryStatus?: Enumdelivery_DeliveryStatusFieldUpdateOperationsInput | $Enums.delivery_DeliveryStatus
  }

  export type deliveryroutesCreateInput = {
    DeliveryID: number
    StartLocation: Uint8Array
    EndLocation: Uint8Array
  }

  export type deliveryroutesUncheckedCreateInput = {
    RouteID?: number
    DeliveryID: number
    StartLocation: Uint8Array
    EndLocation: Uint8Array
  }

  export type deliveryroutesUpdateInput = {
    DeliveryID?: IntFieldUpdateOperationsInput | number
    StartLocation?: BytesFieldUpdateOperationsInput | Uint8Array
    EndLocation?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type deliveryroutesUncheckedUpdateInput = {
    RouteID?: IntFieldUpdateOperationsInput | number
    DeliveryID?: IntFieldUpdateOperationsInput | number
    StartLocation?: BytesFieldUpdateOperationsInput | Uint8Array
    EndLocation?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type deliveryroutesCreateManyInput = {
    RouteID?: number
    DeliveryID: number
    StartLocation: Uint8Array
    EndLocation: Uint8Array
  }

  export type deliveryroutesUpdateManyMutationInput = {
    DeliveryID?: IntFieldUpdateOperationsInput | number
    StartLocation?: BytesFieldUpdateOperationsInput | Uint8Array
    EndLocation?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type deliveryroutesUncheckedUpdateManyInput = {
    RouteID?: IntFieldUpdateOperationsInput | number
    DeliveryID?: IntFieldUpdateOperationsInput | number
    StartLocation?: BytesFieldUpdateOperationsInput | Uint8Array
    EndLocation?: BytesFieldUpdateOperationsInput | Uint8Array
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

  export type Enumdelivery_DeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type Enumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type deliveryroutesCountOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
    StartLocation?: SortOrder
    EndLocation?: SortOrder
  }

  export type deliveryroutesAvgOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
  }

  export type deliveryroutesMaxOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
    StartLocation?: SortOrder
    EndLocation?: SortOrder
  }

  export type deliveryroutesMinOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
    StartLocation?: SortOrder
    EndLocation?: SortOrder
  }

  export type deliveryroutesSumOrderByAggregateInput = {
    RouteID?: SortOrder
    DeliveryID?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumdelivery_DeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.delivery_DeliveryStatus
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
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

  export type NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
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

  export type NestedEnumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_DeliveryStatus | Enumdelivery_DeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.delivery_DeliveryStatus[]
    notIn?: $Enums.delivery_DeliveryStatus[]
    not?: NestedEnumdelivery_DeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.delivery_DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumdelivery_DeliveryStatusFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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