
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
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model estados
 * 
 */
export type estados = $Result.DefaultSelection<Prisma.$estadosPayload>
/**
 * Model informe_link
 * 
 */
export type informe_link = $Result.DefaultSelection<Prisma.$informe_linkPayload>
/**
 * Model posicion
 * 
 */
export type posicion = $Result.DefaultSelection<Prisma.$posicionPayload>
/**
 * Model prioridad
 * 
 */
export type prioridad = $Result.DefaultSelection<Prisma.$prioridadPayload>
/**
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model sector
 * 
 */
export type sector = $Result.DefaultSelection<Prisma.$sectorPayload>
/**
 * Model sub_categorias
 * 
 */
export type sub_categorias = $Result.DefaultSelection<Prisma.$sub_categoriasPayload>
/**
 * Model ticket
 * 
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>
/**
 * Model user_inform
 * 
 */
export type user_inform = $Result.DefaultSelection<Prisma.$user_informPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
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
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estados`: Exposes CRUD operations for the **estados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estados.findMany()
    * ```
    */
  get estados(): Prisma.estadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.informe_link`: Exposes CRUD operations for the **informe_link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Informe_links
    * const informe_links = await prisma.informe_link.findMany()
    * ```
    */
  get informe_link(): Prisma.informe_linkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posicion`: Exposes CRUD operations for the **posicion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posicions
    * const posicions = await prisma.posicion.findMany()
    * ```
    */
  get posicion(): Prisma.posicionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prioridad`: Exposes CRUD operations for the **prioridad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prioridads
    * const prioridads = await prisma.prioridad.findMany()
    * ```
    */
  get prioridad(): Prisma.prioridadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sector`: Exposes CRUD operations for the **sector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sectors
    * const sectors = await prisma.sector.findMany()
    * ```
    */
  get sector(): Prisma.sectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sub_categorias`: Exposes CRUD operations for the **sub_categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_categorias
    * const sub_categorias = await prisma.sub_categorias.findMany()
    * ```
    */
  get sub_categorias(): Prisma.sub_categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_inform`: Exposes CRUD operations for the **user_inform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_informs
    * const user_informs = await prisma.user_inform.findMany()
    * ```
    */
  get user_inform(): Prisma.user_informDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    categoria: 'categoria',
    estados: 'estados',
    informe_link: 'informe_link',
    posicion: 'posicion',
    prioridad: 'prioridad',
    rol: 'rol',
    sector: 'sector',
    sub_categorias: 'sub_categorias',
    ticket: 'ticket',
    user_inform: 'user_inform',
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
      modelProps: "categoria" | "estados" | "informe_link" | "posicion" | "prioridad" | "rol" | "sector" | "sub_categorias" | "ticket" | "user_inform" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      estados: {
        payload: Prisma.$estadosPayload<ExtArgs>
        fields: Prisma.estadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>
          }
          findFirst: {
            args: Prisma.estadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>
          }
          findMany: {
            args: Prisma.estadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>[]
          }
          create: {
            args: Prisma.estadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>
          }
          createMany: {
            args: Prisma.estadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>[]
          }
          delete: {
            args: Prisma.estadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>
          }
          update: {
            args: Prisma.estadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>
          }
          deleteMany: {
            args: Prisma.estadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>[]
          }
          upsert: {
            args: Prisma.estadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosPayload>
          }
          aggregate: {
            args: Prisma.EstadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstados>
          }
          groupBy: {
            args: Prisma.estadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.estadosCountArgs<ExtArgs>
            result: $Utils.Optional<EstadosCountAggregateOutputType> | number
          }
        }
      }
      informe_link: {
        payload: Prisma.$informe_linkPayload<ExtArgs>
        fields: Prisma.informe_linkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.informe_linkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.informe_linkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>
          }
          findFirst: {
            args: Prisma.informe_linkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.informe_linkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>
          }
          findMany: {
            args: Prisma.informe_linkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>[]
          }
          create: {
            args: Prisma.informe_linkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>
          }
          createMany: {
            args: Prisma.informe_linkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.informe_linkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>[]
          }
          delete: {
            args: Prisma.informe_linkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>
          }
          update: {
            args: Prisma.informe_linkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>
          }
          deleteMany: {
            args: Prisma.informe_linkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.informe_linkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.informe_linkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>[]
          }
          upsert: {
            args: Prisma.informe_linkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informe_linkPayload>
          }
          aggregate: {
            args: Prisma.Informe_linkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInforme_link>
          }
          groupBy: {
            args: Prisma.informe_linkGroupByArgs<ExtArgs>
            result: $Utils.Optional<Informe_linkGroupByOutputType>[]
          }
          count: {
            args: Prisma.informe_linkCountArgs<ExtArgs>
            result: $Utils.Optional<Informe_linkCountAggregateOutputType> | number
          }
        }
      }
      posicion: {
        payload: Prisma.$posicionPayload<ExtArgs>
        fields: Prisma.posicionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posicionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posicionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>
          }
          findFirst: {
            args: Prisma.posicionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posicionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>
          }
          findMany: {
            args: Prisma.posicionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>[]
          }
          create: {
            args: Prisma.posicionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>
          }
          createMany: {
            args: Prisma.posicionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.posicionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>[]
          }
          delete: {
            args: Prisma.posicionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>
          }
          update: {
            args: Prisma.posicionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>
          }
          deleteMany: {
            args: Prisma.posicionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.posicionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.posicionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>[]
          }
          upsert: {
            args: Prisma.posicionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicionPayload>
          }
          aggregate: {
            args: Prisma.PosicionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosicion>
          }
          groupBy: {
            args: Prisma.posicionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosicionGroupByOutputType>[]
          }
          count: {
            args: Prisma.posicionCountArgs<ExtArgs>
            result: $Utils.Optional<PosicionCountAggregateOutputType> | number
          }
        }
      }
      prioridad: {
        payload: Prisma.$prioridadPayload<ExtArgs>
        fields: Prisma.prioridadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prioridadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prioridadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>
          }
          findFirst: {
            args: Prisma.prioridadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prioridadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>
          }
          findMany: {
            args: Prisma.prioridadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>[]
          }
          create: {
            args: Prisma.prioridadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>
          }
          createMany: {
            args: Prisma.prioridadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prioridadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>[]
          }
          delete: {
            args: Prisma.prioridadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>
          }
          update: {
            args: Prisma.prioridadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>
          }
          deleteMany: {
            args: Prisma.prioridadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prioridadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prioridadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>[]
          }
          upsert: {
            args: Prisma.prioridadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioridadPayload>
          }
          aggregate: {
            args: Prisma.PrioridadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrioridad>
          }
          groupBy: {
            args: Prisma.prioridadGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrioridadGroupByOutputType>[]
          }
          count: {
            args: Prisma.prioridadCountArgs<ExtArgs>
            result: $Utils.Optional<PrioridadCountAggregateOutputType> | number
          }
        }
      }
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      sector: {
        payload: Prisma.$sectorPayload<ExtArgs>
        fields: Prisma.sectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          findFirst: {
            args: Prisma.sectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          findMany: {
            args: Prisma.sectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>[]
          }
          create: {
            args: Prisma.sectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          createMany: {
            args: Prisma.sectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>[]
          }
          delete: {
            args: Prisma.sectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          update: {
            args: Prisma.sectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          deleteMany: {
            args: Prisma.sectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>[]
          }
          upsert: {
            args: Prisma.sectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          aggregate: {
            args: Prisma.SectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSector>
          }
          groupBy: {
            args: Prisma.sectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.sectorCountArgs<ExtArgs>
            result: $Utils.Optional<SectorCountAggregateOutputType> | number
          }
        }
      }
      sub_categorias: {
        payload: Prisma.$sub_categoriasPayload<ExtArgs>
        fields: Prisma.sub_categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sub_categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sub_categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>
          }
          findFirst: {
            args: Prisma.sub_categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sub_categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>
          }
          findMany: {
            args: Prisma.sub_categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>[]
          }
          create: {
            args: Prisma.sub_categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>
          }
          createMany: {
            args: Prisma.sub_categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sub_categoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>[]
          }
          delete: {
            args: Prisma.sub_categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>
          }
          update: {
            args: Prisma.sub_categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>
          }
          deleteMany: {
            args: Prisma.sub_categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sub_categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sub_categoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>[]
          }
          upsert: {
            args: Prisma.sub_categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriasPayload>
          }
          aggregate: {
            args: Prisma.Sub_categoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub_categorias>
          }
          groupBy: {
            args: Prisma.sub_categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sub_categoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.sub_categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<Sub_categoriasCountAggregateOutputType> | number
          }
        }
      }
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>
        fields: Prisma.ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ticketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      user_inform: {
        payload: Prisma.$user_informPayload<ExtArgs>
        fields: Prisma.user_informFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_informFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_informFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>
          }
          findFirst: {
            args: Prisma.user_informFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_informFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>
          }
          findMany: {
            args: Prisma.user_informFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>[]
          }
          create: {
            args: Prisma.user_informCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>
          }
          createMany: {
            args: Prisma.user_informCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_informCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>[]
          }
          delete: {
            args: Prisma.user_informDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>
          }
          update: {
            args: Prisma.user_informUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>
          }
          deleteMany: {
            args: Prisma.user_informDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_informUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_informUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>[]
          }
          upsert: {
            args: Prisma.user_informUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informPayload>
          }
          aggregate: {
            args: Prisma.User_informAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_inform>
          }
          groupBy: {
            args: Prisma.user_informGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_informGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_informCountArgs<ExtArgs>
            result: $Utils.Optional<User_informCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    categoria?: categoriaOmit
    estados?: estadosOmit
    informe_link?: informe_linkOmit
    posicion?: posicionOmit
    prioridad?: prioridadOmit
    rol?: rolOmit
    sector?: sectorOmit
    sub_categorias?: sub_categoriasOmit
    ticket?: ticketOmit
    user_inform?: user_informOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    tickets: number
    sub_categorias: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CategoriaCountOutputTypeCountTicketsArgs
    sub_categorias?: boolean | CategoriaCountOutputTypeCountSub_categoriasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountSub_categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_categoriasWhereInput
  }


  /**
   * Count Type EstadosCountOutputType
   */

  export type EstadosCountOutputType = {
    tickets: number
  }

  export type EstadosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | EstadosCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * EstadosCountOutputType without action
   */
  export type EstadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadosCountOutputType
     */
    select?: EstadosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadosCountOutputType without action
   */
  export type EstadosCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type Informe_linkCountOutputType
   */

  export type Informe_linkCountOutputType = {
    user_informs: number
  }

  export type Informe_linkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_informs?: boolean | Informe_linkCountOutputTypeCountUser_informsArgs
  }

  // Custom InputTypes
  /**
   * Informe_linkCountOutputType without action
   */
  export type Informe_linkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Informe_linkCountOutputType
     */
    select?: Informe_linkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Informe_linkCountOutputType without action
   */
  export type Informe_linkCountOutputTypeCountUser_informsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_informWhereInput
  }


  /**
   * Count Type PosicionCountOutputType
   */

  export type PosicionCountOutputType = {
    users: number
  }

  export type PosicionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PosicionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PosicionCountOutputType without action
   */
  export type PosicionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicionCountOutputType
     */
    select?: PosicionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PosicionCountOutputType without action
   */
  export type PosicionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type PrioridadCountOutputType
   */

  export type PrioridadCountOutputType = {
    tickets: number
  }

  export type PrioridadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | PrioridadCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * PrioridadCountOutputType without action
   */
  export type PrioridadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioridadCountOutputType
     */
    select?: PrioridadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrioridadCountOutputType without action
   */
  export type PrioridadCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type SectorCountOutputType
   */

  export type SectorCountOutputType = {
    tickets: number
    users: number
  }

  export type SectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | SectorCountOutputTypeCountTicketsArgs
    users?: boolean | SectorCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorCountOutputType
     */
    select?: SectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type Sub_categoriasCountOutputType
   */

  export type Sub_categoriasCountOutputType = {
    tickets: number
  }

  export type Sub_categoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Sub_categoriasCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * Sub_categoriasCountOutputType without action
   */
  export type Sub_categoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_categoriasCountOutputType
     */
    select?: Sub_categoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sub_categoriasCountOutputType without action
   */
  export type Sub_categoriasCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    autorizados: number
    tickets: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autorizados?: boolean | UsersCountOutputTypeCountAutorizadosArgs
    tickets?: boolean | UsersCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAutorizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    created_at: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    created_at: Date
    nombre: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    tickets?: boolean | categoria$ticketsArgs<ExtArgs>
    sub_categorias?: boolean | categoria$sub_categoriasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectScalar = {
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nombre", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | categoria$ticketsArgs<ExtArgs>
    sub_categorias?: boolean | categoria$sub_categoriasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      tickets: Prisma.$ticketPayload<ExtArgs>[]
      sub_categorias: Prisma.$sub_categoriasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      nombre: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
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
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends categoria$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, categoria$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sub_categorias<T extends categoria$sub_categoriasArgs<ExtArgs> = {}>(args?: Subset<T, categoria$sub_categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id: FieldRef<"categoria", 'Int'>
    readonly created_at: FieldRef<"categoria", 'DateTime'>
    readonly nombre: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data?: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria createManyAndReturn
   */
  export type categoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria updateManyAndReturn
   */
  export type categoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.tickets
   */
  export type categoria$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * categoria.sub_categorias
   */
  export type categoria$sub_categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    where?: sub_categoriasWhereInput
    orderBy?: sub_categoriasOrderByWithRelationInput | sub_categoriasOrderByWithRelationInput[]
    cursor?: sub_categoriasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_categoriasScalarFieldEnum | Sub_categoriasScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model estados
   */

  export type AggregateEstados = {
    _count: EstadosCountAggregateOutputType | null
    _avg: EstadosAvgAggregateOutputType | null
    _sum: EstadosSumAggregateOutputType | null
    _min: EstadosMinAggregateOutputType | null
    _max: EstadosMaxAggregateOutputType | null
  }

  export type EstadosAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadosSumAggregateOutputType = {
    id: number | null
  }

  export type EstadosMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type EstadosMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type EstadosCountAggregateOutputType = {
    id: number
    created_at: number
    nombre: number
    _all: number
  }


  export type EstadosAvgAggregateInputType = {
    id?: true
  }

  export type EstadosSumAggregateInputType = {
    id?: true
  }

  export type EstadosMinAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type EstadosMaxAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type EstadosCountAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    _all?: true
  }

  export type EstadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados to aggregate.
     */
    where?: estadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadosOrderByWithRelationInput | estadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estados
    **/
    _count?: true | EstadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadosMaxAggregateInputType
  }

  export type GetEstadosAggregateType<T extends EstadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEstados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstados[P]>
      : GetScalarType<T[P], AggregateEstados[P]>
  }




  export type estadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estadosWhereInput
    orderBy?: estadosOrderByWithAggregationInput | estadosOrderByWithAggregationInput[]
    by: EstadosScalarFieldEnum[] | EstadosScalarFieldEnum
    having?: estadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadosCountAggregateInputType | true
    _avg?: EstadosAvgAggregateInputType
    _sum?: EstadosSumAggregateInputType
    _min?: EstadosMinAggregateInputType
    _max?: EstadosMaxAggregateInputType
  }

  export type EstadosGroupByOutputType = {
    id: number
    created_at: Date
    nombre: string | null
    _count: EstadosCountAggregateOutputType | null
    _avg: EstadosAvgAggregateOutputType | null
    _sum: EstadosSumAggregateOutputType | null
    _min: EstadosMinAggregateOutputType | null
    _max: EstadosMaxAggregateOutputType | null
  }

  type GetEstadosGroupByPayload<T extends estadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadosGroupByOutputType[P]>
            : GetScalarType<T[P], EstadosGroupByOutputType[P]>
        }
      >
    >


  export type estadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    tickets?: boolean | estados$ticketsArgs<ExtArgs>
    _count?: boolean | EstadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estados"]>

  export type estadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estados"]>

  export type estadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estados"]>

  export type estadosSelectScalar = {
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }

  export type estadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nombre", ExtArgs["result"]["estados"]>
  export type estadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | estados$ticketsArgs<ExtArgs>
    _count?: boolean | EstadosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type estadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type estadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $estadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estados"
    objects: {
      tickets: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      nombre: string | null
    }, ExtArgs["result"]["estados"]>
    composites: {}
  }

  type estadosGetPayload<S extends boolean | null | undefined | estadosDefaultArgs> = $Result.GetResult<Prisma.$estadosPayload, S>

  type estadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadosCountAggregateInputType | true
    }

  export interface estadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estados'], meta: { name: 'estados' } }
    /**
     * Find zero or one Estados that matches the filter.
     * @param {estadosFindUniqueArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estadosFindUniqueArgs>(args: SelectSubset<T, estadosFindUniqueArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estadosFindUniqueOrThrowArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estadosFindUniqueOrThrowArgs>(args: SelectSubset<T, estadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosFindFirstArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estadosFindFirstArgs>(args?: SelectSubset<T, estadosFindFirstArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosFindFirstOrThrowArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estadosFindFirstOrThrowArgs>(args?: SelectSubset<T, estadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estados.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadosWithIdOnly = await prisma.estados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estadosFindManyArgs>(args?: SelectSubset<T, estadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estados.
     * @param {estadosCreateArgs} args - Arguments to create a Estados.
     * @example
     * // Create one Estados
     * const Estados = await prisma.estados.create({
     *   data: {
     *     // ... data to create a Estados
     *   }
     * })
     * 
     */
    create<T extends estadosCreateArgs>(args: SelectSubset<T, estadosCreateArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {estadosCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estados = await prisma.estados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estadosCreateManyArgs>(args?: SelectSubset<T, estadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {estadosCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estados = await prisma.estados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id`
     * const estadosWithIdOnly = await prisma.estados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estadosCreateManyAndReturnArgs>(args?: SelectSubset<T, estadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estados.
     * @param {estadosDeleteArgs} args - Arguments to delete one Estados.
     * @example
     * // Delete one Estados
     * const Estados = await prisma.estados.delete({
     *   where: {
     *     // ... filter to delete one Estados
     *   }
     * })
     * 
     */
    delete<T extends estadosDeleteArgs>(args: SelectSubset<T, estadosDeleteArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estados.
     * @param {estadosUpdateArgs} args - Arguments to update one Estados.
     * @example
     * // Update one Estados
     * const estados = await prisma.estados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estadosUpdateArgs>(args: SelectSubset<T, estadosUpdateArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {estadosDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estadosDeleteManyArgs>(args?: SelectSubset<T, estadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estados = await prisma.estados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estadosUpdateManyArgs>(args: SelectSubset<T, estadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {estadosUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estados = await prisma.estados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id`
     * const estadosWithIdOnly = await prisma.estados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends estadosUpdateManyAndReturnArgs>(args: SelectSubset<T, estadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estados.
     * @param {estadosUpsertArgs} args - Arguments to update or create a Estados.
     * @example
     * // Update or create a Estados
     * const estados = await prisma.estados.upsert({
     *   create: {
     *     // ... data to create a Estados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estados we want to update
     *   }
     * })
     */
    upsert<T extends estadosUpsertArgs>(args: SelectSubset<T, estadosUpsertArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estados.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends estadosCountArgs>(
      args?: Subset<T, estadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadosAggregateArgs>(args: Subset<T, EstadosAggregateArgs>): Prisma.PrismaPromise<GetEstadosAggregateType<T>>

    /**
     * Group by Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosGroupByArgs} args - Group by arguments.
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
      T extends estadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estadosGroupByArgs['orderBy'] }
        : { orderBy?: estadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estados model
   */
  readonly fields: estadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends estados$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, estados$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the estados model
   */
  interface estadosFieldRefs {
    readonly id: FieldRef<"estados", 'Int'>
    readonly created_at: FieldRef<"estados", 'DateTime'>
    readonly nombre: FieldRef<"estados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estados findUnique
   */
  export type estadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where: estadosWhereUniqueInput
  }

  /**
   * estados findUniqueOrThrow
   */
  export type estadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where: estadosWhereUniqueInput
  }

  /**
   * estados findFirst
   */
  export type estadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where?: estadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadosOrderByWithRelationInput | estadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * estados findFirstOrThrow
   */
  export type estadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where?: estadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadosOrderByWithRelationInput | estadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * estados findMany
   */
  export type estadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where?: estadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadosOrderByWithRelationInput | estadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estados.
     */
    cursor?: estadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * estados create
   */
  export type estadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * The data needed to create a estados.
     */
    data?: XOR<estadosCreateInput, estadosUncheckedCreateInput>
  }

  /**
   * estados createMany
   */
  export type estadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estados.
     */
    data: estadosCreateManyInput | estadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estados createManyAndReturn
   */
  export type estadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * The data used to create many estados.
     */
    data: estadosCreateManyInput | estadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estados update
   */
  export type estadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * The data needed to update a estados.
     */
    data: XOR<estadosUpdateInput, estadosUncheckedUpdateInput>
    /**
     * Choose, which estados to update.
     */
    where: estadosWhereUniqueInput
  }

  /**
   * estados updateMany
   */
  export type estadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estados.
     */
    data: XOR<estadosUpdateManyMutationInput, estadosUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadosWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estados updateManyAndReturn
   */
  export type estadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * The data used to update estados.
     */
    data: XOR<estadosUpdateManyMutationInput, estadosUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadosWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estados upsert
   */
  export type estadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * The filter to search for the estados to update in case it exists.
     */
    where: estadosWhereUniqueInput
    /**
     * In case the estados found by the `where` argument doesn't exist, create a new estados with this data.
     */
    create: XOR<estadosCreateInput, estadosUncheckedCreateInput>
    /**
     * In case the estados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estadosUpdateInput, estadosUncheckedUpdateInput>
  }

  /**
   * estados delete
   */
  export type estadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    /**
     * Filter which estados to delete.
     */
    where: estadosWhereUniqueInput
  }

  /**
   * estados deleteMany
   */
  export type estadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados to delete
     */
    where?: estadosWhereInput
    /**
     * Limit how many estados to delete.
     */
    limit?: number
  }

  /**
   * estados.tickets
   */
  export type estados$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * estados without action
   */
  export type estadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
  }


  /**
   * Model informe_link
   */

  export type AggregateInforme_link = {
    _count: Informe_linkCountAggregateOutputType | null
    _avg: Informe_linkAvgAggregateOutputType | null
    _sum: Informe_linkSumAggregateOutputType | null
    _min: Informe_linkMinAggregateOutputType | null
    _max: Informe_linkMaxAggregateOutputType | null
  }

  export type Informe_linkAvgAggregateOutputType = {
    id: number | null
  }

  export type Informe_linkSumAggregateOutputType = {
    id: number | null
  }

  export type Informe_linkMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    link: string | null
  }

  export type Informe_linkMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    link: string | null
  }

  export type Informe_linkCountAggregateOutputType = {
    id: number
    created_at: number
    link: number
    _all: number
  }


  export type Informe_linkAvgAggregateInputType = {
    id?: true
  }

  export type Informe_linkSumAggregateInputType = {
    id?: true
  }

  export type Informe_linkMinAggregateInputType = {
    id?: true
    created_at?: true
    link?: true
  }

  export type Informe_linkMaxAggregateInputType = {
    id?: true
    created_at?: true
    link?: true
  }

  export type Informe_linkCountAggregateInputType = {
    id?: true
    created_at?: true
    link?: true
    _all?: true
  }

  export type Informe_linkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which informe_link to aggregate.
     */
    where?: informe_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informe_links to fetch.
     */
    orderBy?: informe_linkOrderByWithRelationInput | informe_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: informe_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informe_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informe_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned informe_links
    **/
    _count?: true | Informe_linkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Informe_linkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Informe_linkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Informe_linkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Informe_linkMaxAggregateInputType
  }

  export type GetInforme_linkAggregateType<T extends Informe_linkAggregateArgs> = {
        [P in keyof T & keyof AggregateInforme_link]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInforme_link[P]>
      : GetScalarType<T[P], AggregateInforme_link[P]>
  }




  export type informe_linkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: informe_linkWhereInput
    orderBy?: informe_linkOrderByWithAggregationInput | informe_linkOrderByWithAggregationInput[]
    by: Informe_linkScalarFieldEnum[] | Informe_linkScalarFieldEnum
    having?: informe_linkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Informe_linkCountAggregateInputType | true
    _avg?: Informe_linkAvgAggregateInputType
    _sum?: Informe_linkSumAggregateInputType
    _min?: Informe_linkMinAggregateInputType
    _max?: Informe_linkMaxAggregateInputType
  }

  export type Informe_linkGroupByOutputType = {
    id: number
    created_at: Date
    link: string | null
    _count: Informe_linkCountAggregateOutputType | null
    _avg: Informe_linkAvgAggregateOutputType | null
    _sum: Informe_linkSumAggregateOutputType | null
    _min: Informe_linkMinAggregateOutputType | null
    _max: Informe_linkMaxAggregateOutputType | null
  }

  type GetInforme_linkGroupByPayload<T extends informe_linkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Informe_linkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Informe_linkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Informe_linkGroupByOutputType[P]>
            : GetScalarType<T[P], Informe_linkGroupByOutputType[P]>
        }
      >
    >


  export type informe_linkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    link?: boolean
    user_informs?: boolean | informe_link$user_informsArgs<ExtArgs>
    _count?: boolean | Informe_linkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["informe_link"]>

  export type informe_linkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    link?: boolean
  }, ExtArgs["result"]["informe_link"]>

  export type informe_linkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    link?: boolean
  }, ExtArgs["result"]["informe_link"]>

  export type informe_linkSelectScalar = {
    id?: boolean
    created_at?: boolean
    link?: boolean
  }

  export type informe_linkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "link", ExtArgs["result"]["informe_link"]>
  export type informe_linkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_informs?: boolean | informe_link$user_informsArgs<ExtArgs>
    _count?: boolean | Informe_linkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type informe_linkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type informe_linkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $informe_linkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "informe_link"
    objects: {
      user_informs: Prisma.$user_informPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      link: string | null
    }, ExtArgs["result"]["informe_link"]>
    composites: {}
  }

  type informe_linkGetPayload<S extends boolean | null | undefined | informe_linkDefaultArgs> = $Result.GetResult<Prisma.$informe_linkPayload, S>

  type informe_linkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<informe_linkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Informe_linkCountAggregateInputType | true
    }

  export interface informe_linkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['informe_link'], meta: { name: 'informe_link' } }
    /**
     * Find zero or one Informe_link that matches the filter.
     * @param {informe_linkFindUniqueArgs} args - Arguments to find a Informe_link
     * @example
     * // Get one Informe_link
     * const informe_link = await prisma.informe_link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends informe_linkFindUniqueArgs>(args: SelectSubset<T, informe_linkFindUniqueArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Informe_link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {informe_linkFindUniqueOrThrowArgs} args - Arguments to find a Informe_link
     * @example
     * // Get one Informe_link
     * const informe_link = await prisma.informe_link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends informe_linkFindUniqueOrThrowArgs>(args: SelectSubset<T, informe_linkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Informe_link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informe_linkFindFirstArgs} args - Arguments to find a Informe_link
     * @example
     * // Get one Informe_link
     * const informe_link = await prisma.informe_link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends informe_linkFindFirstArgs>(args?: SelectSubset<T, informe_linkFindFirstArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Informe_link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informe_linkFindFirstOrThrowArgs} args - Arguments to find a Informe_link
     * @example
     * // Get one Informe_link
     * const informe_link = await prisma.informe_link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends informe_linkFindFirstOrThrowArgs>(args?: SelectSubset<T, informe_linkFindFirstOrThrowArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Informe_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informe_linkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Informe_links
     * const informe_links = await prisma.informe_link.findMany()
     * 
     * // Get first 10 Informe_links
     * const informe_links = await prisma.informe_link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const informe_linkWithIdOnly = await prisma.informe_link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends informe_linkFindManyArgs>(args?: SelectSubset<T, informe_linkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Informe_link.
     * @param {informe_linkCreateArgs} args - Arguments to create a Informe_link.
     * @example
     * // Create one Informe_link
     * const Informe_link = await prisma.informe_link.create({
     *   data: {
     *     // ... data to create a Informe_link
     *   }
     * })
     * 
     */
    create<T extends informe_linkCreateArgs>(args: SelectSubset<T, informe_linkCreateArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Informe_links.
     * @param {informe_linkCreateManyArgs} args - Arguments to create many Informe_links.
     * @example
     * // Create many Informe_links
     * const informe_link = await prisma.informe_link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends informe_linkCreateManyArgs>(args?: SelectSubset<T, informe_linkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Informe_links and returns the data saved in the database.
     * @param {informe_linkCreateManyAndReturnArgs} args - Arguments to create many Informe_links.
     * @example
     * // Create many Informe_links
     * const informe_link = await prisma.informe_link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Informe_links and only return the `id`
     * const informe_linkWithIdOnly = await prisma.informe_link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends informe_linkCreateManyAndReturnArgs>(args?: SelectSubset<T, informe_linkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Informe_link.
     * @param {informe_linkDeleteArgs} args - Arguments to delete one Informe_link.
     * @example
     * // Delete one Informe_link
     * const Informe_link = await prisma.informe_link.delete({
     *   where: {
     *     // ... filter to delete one Informe_link
     *   }
     * })
     * 
     */
    delete<T extends informe_linkDeleteArgs>(args: SelectSubset<T, informe_linkDeleteArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Informe_link.
     * @param {informe_linkUpdateArgs} args - Arguments to update one Informe_link.
     * @example
     * // Update one Informe_link
     * const informe_link = await prisma.informe_link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends informe_linkUpdateArgs>(args: SelectSubset<T, informe_linkUpdateArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Informe_links.
     * @param {informe_linkDeleteManyArgs} args - Arguments to filter Informe_links to delete.
     * @example
     * // Delete a few Informe_links
     * const { count } = await prisma.informe_link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends informe_linkDeleteManyArgs>(args?: SelectSubset<T, informe_linkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Informe_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informe_linkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Informe_links
     * const informe_link = await prisma.informe_link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends informe_linkUpdateManyArgs>(args: SelectSubset<T, informe_linkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Informe_links and returns the data updated in the database.
     * @param {informe_linkUpdateManyAndReturnArgs} args - Arguments to update many Informe_links.
     * @example
     * // Update many Informe_links
     * const informe_link = await prisma.informe_link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Informe_links and only return the `id`
     * const informe_linkWithIdOnly = await prisma.informe_link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends informe_linkUpdateManyAndReturnArgs>(args: SelectSubset<T, informe_linkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Informe_link.
     * @param {informe_linkUpsertArgs} args - Arguments to update or create a Informe_link.
     * @example
     * // Update or create a Informe_link
     * const informe_link = await prisma.informe_link.upsert({
     *   create: {
     *     // ... data to create a Informe_link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Informe_link we want to update
     *   }
     * })
     */
    upsert<T extends informe_linkUpsertArgs>(args: SelectSubset<T, informe_linkUpsertArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Informe_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informe_linkCountArgs} args - Arguments to filter Informe_links to count.
     * @example
     * // Count the number of Informe_links
     * const count = await prisma.informe_link.count({
     *   where: {
     *     // ... the filter for the Informe_links we want to count
     *   }
     * })
    **/
    count<T extends informe_linkCountArgs>(
      args?: Subset<T, informe_linkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Informe_linkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Informe_link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Informe_linkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Informe_linkAggregateArgs>(args: Subset<T, Informe_linkAggregateArgs>): Prisma.PrismaPromise<GetInforme_linkAggregateType<T>>

    /**
     * Group by Informe_link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informe_linkGroupByArgs} args - Group by arguments.
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
      T extends informe_linkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: informe_linkGroupByArgs['orderBy'] }
        : { orderBy?: informe_linkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, informe_linkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInforme_linkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the informe_link model
   */
  readonly fields: informe_linkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for informe_link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__informe_linkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_informs<T extends informe_link$user_informsArgs<ExtArgs> = {}>(args?: Subset<T, informe_link$user_informsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the informe_link model
   */
  interface informe_linkFieldRefs {
    readonly id: FieldRef<"informe_link", 'Int'>
    readonly created_at: FieldRef<"informe_link", 'DateTime'>
    readonly link: FieldRef<"informe_link", 'String'>
  }
    

  // Custom InputTypes
  /**
   * informe_link findUnique
   */
  export type informe_linkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * Filter, which informe_link to fetch.
     */
    where: informe_linkWhereUniqueInput
  }

  /**
   * informe_link findUniqueOrThrow
   */
  export type informe_linkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * Filter, which informe_link to fetch.
     */
    where: informe_linkWhereUniqueInput
  }

  /**
   * informe_link findFirst
   */
  export type informe_linkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * Filter, which informe_link to fetch.
     */
    where?: informe_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informe_links to fetch.
     */
    orderBy?: informe_linkOrderByWithRelationInput | informe_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for informe_links.
     */
    cursor?: informe_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informe_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informe_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of informe_links.
     */
    distinct?: Informe_linkScalarFieldEnum | Informe_linkScalarFieldEnum[]
  }

  /**
   * informe_link findFirstOrThrow
   */
  export type informe_linkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * Filter, which informe_link to fetch.
     */
    where?: informe_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informe_links to fetch.
     */
    orderBy?: informe_linkOrderByWithRelationInput | informe_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for informe_links.
     */
    cursor?: informe_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informe_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informe_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of informe_links.
     */
    distinct?: Informe_linkScalarFieldEnum | Informe_linkScalarFieldEnum[]
  }

  /**
   * informe_link findMany
   */
  export type informe_linkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * Filter, which informe_links to fetch.
     */
    where?: informe_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informe_links to fetch.
     */
    orderBy?: informe_linkOrderByWithRelationInput | informe_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing informe_links.
     */
    cursor?: informe_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informe_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informe_links.
     */
    skip?: number
    distinct?: Informe_linkScalarFieldEnum | Informe_linkScalarFieldEnum[]
  }

  /**
   * informe_link create
   */
  export type informe_linkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * The data needed to create a informe_link.
     */
    data?: XOR<informe_linkCreateInput, informe_linkUncheckedCreateInput>
  }

  /**
   * informe_link createMany
   */
  export type informe_linkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many informe_links.
     */
    data: informe_linkCreateManyInput | informe_linkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * informe_link createManyAndReturn
   */
  export type informe_linkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * The data used to create many informe_links.
     */
    data: informe_linkCreateManyInput | informe_linkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * informe_link update
   */
  export type informe_linkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * The data needed to update a informe_link.
     */
    data: XOR<informe_linkUpdateInput, informe_linkUncheckedUpdateInput>
    /**
     * Choose, which informe_link to update.
     */
    where: informe_linkWhereUniqueInput
  }

  /**
   * informe_link updateMany
   */
  export type informe_linkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update informe_links.
     */
    data: XOR<informe_linkUpdateManyMutationInput, informe_linkUncheckedUpdateManyInput>
    /**
     * Filter which informe_links to update
     */
    where?: informe_linkWhereInput
    /**
     * Limit how many informe_links to update.
     */
    limit?: number
  }

  /**
   * informe_link updateManyAndReturn
   */
  export type informe_linkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * The data used to update informe_links.
     */
    data: XOR<informe_linkUpdateManyMutationInput, informe_linkUncheckedUpdateManyInput>
    /**
     * Filter which informe_links to update
     */
    where?: informe_linkWhereInput
    /**
     * Limit how many informe_links to update.
     */
    limit?: number
  }

  /**
   * informe_link upsert
   */
  export type informe_linkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * The filter to search for the informe_link to update in case it exists.
     */
    where: informe_linkWhereUniqueInput
    /**
     * In case the informe_link found by the `where` argument doesn't exist, create a new informe_link with this data.
     */
    create: XOR<informe_linkCreateInput, informe_linkUncheckedCreateInput>
    /**
     * In case the informe_link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<informe_linkUpdateInput, informe_linkUncheckedUpdateInput>
  }

  /**
   * informe_link delete
   */
  export type informe_linkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    /**
     * Filter which informe_link to delete.
     */
    where: informe_linkWhereUniqueInput
  }

  /**
   * informe_link deleteMany
   */
  export type informe_linkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which informe_links to delete
     */
    where?: informe_linkWhereInput
    /**
     * Limit how many informe_links to delete.
     */
    limit?: number
  }

  /**
   * informe_link.user_informs
   */
  export type informe_link$user_informsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    where?: user_informWhereInput
    orderBy?: user_informOrderByWithRelationInput | user_informOrderByWithRelationInput[]
    cursor?: user_informWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_informScalarFieldEnum | User_informScalarFieldEnum[]
  }

  /**
   * informe_link without action
   */
  export type informe_linkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
  }


  /**
   * Model posicion
   */

  export type AggregatePosicion = {
    _count: PosicionCountAggregateOutputType | null
    _avg: PosicionAvgAggregateOutputType | null
    _sum: PosicionSumAggregateOutputType | null
    _min: PosicionMinAggregateOutputType | null
    _max: PosicionMaxAggregateOutputType | null
  }

  export type PosicionAvgAggregateOutputType = {
    id: number | null
  }

  export type PosicionSumAggregateOutputType = {
    id: number | null
  }

  export type PosicionMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type PosicionMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type PosicionCountAggregateOutputType = {
    id: number
    created_at: number
    nombre: number
    _all: number
  }


  export type PosicionAvgAggregateInputType = {
    id?: true
  }

  export type PosicionSumAggregateInputType = {
    id?: true
  }

  export type PosicionMinAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type PosicionMaxAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type PosicionCountAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    _all?: true
  }

  export type PosicionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posicion to aggregate.
     */
    where?: posicionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicions to fetch.
     */
    orderBy?: posicionOrderByWithRelationInput | posicionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posicionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posicions
    **/
    _count?: true | PosicionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosicionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosicionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosicionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosicionMaxAggregateInputType
  }

  export type GetPosicionAggregateType<T extends PosicionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosicion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosicion[P]>
      : GetScalarType<T[P], AggregatePosicion[P]>
  }




  export type posicionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posicionWhereInput
    orderBy?: posicionOrderByWithAggregationInput | posicionOrderByWithAggregationInput[]
    by: PosicionScalarFieldEnum[] | PosicionScalarFieldEnum
    having?: posicionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosicionCountAggregateInputType | true
    _avg?: PosicionAvgAggregateInputType
    _sum?: PosicionSumAggregateInputType
    _min?: PosicionMinAggregateInputType
    _max?: PosicionMaxAggregateInputType
  }

  export type PosicionGroupByOutputType = {
    id: number
    created_at: Date
    nombre: string | null
    _count: PosicionCountAggregateOutputType | null
    _avg: PosicionAvgAggregateOutputType | null
    _sum: PosicionSumAggregateOutputType | null
    _min: PosicionMinAggregateOutputType | null
    _max: PosicionMaxAggregateOutputType | null
  }

  type GetPosicionGroupByPayload<T extends posicionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosicionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosicionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosicionGroupByOutputType[P]>
            : GetScalarType<T[P], PosicionGroupByOutputType[P]>
        }
      >
    >


  export type posicionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    users?: boolean | posicion$usersArgs<ExtArgs>
    _count?: boolean | PosicionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posicion"]>

  export type posicionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["posicion"]>

  export type posicionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["posicion"]>

  export type posicionSelectScalar = {
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }

  export type posicionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nombre", ExtArgs["result"]["posicion"]>
  export type posicionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | posicion$usersArgs<ExtArgs>
    _count?: boolean | PosicionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type posicionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type posicionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $posicionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posicion"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      nombre: string | null
    }, ExtArgs["result"]["posicion"]>
    composites: {}
  }

  type posicionGetPayload<S extends boolean | null | undefined | posicionDefaultArgs> = $Result.GetResult<Prisma.$posicionPayload, S>

  type posicionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<posicionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosicionCountAggregateInputType | true
    }

  export interface posicionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posicion'], meta: { name: 'posicion' } }
    /**
     * Find zero or one Posicion that matches the filter.
     * @param {posicionFindUniqueArgs} args - Arguments to find a Posicion
     * @example
     * // Get one Posicion
     * const posicion = await prisma.posicion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends posicionFindUniqueArgs>(args: SelectSubset<T, posicionFindUniqueArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posicion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {posicionFindUniqueOrThrowArgs} args - Arguments to find a Posicion
     * @example
     * // Get one Posicion
     * const posicion = await prisma.posicion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends posicionFindUniqueOrThrowArgs>(args: SelectSubset<T, posicionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posicion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicionFindFirstArgs} args - Arguments to find a Posicion
     * @example
     * // Get one Posicion
     * const posicion = await prisma.posicion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends posicionFindFirstArgs>(args?: SelectSubset<T, posicionFindFirstArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posicion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicionFindFirstOrThrowArgs} args - Arguments to find a Posicion
     * @example
     * // Get one Posicion
     * const posicion = await prisma.posicion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends posicionFindFirstOrThrowArgs>(args?: SelectSubset<T, posicionFindFirstOrThrowArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posicions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posicions
     * const posicions = await prisma.posicion.findMany()
     * 
     * // Get first 10 Posicions
     * const posicions = await prisma.posicion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posicionWithIdOnly = await prisma.posicion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends posicionFindManyArgs>(args?: SelectSubset<T, posicionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posicion.
     * @param {posicionCreateArgs} args - Arguments to create a Posicion.
     * @example
     * // Create one Posicion
     * const Posicion = await prisma.posicion.create({
     *   data: {
     *     // ... data to create a Posicion
     *   }
     * })
     * 
     */
    create<T extends posicionCreateArgs>(args: SelectSubset<T, posicionCreateArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posicions.
     * @param {posicionCreateManyArgs} args - Arguments to create many Posicions.
     * @example
     * // Create many Posicions
     * const posicion = await prisma.posicion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends posicionCreateManyArgs>(args?: SelectSubset<T, posicionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posicions and returns the data saved in the database.
     * @param {posicionCreateManyAndReturnArgs} args - Arguments to create many Posicions.
     * @example
     * // Create many Posicions
     * const posicion = await prisma.posicion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posicions and only return the `id`
     * const posicionWithIdOnly = await prisma.posicion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends posicionCreateManyAndReturnArgs>(args?: SelectSubset<T, posicionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posicion.
     * @param {posicionDeleteArgs} args - Arguments to delete one Posicion.
     * @example
     * // Delete one Posicion
     * const Posicion = await prisma.posicion.delete({
     *   where: {
     *     // ... filter to delete one Posicion
     *   }
     * })
     * 
     */
    delete<T extends posicionDeleteArgs>(args: SelectSubset<T, posicionDeleteArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posicion.
     * @param {posicionUpdateArgs} args - Arguments to update one Posicion.
     * @example
     * // Update one Posicion
     * const posicion = await prisma.posicion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends posicionUpdateArgs>(args: SelectSubset<T, posicionUpdateArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posicions.
     * @param {posicionDeleteManyArgs} args - Arguments to filter Posicions to delete.
     * @example
     * // Delete a few Posicions
     * const { count } = await prisma.posicion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends posicionDeleteManyArgs>(args?: SelectSubset<T, posicionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posicions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posicions
     * const posicion = await prisma.posicion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends posicionUpdateManyArgs>(args: SelectSubset<T, posicionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posicions and returns the data updated in the database.
     * @param {posicionUpdateManyAndReturnArgs} args - Arguments to update many Posicions.
     * @example
     * // Update many Posicions
     * const posicion = await prisma.posicion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posicions and only return the `id`
     * const posicionWithIdOnly = await prisma.posicion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends posicionUpdateManyAndReturnArgs>(args: SelectSubset<T, posicionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posicion.
     * @param {posicionUpsertArgs} args - Arguments to update or create a Posicion.
     * @example
     * // Update or create a Posicion
     * const posicion = await prisma.posicion.upsert({
     *   create: {
     *     // ... data to create a Posicion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posicion we want to update
     *   }
     * })
     */
    upsert<T extends posicionUpsertArgs>(args: SelectSubset<T, posicionUpsertArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posicions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicionCountArgs} args - Arguments to filter Posicions to count.
     * @example
     * // Count the number of Posicions
     * const count = await prisma.posicion.count({
     *   where: {
     *     // ... the filter for the Posicions we want to count
     *   }
     * })
    **/
    count<T extends posicionCountArgs>(
      args?: Subset<T, posicionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosicionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posicion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosicionAggregateArgs>(args: Subset<T, PosicionAggregateArgs>): Prisma.PrismaPromise<GetPosicionAggregateType<T>>

    /**
     * Group by Posicion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicionGroupByArgs} args - Group by arguments.
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
      T extends posicionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posicionGroupByArgs['orderBy'] }
        : { orderBy?: posicionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, posicionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosicionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posicion model
   */
  readonly fields: posicionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posicion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posicionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends posicion$usersArgs<ExtArgs> = {}>(args?: Subset<T, posicion$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the posicion model
   */
  interface posicionFieldRefs {
    readonly id: FieldRef<"posicion", 'Int'>
    readonly created_at: FieldRef<"posicion", 'DateTime'>
    readonly nombre: FieldRef<"posicion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * posicion findUnique
   */
  export type posicionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * Filter, which posicion to fetch.
     */
    where: posicionWhereUniqueInput
  }

  /**
   * posicion findUniqueOrThrow
   */
  export type posicionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * Filter, which posicion to fetch.
     */
    where: posicionWhereUniqueInput
  }

  /**
   * posicion findFirst
   */
  export type posicionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * Filter, which posicion to fetch.
     */
    where?: posicionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicions to fetch.
     */
    orderBy?: posicionOrderByWithRelationInput | posicionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posicions.
     */
    cursor?: posicionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posicions.
     */
    distinct?: PosicionScalarFieldEnum | PosicionScalarFieldEnum[]
  }

  /**
   * posicion findFirstOrThrow
   */
  export type posicionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * Filter, which posicion to fetch.
     */
    where?: posicionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicions to fetch.
     */
    orderBy?: posicionOrderByWithRelationInput | posicionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posicions.
     */
    cursor?: posicionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posicions.
     */
    distinct?: PosicionScalarFieldEnum | PosicionScalarFieldEnum[]
  }

  /**
   * posicion findMany
   */
  export type posicionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * Filter, which posicions to fetch.
     */
    where?: posicionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicions to fetch.
     */
    orderBy?: posicionOrderByWithRelationInput | posicionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posicions.
     */
    cursor?: posicionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicions.
     */
    skip?: number
    distinct?: PosicionScalarFieldEnum | PosicionScalarFieldEnum[]
  }

  /**
   * posicion create
   */
  export type posicionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * The data needed to create a posicion.
     */
    data?: XOR<posicionCreateInput, posicionUncheckedCreateInput>
  }

  /**
   * posicion createMany
   */
  export type posicionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posicions.
     */
    data: posicionCreateManyInput | posicionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posicion createManyAndReturn
   */
  export type posicionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * The data used to create many posicions.
     */
    data: posicionCreateManyInput | posicionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posicion update
   */
  export type posicionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * The data needed to update a posicion.
     */
    data: XOR<posicionUpdateInput, posicionUncheckedUpdateInput>
    /**
     * Choose, which posicion to update.
     */
    where: posicionWhereUniqueInput
  }

  /**
   * posicion updateMany
   */
  export type posicionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posicions.
     */
    data: XOR<posicionUpdateManyMutationInput, posicionUncheckedUpdateManyInput>
    /**
     * Filter which posicions to update
     */
    where?: posicionWhereInput
    /**
     * Limit how many posicions to update.
     */
    limit?: number
  }

  /**
   * posicion updateManyAndReturn
   */
  export type posicionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * The data used to update posicions.
     */
    data: XOR<posicionUpdateManyMutationInput, posicionUncheckedUpdateManyInput>
    /**
     * Filter which posicions to update
     */
    where?: posicionWhereInput
    /**
     * Limit how many posicions to update.
     */
    limit?: number
  }

  /**
   * posicion upsert
   */
  export type posicionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * The filter to search for the posicion to update in case it exists.
     */
    where: posicionWhereUniqueInput
    /**
     * In case the posicion found by the `where` argument doesn't exist, create a new posicion with this data.
     */
    create: XOR<posicionCreateInput, posicionUncheckedCreateInput>
    /**
     * In case the posicion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posicionUpdateInput, posicionUncheckedUpdateInput>
  }

  /**
   * posicion delete
   */
  export type posicionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    /**
     * Filter which posicion to delete.
     */
    where: posicionWhereUniqueInput
  }

  /**
   * posicion deleteMany
   */
  export type posicionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posicions to delete
     */
    where?: posicionWhereInput
    /**
     * Limit how many posicions to delete.
     */
    limit?: number
  }

  /**
   * posicion.users
   */
  export type posicion$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * posicion without action
   */
  export type posicionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
  }


  /**
   * Model prioridad
   */

  export type AggregatePrioridad = {
    _count: PrioridadCountAggregateOutputType | null
    _avg: PrioridadAvgAggregateOutputType | null
    _sum: PrioridadSumAggregateOutputType | null
    _min: PrioridadMinAggregateOutputType | null
    _max: PrioridadMaxAggregateOutputType | null
  }

  export type PrioridadAvgAggregateOutputType = {
    id: number | null
  }

  export type PrioridadSumAggregateOutputType = {
    id: number | null
  }

  export type PrioridadMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type PrioridadMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type PrioridadCountAggregateOutputType = {
    id: number
    created_at: number
    nombre: number
    _all: number
  }


  export type PrioridadAvgAggregateInputType = {
    id?: true
  }

  export type PrioridadSumAggregateInputType = {
    id?: true
  }

  export type PrioridadMinAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type PrioridadMaxAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type PrioridadCountAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    _all?: true
  }

  export type PrioridadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prioridad to aggregate.
     */
    where?: prioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prioridads to fetch.
     */
    orderBy?: prioridadOrderByWithRelationInput | prioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prioridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prioridads
    **/
    _count?: true | PrioridadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrioridadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrioridadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrioridadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrioridadMaxAggregateInputType
  }

  export type GetPrioridadAggregateType<T extends PrioridadAggregateArgs> = {
        [P in keyof T & keyof AggregatePrioridad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrioridad[P]>
      : GetScalarType<T[P], AggregatePrioridad[P]>
  }




  export type prioridadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prioridadWhereInput
    orderBy?: prioridadOrderByWithAggregationInput | prioridadOrderByWithAggregationInput[]
    by: PrioridadScalarFieldEnum[] | PrioridadScalarFieldEnum
    having?: prioridadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrioridadCountAggregateInputType | true
    _avg?: PrioridadAvgAggregateInputType
    _sum?: PrioridadSumAggregateInputType
    _min?: PrioridadMinAggregateInputType
    _max?: PrioridadMaxAggregateInputType
  }

  export type PrioridadGroupByOutputType = {
    id: number
    created_at: Date
    nombre: string | null
    _count: PrioridadCountAggregateOutputType | null
    _avg: PrioridadAvgAggregateOutputType | null
    _sum: PrioridadSumAggregateOutputType | null
    _min: PrioridadMinAggregateOutputType | null
    _max: PrioridadMaxAggregateOutputType | null
  }

  type GetPrioridadGroupByPayload<T extends prioridadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrioridadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrioridadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrioridadGroupByOutputType[P]>
            : GetScalarType<T[P], PrioridadGroupByOutputType[P]>
        }
      >
    >


  export type prioridadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    tickets?: boolean | prioridad$ticketsArgs<ExtArgs>
    _count?: boolean | PrioridadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prioridad"]>

  export type prioridadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["prioridad"]>

  export type prioridadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["prioridad"]>

  export type prioridadSelectScalar = {
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }

  export type prioridadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nombre", ExtArgs["result"]["prioridad"]>
  export type prioridadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | prioridad$ticketsArgs<ExtArgs>
    _count?: boolean | PrioridadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prioridadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type prioridadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $prioridadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prioridad"
    objects: {
      tickets: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      nombre: string | null
    }, ExtArgs["result"]["prioridad"]>
    composites: {}
  }

  type prioridadGetPayload<S extends boolean | null | undefined | prioridadDefaultArgs> = $Result.GetResult<Prisma.$prioridadPayload, S>

  type prioridadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prioridadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrioridadCountAggregateInputType | true
    }

  export interface prioridadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prioridad'], meta: { name: 'prioridad' } }
    /**
     * Find zero or one Prioridad that matches the filter.
     * @param {prioridadFindUniqueArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prioridadFindUniqueArgs>(args: SelectSubset<T, prioridadFindUniqueArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prioridad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prioridadFindUniqueOrThrowArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prioridadFindUniqueOrThrowArgs>(args: SelectSubset<T, prioridadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prioridad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioridadFindFirstArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prioridadFindFirstArgs>(args?: SelectSubset<T, prioridadFindFirstArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prioridad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioridadFindFirstOrThrowArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prioridadFindFirstOrThrowArgs>(args?: SelectSubset<T, prioridadFindFirstOrThrowArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prioridads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioridadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prioridads
     * const prioridads = await prisma.prioridad.findMany()
     * 
     * // Get first 10 Prioridads
     * const prioridads = await prisma.prioridad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prioridadWithIdOnly = await prisma.prioridad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prioridadFindManyArgs>(args?: SelectSubset<T, prioridadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prioridad.
     * @param {prioridadCreateArgs} args - Arguments to create a Prioridad.
     * @example
     * // Create one Prioridad
     * const Prioridad = await prisma.prioridad.create({
     *   data: {
     *     // ... data to create a Prioridad
     *   }
     * })
     * 
     */
    create<T extends prioridadCreateArgs>(args: SelectSubset<T, prioridadCreateArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prioridads.
     * @param {prioridadCreateManyArgs} args - Arguments to create many Prioridads.
     * @example
     * // Create many Prioridads
     * const prioridad = await prisma.prioridad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prioridadCreateManyArgs>(args?: SelectSubset<T, prioridadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prioridads and returns the data saved in the database.
     * @param {prioridadCreateManyAndReturnArgs} args - Arguments to create many Prioridads.
     * @example
     * // Create many Prioridads
     * const prioridad = await prisma.prioridad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prioridads and only return the `id`
     * const prioridadWithIdOnly = await prisma.prioridad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prioridadCreateManyAndReturnArgs>(args?: SelectSubset<T, prioridadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prioridad.
     * @param {prioridadDeleteArgs} args - Arguments to delete one Prioridad.
     * @example
     * // Delete one Prioridad
     * const Prioridad = await prisma.prioridad.delete({
     *   where: {
     *     // ... filter to delete one Prioridad
     *   }
     * })
     * 
     */
    delete<T extends prioridadDeleteArgs>(args: SelectSubset<T, prioridadDeleteArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prioridad.
     * @param {prioridadUpdateArgs} args - Arguments to update one Prioridad.
     * @example
     * // Update one Prioridad
     * const prioridad = await prisma.prioridad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prioridadUpdateArgs>(args: SelectSubset<T, prioridadUpdateArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prioridads.
     * @param {prioridadDeleteManyArgs} args - Arguments to filter Prioridads to delete.
     * @example
     * // Delete a few Prioridads
     * const { count } = await prisma.prioridad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prioridadDeleteManyArgs>(args?: SelectSubset<T, prioridadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prioridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioridadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prioridads
     * const prioridad = await prisma.prioridad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prioridadUpdateManyArgs>(args: SelectSubset<T, prioridadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prioridads and returns the data updated in the database.
     * @param {prioridadUpdateManyAndReturnArgs} args - Arguments to update many Prioridads.
     * @example
     * // Update many Prioridads
     * const prioridad = await prisma.prioridad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prioridads and only return the `id`
     * const prioridadWithIdOnly = await prisma.prioridad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prioridadUpdateManyAndReturnArgs>(args: SelectSubset<T, prioridadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prioridad.
     * @param {prioridadUpsertArgs} args - Arguments to update or create a Prioridad.
     * @example
     * // Update or create a Prioridad
     * const prioridad = await prisma.prioridad.upsert({
     *   create: {
     *     // ... data to create a Prioridad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prioridad we want to update
     *   }
     * })
     */
    upsert<T extends prioridadUpsertArgs>(args: SelectSubset<T, prioridadUpsertArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prioridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioridadCountArgs} args - Arguments to filter Prioridads to count.
     * @example
     * // Count the number of Prioridads
     * const count = await prisma.prioridad.count({
     *   where: {
     *     // ... the filter for the Prioridads we want to count
     *   }
     * })
    **/
    count<T extends prioridadCountArgs>(
      args?: Subset<T, prioridadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrioridadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prioridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrioridadAggregateArgs>(args: Subset<T, PrioridadAggregateArgs>): Prisma.PrismaPromise<GetPrioridadAggregateType<T>>

    /**
     * Group by Prioridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioridadGroupByArgs} args - Group by arguments.
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
      T extends prioridadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prioridadGroupByArgs['orderBy'] }
        : { orderBy?: prioridadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prioridadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrioridadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prioridad model
   */
  readonly fields: prioridadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prioridad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prioridadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends prioridad$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, prioridad$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the prioridad model
   */
  interface prioridadFieldRefs {
    readonly id: FieldRef<"prioridad", 'Int'>
    readonly created_at: FieldRef<"prioridad", 'DateTime'>
    readonly nombre: FieldRef<"prioridad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prioridad findUnique
   */
  export type prioridadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * Filter, which prioridad to fetch.
     */
    where: prioridadWhereUniqueInput
  }

  /**
   * prioridad findUniqueOrThrow
   */
  export type prioridadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * Filter, which prioridad to fetch.
     */
    where: prioridadWhereUniqueInput
  }

  /**
   * prioridad findFirst
   */
  export type prioridadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * Filter, which prioridad to fetch.
     */
    where?: prioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prioridads to fetch.
     */
    orderBy?: prioridadOrderByWithRelationInput | prioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prioridads.
     */
    cursor?: prioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prioridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prioridads.
     */
    distinct?: PrioridadScalarFieldEnum | PrioridadScalarFieldEnum[]
  }

  /**
   * prioridad findFirstOrThrow
   */
  export type prioridadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * Filter, which prioridad to fetch.
     */
    where?: prioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prioridads to fetch.
     */
    orderBy?: prioridadOrderByWithRelationInput | prioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prioridads.
     */
    cursor?: prioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prioridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prioridads.
     */
    distinct?: PrioridadScalarFieldEnum | PrioridadScalarFieldEnum[]
  }

  /**
   * prioridad findMany
   */
  export type prioridadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * Filter, which prioridads to fetch.
     */
    where?: prioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prioridads to fetch.
     */
    orderBy?: prioridadOrderByWithRelationInput | prioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prioridads.
     */
    cursor?: prioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prioridads.
     */
    skip?: number
    distinct?: PrioridadScalarFieldEnum | PrioridadScalarFieldEnum[]
  }

  /**
   * prioridad create
   */
  export type prioridadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * The data needed to create a prioridad.
     */
    data?: XOR<prioridadCreateInput, prioridadUncheckedCreateInput>
  }

  /**
   * prioridad createMany
   */
  export type prioridadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prioridads.
     */
    data: prioridadCreateManyInput | prioridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prioridad createManyAndReturn
   */
  export type prioridadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * The data used to create many prioridads.
     */
    data: prioridadCreateManyInput | prioridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prioridad update
   */
  export type prioridadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * The data needed to update a prioridad.
     */
    data: XOR<prioridadUpdateInput, prioridadUncheckedUpdateInput>
    /**
     * Choose, which prioridad to update.
     */
    where: prioridadWhereUniqueInput
  }

  /**
   * prioridad updateMany
   */
  export type prioridadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prioridads.
     */
    data: XOR<prioridadUpdateManyMutationInput, prioridadUncheckedUpdateManyInput>
    /**
     * Filter which prioridads to update
     */
    where?: prioridadWhereInput
    /**
     * Limit how many prioridads to update.
     */
    limit?: number
  }

  /**
   * prioridad updateManyAndReturn
   */
  export type prioridadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * The data used to update prioridads.
     */
    data: XOR<prioridadUpdateManyMutationInput, prioridadUncheckedUpdateManyInput>
    /**
     * Filter which prioridads to update
     */
    where?: prioridadWhereInput
    /**
     * Limit how many prioridads to update.
     */
    limit?: number
  }

  /**
   * prioridad upsert
   */
  export type prioridadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * The filter to search for the prioridad to update in case it exists.
     */
    where: prioridadWhereUniqueInput
    /**
     * In case the prioridad found by the `where` argument doesn't exist, create a new prioridad with this data.
     */
    create: XOR<prioridadCreateInput, prioridadUncheckedCreateInput>
    /**
     * In case the prioridad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prioridadUpdateInput, prioridadUncheckedUpdateInput>
  }

  /**
   * prioridad delete
   */
  export type prioridadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    /**
     * Filter which prioridad to delete.
     */
    where: prioridadWhereUniqueInput
  }

  /**
   * prioridad deleteMany
   */
  export type prioridadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prioridads to delete
     */
    where?: prioridadWhereInput
    /**
     * Limit how many prioridads to delete.
     */
    limit?: number
  }

  /**
   * prioridad.tickets
   */
  export type prioridad$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * prioridad without action
   */
  export type prioridadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
  }


  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    created_at: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    created_at: Date
    nombre: string | null
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectScalar = {
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }

  export type rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nombre", ExtArgs["result"]["rol"]>

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      nombre: string | null
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {rolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolCreateManyAndReturnArgs>(args?: SelectSubset<T, rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {rolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolUpdateManyAndReturnArgs>(args: SelectSubset<T, rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
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
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the rol model
   */
  interface rolFieldRefs {
    readonly id: FieldRef<"rol", 'Int'>
    readonly created_at: FieldRef<"rol", 'DateTime'>
    readonly nombre: FieldRef<"rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data?: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol createManyAndReturn
   */
  export type rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol updateManyAndReturn
   */
  export type rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to delete.
     */
    limit?: number
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
  }


  /**
   * Model sector
   */

  export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  export type SectorAvgAggregateOutputType = {
    id: number | null
  }

  export type SectorSumAggregateOutputType = {
    id: number | null
  }

  export type SectorMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type SectorMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
  }

  export type SectorCountAggregateOutputType = {
    id: number
    created_at: number
    nombre: number
    _all: number
  }


  export type SectorAvgAggregateInputType = {
    id?: true
  }

  export type SectorSumAggregateInputType = {
    id?: true
  }

  export type SectorMinAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type SectorMaxAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
  }

  export type SectorCountAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    _all?: true
  }

  export type SectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sector to aggregate.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sectors
    **/
    _count?: true | SectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorMaxAggregateInputType
  }

  export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
        [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSector[P]>
      : GetScalarType<T[P], AggregateSector[P]>
  }




  export type sectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectorWhereInput
    orderBy?: sectorOrderByWithAggregationInput | sectorOrderByWithAggregationInput[]
    by: SectorScalarFieldEnum[] | SectorScalarFieldEnum
    having?: sectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorCountAggregateInputType | true
    _avg?: SectorAvgAggregateInputType
    _sum?: SectorSumAggregateInputType
    _min?: SectorMinAggregateInputType
    _max?: SectorMaxAggregateInputType
  }

  export type SectorGroupByOutputType = {
    id: number
    created_at: Date
    nombre: string | null
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  type GetSectorGroupByPayload<T extends sectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorGroupByOutputType[P]>
            : GetScalarType<T[P], SectorGroupByOutputType[P]>
        }
      >
    >


  export type sectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    tickets?: boolean | sector$ticketsArgs<ExtArgs>
    users?: boolean | sector$usersArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sector"]>

  export type sectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["sector"]>

  export type sectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["sector"]>

  export type sectorSelectScalar = {
    id?: boolean
    created_at?: boolean
    nombre?: boolean
  }

  export type sectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nombre", ExtArgs["result"]["sector"]>
  export type sectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | sector$ticketsArgs<ExtArgs>
    users?: boolean | sector$usersArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type sectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $sectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sector"
    objects: {
      tickets: Prisma.$ticketPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      nombre: string | null
    }, ExtArgs["result"]["sector"]>
    composites: {}
  }

  type sectorGetPayload<S extends boolean | null | undefined | sectorDefaultArgs> = $Result.GetResult<Prisma.$sectorPayload, S>

  type sectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorCountAggregateInputType | true
    }

  export interface sectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sector'], meta: { name: 'sector' } }
    /**
     * Find zero or one Sector that matches the filter.
     * @param {sectorFindUniqueArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sectorFindUniqueArgs>(args: SelectSubset<T, sectorFindUniqueArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sectorFindUniqueOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sectorFindUniqueOrThrowArgs>(args: SelectSubset<T, sectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorFindFirstArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sectorFindFirstArgs>(args?: SelectSubset<T, sectorFindFirstArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorFindFirstOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sectorFindFirstOrThrowArgs>(args?: SelectSubset<T, sectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sectors
     * const sectors = await prisma.sector.findMany()
     * 
     * // Get first 10 Sectors
     * const sectors = await prisma.sector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorWithIdOnly = await prisma.sector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sectorFindManyArgs>(args?: SelectSubset<T, sectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sector.
     * @param {sectorCreateArgs} args - Arguments to create a Sector.
     * @example
     * // Create one Sector
     * const Sector = await prisma.sector.create({
     *   data: {
     *     // ... data to create a Sector
     *   }
     * })
     * 
     */
    create<T extends sectorCreateArgs>(args: SelectSubset<T, sectorCreateArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sectors.
     * @param {sectorCreateManyArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sectorCreateManyArgs>(args?: SelectSubset<T, sectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sectors and returns the data saved in the database.
     * @param {sectorCreateManyAndReturnArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sectorCreateManyAndReturnArgs>(args?: SelectSubset<T, sectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sector.
     * @param {sectorDeleteArgs} args - Arguments to delete one Sector.
     * @example
     * // Delete one Sector
     * const Sector = await prisma.sector.delete({
     *   where: {
     *     // ... filter to delete one Sector
     *   }
     * })
     * 
     */
    delete<T extends sectorDeleteArgs>(args: SelectSubset<T, sectorDeleteArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sector.
     * @param {sectorUpdateArgs} args - Arguments to update one Sector.
     * @example
     * // Update one Sector
     * const sector = await prisma.sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sectorUpdateArgs>(args: SelectSubset<T, sectorUpdateArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sectors.
     * @param {sectorDeleteManyArgs} args - Arguments to filter Sectors to delete.
     * @example
     * // Delete a few Sectors
     * const { count } = await prisma.sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sectorDeleteManyArgs>(args?: SelectSubset<T, sectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sectorUpdateManyArgs>(args: SelectSubset<T, sectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors and returns the data updated in the database.
     * @param {sectorUpdateManyAndReturnArgs} args - Arguments to update many Sectors.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sectorUpdateManyAndReturnArgs>(args: SelectSubset<T, sectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sector.
     * @param {sectorUpsertArgs} args - Arguments to update or create a Sector.
     * @example
     * // Update or create a Sector
     * const sector = await prisma.sector.upsert({
     *   create: {
     *     // ... data to create a Sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sector we want to update
     *   }
     * })
     */
    upsert<T extends sectorUpsertArgs>(args: SelectSubset<T, sectorUpsertArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorCountArgs} args - Arguments to filter Sectors to count.
     * @example
     * // Count the number of Sectors
     * const count = await prisma.sector.count({
     *   where: {
     *     // ... the filter for the Sectors we want to count
     *   }
     * })
    **/
    count<T extends sectorCountArgs>(
      args?: Subset<T, sectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectorAggregateArgs>(args: Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>

    /**
     * Group by Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorGroupByArgs} args - Group by arguments.
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
      T extends sectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sectorGroupByArgs['orderBy'] }
        : { orderBy?: sectorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sector model
   */
  readonly fields: sectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends sector$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, sector$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends sector$usersArgs<ExtArgs> = {}>(args?: Subset<T, sector$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sector model
   */
  interface sectorFieldRefs {
    readonly id: FieldRef<"sector", 'Int'>
    readonly created_at: FieldRef<"sector", 'DateTime'>
    readonly nombre: FieldRef<"sector", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sector findUnique
   */
  export type sectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector findUniqueOrThrow
   */
  export type sectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector findFirst
   */
  export type sectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sectors.
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * sector findFirstOrThrow
   */
  export type sectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sectors.
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * sector findMany
   */
  export type sectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sectors to fetch.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sectors.
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * sector create
   */
  export type sectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * The data needed to create a sector.
     */
    data?: XOR<sectorCreateInput, sectorUncheckedCreateInput>
  }

  /**
   * sector createMany
   */
  export type sectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sectors.
     */
    data: sectorCreateManyInput | sectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sector createManyAndReturn
   */
  export type sectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * The data used to create many sectors.
     */
    data: sectorCreateManyInput | sectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sector update
   */
  export type sectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * The data needed to update a sector.
     */
    data: XOR<sectorUpdateInput, sectorUncheckedUpdateInput>
    /**
     * Choose, which sector to update.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector updateMany
   */
  export type sectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sectors.
     */
    data: XOR<sectorUpdateManyMutationInput, sectorUncheckedUpdateManyInput>
    /**
     * Filter which sectors to update
     */
    where?: sectorWhereInput
    /**
     * Limit how many sectors to update.
     */
    limit?: number
  }

  /**
   * sector updateManyAndReturn
   */
  export type sectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * The data used to update sectors.
     */
    data: XOR<sectorUpdateManyMutationInput, sectorUncheckedUpdateManyInput>
    /**
     * Filter which sectors to update
     */
    where?: sectorWhereInput
    /**
     * Limit how many sectors to update.
     */
    limit?: number
  }

  /**
   * sector upsert
   */
  export type sectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * The filter to search for the sector to update in case it exists.
     */
    where: sectorWhereUniqueInput
    /**
     * In case the sector found by the `where` argument doesn't exist, create a new sector with this data.
     */
    create: XOR<sectorCreateInput, sectorUncheckedCreateInput>
    /**
     * In case the sector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sectorUpdateInput, sectorUncheckedUpdateInput>
  }

  /**
   * sector delete
   */
  export type sectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter which sector to delete.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector deleteMany
   */
  export type sectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sectors to delete
     */
    where?: sectorWhereInput
    /**
     * Limit how many sectors to delete.
     */
    limit?: number
  }

  /**
   * sector.tickets
   */
  export type sector$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * sector.users
   */
  export type sector$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * sector without action
   */
  export type sectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
  }


  /**
   * Model sub_categorias
   */

  export type AggregateSub_categorias = {
    _count: Sub_categoriasCountAggregateOutputType | null
    _avg: Sub_categoriasAvgAggregateOutputType | null
    _sum: Sub_categoriasSumAggregateOutputType | null
    _min: Sub_categoriasMinAggregateOutputType | null
    _max: Sub_categoriasMaxAggregateOutputType | null
  }

  export type Sub_categoriasAvgAggregateOutputType = {
    id: number | null
    id_categorias: number | null
  }

  export type Sub_categoriasSumAggregateOutputType = {
    id: number | null
    id_categorias: number | null
  }

  export type Sub_categoriasMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
    id_categorias: number | null
  }

  export type Sub_categoriasMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    nombre: string | null
    id_categorias: number | null
  }

  export type Sub_categoriasCountAggregateOutputType = {
    id: number
    created_at: number
    nombre: number
    id_categorias: number
    _all: number
  }


  export type Sub_categoriasAvgAggregateInputType = {
    id?: true
    id_categorias?: true
  }

  export type Sub_categoriasSumAggregateInputType = {
    id?: true
    id_categorias?: true
  }

  export type Sub_categoriasMinAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    id_categorias?: true
  }

  export type Sub_categoriasMaxAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    id_categorias?: true
  }

  export type Sub_categoriasCountAggregateInputType = {
    id?: true
    created_at?: true
    nombre?: true
    id_categorias?: true
    _all?: true
  }

  export type Sub_categoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_categorias to aggregate.
     */
    where?: sub_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categorias to fetch.
     */
    orderBy?: sub_categoriasOrderByWithRelationInput | sub_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sub_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sub_categorias
    **/
    _count?: true | Sub_categoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_categoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_categoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_categoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_categoriasMaxAggregateInputType
  }

  export type GetSub_categoriasAggregateType<T extends Sub_categoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_categorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_categorias[P]>
      : GetScalarType<T[P], AggregateSub_categorias[P]>
  }




  export type sub_categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_categoriasWhereInput
    orderBy?: sub_categoriasOrderByWithAggregationInput | sub_categoriasOrderByWithAggregationInput[]
    by: Sub_categoriasScalarFieldEnum[] | Sub_categoriasScalarFieldEnum
    having?: sub_categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_categoriasCountAggregateInputType | true
    _avg?: Sub_categoriasAvgAggregateInputType
    _sum?: Sub_categoriasSumAggregateInputType
    _min?: Sub_categoriasMinAggregateInputType
    _max?: Sub_categoriasMaxAggregateInputType
  }

  export type Sub_categoriasGroupByOutputType = {
    id: number
    created_at: Date
    nombre: string | null
    id_categorias: number | null
    _count: Sub_categoriasCountAggregateOutputType | null
    _avg: Sub_categoriasAvgAggregateOutputType | null
    _sum: Sub_categoriasSumAggregateOutputType | null
    _min: Sub_categoriasMinAggregateOutputType | null
    _max: Sub_categoriasMaxAggregateOutputType | null
  }

  type GetSub_categoriasGroupByPayload<T extends sub_categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_categoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_categoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_categoriasGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_categoriasGroupByOutputType[P]>
        }
      >
    >


  export type sub_categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    id_categorias?: boolean
    categoria?: boolean | sub_categorias$categoriaArgs<ExtArgs>
    tickets?: boolean | sub_categorias$ticketsArgs<ExtArgs>
    _count?: boolean | Sub_categoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub_categorias"]>

  export type sub_categoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    id_categorias?: boolean
    categoria?: boolean | sub_categorias$categoriaArgs<ExtArgs>
  }, ExtArgs["result"]["sub_categorias"]>

  export type sub_categoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    id_categorias?: boolean
    categoria?: boolean | sub_categorias$categoriaArgs<ExtArgs>
  }, ExtArgs["result"]["sub_categorias"]>

  export type sub_categoriasSelectScalar = {
    id?: boolean
    created_at?: boolean
    nombre?: boolean
    id_categorias?: boolean
  }

  export type sub_categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nombre" | "id_categorias", ExtArgs["result"]["sub_categorias"]>
  export type sub_categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | sub_categorias$categoriaArgs<ExtArgs>
    tickets?: boolean | sub_categorias$ticketsArgs<ExtArgs>
    _count?: boolean | Sub_categoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sub_categoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | sub_categorias$categoriaArgs<ExtArgs>
  }
  export type sub_categoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | sub_categorias$categoriaArgs<ExtArgs>
  }

  export type $sub_categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sub_categorias"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
      tickets: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      nombre: string | null
      id_categorias: number | null
    }, ExtArgs["result"]["sub_categorias"]>
    composites: {}
  }

  type sub_categoriasGetPayload<S extends boolean | null | undefined | sub_categoriasDefaultArgs> = $Result.GetResult<Prisma.$sub_categoriasPayload, S>

  type sub_categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sub_categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sub_categoriasCountAggregateInputType | true
    }

  export interface sub_categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sub_categorias'], meta: { name: 'sub_categorias' } }
    /**
     * Find zero or one Sub_categorias that matches the filter.
     * @param {sub_categoriasFindUniqueArgs} args - Arguments to find a Sub_categorias
     * @example
     * // Get one Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sub_categoriasFindUniqueArgs>(args: SelectSubset<T, sub_categoriasFindUniqueArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub_categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sub_categoriasFindUniqueOrThrowArgs} args - Arguments to find a Sub_categorias
     * @example
     * // Get one Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sub_categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, sub_categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriasFindFirstArgs} args - Arguments to find a Sub_categorias
     * @example
     * // Get one Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sub_categoriasFindFirstArgs>(args?: SelectSubset<T, sub_categoriasFindFirstArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriasFindFirstOrThrowArgs} args - Arguments to find a Sub_categorias
     * @example
     * // Get one Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sub_categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, sub_categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sub_categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.findMany()
     * 
     * // Get first 10 Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sub_categoriasWithIdOnly = await prisma.sub_categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sub_categoriasFindManyArgs>(args?: SelectSubset<T, sub_categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub_categorias.
     * @param {sub_categoriasCreateArgs} args - Arguments to create a Sub_categorias.
     * @example
     * // Create one Sub_categorias
     * const Sub_categorias = await prisma.sub_categorias.create({
     *   data: {
     *     // ... data to create a Sub_categorias
     *   }
     * })
     * 
     */
    create<T extends sub_categoriasCreateArgs>(args: SelectSubset<T, sub_categoriasCreateArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sub_categorias.
     * @param {sub_categoriasCreateManyArgs} args - Arguments to create many Sub_categorias.
     * @example
     * // Create many Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sub_categoriasCreateManyArgs>(args?: SelectSubset<T, sub_categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sub_categorias and returns the data saved in the database.
     * @param {sub_categoriasCreateManyAndReturnArgs} args - Arguments to create many Sub_categorias.
     * @example
     * // Create many Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sub_categorias and only return the `id`
     * const sub_categoriasWithIdOnly = await prisma.sub_categorias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sub_categoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, sub_categoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sub_categorias.
     * @param {sub_categoriasDeleteArgs} args - Arguments to delete one Sub_categorias.
     * @example
     * // Delete one Sub_categorias
     * const Sub_categorias = await prisma.sub_categorias.delete({
     *   where: {
     *     // ... filter to delete one Sub_categorias
     *   }
     * })
     * 
     */
    delete<T extends sub_categoriasDeleteArgs>(args: SelectSubset<T, sub_categoriasDeleteArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub_categorias.
     * @param {sub_categoriasUpdateArgs} args - Arguments to update one Sub_categorias.
     * @example
     * // Update one Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sub_categoriasUpdateArgs>(args: SelectSubset<T, sub_categoriasUpdateArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sub_categorias.
     * @param {sub_categoriasDeleteManyArgs} args - Arguments to filter Sub_categorias to delete.
     * @example
     * // Delete a few Sub_categorias
     * const { count } = await prisma.sub_categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sub_categoriasDeleteManyArgs>(args?: SelectSubset<T, sub_categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sub_categoriasUpdateManyArgs>(args: SelectSubset<T, sub_categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_categorias and returns the data updated in the database.
     * @param {sub_categoriasUpdateManyAndReturnArgs} args - Arguments to update many Sub_categorias.
     * @example
     * // Update many Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sub_categorias and only return the `id`
     * const sub_categoriasWithIdOnly = await prisma.sub_categorias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sub_categoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, sub_categoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sub_categorias.
     * @param {sub_categoriasUpsertArgs} args - Arguments to update or create a Sub_categorias.
     * @example
     * // Update or create a Sub_categorias
     * const sub_categorias = await prisma.sub_categorias.upsert({
     *   create: {
     *     // ... data to create a Sub_categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_categorias we want to update
     *   }
     * })
     */
    upsert<T extends sub_categoriasUpsertArgs>(args: SelectSubset<T, sub_categoriasUpsertArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sub_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriasCountArgs} args - Arguments to filter Sub_categorias to count.
     * @example
     * // Count the number of Sub_categorias
     * const count = await prisma.sub_categorias.count({
     *   where: {
     *     // ... the filter for the Sub_categorias we want to count
     *   }
     * })
    **/
    count<T extends sub_categoriasCountArgs>(
      args?: Subset<T, sub_categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_categoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_categoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sub_categoriasAggregateArgs>(args: Subset<T, Sub_categoriasAggregateArgs>): Prisma.PrismaPromise<GetSub_categoriasAggregateType<T>>

    /**
     * Group by Sub_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriasGroupByArgs} args - Group by arguments.
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
      T extends sub_categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sub_categoriasGroupByArgs['orderBy'] }
        : { orderBy?: sub_categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sub_categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_categoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sub_categorias model
   */
  readonly fields: sub_categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sub_categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sub_categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends sub_categorias$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, sub_categorias$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends sub_categorias$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, sub_categorias$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sub_categorias model
   */
  interface sub_categoriasFieldRefs {
    readonly id: FieldRef<"sub_categorias", 'Int'>
    readonly created_at: FieldRef<"sub_categorias", 'DateTime'>
    readonly nombre: FieldRef<"sub_categorias", 'String'>
    readonly id_categorias: FieldRef<"sub_categorias", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sub_categorias findUnique
   */
  export type sub_categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * Filter, which sub_categorias to fetch.
     */
    where: sub_categoriasWhereUniqueInput
  }

  /**
   * sub_categorias findUniqueOrThrow
   */
  export type sub_categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * Filter, which sub_categorias to fetch.
     */
    where: sub_categoriasWhereUniqueInput
  }

  /**
   * sub_categorias findFirst
   */
  export type sub_categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * Filter, which sub_categorias to fetch.
     */
    where?: sub_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categorias to fetch.
     */
    orderBy?: sub_categoriasOrderByWithRelationInput | sub_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_categorias.
     */
    cursor?: sub_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_categorias.
     */
    distinct?: Sub_categoriasScalarFieldEnum | Sub_categoriasScalarFieldEnum[]
  }

  /**
   * sub_categorias findFirstOrThrow
   */
  export type sub_categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * Filter, which sub_categorias to fetch.
     */
    where?: sub_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categorias to fetch.
     */
    orderBy?: sub_categoriasOrderByWithRelationInput | sub_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_categorias.
     */
    cursor?: sub_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_categorias.
     */
    distinct?: Sub_categoriasScalarFieldEnum | Sub_categoriasScalarFieldEnum[]
  }

  /**
   * sub_categorias findMany
   */
  export type sub_categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * Filter, which sub_categorias to fetch.
     */
    where?: sub_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categorias to fetch.
     */
    orderBy?: sub_categoriasOrderByWithRelationInput | sub_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sub_categorias.
     */
    cursor?: sub_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categorias.
     */
    skip?: number
    distinct?: Sub_categoriasScalarFieldEnum | Sub_categoriasScalarFieldEnum[]
  }

  /**
   * sub_categorias create
   */
  export type sub_categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a sub_categorias.
     */
    data?: XOR<sub_categoriasCreateInput, sub_categoriasUncheckedCreateInput>
  }

  /**
   * sub_categorias createMany
   */
  export type sub_categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sub_categorias.
     */
    data: sub_categoriasCreateManyInput | sub_categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sub_categorias createManyAndReturn
   */
  export type sub_categoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * The data used to create many sub_categorias.
     */
    data: sub_categoriasCreateManyInput | sub_categoriasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sub_categorias update
   */
  export type sub_categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a sub_categorias.
     */
    data: XOR<sub_categoriasUpdateInput, sub_categoriasUncheckedUpdateInput>
    /**
     * Choose, which sub_categorias to update.
     */
    where: sub_categoriasWhereUniqueInput
  }

  /**
   * sub_categorias updateMany
   */
  export type sub_categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sub_categorias.
     */
    data: XOR<sub_categoriasUpdateManyMutationInput, sub_categoriasUncheckedUpdateManyInput>
    /**
     * Filter which sub_categorias to update
     */
    where?: sub_categoriasWhereInput
    /**
     * Limit how many sub_categorias to update.
     */
    limit?: number
  }

  /**
   * sub_categorias updateManyAndReturn
   */
  export type sub_categoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * The data used to update sub_categorias.
     */
    data: XOR<sub_categoriasUpdateManyMutationInput, sub_categoriasUncheckedUpdateManyInput>
    /**
     * Filter which sub_categorias to update
     */
    where?: sub_categoriasWhereInput
    /**
     * Limit how many sub_categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sub_categorias upsert
   */
  export type sub_categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the sub_categorias to update in case it exists.
     */
    where: sub_categoriasWhereUniqueInput
    /**
     * In case the sub_categorias found by the `where` argument doesn't exist, create a new sub_categorias with this data.
     */
    create: XOR<sub_categoriasCreateInput, sub_categoriasUncheckedCreateInput>
    /**
     * In case the sub_categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sub_categoriasUpdateInput, sub_categoriasUncheckedUpdateInput>
  }

  /**
   * sub_categorias delete
   */
  export type sub_categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    /**
     * Filter which sub_categorias to delete.
     */
    where: sub_categoriasWhereUniqueInput
  }

  /**
   * sub_categorias deleteMany
   */
  export type sub_categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_categorias to delete
     */
    where?: sub_categoriasWhereInput
    /**
     * Limit how many sub_categorias to delete.
     */
    limit?: number
  }

  /**
   * sub_categorias.categoria
   */
  export type sub_categorias$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }

  /**
   * sub_categorias.tickets
   */
  export type sub_categorias$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * sub_categorias without action
   */
  export type sub_categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
  }


  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_subcategoria: number | null
    id_prioridad: number | null
    id_sector: number | null
    id_estado: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_subcategoria: number | null
    id_prioridad: number | null
    id_sector: number | null
    id_estado: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    id_user: string | null
    id_categoria: number | null
    id_subcategoria: number | null
    telefono: string | null
    descripcion: string | null
    id_prioridad: number | null
    id_sector: number | null
    valor: string | null
    link_art: string | null
    id_estado: number | null
    fecha: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    id_user: string | null
    id_categoria: number | null
    id_subcategoria: number | null
    telefono: string | null
    descripcion: string | null
    id_prioridad: number | null
    id_sector: number | null
    valor: string | null
    link_art: string | null
    id_estado: number | null
    fecha: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    created_at: number
    id_user: number
    id_categoria: number
    id_subcategoria: number
    telefono: number
    descripcion: number
    id_prioridad: number
    id_sector: number
    valor: number
    link_art: number
    id_estado: number
    fecha: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    id_categoria?: true
    id_subcategoria?: true
    id_prioridad?: true
    id_sector?: true
    id_estado?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    id_categoria?: true
    id_subcategoria?: true
    id_prioridad?: true
    id_sector?: true
    id_estado?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    created_at?: true
    id_user?: true
    id_categoria?: true
    id_subcategoria?: true
    telefono?: true
    descripcion?: true
    id_prioridad?: true
    id_sector?: true
    valor?: true
    link_art?: true
    id_estado?: true
    fecha?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    created_at?: true
    id_user?: true
    id_categoria?: true
    id_subcategoria?: true
    telefono?: true
    descripcion?: true
    id_prioridad?: true
    id_sector?: true
    valor?: true
    link_art?: true
    id_estado?: true
    fecha?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    created_at?: true
    id_user?: true
    id_categoria?: true
    id_subcategoria?: true
    telefono?: true
    descripcion?: true
    id_prioridad?: true
    id_sector?: true
    valor?: true
    link_art?: true
    id_estado?: true
    fecha?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    created_at: Date
    id_user: string | null
    id_categoria: number | null
    id_subcategoria: number | null
    telefono: string | null
    descripcion: string | null
    id_prioridad: number | null
    id_sector: number | null
    valor: string | null
    link_art: string | null
    id_estado: number | null
    fecha: string | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    id_user?: boolean
    id_categoria?: boolean
    id_subcategoria?: boolean
    telefono?: boolean
    descripcion?: boolean
    id_prioridad?: boolean
    id_sector?: boolean
    valor?: boolean
    link_art?: boolean
    id_estado?: boolean
    fecha?: boolean
    user?: boolean | ticket$userArgs<ExtArgs>
    categoria?: boolean | ticket$categoriaArgs<ExtArgs>
    subcategoria?: boolean | ticket$subcategoriaArgs<ExtArgs>
    prioridad?: boolean | ticket$prioridadArgs<ExtArgs>
    sector?: boolean | ticket$sectorArgs<ExtArgs>
    estado?: boolean | ticket$estadoArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    id_user?: boolean
    id_categoria?: boolean
    id_subcategoria?: boolean
    telefono?: boolean
    descripcion?: boolean
    id_prioridad?: boolean
    id_sector?: boolean
    valor?: boolean
    link_art?: boolean
    id_estado?: boolean
    fecha?: boolean
    user?: boolean | ticket$userArgs<ExtArgs>
    categoria?: boolean | ticket$categoriaArgs<ExtArgs>
    subcategoria?: boolean | ticket$subcategoriaArgs<ExtArgs>
    prioridad?: boolean | ticket$prioridadArgs<ExtArgs>
    sector?: boolean | ticket$sectorArgs<ExtArgs>
    estado?: boolean | ticket$estadoArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    id_user?: boolean
    id_categoria?: boolean
    id_subcategoria?: boolean
    telefono?: boolean
    descripcion?: boolean
    id_prioridad?: boolean
    id_sector?: boolean
    valor?: boolean
    link_art?: boolean
    id_estado?: boolean
    fecha?: boolean
    user?: boolean | ticket$userArgs<ExtArgs>
    categoria?: boolean | ticket$categoriaArgs<ExtArgs>
    subcategoria?: boolean | ticket$subcategoriaArgs<ExtArgs>
    prioridad?: boolean | ticket$prioridadArgs<ExtArgs>
    sector?: boolean | ticket$sectorArgs<ExtArgs>
    estado?: boolean | ticket$estadoArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectScalar = {
    id?: boolean
    created_at?: boolean
    id_user?: boolean
    id_categoria?: boolean
    id_subcategoria?: boolean
    telefono?: boolean
    descripcion?: boolean
    id_prioridad?: boolean
    id_sector?: boolean
    valor?: boolean
    link_art?: boolean
    id_estado?: boolean
    fecha?: boolean
  }

  export type ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "id_user" | "id_categoria" | "id_subcategoria" | "telefono" | "descripcion" | "id_prioridad" | "id_sector" | "valor" | "link_art" | "id_estado" | "fecha", ExtArgs["result"]["ticket"]>
  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ticket$userArgs<ExtArgs>
    categoria?: boolean | ticket$categoriaArgs<ExtArgs>
    subcategoria?: boolean | ticket$subcategoriaArgs<ExtArgs>
    prioridad?: boolean | ticket$prioridadArgs<ExtArgs>
    sector?: boolean | ticket$sectorArgs<ExtArgs>
    estado?: boolean | ticket$estadoArgs<ExtArgs>
  }
  export type ticketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ticket$userArgs<ExtArgs>
    categoria?: boolean | ticket$categoriaArgs<ExtArgs>
    subcategoria?: boolean | ticket$subcategoriaArgs<ExtArgs>
    prioridad?: boolean | ticket$prioridadArgs<ExtArgs>
    sector?: boolean | ticket$sectorArgs<ExtArgs>
    estado?: boolean | ticket$estadoArgs<ExtArgs>
  }
  export type ticketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ticket$userArgs<ExtArgs>
    categoria?: boolean | ticket$categoriaArgs<ExtArgs>
    subcategoria?: boolean | ticket$subcategoriaArgs<ExtArgs>
    prioridad?: boolean | ticket$prioridadArgs<ExtArgs>
    sector?: boolean | ticket$sectorArgs<ExtArgs>
    estado?: boolean | ticket$estadoArgs<ExtArgs>
  }

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
      subcategoria: Prisma.$sub_categoriasPayload<ExtArgs> | null
      prioridad: Prisma.$prioridadPayload<ExtArgs> | null
      sector: Prisma.$sectorPayload<ExtArgs> | null
      estado: Prisma.$estadosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      id_user: string | null
      id_categoria: number | null
      id_subcategoria: number | null
      telefono: string | null
      descripcion: string | null
      id_prioridad: number | null
      id_sector: number | null
      valor: string | null
      link_art: string | null
      id_estado: number | null
      fecha: string | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<Prisma.$ticketPayload, S>

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket'], meta: { name: 'ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketFindUniqueArgs>(args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketFindFirstArgs>(args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketFindManyArgs>(args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends ticketCreateArgs>(args: SelectSubset<T, ticketCreateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketCreateManyArgs>(args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {ticketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticketCreateManyAndReturnArgs>(args?: SelectSubset<T, ticketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends ticketDeleteArgs>(args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketUpdateArgs>(args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketDeleteManyArgs>(args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketUpdateManyArgs>(args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {ticketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ticketUpdateManyAndReturnArgs>(args: SelectSubset<T, ticketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends ticketUpsertArgs>(args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
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
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket model
   */
  readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ticket$userArgs<ExtArgs> = {}>(args?: Subset<T, ticket$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categoria<T extends ticket$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, ticket$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategoria<T extends ticket$subcategoriaArgs<ExtArgs> = {}>(args?: Subset<T, ticket$subcategoriaArgs<ExtArgs>>): Prisma__sub_categoriasClient<$Result.GetResult<Prisma.$sub_categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prioridad<T extends ticket$prioridadArgs<ExtArgs> = {}>(args?: Subset<T, ticket$prioridadArgs<ExtArgs>>): Prisma__prioridadClient<$Result.GetResult<Prisma.$prioridadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sector<T extends ticket$sectorArgs<ExtArgs> = {}>(args?: Subset<T, ticket$sectorArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    estado<T extends ticket$estadoArgs<ExtArgs> = {}>(args?: Subset<T, ticket$estadoArgs<ExtArgs>>): Prisma__estadosClient<$Result.GetResult<Prisma.$estadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly id: FieldRef<"ticket", 'Int'>
    readonly created_at: FieldRef<"ticket", 'DateTime'>
    readonly id_user: FieldRef<"ticket", 'String'>
    readonly id_categoria: FieldRef<"ticket", 'Int'>
    readonly id_subcategoria: FieldRef<"ticket", 'Int'>
    readonly telefono: FieldRef<"ticket", 'String'>
    readonly descripcion: FieldRef<"ticket", 'String'>
    readonly id_prioridad: FieldRef<"ticket", 'Int'>
    readonly id_sector: FieldRef<"ticket", 'Int'>
    readonly valor: FieldRef<"ticket", 'String'>
    readonly link_art: FieldRef<"ticket", 'String'>
    readonly id_estado: FieldRef<"ticket", 'Int'>
    readonly fecha: FieldRef<"ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket.
     */
    data?: XOR<ticketCreateInput, ticketUncheckedCreateInput>
  }

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket createManyAndReturn
   */
  export type ticketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * ticket updateManyAndReturn
   */
  export type ticketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
  }

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * ticket.user
   */
  export type ticket$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * ticket.categoria
   */
  export type ticket$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }

  /**
   * ticket.subcategoria
   */
  export type ticket$subcategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categorias
     */
    select?: sub_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categorias
     */
    omit?: sub_categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriasInclude<ExtArgs> | null
    where?: sub_categoriasWhereInput
  }

  /**
   * ticket.prioridad
   */
  export type ticket$prioridadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prioridad
     */
    select?: prioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prioridad
     */
    omit?: prioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioridadInclude<ExtArgs> | null
    where?: prioridadWhereInput
  }

  /**
   * ticket.sector
   */
  export type ticket$sectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    where?: sectorWhereInput
  }

  /**
   * ticket.estado
   */
  export type ticket$estadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados
     */
    select?: estadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estados
     */
    omit?: estadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosInclude<ExtArgs> | null
    where?: estadosWhereInput
  }

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
  }


  /**
   * Model user_inform
   */

  export type AggregateUser_inform = {
    _count: User_informCountAggregateOutputType | null
    _avg: User_informAvgAggregateOutputType | null
    _sum: User_informSumAggregateOutputType | null
    _min: User_informMinAggregateOutputType | null
    _max: User_informMaxAggregateOutputType | null
  }

  export type User_informAvgAggregateOutputType = {
    id: number | null
    id_informe_link: number | null
  }

  export type User_informSumAggregateOutputType = {
    id: number | null
    id_informe_link: number | null
  }

  export type User_informMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    id_informe_link: number | null
  }

  export type User_informMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    id_informe_link: number | null
  }

  export type User_informCountAggregateOutputType = {
    id: number
    created_at: number
    id_informe_link: number
    _all: number
  }


  export type User_informAvgAggregateInputType = {
    id?: true
    id_informe_link?: true
  }

  export type User_informSumAggregateInputType = {
    id?: true
    id_informe_link?: true
  }

  export type User_informMinAggregateInputType = {
    id?: true
    created_at?: true
    id_informe_link?: true
  }

  export type User_informMaxAggregateInputType = {
    id?: true
    created_at?: true
    id_informe_link?: true
  }

  export type User_informCountAggregateInputType = {
    id?: true
    created_at?: true
    id_informe_link?: true
    _all?: true
  }

  export type User_informAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_inform to aggregate.
     */
    where?: user_informWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informs to fetch.
     */
    orderBy?: user_informOrderByWithRelationInput | user_informOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_informWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_informs
    **/
    _count?: true | User_informCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_informAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_informSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_informMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_informMaxAggregateInputType
  }

  export type GetUser_informAggregateType<T extends User_informAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_inform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_inform[P]>
      : GetScalarType<T[P], AggregateUser_inform[P]>
  }




  export type user_informGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_informWhereInput
    orderBy?: user_informOrderByWithAggregationInput | user_informOrderByWithAggregationInput[]
    by: User_informScalarFieldEnum[] | User_informScalarFieldEnum
    having?: user_informScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_informCountAggregateInputType | true
    _avg?: User_informAvgAggregateInputType
    _sum?: User_informSumAggregateInputType
    _min?: User_informMinAggregateInputType
    _max?: User_informMaxAggregateInputType
  }

  export type User_informGroupByOutputType = {
    id: number
    created_at: Date
    id_informe_link: number | null
    _count: User_informCountAggregateOutputType | null
    _avg: User_informAvgAggregateOutputType | null
    _sum: User_informSumAggregateOutputType | null
    _min: User_informMinAggregateOutputType | null
    _max: User_informMaxAggregateOutputType | null
  }

  type GetUser_informGroupByPayload<T extends user_informGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_informGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_informGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_informGroupByOutputType[P]>
            : GetScalarType<T[P], User_informGroupByOutputType[P]>
        }
      >
    >


  export type user_informSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    id_informe_link?: boolean
    informe_link?: boolean | user_inform$informe_linkArgs<ExtArgs>
  }, ExtArgs["result"]["user_inform"]>

  export type user_informSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    id_informe_link?: boolean
    informe_link?: boolean | user_inform$informe_linkArgs<ExtArgs>
  }, ExtArgs["result"]["user_inform"]>

  export type user_informSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    id_informe_link?: boolean
    informe_link?: boolean | user_inform$informe_linkArgs<ExtArgs>
  }, ExtArgs["result"]["user_inform"]>

  export type user_informSelectScalar = {
    id?: boolean
    created_at?: boolean
    id_informe_link?: boolean
  }

  export type user_informOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "id_informe_link", ExtArgs["result"]["user_inform"]>
  export type user_informInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    informe_link?: boolean | user_inform$informe_linkArgs<ExtArgs>
  }
  export type user_informIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    informe_link?: boolean | user_inform$informe_linkArgs<ExtArgs>
  }
  export type user_informIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    informe_link?: boolean | user_inform$informe_linkArgs<ExtArgs>
  }

  export type $user_informPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_inform"
    objects: {
      informe_link: Prisma.$informe_linkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      id_informe_link: number | null
    }, ExtArgs["result"]["user_inform"]>
    composites: {}
  }

  type user_informGetPayload<S extends boolean | null | undefined | user_informDefaultArgs> = $Result.GetResult<Prisma.$user_informPayload, S>

  type user_informCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_informFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_informCountAggregateInputType | true
    }

  export interface user_informDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_inform'], meta: { name: 'user_inform' } }
    /**
     * Find zero or one User_inform that matches the filter.
     * @param {user_informFindUniqueArgs} args - Arguments to find a User_inform
     * @example
     * // Get one User_inform
     * const user_inform = await prisma.user_inform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_informFindUniqueArgs>(args: SelectSubset<T, user_informFindUniqueArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_inform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_informFindUniqueOrThrowArgs} args - Arguments to find a User_inform
     * @example
     * // Get one User_inform
     * const user_inform = await prisma.user_inform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_informFindUniqueOrThrowArgs>(args: SelectSubset<T, user_informFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_inform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informFindFirstArgs} args - Arguments to find a User_inform
     * @example
     * // Get one User_inform
     * const user_inform = await prisma.user_inform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_informFindFirstArgs>(args?: SelectSubset<T, user_informFindFirstArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_inform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informFindFirstOrThrowArgs} args - Arguments to find a User_inform
     * @example
     * // Get one User_inform
     * const user_inform = await prisma.user_inform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_informFindFirstOrThrowArgs>(args?: SelectSubset<T, user_informFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_informs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_informs
     * const user_informs = await prisma.user_inform.findMany()
     * 
     * // Get first 10 User_informs
     * const user_informs = await prisma.user_inform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_informWithIdOnly = await prisma.user_inform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_informFindManyArgs>(args?: SelectSubset<T, user_informFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_inform.
     * @param {user_informCreateArgs} args - Arguments to create a User_inform.
     * @example
     * // Create one User_inform
     * const User_inform = await prisma.user_inform.create({
     *   data: {
     *     // ... data to create a User_inform
     *   }
     * })
     * 
     */
    create<T extends user_informCreateArgs>(args: SelectSubset<T, user_informCreateArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_informs.
     * @param {user_informCreateManyArgs} args - Arguments to create many User_informs.
     * @example
     * // Create many User_informs
     * const user_inform = await prisma.user_inform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_informCreateManyArgs>(args?: SelectSubset<T, user_informCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_informs and returns the data saved in the database.
     * @param {user_informCreateManyAndReturnArgs} args - Arguments to create many User_informs.
     * @example
     * // Create many User_informs
     * const user_inform = await prisma.user_inform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_informs and only return the `id`
     * const user_informWithIdOnly = await prisma.user_inform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_informCreateManyAndReturnArgs>(args?: SelectSubset<T, user_informCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_inform.
     * @param {user_informDeleteArgs} args - Arguments to delete one User_inform.
     * @example
     * // Delete one User_inform
     * const User_inform = await prisma.user_inform.delete({
     *   where: {
     *     // ... filter to delete one User_inform
     *   }
     * })
     * 
     */
    delete<T extends user_informDeleteArgs>(args: SelectSubset<T, user_informDeleteArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_inform.
     * @param {user_informUpdateArgs} args - Arguments to update one User_inform.
     * @example
     * // Update one User_inform
     * const user_inform = await prisma.user_inform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_informUpdateArgs>(args: SelectSubset<T, user_informUpdateArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_informs.
     * @param {user_informDeleteManyArgs} args - Arguments to filter User_informs to delete.
     * @example
     * // Delete a few User_informs
     * const { count } = await prisma.user_inform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_informDeleteManyArgs>(args?: SelectSubset<T, user_informDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_informs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_informs
     * const user_inform = await prisma.user_inform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_informUpdateManyArgs>(args: SelectSubset<T, user_informUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_informs and returns the data updated in the database.
     * @param {user_informUpdateManyAndReturnArgs} args - Arguments to update many User_informs.
     * @example
     * // Update many User_informs
     * const user_inform = await prisma.user_inform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_informs and only return the `id`
     * const user_informWithIdOnly = await prisma.user_inform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_informUpdateManyAndReturnArgs>(args: SelectSubset<T, user_informUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_inform.
     * @param {user_informUpsertArgs} args - Arguments to update or create a User_inform.
     * @example
     * // Update or create a User_inform
     * const user_inform = await prisma.user_inform.upsert({
     *   create: {
     *     // ... data to create a User_inform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_inform we want to update
     *   }
     * })
     */
    upsert<T extends user_informUpsertArgs>(args: SelectSubset<T, user_informUpsertArgs<ExtArgs>>): Prisma__user_informClient<$Result.GetResult<Prisma.$user_informPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_informs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informCountArgs} args - Arguments to filter User_informs to count.
     * @example
     * // Count the number of User_informs
     * const count = await prisma.user_inform.count({
     *   where: {
     *     // ... the filter for the User_informs we want to count
     *   }
     * })
    **/
    count<T extends user_informCountArgs>(
      args?: Subset<T, user_informCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_informCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_inform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_informAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_informAggregateArgs>(args: Subset<T, User_informAggregateArgs>): Prisma.PrismaPromise<GetUser_informAggregateType<T>>

    /**
     * Group by User_inform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informGroupByArgs} args - Group by arguments.
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
      T extends user_informGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_informGroupByArgs['orderBy'] }
        : { orderBy?: user_informGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_informGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_informGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_inform model
   */
  readonly fields: user_informFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_inform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_informClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    informe_link<T extends user_inform$informe_linkArgs<ExtArgs> = {}>(args?: Subset<T, user_inform$informe_linkArgs<ExtArgs>>): Prisma__informe_linkClient<$Result.GetResult<Prisma.$informe_linkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_inform model
   */
  interface user_informFieldRefs {
    readonly id: FieldRef<"user_inform", 'Int'>
    readonly created_at: FieldRef<"user_inform", 'DateTime'>
    readonly id_informe_link: FieldRef<"user_inform", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_inform findUnique
   */
  export type user_informFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * Filter, which user_inform to fetch.
     */
    where: user_informWhereUniqueInput
  }

  /**
   * user_inform findUniqueOrThrow
   */
  export type user_informFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * Filter, which user_inform to fetch.
     */
    where: user_informWhereUniqueInput
  }

  /**
   * user_inform findFirst
   */
  export type user_informFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * Filter, which user_inform to fetch.
     */
    where?: user_informWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informs to fetch.
     */
    orderBy?: user_informOrderByWithRelationInput | user_informOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_informs.
     */
    cursor?: user_informWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_informs.
     */
    distinct?: User_informScalarFieldEnum | User_informScalarFieldEnum[]
  }

  /**
   * user_inform findFirstOrThrow
   */
  export type user_informFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * Filter, which user_inform to fetch.
     */
    where?: user_informWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informs to fetch.
     */
    orderBy?: user_informOrderByWithRelationInput | user_informOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_informs.
     */
    cursor?: user_informWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_informs.
     */
    distinct?: User_informScalarFieldEnum | User_informScalarFieldEnum[]
  }

  /**
   * user_inform findMany
   */
  export type user_informFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * Filter, which user_informs to fetch.
     */
    where?: user_informWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informs to fetch.
     */
    orderBy?: user_informOrderByWithRelationInput | user_informOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_informs.
     */
    cursor?: user_informWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informs.
     */
    skip?: number
    distinct?: User_informScalarFieldEnum | User_informScalarFieldEnum[]
  }

  /**
   * user_inform create
   */
  export type user_informCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * The data needed to create a user_inform.
     */
    data?: XOR<user_informCreateInput, user_informUncheckedCreateInput>
  }

  /**
   * user_inform createMany
   */
  export type user_informCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_informs.
     */
    data: user_informCreateManyInput | user_informCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_inform createManyAndReturn
   */
  export type user_informCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * The data used to create many user_informs.
     */
    data: user_informCreateManyInput | user_informCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_inform update
   */
  export type user_informUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * The data needed to update a user_inform.
     */
    data: XOR<user_informUpdateInput, user_informUncheckedUpdateInput>
    /**
     * Choose, which user_inform to update.
     */
    where: user_informWhereUniqueInput
  }

  /**
   * user_inform updateMany
   */
  export type user_informUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_informs.
     */
    data: XOR<user_informUpdateManyMutationInput, user_informUncheckedUpdateManyInput>
    /**
     * Filter which user_informs to update
     */
    where?: user_informWhereInput
    /**
     * Limit how many user_informs to update.
     */
    limit?: number
  }

  /**
   * user_inform updateManyAndReturn
   */
  export type user_informUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * The data used to update user_informs.
     */
    data: XOR<user_informUpdateManyMutationInput, user_informUncheckedUpdateManyInput>
    /**
     * Filter which user_informs to update
     */
    where?: user_informWhereInput
    /**
     * Limit how many user_informs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_inform upsert
   */
  export type user_informUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * The filter to search for the user_inform to update in case it exists.
     */
    where: user_informWhereUniqueInput
    /**
     * In case the user_inform found by the `where` argument doesn't exist, create a new user_inform with this data.
     */
    create: XOR<user_informCreateInput, user_informUncheckedCreateInput>
    /**
     * In case the user_inform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_informUpdateInput, user_informUncheckedUpdateInput>
  }

  /**
   * user_inform delete
   */
  export type user_informDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
    /**
     * Filter which user_inform to delete.
     */
    where: user_informWhereUniqueInput
  }

  /**
   * user_inform deleteMany
   */
  export type user_informDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_informs to delete
     */
    where?: user_informWhereInput
    /**
     * Limit how many user_informs to delete.
     */
    limit?: number
  }

  /**
   * user_inform.informe_link
   */
  export type user_inform$informe_linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informe_link
     */
    select?: informe_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informe_link
     */
    omit?: informe_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informe_linkInclude<ExtArgs> | null
    where?: informe_linkWhereInput
  }

  /**
   * user_inform without action
   */
  export type user_informDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_inform
     */
    select?: user_informSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_inform
     */
    omit?: user_informOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informInclude<ExtArgs> | null
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
    id_sector: number | null
    id_posicion: number | null
  }

  export type UsersSumAggregateOutputType = {
    id_sector: number | null
    id_posicion: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    username: string | null
    correo: string | null
    id_sector: number | null
    id_posicion: number | null
    id_autorizador: string | null
    rol: string | null
    telefono: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    username: string | null
    correo: string | null
    id_sector: number | null
    id_posicion: number | null
    id_autorizador: string | null
    rol: string | null
    telefono: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    username: number
    correo: number
    id_sector: number
    id_posicion: number
    id_autorizador: number
    rol: number
    telefono: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id_sector?: true
    id_posicion?: true
  }

  export type UsersSumAggregateInputType = {
    id_sector?: true
    id_posicion?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    username?: true
    correo?: true
    id_sector?: true
    id_posicion?: true
    id_autorizador?: true
    rol?: true
    telefono?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    username?: true
    correo?: true
    id_sector?: true
    id_posicion?: true
    id_autorizador?: true
    rol?: true
    telefono?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    username?: true
    correo?: true
    id_sector?: true
    id_posicion?: true
    id_autorizador?: true
    rol?: true
    telefono?: true
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
    id: string
    created_at: Date
    username: string | null
    correo: string | null
    id_sector: number | null
    id_posicion: number | null
    id_autorizador: string | null
    rol: string | null
    telefono: string | null
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
    id?: boolean
    created_at?: boolean
    username?: boolean
    correo?: boolean
    id_sector?: boolean
    id_posicion?: boolean
    id_autorizador?: boolean
    rol?: boolean
    telefono?: boolean
    sector?: boolean | users$sectorArgs<ExtArgs>
    posicion?: boolean | users$posicionArgs<ExtArgs>
    autorizador?: boolean | users$autorizadorArgs<ExtArgs>
    autorizados?: boolean | users$autorizadosArgs<ExtArgs>
    tickets?: boolean | users$ticketsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    username?: boolean
    correo?: boolean
    id_sector?: boolean
    id_posicion?: boolean
    id_autorizador?: boolean
    rol?: boolean
    telefono?: boolean
    sector?: boolean | users$sectorArgs<ExtArgs>
    posicion?: boolean | users$posicionArgs<ExtArgs>
    autorizador?: boolean | users$autorizadorArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    username?: boolean
    correo?: boolean
    id_sector?: boolean
    id_posicion?: boolean
    id_autorizador?: boolean
    rol?: boolean
    telefono?: boolean
    sector?: boolean | users$sectorArgs<ExtArgs>
    posicion?: boolean | users$posicionArgs<ExtArgs>
    autorizador?: boolean | users$autorizadorArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    created_at?: boolean
    username?: boolean
    correo?: boolean
    id_sector?: boolean
    id_posicion?: boolean
    id_autorizador?: boolean
    rol?: boolean
    telefono?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "username" | "correo" | "id_sector" | "id_posicion" | "id_autorizador" | "rol" | "telefono", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | users$sectorArgs<ExtArgs>
    posicion?: boolean | users$posicionArgs<ExtArgs>
    autorizador?: boolean | users$autorizadorArgs<ExtArgs>
    autorizados?: boolean | users$autorizadosArgs<ExtArgs>
    tickets?: boolean | users$ticketsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | users$sectorArgs<ExtArgs>
    posicion?: boolean | users$posicionArgs<ExtArgs>
    autorizador?: boolean | users$autorizadorArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | users$sectorArgs<ExtArgs>
    posicion?: boolean | users$posicionArgs<ExtArgs>
    autorizador?: boolean | users$autorizadorArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      sector: Prisma.$sectorPayload<ExtArgs> | null
      posicion: Prisma.$posicionPayload<ExtArgs> | null
      autorizador: Prisma.$usersPayload<ExtArgs> | null
      autorizados: Prisma.$usersPayload<ExtArgs>[]
      tickets: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      username: string | null
      correo: string | null
      id_sector: number | null
      id_posicion: number | null
      id_autorizador: string | null
      rol: string | null
      telefono: string | null
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
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
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
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    sector<T extends users$sectorArgs<ExtArgs> = {}>(args?: Subset<T, users$sectorArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posicion<T extends users$posicionArgs<ExtArgs> = {}>(args?: Subset<T, users$posicionArgs<ExtArgs>>): Prisma__posicionClient<$Result.GetResult<Prisma.$posicionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    autorizador<T extends users$autorizadorArgs<ExtArgs> = {}>(args?: Subset<T, users$autorizadorArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    autorizados<T extends users$autorizadosArgs<ExtArgs> = {}>(args?: Subset<T, users$autorizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends users$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, users$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly username: FieldRef<"users", 'String'>
    readonly correo: FieldRef<"users", 'String'>
    readonly id_sector: FieldRef<"users", 'Int'>
    readonly id_posicion: FieldRef<"users", 'Int'>
    readonly id_autorizador: FieldRef<"users", 'String'>
    readonly rol: FieldRef<"users", 'String'>
    readonly telefono: FieldRef<"users", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
   * users.sector
   */
  export type users$sectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    where?: sectorWhereInput
  }

  /**
   * users.posicion
   */
  export type users$posicionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicion
     */
    select?: posicionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicion
     */
    omit?: posicionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicionInclude<ExtArgs> | null
    where?: posicionWhereInput
  }

  /**
   * users.autorizador
   */
  export type users$autorizadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * users.autorizados
   */
  export type users$autorizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users.tickets
   */
  export type users$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EstadosScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nombre: 'nombre'
  };

  export type EstadosScalarFieldEnum = (typeof EstadosScalarFieldEnum)[keyof typeof EstadosScalarFieldEnum]


  export const Informe_linkScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    link: 'link'
  };

  export type Informe_linkScalarFieldEnum = (typeof Informe_linkScalarFieldEnum)[keyof typeof Informe_linkScalarFieldEnum]


  export const PosicionScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nombre: 'nombre'
  };

  export type PosicionScalarFieldEnum = (typeof PosicionScalarFieldEnum)[keyof typeof PosicionScalarFieldEnum]


  export const PrioridadScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nombre: 'nombre'
  };

  export type PrioridadScalarFieldEnum = (typeof PrioridadScalarFieldEnum)[keyof typeof PrioridadScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const SectorScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nombre: 'nombre'
  };

  export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum]


  export const Sub_categoriasScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nombre: 'nombre',
    id_categorias: 'id_categorias'
  };

  export type Sub_categoriasScalarFieldEnum = (typeof Sub_categoriasScalarFieldEnum)[keyof typeof Sub_categoriasScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    id_user: 'id_user',
    id_categoria: 'id_categoria',
    id_subcategoria: 'id_subcategoria',
    telefono: 'telefono',
    descripcion: 'descripcion',
    id_prioridad: 'id_prioridad',
    id_sector: 'id_sector',
    valor: 'valor',
    link_art: 'link_art',
    id_estado: 'id_estado',
    fecha: 'fecha'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const User_informScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    id_informe_link: 'id_informe_link'
  };

  export type User_informScalarFieldEnum = (typeof User_informScalarFieldEnum)[keyof typeof User_informScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    username: 'username',
    correo: 'correo',
    id_sector: 'id_sector',
    id_posicion: 'id_posicion',
    id_autorizador: 'id_autorizador',
    rol: 'rol',
    telefono: 'telefono'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id?: IntFilter<"categoria"> | number
    created_at?: DateTimeFilter<"categoria"> | Date | string
    nombre?: StringNullableFilter<"categoria"> | string | null
    tickets?: TicketListRelationFilter
    sub_categorias?: Sub_categoriasListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tickets?: ticketOrderByRelationAggregateInput
    sub_categorias?: sub_categoriasOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    created_at?: DateTimeFilter<"categoria"> | Date | string
    nombre?: StringNullableFilter<"categoria"> | string | null
    tickets?: TicketListRelationFilter
    sub_categorias?: Sub_categoriasListRelationFilter
  }, "id">

  export type categoriaOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categoria"> | number
    created_at?: DateTimeWithAggregatesFilter<"categoria"> | Date | string
    nombre?: StringNullableWithAggregatesFilter<"categoria"> | string | null
  }

  export type estadosWhereInput = {
    AND?: estadosWhereInput | estadosWhereInput[]
    OR?: estadosWhereInput[]
    NOT?: estadosWhereInput | estadosWhereInput[]
    id?: IntFilter<"estados"> | number
    created_at?: DateTimeFilter<"estados"> | Date | string
    nombre?: StringNullableFilter<"estados"> | string | null
    tickets?: TicketListRelationFilter
  }

  export type estadosOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tickets?: ticketOrderByRelationAggregateInput
  }

  export type estadosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: estadosWhereInput | estadosWhereInput[]
    OR?: estadosWhereInput[]
    NOT?: estadosWhereInput | estadosWhereInput[]
    created_at?: DateTimeFilter<"estados"> | Date | string
    nombre?: StringNullableFilter<"estados"> | string | null
    tickets?: TicketListRelationFilter
  }, "id">

  export type estadosOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: estadosCountOrderByAggregateInput
    _avg?: estadosAvgOrderByAggregateInput
    _max?: estadosMaxOrderByAggregateInput
    _min?: estadosMinOrderByAggregateInput
    _sum?: estadosSumOrderByAggregateInput
  }

  export type estadosScalarWhereWithAggregatesInput = {
    AND?: estadosScalarWhereWithAggregatesInput | estadosScalarWhereWithAggregatesInput[]
    OR?: estadosScalarWhereWithAggregatesInput[]
    NOT?: estadosScalarWhereWithAggregatesInput | estadosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"estados"> | number
    created_at?: DateTimeWithAggregatesFilter<"estados"> | Date | string
    nombre?: StringNullableWithAggregatesFilter<"estados"> | string | null
  }

  export type informe_linkWhereInput = {
    AND?: informe_linkWhereInput | informe_linkWhereInput[]
    OR?: informe_linkWhereInput[]
    NOT?: informe_linkWhereInput | informe_linkWhereInput[]
    id?: IntFilter<"informe_link"> | number
    created_at?: DateTimeFilter<"informe_link"> | Date | string
    link?: StringNullableFilter<"informe_link"> | string | null
    user_informs?: User_informListRelationFilter
  }

  export type informe_linkOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    link?: SortOrderInput | SortOrder
    user_informs?: user_informOrderByRelationAggregateInput
  }

  export type informe_linkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: informe_linkWhereInput | informe_linkWhereInput[]
    OR?: informe_linkWhereInput[]
    NOT?: informe_linkWhereInput | informe_linkWhereInput[]
    created_at?: DateTimeFilter<"informe_link"> | Date | string
    link?: StringNullableFilter<"informe_link"> | string | null
    user_informs?: User_informListRelationFilter
  }, "id">

  export type informe_linkOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    link?: SortOrderInput | SortOrder
    _count?: informe_linkCountOrderByAggregateInput
    _avg?: informe_linkAvgOrderByAggregateInput
    _max?: informe_linkMaxOrderByAggregateInput
    _min?: informe_linkMinOrderByAggregateInput
    _sum?: informe_linkSumOrderByAggregateInput
  }

  export type informe_linkScalarWhereWithAggregatesInput = {
    AND?: informe_linkScalarWhereWithAggregatesInput | informe_linkScalarWhereWithAggregatesInput[]
    OR?: informe_linkScalarWhereWithAggregatesInput[]
    NOT?: informe_linkScalarWhereWithAggregatesInput | informe_linkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"informe_link"> | number
    created_at?: DateTimeWithAggregatesFilter<"informe_link"> | Date | string
    link?: StringNullableWithAggregatesFilter<"informe_link"> | string | null
  }

  export type posicionWhereInput = {
    AND?: posicionWhereInput | posicionWhereInput[]
    OR?: posicionWhereInput[]
    NOT?: posicionWhereInput | posicionWhereInput[]
    id?: IntFilter<"posicion"> | number
    created_at?: DateTimeFilter<"posicion"> | Date | string
    nombre?: StringNullableFilter<"posicion"> | string | null
    users?: UsersListRelationFilter
  }

  export type posicionOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type posicionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: posicionWhereInput | posicionWhereInput[]
    OR?: posicionWhereInput[]
    NOT?: posicionWhereInput | posicionWhereInput[]
    created_at?: DateTimeFilter<"posicion"> | Date | string
    nombre?: StringNullableFilter<"posicion"> | string | null
    users?: UsersListRelationFilter
  }, "id">

  export type posicionOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: posicionCountOrderByAggregateInput
    _avg?: posicionAvgOrderByAggregateInput
    _max?: posicionMaxOrderByAggregateInput
    _min?: posicionMinOrderByAggregateInput
    _sum?: posicionSumOrderByAggregateInput
  }

  export type posicionScalarWhereWithAggregatesInput = {
    AND?: posicionScalarWhereWithAggregatesInput | posicionScalarWhereWithAggregatesInput[]
    OR?: posicionScalarWhereWithAggregatesInput[]
    NOT?: posicionScalarWhereWithAggregatesInput | posicionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posicion"> | number
    created_at?: DateTimeWithAggregatesFilter<"posicion"> | Date | string
    nombre?: StringNullableWithAggregatesFilter<"posicion"> | string | null
  }

  export type prioridadWhereInput = {
    AND?: prioridadWhereInput | prioridadWhereInput[]
    OR?: prioridadWhereInput[]
    NOT?: prioridadWhereInput | prioridadWhereInput[]
    id?: IntFilter<"prioridad"> | number
    created_at?: DateTimeFilter<"prioridad"> | Date | string
    nombre?: StringNullableFilter<"prioridad"> | string | null
    tickets?: TicketListRelationFilter
  }

  export type prioridadOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tickets?: ticketOrderByRelationAggregateInput
  }

  export type prioridadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: prioridadWhereInput | prioridadWhereInput[]
    OR?: prioridadWhereInput[]
    NOT?: prioridadWhereInput | prioridadWhereInput[]
    created_at?: DateTimeFilter<"prioridad"> | Date | string
    nombre?: StringNullableFilter<"prioridad"> | string | null
    tickets?: TicketListRelationFilter
  }, "id">

  export type prioridadOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: prioridadCountOrderByAggregateInput
    _avg?: prioridadAvgOrderByAggregateInput
    _max?: prioridadMaxOrderByAggregateInput
    _min?: prioridadMinOrderByAggregateInput
    _sum?: prioridadSumOrderByAggregateInput
  }

  export type prioridadScalarWhereWithAggregatesInput = {
    AND?: prioridadScalarWhereWithAggregatesInput | prioridadScalarWhereWithAggregatesInput[]
    OR?: prioridadScalarWhereWithAggregatesInput[]
    NOT?: prioridadScalarWhereWithAggregatesInput | prioridadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prioridad"> | number
    created_at?: DateTimeWithAggregatesFilter<"prioridad"> | Date | string
    nombre?: StringNullableWithAggregatesFilter<"prioridad"> | string | null
  }

  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id?: IntFilter<"rol"> | number
    created_at?: DateTimeFilter<"rol"> | Date | string
    nombre?: StringNullableFilter<"rol"> | string | null
  }

  export type rolOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    created_at?: DateTimeFilter<"rol"> | Date | string
    nombre?: StringNullableFilter<"rol"> | string | null
  }, "id">

  export type rolOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: rolCountOrderByAggregateInput
    _avg?: rolAvgOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
    _sum?: rolSumOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rol"> | number
    created_at?: DateTimeWithAggregatesFilter<"rol"> | Date | string
    nombre?: StringNullableWithAggregatesFilter<"rol"> | string | null
  }

  export type sectorWhereInput = {
    AND?: sectorWhereInput | sectorWhereInput[]
    OR?: sectorWhereInput[]
    NOT?: sectorWhereInput | sectorWhereInput[]
    id?: IntFilter<"sector"> | number
    created_at?: DateTimeFilter<"sector"> | Date | string
    nombre?: StringNullableFilter<"sector"> | string | null
    tickets?: TicketListRelationFilter
    users?: UsersListRelationFilter
  }

  export type sectorOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tickets?: ticketOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type sectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sectorWhereInput | sectorWhereInput[]
    OR?: sectorWhereInput[]
    NOT?: sectorWhereInput | sectorWhereInput[]
    created_at?: DateTimeFilter<"sector"> | Date | string
    nombre?: StringNullableFilter<"sector"> | string | null
    tickets?: TicketListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type sectorOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: sectorCountOrderByAggregateInput
    _avg?: sectorAvgOrderByAggregateInput
    _max?: sectorMaxOrderByAggregateInput
    _min?: sectorMinOrderByAggregateInput
    _sum?: sectorSumOrderByAggregateInput
  }

  export type sectorScalarWhereWithAggregatesInput = {
    AND?: sectorScalarWhereWithAggregatesInput | sectorScalarWhereWithAggregatesInput[]
    OR?: sectorScalarWhereWithAggregatesInput[]
    NOT?: sectorScalarWhereWithAggregatesInput | sectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sector"> | number
    created_at?: DateTimeWithAggregatesFilter<"sector"> | Date | string
    nombre?: StringNullableWithAggregatesFilter<"sector"> | string | null
  }

  export type sub_categoriasWhereInput = {
    AND?: sub_categoriasWhereInput | sub_categoriasWhereInput[]
    OR?: sub_categoriasWhereInput[]
    NOT?: sub_categoriasWhereInput | sub_categoriasWhereInput[]
    id?: IntFilter<"sub_categorias"> | number
    created_at?: DateTimeFilter<"sub_categorias"> | Date | string
    nombre?: StringNullableFilter<"sub_categorias"> | string | null
    id_categorias?: IntNullableFilter<"sub_categorias"> | number | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    tickets?: TicketListRelationFilter
  }

  export type sub_categoriasOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    id_categorias?: SortOrderInput | SortOrder
    categoria?: categoriaOrderByWithRelationInput
    tickets?: ticketOrderByRelationAggregateInput
  }

  export type sub_categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sub_categoriasWhereInput | sub_categoriasWhereInput[]
    OR?: sub_categoriasWhereInput[]
    NOT?: sub_categoriasWhereInput | sub_categoriasWhereInput[]
    created_at?: DateTimeFilter<"sub_categorias"> | Date | string
    nombre?: StringNullableFilter<"sub_categorias"> | string | null
    id_categorias?: IntNullableFilter<"sub_categorias"> | number | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    tickets?: TicketListRelationFilter
  }, "id">

  export type sub_categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrderInput | SortOrder
    id_categorias?: SortOrderInput | SortOrder
    _count?: sub_categoriasCountOrderByAggregateInput
    _avg?: sub_categoriasAvgOrderByAggregateInput
    _max?: sub_categoriasMaxOrderByAggregateInput
    _min?: sub_categoriasMinOrderByAggregateInput
    _sum?: sub_categoriasSumOrderByAggregateInput
  }

  export type sub_categoriasScalarWhereWithAggregatesInput = {
    AND?: sub_categoriasScalarWhereWithAggregatesInput | sub_categoriasScalarWhereWithAggregatesInput[]
    OR?: sub_categoriasScalarWhereWithAggregatesInput[]
    NOT?: sub_categoriasScalarWhereWithAggregatesInput | sub_categoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sub_categorias"> | number
    created_at?: DateTimeWithAggregatesFilter<"sub_categorias"> | Date | string
    nombre?: StringNullableWithAggregatesFilter<"sub_categorias"> | string | null
    id_categorias?: IntNullableWithAggregatesFilter<"sub_categorias"> | number | null
  }

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    id?: IntFilter<"ticket"> | number
    created_at?: DateTimeFilter<"ticket"> | Date | string
    id_user?: StringNullableFilter<"ticket"> | string | null
    id_categoria?: IntNullableFilter<"ticket"> | number | null
    id_subcategoria?: IntNullableFilter<"ticket"> | number | null
    telefono?: StringNullableFilter<"ticket"> | string | null
    descripcion?: StringNullableFilter<"ticket"> | string | null
    id_prioridad?: IntNullableFilter<"ticket"> | number | null
    id_sector?: IntNullableFilter<"ticket"> | number | null
    valor?: StringNullableFilter<"ticket"> | string | null
    link_art?: StringNullableFilter<"ticket"> | string | null
    id_estado?: IntNullableFilter<"ticket"> | number | null
    fecha?: StringNullableFilter<"ticket"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    subcategoria?: XOR<Sub_categoriasNullableScalarRelationFilter, sub_categoriasWhereInput> | null
    prioridad?: XOR<PrioridadNullableScalarRelationFilter, prioridadWhereInput> | null
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
    estado?: XOR<EstadosNullableScalarRelationFilter, estadosWhereInput> | null
  }

  export type ticketOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_user?: SortOrderInput | SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_subcategoria?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_prioridad?: SortOrderInput | SortOrder
    id_sector?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    link_art?: SortOrderInput | SortOrder
    id_estado?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    categoria?: categoriaOrderByWithRelationInput
    subcategoria?: sub_categoriasOrderByWithRelationInput
    prioridad?: prioridadOrderByWithRelationInput
    sector?: sectorOrderByWithRelationInput
    estado?: estadosOrderByWithRelationInput
  }

  export type ticketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    created_at?: DateTimeFilter<"ticket"> | Date | string
    id_user?: StringNullableFilter<"ticket"> | string | null
    id_categoria?: IntNullableFilter<"ticket"> | number | null
    id_subcategoria?: IntNullableFilter<"ticket"> | number | null
    telefono?: StringNullableFilter<"ticket"> | string | null
    descripcion?: StringNullableFilter<"ticket"> | string | null
    id_prioridad?: IntNullableFilter<"ticket"> | number | null
    id_sector?: IntNullableFilter<"ticket"> | number | null
    valor?: StringNullableFilter<"ticket"> | string | null
    link_art?: StringNullableFilter<"ticket"> | string | null
    id_estado?: IntNullableFilter<"ticket"> | number | null
    fecha?: StringNullableFilter<"ticket"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    subcategoria?: XOR<Sub_categoriasNullableScalarRelationFilter, sub_categoriasWhereInput> | null
    prioridad?: XOR<PrioridadNullableScalarRelationFilter, prioridadWhereInput> | null
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
    estado?: XOR<EstadosNullableScalarRelationFilter, estadosWhereInput> | null
  }, "id">

  export type ticketOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_user?: SortOrderInput | SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_subcategoria?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_prioridad?: SortOrderInput | SortOrder
    id_sector?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    link_art?: SortOrderInput | SortOrder
    id_estado?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: ticketCountOrderByAggregateInput
    _avg?: ticketAvgOrderByAggregateInput
    _max?: ticketMaxOrderByAggregateInput
    _min?: ticketMinOrderByAggregateInput
    _sum?: ticketSumOrderByAggregateInput
  }

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    OR?: ticketScalarWhereWithAggregatesInput[]
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ticket"> | number
    created_at?: DateTimeWithAggregatesFilter<"ticket"> | Date | string
    id_user?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    id_categoria?: IntNullableWithAggregatesFilter<"ticket"> | number | null
    id_subcategoria?: IntNullableWithAggregatesFilter<"ticket"> | number | null
    telefono?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    id_prioridad?: IntNullableWithAggregatesFilter<"ticket"> | number | null
    id_sector?: IntNullableWithAggregatesFilter<"ticket"> | number | null
    valor?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    link_art?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    id_estado?: IntNullableWithAggregatesFilter<"ticket"> | number | null
    fecha?: StringNullableWithAggregatesFilter<"ticket"> | string | null
  }

  export type user_informWhereInput = {
    AND?: user_informWhereInput | user_informWhereInput[]
    OR?: user_informWhereInput[]
    NOT?: user_informWhereInput | user_informWhereInput[]
    id?: IntFilter<"user_inform"> | number
    created_at?: DateTimeFilter<"user_inform"> | Date | string
    id_informe_link?: IntNullableFilter<"user_inform"> | number | null
    informe_link?: XOR<Informe_linkNullableScalarRelationFilter, informe_linkWhereInput> | null
  }

  export type user_informOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_informe_link?: SortOrderInput | SortOrder
    informe_link?: informe_linkOrderByWithRelationInput
  }

  export type user_informWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_informWhereInput | user_informWhereInput[]
    OR?: user_informWhereInput[]
    NOT?: user_informWhereInput | user_informWhereInput[]
    created_at?: DateTimeFilter<"user_inform"> | Date | string
    id_informe_link?: IntNullableFilter<"user_inform"> | number | null
    informe_link?: XOR<Informe_linkNullableScalarRelationFilter, informe_linkWhereInput> | null
  }, "id">

  export type user_informOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_informe_link?: SortOrderInput | SortOrder
    _count?: user_informCountOrderByAggregateInput
    _avg?: user_informAvgOrderByAggregateInput
    _max?: user_informMaxOrderByAggregateInput
    _min?: user_informMinOrderByAggregateInput
    _sum?: user_informSumOrderByAggregateInput
  }

  export type user_informScalarWhereWithAggregatesInput = {
    AND?: user_informScalarWhereWithAggregatesInput | user_informScalarWhereWithAggregatesInput[]
    OR?: user_informScalarWhereWithAggregatesInput[]
    NOT?: user_informScalarWhereWithAggregatesInput | user_informScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_inform"> | number
    created_at?: DateTimeWithAggregatesFilter<"user_inform"> | Date | string
    id_informe_link?: IntNullableWithAggregatesFilter<"user_inform"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    username?: StringNullableFilter<"users"> | string | null
    correo?: StringNullableFilter<"users"> | string | null
    id_sector?: IntNullableFilter<"users"> | number | null
    id_posicion?: IntNullableFilter<"users"> | number | null
    id_autorizador?: StringNullableFilter<"users"> | string | null
    rol?: StringNullableFilter<"users"> | string | null
    telefono?: StringNullableFilter<"users"> | string | null
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
    posicion?: XOR<PosicionNullableScalarRelationFilter, posicionWhereInput> | null
    autorizador?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    autorizados?: UsersListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    id_sector?: SortOrderInput | SortOrder
    id_posicion?: SortOrderInput | SortOrder
    id_autorizador?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    sector?: sectorOrderByWithRelationInput
    posicion?: posicionOrderByWithRelationInput
    autorizador?: usersOrderByWithRelationInput
    autorizados?: usersOrderByRelationAggregateInput
    tickets?: ticketOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    correo?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
    id_sector?: IntNullableFilter<"users"> | number | null
    id_posicion?: IntNullableFilter<"users"> | number | null
    id_autorizador?: StringNullableFilter<"users"> | string | null
    rol?: StringNullableFilter<"users"> | string | null
    telefono?: StringNullableFilter<"users"> | string | null
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
    posicion?: XOR<PosicionNullableScalarRelationFilter, posicionWhereInput> | null
    autorizador?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    autorizados?: UsersListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "username" | "correo">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    id_sector?: SortOrderInput | SortOrder
    id_posicion?: SortOrderInput | SortOrder
    id_autorizador?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    correo?: StringNullableWithAggregatesFilter<"users"> | string | null
    id_sector?: IntNullableWithAggregatesFilter<"users"> | number | null
    id_posicion?: IntNullableWithAggregatesFilter<"users"> | number | null
    id_autorizador?: StringNullableWithAggregatesFilter<"users"> | string | null
    rol?: StringNullableWithAggregatesFilter<"users"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type categoriaCreateInput = {
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketCreateNestedManyWithoutCategoriaInput
    sub_categorias?: sub_categoriasCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutCategoriaInput
    sub_categorias?: sub_categoriasUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUpdateManyWithoutCategoriaNestedInput
    sub_categorias?: sub_categoriasUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutCategoriaNestedInput
    sub_categorias?: sub_categoriasUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type categoriaUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estadosCreateInput = {
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketCreateNestedManyWithoutEstadoInput
  }

  export type estadosUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type estadosUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUpdateManyWithoutEstadoNestedInput
  }

  export type estadosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type estadosCreateManyInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type estadosUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estadosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type informe_linkCreateInput = {
    created_at?: Date | string
    link?: string | null
    user_informs?: user_informCreateNestedManyWithoutInforme_linkInput
  }

  export type informe_linkUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    link?: string | null
    user_informs?: user_informUncheckedCreateNestedManyWithoutInforme_linkInput
  }

  export type informe_linkUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    user_informs?: user_informUpdateManyWithoutInforme_linkNestedInput
  }

  export type informe_linkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    user_informs?: user_informUncheckedUpdateManyWithoutInforme_linkNestedInput
  }

  export type informe_linkCreateManyInput = {
    id?: number
    created_at?: Date | string
    link?: string | null
  }

  export type informe_linkUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type informe_linkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posicionCreateInput = {
    created_at?: Date | string
    nombre?: string | null
    users?: usersCreateNestedManyWithoutPosicionInput
  }

  export type posicionUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    users?: usersUncheckedCreateNestedManyWithoutPosicionInput
  }

  export type posicionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutPosicionNestedInput
  }

  export type posicionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUncheckedUpdateManyWithoutPosicionNestedInput
  }

  export type posicionCreateManyInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type posicionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posicionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prioridadCreateInput = {
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketCreateNestedManyWithoutPrioridadInput
  }

  export type prioridadUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutPrioridadInput
  }

  export type prioridadUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUpdateManyWithoutPrioridadNestedInput
  }

  export type prioridadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutPrioridadNestedInput
  }

  export type prioridadCreateManyInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type prioridadUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prioridadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolCreateInput = {
    created_at?: Date | string
    nombre?: string | null
  }

  export type rolUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type rolUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolCreateManyInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type rolUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sectorCreateInput = {
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketCreateNestedManyWithoutSectorInput
    users?: usersCreateNestedManyWithoutSectorInput
  }

  export type sectorUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutSectorInput
    users?: usersUncheckedCreateNestedManyWithoutSectorInput
  }

  export type sectorUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUpdateManyWithoutSectorNestedInput
    users?: usersUpdateManyWithoutSectorNestedInput
  }

  export type sectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutSectorNestedInput
    users?: usersUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type sectorCreateManyInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type sectorUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_categoriasCreateInput = {
    created_at?: Date | string
    nombre?: string | null
    categoria?: categoriaCreateNestedOneWithoutSub_categoriasInput
    tickets?: ticketCreateNestedManyWithoutSubcategoriaInput
  }

  export type sub_categoriasUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    id_categorias?: number | null
    tickets?: ticketUncheckedCreateNestedManyWithoutSubcategoriaInput
  }

  export type sub_categoriasUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutSub_categoriasNestedInput
    tickets?: ticketUpdateManyWithoutSubcategoriaNestedInput
  }

  export type sub_categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    id_categorias?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketUncheckedUpdateManyWithoutSubcategoriaNestedInput
  }

  export type sub_categoriasCreateManyInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    id_categorias?: number | null
  }

  export type sub_categoriasUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    id_categorias?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ticketCreateInput = {
    created_at?: Date | string
    telefono?: string | null
    descripcion?: string | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
    user?: usersCreateNestedOneWithoutTicketsInput
    categoria?: categoriaCreateNestedOneWithoutTicketsInput
    subcategoria?: sub_categoriasCreateNestedOneWithoutTicketsInput
    prioridad?: prioridadCreateNestedOneWithoutTicketsInput
    sector?: sectorCreateNestedOneWithoutTicketsInput
    estado?: estadosCreateNestedOneWithoutTicketsInput
  }

  export type ticketUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutTicketsNestedInput
    categoria?: categoriaUpdateOneWithoutTicketsNestedInput
    subcategoria?: sub_categoriasUpdateOneWithoutTicketsNestedInput
    prioridad?: prioridadUpdateOneWithoutTicketsNestedInput
    sector?: sectorUpdateOneWithoutTicketsNestedInput
    estado?: estadosUpdateOneWithoutTicketsNestedInput
  }

  export type ticketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketCreateManyInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_informCreateInput = {
    created_at?: Date | string
    informe_link?: informe_linkCreateNestedOneWithoutUser_informsInput
  }

  export type user_informUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    id_informe_link?: number | null
  }

  export type user_informUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    informe_link?: informe_linkUpdateOneWithoutUser_informsNestedInput
  }

  export type user_informUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_informe_link?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_informCreateManyInput = {
    id?: number
    created_at?: Date | string
    id_informe_link?: number | null
  }

  export type user_informUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_informUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_informe_link?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    rol?: string | null
    telefono?: string | null
    sector?: sectorCreateNestedOneWithoutUsersInput
    posicion?: posicionCreateNestedOneWithoutUsersInput
    autorizador?: usersCreateNestedOneWithoutAutorizadosInput
    autorizados?: usersCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_posicion?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
    autorizados?: usersUncheckedCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: sectorUpdateOneWithoutUsersNestedInput
    posicion?: posicionUpdateOneWithoutUsersNestedInput
    autorizador?: usersUpdateOneWithoutAutorizadosNestedInput
    autorizados?: usersUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    autorizados?: usersUncheckedUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_posicion?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TicketListRelationFilter = {
    every?: ticketWhereInput
    some?: ticketWhereInput
    none?: ticketWhereInput
  }

  export type Sub_categoriasListRelationFilter = {
    every?: sub_categoriasWhereInput
    some?: sub_categoriasWhereInput
    none?: sub_categoriasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sub_categoriasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type estadosCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type estadosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type estadosMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type estadosMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type estadosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type User_informListRelationFilter = {
    every?: user_informWhereInput
    some?: user_informWhereInput
    none?: user_informWhereInput
  }

  export type user_informOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type informe_linkCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    link?: SortOrder
  }

  export type informe_linkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type informe_linkMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    link?: SortOrder
  }

  export type informe_linkMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    link?: SortOrder
  }

  export type informe_linkSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type posicionCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type posicionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type posicionMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type posicionMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type posicionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type prioridadCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type prioridadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type prioridadMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type prioridadMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type prioridadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type rolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type rolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sectorCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type sectorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sectorMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type sectorMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
  }

  export type sectorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: categoriaWhereInput | null
    isNot?: categoriaWhereInput | null
  }

  export type sub_categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
    id_categorias?: SortOrder
  }

  export type sub_categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_categorias?: SortOrder
  }

  export type sub_categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
    id_categorias?: SortOrder
  }

  export type sub_categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nombre?: SortOrder
    id_categorias?: SortOrder
  }

  export type sub_categoriasSumOrderByAggregateInput = {
    id?: SortOrder
    id_categorias?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type Sub_categoriasNullableScalarRelationFilter = {
    is?: sub_categoriasWhereInput | null
    isNot?: sub_categoriasWhereInput | null
  }

  export type PrioridadNullableScalarRelationFilter = {
    is?: prioridadWhereInput | null
    isNot?: prioridadWhereInput | null
  }

  export type SectorNullableScalarRelationFilter = {
    is?: sectorWhereInput | null
    isNot?: sectorWhereInput | null
  }

  export type EstadosNullableScalarRelationFilter = {
    is?: estadosWhereInput | null
    isNot?: estadosWhereInput | null
  }

  export type ticketCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_user?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    telefono?: SortOrder
    descripcion?: SortOrder
    id_prioridad?: SortOrder
    id_sector?: SortOrder
    valor?: SortOrder
    link_art?: SortOrder
    id_estado?: SortOrder
    fecha?: SortOrder
  }

  export type ticketAvgOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    id_prioridad?: SortOrder
    id_sector?: SortOrder
    id_estado?: SortOrder
  }

  export type ticketMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_user?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    telefono?: SortOrder
    descripcion?: SortOrder
    id_prioridad?: SortOrder
    id_sector?: SortOrder
    valor?: SortOrder
    link_art?: SortOrder
    id_estado?: SortOrder
    fecha?: SortOrder
  }

  export type ticketMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_user?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    telefono?: SortOrder
    descripcion?: SortOrder
    id_prioridad?: SortOrder
    id_sector?: SortOrder
    valor?: SortOrder
    link_art?: SortOrder
    id_estado?: SortOrder
    fecha?: SortOrder
  }

  export type ticketSumOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    id_prioridad?: SortOrder
    id_sector?: SortOrder
    id_estado?: SortOrder
  }

  export type Informe_linkNullableScalarRelationFilter = {
    is?: informe_linkWhereInput | null
    isNot?: informe_linkWhereInput | null
  }

  export type user_informCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_informe_link?: SortOrder
  }

  export type user_informAvgOrderByAggregateInput = {
    id?: SortOrder
    id_informe_link?: SortOrder
  }

  export type user_informMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_informe_link?: SortOrder
  }

  export type user_informMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    id_informe_link?: SortOrder
  }

  export type user_informSumOrderByAggregateInput = {
    id?: SortOrder
    id_informe_link?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PosicionNullableScalarRelationFilter = {
    is?: posicionWhereInput | null
    isNot?: posicionWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrder
    correo?: SortOrder
    id_sector?: SortOrder
    id_posicion?: SortOrder
    id_autorizador?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id_sector?: SortOrder
    id_posicion?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrder
    correo?: SortOrder
    id_sector?: SortOrder
    id_posicion?: SortOrder
    id_autorizador?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrder
    correo?: SortOrder
    id_sector?: SortOrder
    id_posicion?: SortOrder
    id_autorizador?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id_sector?: SortOrder
    id_posicion?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ticketCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ticketCreateWithoutCategoriaInput, ticketUncheckedCreateWithoutCategoriaInput> | ticketCreateWithoutCategoriaInput[] | ticketUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCategoriaInput | ticketCreateOrConnectWithoutCategoriaInput[]
    createMany?: ticketCreateManyCategoriaInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type sub_categoriasCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<sub_categoriasCreateWithoutCategoriaInput, sub_categoriasUncheckedCreateWithoutCategoriaInput> | sub_categoriasCreateWithoutCategoriaInput[] | sub_categoriasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: sub_categoriasCreateOrConnectWithoutCategoriaInput | sub_categoriasCreateOrConnectWithoutCategoriaInput[]
    createMany?: sub_categoriasCreateManyCategoriaInputEnvelope
    connect?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ticketCreateWithoutCategoriaInput, ticketUncheckedCreateWithoutCategoriaInput> | ticketCreateWithoutCategoriaInput[] | ticketUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCategoriaInput | ticketCreateOrConnectWithoutCategoriaInput[]
    createMany?: ticketCreateManyCategoriaInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type sub_categoriasUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<sub_categoriasCreateWithoutCategoriaInput, sub_categoriasUncheckedCreateWithoutCategoriaInput> | sub_categoriasCreateWithoutCategoriaInput[] | sub_categoriasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: sub_categoriasCreateOrConnectWithoutCategoriaInput | sub_categoriasCreateOrConnectWithoutCategoriaInput[]
    createMany?: sub_categoriasCreateManyCategoriaInputEnvelope
    connect?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ticketUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ticketCreateWithoutCategoriaInput, ticketUncheckedCreateWithoutCategoriaInput> | ticketCreateWithoutCategoriaInput[] | ticketUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCategoriaInput | ticketCreateOrConnectWithoutCategoriaInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutCategoriaInput | ticketUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ticketCreateManyCategoriaInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutCategoriaInput | ticketUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutCategoriaInput | ticketUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type sub_categoriasUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<sub_categoriasCreateWithoutCategoriaInput, sub_categoriasUncheckedCreateWithoutCategoriaInput> | sub_categoriasCreateWithoutCategoriaInput[] | sub_categoriasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: sub_categoriasCreateOrConnectWithoutCategoriaInput | sub_categoriasCreateOrConnectWithoutCategoriaInput[]
    upsert?: sub_categoriasUpsertWithWhereUniqueWithoutCategoriaInput | sub_categoriasUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: sub_categoriasCreateManyCategoriaInputEnvelope
    set?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    disconnect?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    delete?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    connect?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    update?: sub_categoriasUpdateWithWhereUniqueWithoutCategoriaInput | sub_categoriasUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: sub_categoriasUpdateManyWithWhereWithoutCategoriaInput | sub_categoriasUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: sub_categoriasScalarWhereInput | sub_categoriasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ticketUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ticketCreateWithoutCategoriaInput, ticketUncheckedCreateWithoutCategoriaInput> | ticketCreateWithoutCategoriaInput[] | ticketUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCategoriaInput | ticketCreateOrConnectWithoutCategoriaInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutCategoriaInput | ticketUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ticketCreateManyCategoriaInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutCategoriaInput | ticketUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutCategoriaInput | ticketUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type sub_categoriasUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<sub_categoriasCreateWithoutCategoriaInput, sub_categoriasUncheckedCreateWithoutCategoriaInput> | sub_categoriasCreateWithoutCategoriaInput[] | sub_categoriasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: sub_categoriasCreateOrConnectWithoutCategoriaInput | sub_categoriasCreateOrConnectWithoutCategoriaInput[]
    upsert?: sub_categoriasUpsertWithWhereUniqueWithoutCategoriaInput | sub_categoriasUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: sub_categoriasCreateManyCategoriaInputEnvelope
    set?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    disconnect?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    delete?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    connect?: sub_categoriasWhereUniqueInput | sub_categoriasWhereUniqueInput[]
    update?: sub_categoriasUpdateWithWhereUniqueWithoutCategoriaInput | sub_categoriasUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: sub_categoriasUpdateManyWithWhereWithoutCategoriaInput | sub_categoriasUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: sub_categoriasScalarWhereInput | sub_categoriasScalarWhereInput[]
  }

  export type ticketCreateNestedManyWithoutEstadoInput = {
    create?: XOR<ticketCreateWithoutEstadoInput, ticketUncheckedCreateWithoutEstadoInput> | ticketCreateWithoutEstadoInput[] | ticketUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEstadoInput | ticketCreateOrConnectWithoutEstadoInput[]
    createMany?: ticketCreateManyEstadoInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<ticketCreateWithoutEstadoInput, ticketUncheckedCreateWithoutEstadoInput> | ticketCreateWithoutEstadoInput[] | ticketUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEstadoInput | ticketCreateOrConnectWithoutEstadoInput[]
    createMany?: ticketCreateManyEstadoInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<ticketCreateWithoutEstadoInput, ticketUncheckedCreateWithoutEstadoInput> | ticketCreateWithoutEstadoInput[] | ticketUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEstadoInput | ticketCreateOrConnectWithoutEstadoInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutEstadoInput | ticketUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: ticketCreateManyEstadoInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutEstadoInput | ticketUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutEstadoInput | ticketUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<ticketCreateWithoutEstadoInput, ticketUncheckedCreateWithoutEstadoInput> | ticketCreateWithoutEstadoInput[] | ticketUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEstadoInput | ticketCreateOrConnectWithoutEstadoInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutEstadoInput | ticketUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: ticketCreateManyEstadoInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutEstadoInput | ticketUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutEstadoInput | ticketUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type user_informCreateNestedManyWithoutInforme_linkInput = {
    create?: XOR<user_informCreateWithoutInforme_linkInput, user_informUncheckedCreateWithoutInforme_linkInput> | user_informCreateWithoutInforme_linkInput[] | user_informUncheckedCreateWithoutInforme_linkInput[]
    connectOrCreate?: user_informCreateOrConnectWithoutInforme_linkInput | user_informCreateOrConnectWithoutInforme_linkInput[]
    createMany?: user_informCreateManyInforme_linkInputEnvelope
    connect?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
  }

  export type user_informUncheckedCreateNestedManyWithoutInforme_linkInput = {
    create?: XOR<user_informCreateWithoutInforme_linkInput, user_informUncheckedCreateWithoutInforme_linkInput> | user_informCreateWithoutInforme_linkInput[] | user_informUncheckedCreateWithoutInforme_linkInput[]
    connectOrCreate?: user_informCreateOrConnectWithoutInforme_linkInput | user_informCreateOrConnectWithoutInforme_linkInput[]
    createMany?: user_informCreateManyInforme_linkInputEnvelope
    connect?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
  }

  export type user_informUpdateManyWithoutInforme_linkNestedInput = {
    create?: XOR<user_informCreateWithoutInforme_linkInput, user_informUncheckedCreateWithoutInforme_linkInput> | user_informCreateWithoutInforme_linkInput[] | user_informUncheckedCreateWithoutInforme_linkInput[]
    connectOrCreate?: user_informCreateOrConnectWithoutInforme_linkInput | user_informCreateOrConnectWithoutInforme_linkInput[]
    upsert?: user_informUpsertWithWhereUniqueWithoutInforme_linkInput | user_informUpsertWithWhereUniqueWithoutInforme_linkInput[]
    createMany?: user_informCreateManyInforme_linkInputEnvelope
    set?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    disconnect?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    delete?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    connect?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    update?: user_informUpdateWithWhereUniqueWithoutInforme_linkInput | user_informUpdateWithWhereUniqueWithoutInforme_linkInput[]
    updateMany?: user_informUpdateManyWithWhereWithoutInforme_linkInput | user_informUpdateManyWithWhereWithoutInforme_linkInput[]
    deleteMany?: user_informScalarWhereInput | user_informScalarWhereInput[]
  }

  export type user_informUncheckedUpdateManyWithoutInforme_linkNestedInput = {
    create?: XOR<user_informCreateWithoutInforme_linkInput, user_informUncheckedCreateWithoutInforme_linkInput> | user_informCreateWithoutInforme_linkInput[] | user_informUncheckedCreateWithoutInforme_linkInput[]
    connectOrCreate?: user_informCreateOrConnectWithoutInforme_linkInput | user_informCreateOrConnectWithoutInforme_linkInput[]
    upsert?: user_informUpsertWithWhereUniqueWithoutInforme_linkInput | user_informUpsertWithWhereUniqueWithoutInforme_linkInput[]
    createMany?: user_informCreateManyInforme_linkInputEnvelope
    set?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    disconnect?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    delete?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    connect?: user_informWhereUniqueInput | user_informWhereUniqueInput[]
    update?: user_informUpdateWithWhereUniqueWithoutInforme_linkInput | user_informUpdateWithWhereUniqueWithoutInforme_linkInput[]
    updateMany?: user_informUpdateManyWithWhereWithoutInforme_linkInput | user_informUpdateManyWithWhereWithoutInforme_linkInput[]
    deleteMany?: user_informScalarWhereInput | user_informScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutPosicionInput = {
    create?: XOR<usersCreateWithoutPosicionInput, usersUncheckedCreateWithoutPosicionInput> | usersCreateWithoutPosicionInput[] | usersUncheckedCreateWithoutPosicionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosicionInput | usersCreateOrConnectWithoutPosicionInput[]
    createMany?: usersCreateManyPosicionInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutPosicionInput = {
    create?: XOR<usersCreateWithoutPosicionInput, usersUncheckedCreateWithoutPosicionInput> | usersCreateWithoutPosicionInput[] | usersUncheckedCreateWithoutPosicionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosicionInput | usersCreateOrConnectWithoutPosicionInput[]
    createMany?: usersCreateManyPosicionInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutPosicionNestedInput = {
    create?: XOR<usersCreateWithoutPosicionInput, usersUncheckedCreateWithoutPosicionInput> | usersCreateWithoutPosicionInput[] | usersUncheckedCreateWithoutPosicionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosicionInput | usersCreateOrConnectWithoutPosicionInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPosicionInput | usersUpsertWithWhereUniqueWithoutPosicionInput[]
    createMany?: usersCreateManyPosicionInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPosicionInput | usersUpdateWithWhereUniqueWithoutPosicionInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPosicionInput | usersUpdateManyWithWhereWithoutPosicionInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutPosicionNestedInput = {
    create?: XOR<usersCreateWithoutPosicionInput, usersUncheckedCreateWithoutPosicionInput> | usersCreateWithoutPosicionInput[] | usersUncheckedCreateWithoutPosicionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosicionInput | usersCreateOrConnectWithoutPosicionInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPosicionInput | usersUpsertWithWhereUniqueWithoutPosicionInput[]
    createMany?: usersCreateManyPosicionInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPosicionInput | usersUpdateWithWhereUniqueWithoutPosicionInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPosicionInput | usersUpdateManyWithWhereWithoutPosicionInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type ticketCreateNestedManyWithoutPrioridadInput = {
    create?: XOR<ticketCreateWithoutPrioridadInput, ticketUncheckedCreateWithoutPrioridadInput> | ticketCreateWithoutPrioridadInput[] | ticketUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutPrioridadInput | ticketCreateOrConnectWithoutPrioridadInput[]
    createMany?: ticketCreateManyPrioridadInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutPrioridadInput = {
    create?: XOR<ticketCreateWithoutPrioridadInput, ticketUncheckedCreateWithoutPrioridadInput> | ticketCreateWithoutPrioridadInput[] | ticketUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutPrioridadInput | ticketCreateOrConnectWithoutPrioridadInput[]
    createMany?: ticketCreateManyPrioridadInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUpdateManyWithoutPrioridadNestedInput = {
    create?: XOR<ticketCreateWithoutPrioridadInput, ticketUncheckedCreateWithoutPrioridadInput> | ticketCreateWithoutPrioridadInput[] | ticketUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutPrioridadInput | ticketCreateOrConnectWithoutPrioridadInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutPrioridadInput | ticketUpsertWithWhereUniqueWithoutPrioridadInput[]
    createMany?: ticketCreateManyPrioridadInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutPrioridadInput | ticketUpdateWithWhereUniqueWithoutPrioridadInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutPrioridadInput | ticketUpdateManyWithWhereWithoutPrioridadInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutPrioridadNestedInput = {
    create?: XOR<ticketCreateWithoutPrioridadInput, ticketUncheckedCreateWithoutPrioridadInput> | ticketCreateWithoutPrioridadInput[] | ticketUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutPrioridadInput | ticketCreateOrConnectWithoutPrioridadInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutPrioridadInput | ticketUpsertWithWhereUniqueWithoutPrioridadInput[]
    createMany?: ticketCreateManyPrioridadInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutPrioridadInput | ticketUpdateWithWhereUniqueWithoutPrioridadInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutPrioridadInput | ticketUpdateManyWithWhereWithoutPrioridadInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type ticketCreateNestedManyWithoutSectorInput = {
    create?: XOR<ticketCreateWithoutSectorInput, ticketUncheckedCreateWithoutSectorInput> | ticketCreateWithoutSectorInput[] | ticketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSectorInput | ticketCreateOrConnectWithoutSectorInput[]
    createMany?: ticketCreateManySectorInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutSectorInput = {
    create?: XOR<usersCreateWithoutSectorInput, usersUncheckedCreateWithoutSectorInput> | usersCreateWithoutSectorInput[] | usersUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSectorInput | usersCreateOrConnectWithoutSectorInput[]
    createMany?: usersCreateManySectorInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<ticketCreateWithoutSectorInput, ticketUncheckedCreateWithoutSectorInput> | ticketCreateWithoutSectorInput[] | ticketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSectorInput | ticketCreateOrConnectWithoutSectorInput[]
    createMany?: ticketCreateManySectorInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<usersCreateWithoutSectorInput, usersUncheckedCreateWithoutSectorInput> | usersCreateWithoutSectorInput[] | usersUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSectorInput | usersCreateOrConnectWithoutSectorInput[]
    createMany?: usersCreateManySectorInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type ticketUpdateManyWithoutSectorNestedInput = {
    create?: XOR<ticketCreateWithoutSectorInput, ticketUncheckedCreateWithoutSectorInput> | ticketCreateWithoutSectorInput[] | ticketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSectorInput | ticketCreateOrConnectWithoutSectorInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSectorInput | ticketUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: ticketCreateManySectorInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSectorInput | ticketUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSectorInput | ticketUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type usersUpdateManyWithoutSectorNestedInput = {
    create?: XOR<usersCreateWithoutSectorInput, usersUncheckedCreateWithoutSectorInput> | usersCreateWithoutSectorInput[] | usersUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSectorInput | usersCreateOrConnectWithoutSectorInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSectorInput | usersUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: usersCreateManySectorInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSectorInput | usersUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSectorInput | usersUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<ticketCreateWithoutSectorInput, ticketUncheckedCreateWithoutSectorInput> | ticketCreateWithoutSectorInput[] | ticketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSectorInput | ticketCreateOrConnectWithoutSectorInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSectorInput | ticketUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: ticketCreateManySectorInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSectorInput | ticketUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSectorInput | ticketUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<usersCreateWithoutSectorInput, usersUncheckedCreateWithoutSectorInput> | usersCreateWithoutSectorInput[] | usersUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSectorInput | usersCreateOrConnectWithoutSectorInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSectorInput | usersUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: usersCreateManySectorInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSectorInput | usersUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSectorInput | usersUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutSub_categoriasInput = {
    create?: XOR<categoriaCreateWithoutSub_categoriasInput, categoriaUncheckedCreateWithoutSub_categoriasInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutSub_categoriasInput
    connect?: categoriaWhereUniqueInput
  }

  export type ticketCreateNestedManyWithoutSubcategoriaInput = {
    create?: XOR<ticketCreateWithoutSubcategoriaInput, ticketUncheckedCreateWithoutSubcategoriaInput> | ticketCreateWithoutSubcategoriaInput[] | ticketUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSubcategoriaInput | ticketCreateOrConnectWithoutSubcategoriaInput[]
    createMany?: ticketCreateManySubcategoriaInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutSubcategoriaInput = {
    create?: XOR<ticketCreateWithoutSubcategoriaInput, ticketUncheckedCreateWithoutSubcategoriaInput> | ticketCreateWithoutSubcategoriaInput[] | ticketUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSubcategoriaInput | ticketCreateOrConnectWithoutSubcategoriaInput[]
    createMany?: ticketCreateManySubcategoriaInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type categoriaUpdateOneWithoutSub_categoriasNestedInput = {
    create?: XOR<categoriaCreateWithoutSub_categoriasInput, categoriaUncheckedCreateWithoutSub_categoriasInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutSub_categoriasInput
    upsert?: categoriaUpsertWithoutSub_categoriasInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutSub_categoriasInput, categoriaUpdateWithoutSub_categoriasInput>, categoriaUncheckedUpdateWithoutSub_categoriasInput>
  }

  export type ticketUpdateManyWithoutSubcategoriaNestedInput = {
    create?: XOR<ticketCreateWithoutSubcategoriaInput, ticketUncheckedCreateWithoutSubcategoriaInput> | ticketCreateWithoutSubcategoriaInput[] | ticketUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSubcategoriaInput | ticketCreateOrConnectWithoutSubcategoriaInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSubcategoriaInput | ticketUpsertWithWhereUniqueWithoutSubcategoriaInput[]
    createMany?: ticketCreateManySubcategoriaInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSubcategoriaInput | ticketUpdateWithWhereUniqueWithoutSubcategoriaInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSubcategoriaInput | ticketUpdateManyWithWhereWithoutSubcategoriaInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ticketUncheckedUpdateManyWithoutSubcategoriaNestedInput = {
    create?: XOR<ticketCreateWithoutSubcategoriaInput, ticketUncheckedCreateWithoutSubcategoriaInput> | ticketCreateWithoutSubcategoriaInput[] | ticketUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSubcategoriaInput | ticketCreateOrConnectWithoutSubcategoriaInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSubcategoriaInput | ticketUpsertWithWhereUniqueWithoutSubcategoriaInput[]
    createMany?: ticketCreateManySubcategoriaInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSubcategoriaInput | ticketUpdateWithWhereUniqueWithoutSubcategoriaInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSubcategoriaInput | ticketUpdateManyWithWhereWithoutSubcategoriaInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTicketsInput = {
    create?: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTicketsInput
    connect?: usersWhereUniqueInput
  }

  export type categoriaCreateNestedOneWithoutTicketsInput = {
    create?: XOR<categoriaCreateWithoutTicketsInput, categoriaUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutTicketsInput
    connect?: categoriaWhereUniqueInput
  }

  export type sub_categoriasCreateNestedOneWithoutTicketsInput = {
    create?: XOR<sub_categoriasCreateWithoutTicketsInput, sub_categoriasUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: sub_categoriasCreateOrConnectWithoutTicketsInput
    connect?: sub_categoriasWhereUniqueInput
  }

  export type prioridadCreateNestedOneWithoutTicketsInput = {
    create?: XOR<prioridadCreateWithoutTicketsInput, prioridadUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: prioridadCreateOrConnectWithoutTicketsInput
    connect?: prioridadWhereUniqueInput
  }

  export type sectorCreateNestedOneWithoutTicketsInput = {
    create?: XOR<sectorCreateWithoutTicketsInput, sectorUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: sectorCreateOrConnectWithoutTicketsInput
    connect?: sectorWhereUniqueInput
  }

  export type estadosCreateNestedOneWithoutTicketsInput = {
    create?: XOR<estadosCreateWithoutTicketsInput, estadosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: estadosCreateOrConnectWithoutTicketsInput
    connect?: estadosWhereUniqueInput
  }

  export type usersUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTicketsInput
    upsert?: usersUpsertWithoutTicketsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTicketsInput, usersUpdateWithoutTicketsInput>, usersUncheckedUpdateWithoutTicketsInput>
  }

  export type categoriaUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<categoriaCreateWithoutTicketsInput, categoriaUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutTicketsInput
    upsert?: categoriaUpsertWithoutTicketsInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutTicketsInput, categoriaUpdateWithoutTicketsInput>, categoriaUncheckedUpdateWithoutTicketsInput>
  }

  export type sub_categoriasUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<sub_categoriasCreateWithoutTicketsInput, sub_categoriasUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: sub_categoriasCreateOrConnectWithoutTicketsInput
    upsert?: sub_categoriasUpsertWithoutTicketsInput
    disconnect?: sub_categoriasWhereInput | boolean
    delete?: sub_categoriasWhereInput | boolean
    connect?: sub_categoriasWhereUniqueInput
    update?: XOR<XOR<sub_categoriasUpdateToOneWithWhereWithoutTicketsInput, sub_categoriasUpdateWithoutTicketsInput>, sub_categoriasUncheckedUpdateWithoutTicketsInput>
  }

  export type prioridadUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<prioridadCreateWithoutTicketsInput, prioridadUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: prioridadCreateOrConnectWithoutTicketsInput
    upsert?: prioridadUpsertWithoutTicketsInput
    disconnect?: prioridadWhereInput | boolean
    delete?: prioridadWhereInput | boolean
    connect?: prioridadWhereUniqueInput
    update?: XOR<XOR<prioridadUpdateToOneWithWhereWithoutTicketsInput, prioridadUpdateWithoutTicketsInput>, prioridadUncheckedUpdateWithoutTicketsInput>
  }

  export type sectorUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<sectorCreateWithoutTicketsInput, sectorUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: sectorCreateOrConnectWithoutTicketsInput
    upsert?: sectorUpsertWithoutTicketsInput
    disconnect?: sectorWhereInput | boolean
    delete?: sectorWhereInput | boolean
    connect?: sectorWhereUniqueInput
    update?: XOR<XOR<sectorUpdateToOneWithWhereWithoutTicketsInput, sectorUpdateWithoutTicketsInput>, sectorUncheckedUpdateWithoutTicketsInput>
  }

  export type estadosUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<estadosCreateWithoutTicketsInput, estadosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: estadosCreateOrConnectWithoutTicketsInput
    upsert?: estadosUpsertWithoutTicketsInput
    disconnect?: estadosWhereInput | boolean
    delete?: estadosWhereInput | boolean
    connect?: estadosWhereUniqueInput
    update?: XOR<XOR<estadosUpdateToOneWithWhereWithoutTicketsInput, estadosUpdateWithoutTicketsInput>, estadosUncheckedUpdateWithoutTicketsInput>
  }

  export type informe_linkCreateNestedOneWithoutUser_informsInput = {
    create?: XOR<informe_linkCreateWithoutUser_informsInput, informe_linkUncheckedCreateWithoutUser_informsInput>
    connectOrCreate?: informe_linkCreateOrConnectWithoutUser_informsInput
    connect?: informe_linkWhereUniqueInput
  }

  export type informe_linkUpdateOneWithoutUser_informsNestedInput = {
    create?: XOR<informe_linkCreateWithoutUser_informsInput, informe_linkUncheckedCreateWithoutUser_informsInput>
    connectOrCreate?: informe_linkCreateOrConnectWithoutUser_informsInput
    upsert?: informe_linkUpsertWithoutUser_informsInput
    disconnect?: informe_linkWhereInput | boolean
    delete?: informe_linkWhereInput | boolean
    connect?: informe_linkWhereUniqueInput
    update?: XOR<XOR<informe_linkUpdateToOneWithWhereWithoutUser_informsInput, informe_linkUpdateWithoutUser_informsInput>, informe_linkUncheckedUpdateWithoutUser_informsInput>
  }

  export type sectorCreateNestedOneWithoutUsersInput = {
    create?: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sectorCreateOrConnectWithoutUsersInput
    connect?: sectorWhereUniqueInput
  }

  export type posicionCreateNestedOneWithoutUsersInput = {
    create?: XOR<posicionCreateWithoutUsersInput, posicionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: posicionCreateOrConnectWithoutUsersInput
    connect?: posicionWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAutorizadosInput = {
    create?: XOR<usersCreateWithoutAutorizadosInput, usersUncheckedCreateWithoutAutorizadosInput>
    connectOrCreate?: usersCreateOrConnectWithoutAutorizadosInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutAutorizadorInput = {
    create?: XOR<usersCreateWithoutAutorizadorInput, usersUncheckedCreateWithoutAutorizadorInput> | usersCreateWithoutAutorizadorInput[] | usersUncheckedCreateWithoutAutorizadorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAutorizadorInput | usersCreateOrConnectWithoutAutorizadorInput[]
    createMany?: usersCreateManyAutorizadorInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type ticketCreateNestedManyWithoutUserInput = {
    create?: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput> | ticketCreateWithoutUserInput[] | ticketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[]
    createMany?: ticketCreateManyUserInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutAutorizadorInput = {
    create?: XOR<usersCreateWithoutAutorizadorInput, usersUncheckedCreateWithoutAutorizadorInput> | usersCreateWithoutAutorizadorInput[] | usersUncheckedCreateWithoutAutorizadorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAutorizadorInput | usersCreateOrConnectWithoutAutorizadorInput[]
    createMany?: usersCreateManyAutorizadorInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput> | ticketCreateWithoutUserInput[] | ticketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[]
    createMany?: ticketCreateManyUserInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type sectorUpdateOneWithoutUsersNestedInput = {
    create?: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sectorCreateOrConnectWithoutUsersInput
    upsert?: sectorUpsertWithoutUsersInput
    disconnect?: sectorWhereInput | boolean
    delete?: sectorWhereInput | boolean
    connect?: sectorWhereUniqueInput
    update?: XOR<XOR<sectorUpdateToOneWithWhereWithoutUsersInput, sectorUpdateWithoutUsersInput>, sectorUncheckedUpdateWithoutUsersInput>
  }

  export type posicionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<posicionCreateWithoutUsersInput, posicionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: posicionCreateOrConnectWithoutUsersInput
    upsert?: posicionUpsertWithoutUsersInput
    disconnect?: posicionWhereInput | boolean
    delete?: posicionWhereInput | boolean
    connect?: posicionWhereUniqueInput
    update?: XOR<XOR<posicionUpdateToOneWithWhereWithoutUsersInput, posicionUpdateWithoutUsersInput>, posicionUncheckedUpdateWithoutUsersInput>
  }

  export type usersUpdateOneWithoutAutorizadosNestedInput = {
    create?: XOR<usersCreateWithoutAutorizadosInput, usersUncheckedCreateWithoutAutorizadosInput>
    connectOrCreate?: usersCreateOrConnectWithoutAutorizadosInput
    upsert?: usersUpsertWithoutAutorizadosInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAutorizadosInput, usersUpdateWithoutAutorizadosInput>, usersUncheckedUpdateWithoutAutorizadosInput>
  }

  export type usersUpdateManyWithoutAutorizadorNestedInput = {
    create?: XOR<usersCreateWithoutAutorizadorInput, usersUncheckedCreateWithoutAutorizadorInput> | usersCreateWithoutAutorizadorInput[] | usersUncheckedCreateWithoutAutorizadorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAutorizadorInput | usersCreateOrConnectWithoutAutorizadorInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutAutorizadorInput | usersUpsertWithWhereUniqueWithoutAutorizadorInput[]
    createMany?: usersCreateManyAutorizadorInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutAutorizadorInput | usersUpdateWithWhereUniqueWithoutAutorizadorInput[]
    updateMany?: usersUpdateManyWithWhereWithoutAutorizadorInput | usersUpdateManyWithWhereWithoutAutorizadorInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type ticketUpdateManyWithoutUserNestedInput = {
    create?: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput> | ticketCreateWithoutUserInput[] | ticketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ticketCreateManyUserInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutAutorizadorNestedInput = {
    create?: XOR<usersCreateWithoutAutorizadorInput, usersUncheckedCreateWithoutAutorizadorInput> | usersCreateWithoutAutorizadorInput[] | usersUncheckedCreateWithoutAutorizadorInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAutorizadorInput | usersCreateOrConnectWithoutAutorizadorInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutAutorizadorInput | usersUpsertWithWhereUniqueWithoutAutorizadorInput[]
    createMany?: usersCreateManyAutorizadorInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutAutorizadorInput | usersUpdateWithWhereUniqueWithoutAutorizadorInput[]
    updateMany?: usersUpdateManyWithWhereWithoutAutorizadorInput | usersUpdateManyWithWhereWithoutAutorizadorInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput> | ticketCreateWithoutUserInput[] | ticketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ticketCreateManyUserInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ticketCreateWithoutCategoriaInput = {
    created_at?: Date | string
    telefono?: string | null
    descripcion?: string | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
    user?: usersCreateNestedOneWithoutTicketsInput
    subcategoria?: sub_categoriasCreateNestedOneWithoutTicketsInput
    prioridad?: prioridadCreateNestedOneWithoutTicketsInput
    sector?: sectorCreateNestedOneWithoutTicketsInput
    estado?: estadosCreateNestedOneWithoutTicketsInput
  }

  export type ticketUncheckedCreateWithoutCategoriaInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketCreateOrConnectWithoutCategoriaInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutCategoriaInput, ticketUncheckedCreateWithoutCategoriaInput>
  }

  export type ticketCreateManyCategoriaInputEnvelope = {
    data: ticketCreateManyCategoriaInput | ticketCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type sub_categoriasCreateWithoutCategoriaInput = {
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketCreateNestedManyWithoutSubcategoriaInput
  }

  export type sub_categoriasUncheckedCreateWithoutCategoriaInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutSubcategoriaInput
  }

  export type sub_categoriasCreateOrConnectWithoutCategoriaInput = {
    where: sub_categoriasWhereUniqueInput
    create: XOR<sub_categoriasCreateWithoutCategoriaInput, sub_categoriasUncheckedCreateWithoutCategoriaInput>
  }

  export type sub_categoriasCreateManyCategoriaInputEnvelope = {
    data: sub_categoriasCreateManyCategoriaInput | sub_categoriasCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ticketUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutCategoriaInput, ticketUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ticketCreateWithoutCategoriaInput, ticketUncheckedCreateWithoutCategoriaInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutCategoriaInput, ticketUncheckedUpdateWithoutCategoriaInput>
  }

  export type ticketUpdateManyWithWhereWithoutCategoriaInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[]
    OR?: ticketScalarWhereInput[]
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[]
    id?: IntFilter<"ticket"> | number
    created_at?: DateTimeFilter<"ticket"> | Date | string
    id_user?: StringNullableFilter<"ticket"> | string | null
    id_categoria?: IntNullableFilter<"ticket"> | number | null
    id_subcategoria?: IntNullableFilter<"ticket"> | number | null
    telefono?: StringNullableFilter<"ticket"> | string | null
    descripcion?: StringNullableFilter<"ticket"> | string | null
    id_prioridad?: IntNullableFilter<"ticket"> | number | null
    id_sector?: IntNullableFilter<"ticket"> | number | null
    valor?: StringNullableFilter<"ticket"> | string | null
    link_art?: StringNullableFilter<"ticket"> | string | null
    id_estado?: IntNullableFilter<"ticket"> | number | null
    fecha?: StringNullableFilter<"ticket"> | string | null
  }

  export type sub_categoriasUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: sub_categoriasWhereUniqueInput
    update: XOR<sub_categoriasUpdateWithoutCategoriaInput, sub_categoriasUncheckedUpdateWithoutCategoriaInput>
    create: XOR<sub_categoriasCreateWithoutCategoriaInput, sub_categoriasUncheckedCreateWithoutCategoriaInput>
  }

  export type sub_categoriasUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: sub_categoriasWhereUniqueInput
    data: XOR<sub_categoriasUpdateWithoutCategoriaInput, sub_categoriasUncheckedUpdateWithoutCategoriaInput>
  }

  export type sub_categoriasUpdateManyWithWhereWithoutCategoriaInput = {
    where: sub_categoriasScalarWhereInput
    data: XOR<sub_categoriasUpdateManyMutationInput, sub_categoriasUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type sub_categoriasScalarWhereInput = {
    AND?: sub_categoriasScalarWhereInput | sub_categoriasScalarWhereInput[]
    OR?: sub_categoriasScalarWhereInput[]
    NOT?: sub_categoriasScalarWhereInput | sub_categoriasScalarWhereInput[]
    id?: IntFilter<"sub_categorias"> | number
    created_at?: DateTimeFilter<"sub_categorias"> | Date | string
    nombre?: StringNullableFilter<"sub_categorias"> | string | null
    id_categorias?: IntNullableFilter<"sub_categorias"> | number | null
  }

  export type ticketCreateWithoutEstadoInput = {
    created_at?: Date | string
    telefono?: string | null
    descripcion?: string | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
    user?: usersCreateNestedOneWithoutTicketsInput
    categoria?: categoriaCreateNestedOneWithoutTicketsInput
    subcategoria?: sub_categoriasCreateNestedOneWithoutTicketsInput
    prioridad?: prioridadCreateNestedOneWithoutTicketsInput
    sector?: sectorCreateNestedOneWithoutTicketsInput
  }

  export type ticketUncheckedCreateWithoutEstadoInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
  }

  export type ticketCreateOrConnectWithoutEstadoInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutEstadoInput, ticketUncheckedCreateWithoutEstadoInput>
  }

  export type ticketCreateManyEstadoInputEnvelope = {
    data: ticketCreateManyEstadoInput | ticketCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type ticketUpsertWithWhereUniqueWithoutEstadoInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutEstadoInput, ticketUncheckedUpdateWithoutEstadoInput>
    create: XOR<ticketCreateWithoutEstadoInput, ticketUncheckedCreateWithoutEstadoInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutEstadoInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutEstadoInput, ticketUncheckedUpdateWithoutEstadoInput>
  }

  export type ticketUpdateManyWithWhereWithoutEstadoInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutEstadoInput>
  }

  export type user_informCreateWithoutInforme_linkInput = {
    created_at?: Date | string
  }

  export type user_informUncheckedCreateWithoutInforme_linkInput = {
    id?: number
    created_at?: Date | string
  }

  export type user_informCreateOrConnectWithoutInforme_linkInput = {
    where: user_informWhereUniqueInput
    create: XOR<user_informCreateWithoutInforme_linkInput, user_informUncheckedCreateWithoutInforme_linkInput>
  }

  export type user_informCreateManyInforme_linkInputEnvelope = {
    data: user_informCreateManyInforme_linkInput | user_informCreateManyInforme_linkInput[]
    skipDuplicates?: boolean
  }

  export type user_informUpsertWithWhereUniqueWithoutInforme_linkInput = {
    where: user_informWhereUniqueInput
    update: XOR<user_informUpdateWithoutInforme_linkInput, user_informUncheckedUpdateWithoutInforme_linkInput>
    create: XOR<user_informCreateWithoutInforme_linkInput, user_informUncheckedCreateWithoutInforme_linkInput>
  }

  export type user_informUpdateWithWhereUniqueWithoutInforme_linkInput = {
    where: user_informWhereUniqueInput
    data: XOR<user_informUpdateWithoutInforme_linkInput, user_informUncheckedUpdateWithoutInforme_linkInput>
  }

  export type user_informUpdateManyWithWhereWithoutInforme_linkInput = {
    where: user_informScalarWhereInput
    data: XOR<user_informUpdateManyMutationInput, user_informUncheckedUpdateManyWithoutInforme_linkInput>
  }

  export type user_informScalarWhereInput = {
    AND?: user_informScalarWhereInput | user_informScalarWhereInput[]
    OR?: user_informScalarWhereInput[]
    NOT?: user_informScalarWhereInput | user_informScalarWhereInput[]
    id?: IntFilter<"user_inform"> | number
    created_at?: DateTimeFilter<"user_inform"> | Date | string
    id_informe_link?: IntNullableFilter<"user_inform"> | number | null
  }

  export type usersCreateWithoutPosicionInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    rol?: string | null
    telefono?: string | null
    sector?: sectorCreateNestedOneWithoutUsersInput
    autorizador?: usersCreateNestedOneWithoutAutorizadosInput
    autorizados?: usersCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPosicionInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
    autorizados?: usersUncheckedCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPosicionInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPosicionInput, usersUncheckedCreateWithoutPosicionInput>
  }

  export type usersCreateManyPosicionInputEnvelope = {
    data: usersCreateManyPosicionInput | usersCreateManyPosicionInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutPosicionInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPosicionInput, usersUncheckedUpdateWithoutPosicionInput>
    create: XOR<usersCreateWithoutPosicionInput, usersUncheckedCreateWithoutPosicionInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPosicionInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPosicionInput, usersUncheckedUpdateWithoutPosicionInput>
  }

  export type usersUpdateManyWithWhereWithoutPosicionInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutPosicionInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    username?: StringNullableFilter<"users"> | string | null
    correo?: StringNullableFilter<"users"> | string | null
    id_sector?: IntNullableFilter<"users"> | number | null
    id_posicion?: IntNullableFilter<"users"> | number | null
    id_autorizador?: StringNullableFilter<"users"> | string | null
    rol?: StringNullableFilter<"users"> | string | null
    telefono?: StringNullableFilter<"users"> | string | null
  }

  export type ticketCreateWithoutPrioridadInput = {
    created_at?: Date | string
    telefono?: string | null
    descripcion?: string | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
    user?: usersCreateNestedOneWithoutTicketsInput
    categoria?: categoriaCreateNestedOneWithoutTicketsInput
    subcategoria?: sub_categoriasCreateNestedOneWithoutTicketsInput
    sector?: sectorCreateNestedOneWithoutTicketsInput
    estado?: estadosCreateNestedOneWithoutTicketsInput
  }

  export type ticketUncheckedCreateWithoutPrioridadInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketCreateOrConnectWithoutPrioridadInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutPrioridadInput, ticketUncheckedCreateWithoutPrioridadInput>
  }

  export type ticketCreateManyPrioridadInputEnvelope = {
    data: ticketCreateManyPrioridadInput | ticketCreateManyPrioridadInput[]
    skipDuplicates?: boolean
  }

  export type ticketUpsertWithWhereUniqueWithoutPrioridadInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutPrioridadInput, ticketUncheckedUpdateWithoutPrioridadInput>
    create: XOR<ticketCreateWithoutPrioridadInput, ticketUncheckedCreateWithoutPrioridadInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutPrioridadInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutPrioridadInput, ticketUncheckedUpdateWithoutPrioridadInput>
  }

  export type ticketUpdateManyWithWhereWithoutPrioridadInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutPrioridadInput>
  }

  export type ticketCreateWithoutSectorInput = {
    created_at?: Date | string
    telefono?: string | null
    descripcion?: string | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
    user?: usersCreateNestedOneWithoutTicketsInput
    categoria?: categoriaCreateNestedOneWithoutTicketsInput
    subcategoria?: sub_categoriasCreateNestedOneWithoutTicketsInput
    prioridad?: prioridadCreateNestedOneWithoutTicketsInput
    estado?: estadosCreateNestedOneWithoutTicketsInput
  }

  export type ticketUncheckedCreateWithoutSectorInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketCreateOrConnectWithoutSectorInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutSectorInput, ticketUncheckedCreateWithoutSectorInput>
  }

  export type ticketCreateManySectorInputEnvelope = {
    data: ticketCreateManySectorInput | ticketCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutSectorInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    rol?: string | null
    telefono?: string | null
    posicion?: posicionCreateNestedOneWithoutUsersInput
    autorizador?: usersCreateNestedOneWithoutAutorizadosInput
    autorizados?: usersCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSectorInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_posicion?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
    autorizados?: usersUncheckedCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSectorInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSectorInput, usersUncheckedCreateWithoutSectorInput>
  }

  export type usersCreateManySectorInputEnvelope = {
    data: usersCreateManySectorInput | usersCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type ticketUpsertWithWhereUniqueWithoutSectorInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutSectorInput, ticketUncheckedUpdateWithoutSectorInput>
    create: XOR<ticketCreateWithoutSectorInput, ticketUncheckedCreateWithoutSectorInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutSectorInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutSectorInput, ticketUncheckedUpdateWithoutSectorInput>
  }

  export type ticketUpdateManyWithWhereWithoutSectorInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutSectorInput>
  }

  export type usersUpsertWithWhereUniqueWithoutSectorInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutSectorInput, usersUncheckedUpdateWithoutSectorInput>
    create: XOR<usersCreateWithoutSectorInput, usersUncheckedCreateWithoutSectorInput>
  }

  export type usersUpdateWithWhereUniqueWithoutSectorInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutSectorInput, usersUncheckedUpdateWithoutSectorInput>
  }

  export type usersUpdateManyWithWhereWithoutSectorInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutSectorInput>
  }

  export type categoriaCreateWithoutSub_categoriasInput = {
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutSub_categoriasInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutSub_categoriasInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutSub_categoriasInput, categoriaUncheckedCreateWithoutSub_categoriasInput>
  }

  export type ticketCreateWithoutSubcategoriaInput = {
    created_at?: Date | string
    telefono?: string | null
    descripcion?: string | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
    user?: usersCreateNestedOneWithoutTicketsInput
    categoria?: categoriaCreateNestedOneWithoutTicketsInput
    prioridad?: prioridadCreateNestedOneWithoutTicketsInput
    sector?: sectorCreateNestedOneWithoutTicketsInput
    estado?: estadosCreateNestedOneWithoutTicketsInput
  }

  export type ticketUncheckedCreateWithoutSubcategoriaInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketCreateOrConnectWithoutSubcategoriaInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutSubcategoriaInput, ticketUncheckedCreateWithoutSubcategoriaInput>
  }

  export type ticketCreateManySubcategoriaInputEnvelope = {
    data: ticketCreateManySubcategoriaInput | ticketCreateManySubcategoriaInput[]
    skipDuplicates?: boolean
  }

  export type categoriaUpsertWithoutSub_categoriasInput = {
    update: XOR<categoriaUpdateWithoutSub_categoriasInput, categoriaUncheckedUpdateWithoutSub_categoriasInput>
    create: XOR<categoriaCreateWithoutSub_categoriasInput, categoriaUncheckedCreateWithoutSub_categoriasInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutSub_categoriasInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutSub_categoriasInput, categoriaUncheckedUpdateWithoutSub_categoriasInput>
  }

  export type categoriaUpdateWithoutSub_categoriasInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutSub_categoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type ticketUpsertWithWhereUniqueWithoutSubcategoriaInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutSubcategoriaInput, ticketUncheckedUpdateWithoutSubcategoriaInput>
    create: XOR<ticketCreateWithoutSubcategoriaInput, ticketUncheckedCreateWithoutSubcategoriaInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutSubcategoriaInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutSubcategoriaInput, ticketUncheckedUpdateWithoutSubcategoriaInput>
  }

  export type ticketUpdateManyWithWhereWithoutSubcategoriaInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutSubcategoriaInput>
  }

  export type usersCreateWithoutTicketsInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    rol?: string | null
    telefono?: string | null
    sector?: sectorCreateNestedOneWithoutUsersInput
    posicion?: posicionCreateNestedOneWithoutUsersInput
    autorizador?: usersCreateNestedOneWithoutAutorizadosInput
    autorizados?: usersCreateNestedManyWithoutAutorizadorInput
  }

  export type usersUncheckedCreateWithoutTicketsInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_posicion?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
    autorizados?: usersUncheckedCreateNestedManyWithoutAutorizadorInput
  }

  export type usersCreateOrConnectWithoutTicketsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
  }

  export type categoriaCreateWithoutTicketsInput = {
    created_at?: Date | string
    nombre?: string | null
    sub_categorias?: sub_categoriasCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutTicketsInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    sub_categorias?: sub_categoriasUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutTicketsInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutTicketsInput, categoriaUncheckedCreateWithoutTicketsInput>
  }

  export type sub_categoriasCreateWithoutTicketsInput = {
    created_at?: Date | string
    nombre?: string | null
    categoria?: categoriaCreateNestedOneWithoutSub_categoriasInput
  }

  export type sub_categoriasUncheckedCreateWithoutTicketsInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    id_categorias?: number | null
  }

  export type sub_categoriasCreateOrConnectWithoutTicketsInput = {
    where: sub_categoriasWhereUniqueInput
    create: XOR<sub_categoriasCreateWithoutTicketsInput, sub_categoriasUncheckedCreateWithoutTicketsInput>
  }

  export type prioridadCreateWithoutTicketsInput = {
    created_at?: Date | string
    nombre?: string | null
  }

  export type prioridadUncheckedCreateWithoutTicketsInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type prioridadCreateOrConnectWithoutTicketsInput = {
    where: prioridadWhereUniqueInput
    create: XOR<prioridadCreateWithoutTicketsInput, prioridadUncheckedCreateWithoutTicketsInput>
  }

  export type sectorCreateWithoutTicketsInput = {
    created_at?: Date | string
    nombre?: string | null
    users?: usersCreateNestedManyWithoutSectorInput
  }

  export type sectorUncheckedCreateWithoutTicketsInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    users?: usersUncheckedCreateNestedManyWithoutSectorInput
  }

  export type sectorCreateOrConnectWithoutTicketsInput = {
    where: sectorWhereUniqueInput
    create: XOR<sectorCreateWithoutTicketsInput, sectorUncheckedCreateWithoutTicketsInput>
  }

  export type estadosCreateWithoutTicketsInput = {
    created_at?: Date | string
    nombre?: string | null
  }

  export type estadosUncheckedCreateWithoutTicketsInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type estadosCreateOrConnectWithoutTicketsInput = {
    where: estadosWhereUniqueInput
    create: XOR<estadosCreateWithoutTicketsInput, estadosUncheckedCreateWithoutTicketsInput>
  }

  export type usersUpsertWithoutTicketsInput = {
    update: XOR<usersUpdateWithoutTicketsInput, usersUncheckedUpdateWithoutTicketsInput>
    create: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTicketsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTicketsInput, usersUncheckedUpdateWithoutTicketsInput>
  }

  export type usersUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: sectorUpdateOneWithoutUsersNestedInput
    posicion?: posicionUpdateOneWithoutUsersNestedInput
    autorizador?: usersUpdateOneWithoutAutorizadosNestedInput
    autorizados?: usersUpdateManyWithoutAutorizadorNestedInput
  }

  export type usersUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    autorizados?: usersUncheckedUpdateManyWithoutAutorizadorNestedInput
  }

  export type categoriaUpsertWithoutTicketsInput = {
    update: XOR<categoriaUpdateWithoutTicketsInput, categoriaUncheckedUpdateWithoutTicketsInput>
    create: XOR<categoriaCreateWithoutTicketsInput, categoriaUncheckedCreateWithoutTicketsInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutTicketsInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutTicketsInput, categoriaUncheckedUpdateWithoutTicketsInput>
  }

  export type categoriaUpdateWithoutTicketsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    sub_categorias?: sub_categoriasUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    sub_categorias?: sub_categoriasUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type sub_categoriasUpsertWithoutTicketsInput = {
    update: XOR<sub_categoriasUpdateWithoutTicketsInput, sub_categoriasUncheckedUpdateWithoutTicketsInput>
    create: XOR<sub_categoriasCreateWithoutTicketsInput, sub_categoriasUncheckedCreateWithoutTicketsInput>
    where?: sub_categoriasWhereInput
  }

  export type sub_categoriasUpdateToOneWithWhereWithoutTicketsInput = {
    where?: sub_categoriasWhereInput
    data: XOR<sub_categoriasUpdateWithoutTicketsInput, sub_categoriasUncheckedUpdateWithoutTicketsInput>
  }

  export type sub_categoriasUpdateWithoutTicketsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutSub_categoriasNestedInput
  }

  export type sub_categoriasUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    id_categorias?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type prioridadUpsertWithoutTicketsInput = {
    update: XOR<prioridadUpdateWithoutTicketsInput, prioridadUncheckedUpdateWithoutTicketsInput>
    create: XOR<prioridadCreateWithoutTicketsInput, prioridadUncheckedCreateWithoutTicketsInput>
    where?: prioridadWhereInput
  }

  export type prioridadUpdateToOneWithWhereWithoutTicketsInput = {
    where?: prioridadWhereInput
    data: XOR<prioridadUpdateWithoutTicketsInput, prioridadUncheckedUpdateWithoutTicketsInput>
  }

  export type prioridadUpdateWithoutTicketsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prioridadUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sectorUpsertWithoutTicketsInput = {
    update: XOR<sectorUpdateWithoutTicketsInput, sectorUncheckedUpdateWithoutTicketsInput>
    create: XOR<sectorCreateWithoutTicketsInput, sectorUncheckedCreateWithoutTicketsInput>
    where?: sectorWhereInput
  }

  export type sectorUpdateToOneWithWhereWithoutTicketsInput = {
    where?: sectorWhereInput
    data: XOR<sectorUpdateWithoutTicketsInput, sectorUncheckedUpdateWithoutTicketsInput>
  }

  export type sectorUpdateWithoutTicketsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutSectorNestedInput
  }

  export type sectorUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type estadosUpsertWithoutTicketsInput = {
    update: XOR<estadosUpdateWithoutTicketsInput, estadosUncheckedUpdateWithoutTicketsInput>
    create: XOR<estadosCreateWithoutTicketsInput, estadosUncheckedCreateWithoutTicketsInput>
    where?: estadosWhereInput
  }

  export type estadosUpdateToOneWithWhereWithoutTicketsInput = {
    where?: estadosWhereInput
    data: XOR<estadosUpdateWithoutTicketsInput, estadosUncheckedUpdateWithoutTicketsInput>
  }

  export type estadosUpdateWithoutTicketsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estadosUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type informe_linkCreateWithoutUser_informsInput = {
    created_at?: Date | string
    link?: string | null
  }

  export type informe_linkUncheckedCreateWithoutUser_informsInput = {
    id?: number
    created_at?: Date | string
    link?: string | null
  }

  export type informe_linkCreateOrConnectWithoutUser_informsInput = {
    where: informe_linkWhereUniqueInput
    create: XOR<informe_linkCreateWithoutUser_informsInput, informe_linkUncheckedCreateWithoutUser_informsInput>
  }

  export type informe_linkUpsertWithoutUser_informsInput = {
    update: XOR<informe_linkUpdateWithoutUser_informsInput, informe_linkUncheckedUpdateWithoutUser_informsInput>
    create: XOR<informe_linkCreateWithoutUser_informsInput, informe_linkUncheckedCreateWithoutUser_informsInput>
    where?: informe_linkWhereInput
  }

  export type informe_linkUpdateToOneWithWhereWithoutUser_informsInput = {
    where?: informe_linkWhereInput
    data: XOR<informe_linkUpdateWithoutUser_informsInput, informe_linkUncheckedUpdateWithoutUser_informsInput>
  }

  export type informe_linkUpdateWithoutUser_informsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type informe_linkUncheckedUpdateWithoutUser_informsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sectorCreateWithoutUsersInput = {
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketCreateNestedManyWithoutSectorInput
  }

  export type sectorUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutSectorInput
  }

  export type sectorCreateOrConnectWithoutUsersInput = {
    where: sectorWhereUniqueInput
    create: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
  }

  export type posicionCreateWithoutUsersInput = {
    created_at?: Date | string
    nombre?: string | null
  }

  export type posicionUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type posicionCreateOrConnectWithoutUsersInput = {
    where: posicionWhereUniqueInput
    create: XOR<posicionCreateWithoutUsersInput, posicionUncheckedCreateWithoutUsersInput>
  }

  export type usersCreateWithoutAutorizadosInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    rol?: string | null
    telefono?: string | null
    sector?: sectorCreateNestedOneWithoutUsersInput
    posicion?: posicionCreateNestedOneWithoutUsersInput
    autorizador?: usersCreateNestedOneWithoutAutorizadosInput
    tickets?: ticketCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAutorizadosInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_posicion?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
    tickets?: ticketUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAutorizadosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAutorizadosInput, usersUncheckedCreateWithoutAutorizadosInput>
  }

  export type usersCreateWithoutAutorizadorInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    rol?: string | null
    telefono?: string | null
    sector?: sectorCreateNestedOneWithoutUsersInput
    posicion?: posicionCreateNestedOneWithoutUsersInput
    autorizados?: usersCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAutorizadorInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_posicion?: number | null
    rol?: string | null
    telefono?: string | null
    autorizados?: usersUncheckedCreateNestedManyWithoutAutorizadorInput
    tickets?: ticketUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAutorizadorInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAutorizadorInput, usersUncheckedCreateWithoutAutorizadorInput>
  }

  export type usersCreateManyAutorizadorInputEnvelope = {
    data: usersCreateManyAutorizadorInput | usersCreateManyAutorizadorInput[]
    skipDuplicates?: boolean
  }

  export type ticketCreateWithoutUserInput = {
    created_at?: Date | string
    telefono?: string | null
    descripcion?: string | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
    categoria?: categoriaCreateNestedOneWithoutTicketsInput
    subcategoria?: sub_categoriasCreateNestedOneWithoutTicketsInput
    prioridad?: prioridadCreateNestedOneWithoutTicketsInput
    sector?: sectorCreateNestedOneWithoutTicketsInput
    estado?: estadosCreateNestedOneWithoutTicketsInput
  }

  export type ticketUncheckedCreateWithoutUserInput = {
    id?: number
    created_at?: Date | string
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketCreateOrConnectWithoutUserInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
  }

  export type ticketCreateManyUserInputEnvelope = {
    data: ticketCreateManyUserInput | ticketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sectorUpsertWithoutUsersInput = {
    update: XOR<sectorUpdateWithoutUsersInput, sectorUncheckedUpdateWithoutUsersInput>
    create: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
    where?: sectorWhereInput
  }

  export type sectorUpdateToOneWithWhereWithoutUsersInput = {
    where?: sectorWhereInput
    data: XOR<sectorUpdateWithoutUsersInput, sectorUncheckedUpdateWithoutUsersInput>
  }

  export type sectorUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUpdateManyWithoutSectorNestedInput
  }

  export type sectorUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type posicionUpsertWithoutUsersInput = {
    update: XOR<posicionUpdateWithoutUsersInput, posicionUncheckedUpdateWithoutUsersInput>
    create: XOR<posicionCreateWithoutUsersInput, posicionUncheckedCreateWithoutUsersInput>
    where?: posicionWhereInput
  }

  export type posicionUpdateToOneWithWhereWithoutUsersInput = {
    where?: posicionWhereInput
    data: XOR<posicionUpdateWithoutUsersInput, posicionUncheckedUpdateWithoutUsersInput>
  }

  export type posicionUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posicionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpsertWithoutAutorizadosInput = {
    update: XOR<usersUpdateWithoutAutorizadosInput, usersUncheckedUpdateWithoutAutorizadosInput>
    create: XOR<usersCreateWithoutAutorizadosInput, usersUncheckedCreateWithoutAutorizadosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAutorizadosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAutorizadosInput, usersUncheckedUpdateWithoutAutorizadosInput>
  }

  export type usersUpdateWithoutAutorizadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: sectorUpdateOneWithoutUsersNestedInput
    posicion?: posicionUpdateOneWithoutUsersNestedInput
    autorizador?: usersUpdateOneWithoutAutorizadosNestedInput
    tickets?: ticketUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAutorizadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutAutorizadorInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutAutorizadorInput, usersUncheckedUpdateWithoutAutorizadorInput>
    create: XOR<usersCreateWithoutAutorizadorInput, usersUncheckedCreateWithoutAutorizadorInput>
  }

  export type usersUpdateWithWhereUniqueWithoutAutorizadorInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutAutorizadorInput, usersUncheckedUpdateWithoutAutorizadorInput>
  }

  export type usersUpdateManyWithWhereWithoutAutorizadorInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutAutorizadorInput>
  }

  export type ticketUpsertWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>
  }

  export type ticketUpdateManyWithWhereWithoutUserInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutUserInput>
  }

  export type ticketCreateManyCategoriaInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type sub_categoriasCreateManyCategoriaInput = {
    id?: number
    created_at?: Date | string
    nombre?: string | null
  }

  export type ticketUpdateWithoutCategoriaInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutTicketsNestedInput
    subcategoria?: sub_categoriasUpdateOneWithoutTicketsNestedInput
    prioridad?: prioridadUpdateOneWithoutTicketsNestedInput
    sector?: sectorUpdateOneWithoutTicketsNestedInput
    estado?: estadosUpdateOneWithoutTicketsNestedInput
  }

  export type ticketUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_categoriasUpdateWithoutCategoriaInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUpdateManyWithoutSubcategoriaNestedInput
  }

  export type sub_categoriasUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketUncheckedUpdateManyWithoutSubcategoriaNestedInput
  }

  export type sub_categoriasUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketCreateManyEstadoInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    fecha?: string | null
  }

  export type ticketUpdateWithoutEstadoInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutTicketsNestedInput
    categoria?: categoriaUpdateOneWithoutTicketsNestedInput
    subcategoria?: sub_categoriasUpdateOneWithoutTicketsNestedInput
    prioridad?: prioridadUpdateOneWithoutTicketsNestedInput
    sector?: sectorUpdateOneWithoutTicketsNestedInput
  }

  export type ticketUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_informCreateManyInforme_linkInput = {
    id?: number
    created_at?: Date | string
  }

  export type user_informUpdateWithoutInforme_linkInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_informUncheckedUpdateWithoutInforme_linkInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_informUncheckedUpdateManyWithoutInforme_linkInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyPosicionInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
  }

  export type usersUpdateWithoutPosicionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: sectorUpdateOneWithoutUsersNestedInput
    autorizador?: usersUpdateOneWithoutAutorizadosNestedInput
    autorizados?: usersUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPosicionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    autorizados?: usersUncheckedUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutPosicionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketCreateManyPrioridadInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketUpdateWithoutPrioridadInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutTicketsNestedInput
    categoria?: categoriaUpdateOneWithoutTicketsNestedInput
    subcategoria?: sub_categoriasUpdateOneWithoutTicketsNestedInput
    sector?: sectorUpdateOneWithoutTicketsNestedInput
    estado?: estadosUpdateOneWithoutTicketsNestedInput
  }

  export type ticketUncheckedUpdateWithoutPrioridadInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUncheckedUpdateManyWithoutPrioridadInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketCreateManySectorInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type usersCreateManySectorInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_posicion?: number | null
    id_autorizador?: string | null
    rol?: string | null
    telefono?: string | null
  }

  export type ticketUpdateWithoutSectorInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutTicketsNestedInput
    categoria?: categoriaUpdateOneWithoutTicketsNestedInput
    subcategoria?: sub_categoriasUpdateOneWithoutTicketsNestedInput
    prioridad?: prioridadUpdateOneWithoutTicketsNestedInput
    estado?: estadosUpdateOneWithoutTicketsNestedInput
  }

  export type ticketUncheckedUpdateWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUncheckedUpdateManyWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    posicion?: posicionUpdateOneWithoutUsersNestedInput
    autorizador?: usersUpdateOneWithoutAutorizadosNestedInput
    autorizados?: usersUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    autorizados?: usersUncheckedUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    id_autorizador?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketCreateManySubcategoriaInput = {
    id?: number
    created_at?: Date | string
    id_user?: string | null
    id_categoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type ticketUpdateWithoutSubcategoriaInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutTicketsNestedInput
    categoria?: categoriaUpdateOneWithoutTicketsNestedInput
    prioridad?: prioridadUpdateOneWithoutTicketsNestedInput
    sector?: sectorUpdateOneWithoutTicketsNestedInput
    estado?: estadosUpdateOneWithoutTicketsNestedInput
  }

  export type ticketUncheckedUpdateWithoutSubcategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUncheckedUpdateManyWithoutSubcategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyAutorizadorInput = {
    id: string
    created_at?: Date | string
    username?: string | null
    correo?: string | null
    id_sector?: number | null
    id_posicion?: number | null
    rol?: string | null
    telefono?: string | null
  }

  export type ticketCreateManyUserInput = {
    id?: number
    created_at?: Date | string
    id_categoria?: number | null
    id_subcategoria?: number | null
    telefono?: string | null
    descripcion?: string | null
    id_prioridad?: number | null
    id_sector?: number | null
    valor?: string | null
    link_art?: string | null
    id_estado?: number | null
    fecha?: string | null
  }

  export type usersUpdateWithoutAutorizadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: sectorUpdateOneWithoutUsersNestedInput
    posicion?: posicionUpdateOneWithoutUsersNestedInput
    autorizados?: usersUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAutorizadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    autorizados?: usersUncheckedUpdateManyWithoutAutorizadorNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutAutorizadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    id_posicion?: NullableIntFieldUpdateOperationsInput | number | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutTicketsNestedInput
    subcategoria?: sub_categoriasUpdateOneWithoutTicketsNestedInput
    prioridad?: prioridadUpdateOneWithoutTicketsNestedInput
    sector?: sectorUpdateOneWithoutTicketsNestedInput
    estado?: estadosUpdateOneWithoutTicketsNestedInput
  }

  export type ticketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    id_sector?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    link_art?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableStringFieldUpdateOperationsInput | string | null
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