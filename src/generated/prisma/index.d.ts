
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
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Equipamento
 * 
 */
export type Equipamento = $Result.DefaultSelection<Prisma.$EquipamentoPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Historico
 * 
 */
export type Historico = $Result.DefaultSelection<Prisma.$HistoricoPayload>
/**
 * Model Foto
 * 
 */
export type Foto = $Result.DefaultSelection<Prisma.$FotoPayload>
/**
 * Model Peca
 * 
 */
export type Peca = $Result.DefaultSelection<Prisma.$PecaPayload>
/**
 * Model MaoDeObra
 * 
 */
export type MaoDeObra = $Result.DefaultSelection<Prisma.$MaoDeObraPayload>
/**
 * Model Deslocacao
 * 
 */
export type Deslocacao = $Result.DefaultSelection<Prisma.$DeslocacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
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
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipamento`: Exposes CRUD operations for the **Equipamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipamentos
    * const equipamentos = await prisma.equipamento.findMany()
    * ```
    */
  get equipamento(): Prisma.EquipamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico`: Exposes CRUD operations for the **Historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicos
    * const historicos = await prisma.historico.findMany()
    * ```
    */
  get historico(): Prisma.HistoricoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foto`: Exposes CRUD operations for the **Foto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.foto.findMany()
    * ```
    */
  get foto(): Prisma.FotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peca`: Exposes CRUD operations for the **Peca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pecas
    * const pecas = await prisma.peca.findMany()
    * ```
    */
  get peca(): Prisma.PecaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maoDeObra`: Exposes CRUD operations for the **MaoDeObra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaoDeObras
    * const maoDeObras = await prisma.maoDeObra.findMany()
    * ```
    */
  get maoDeObra(): Prisma.MaoDeObraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deslocacao`: Exposes CRUD operations for the **Deslocacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deslocacaos
    * const deslocacaos = await prisma.deslocacao.findMany()
    * ```
    */
  get deslocacao(): Prisma.DeslocacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Cliente: 'Cliente',
    Equipamento: 'Equipamento',
    Servico: 'Servico',
    Historico: 'Historico',
    Foto: 'Foto',
    Peca: 'Peca',
    MaoDeObra: 'MaoDeObra',
    Deslocacao: 'Deslocacao'
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
      modelProps: "cliente" | "equipamento" | "servico" | "historico" | "foto" | "peca" | "maoDeObra" | "deslocacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Equipamento: {
        payload: Prisma.$EquipamentoPayload<ExtArgs>
        fields: Prisma.EquipamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          findFirst: {
            args: Prisma.EquipamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          findMany: {
            args: Prisma.EquipamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>[]
          }
          create: {
            args: Prisma.EquipamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          createMany: {
            args: Prisma.EquipamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>[]
          }
          delete: {
            args: Prisma.EquipamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          update: {
            args: Prisma.EquipamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          deleteMany: {
            args: Prisma.EquipamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>[]
          }
          upsert: {
            args: Prisma.EquipamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          aggregate: {
            args: Prisma.EquipamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipamento>
          }
          groupBy: {
            args: Prisma.EquipamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipamentoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Historico: {
        payload: Prisma.$HistoricoPayload<ExtArgs>
        fields: Prisma.HistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findMany: {
            args: Prisma.HistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          create: {
            args: Prisma.HistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          createMany: {
            args: Prisma.HistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          update: {
            args: Prisma.HistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico>
          }
          groupBy: {
            args: Prisma.HistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoCountAggregateOutputType> | number
          }
        }
      }
      Foto: {
        payload: Prisma.$FotoPayload<ExtArgs>
        fields: Prisma.FotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findFirst: {
            args: Prisma.FotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findMany: {
            args: Prisma.FotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          create: {
            args: Prisma.FotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          createMany: {
            args: Prisma.FotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          delete: {
            args: Prisma.FotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          update: {
            args: Prisma.FotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          deleteMany: {
            args: Prisma.FotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          upsert: {
            args: Prisma.FotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          aggregate: {
            args: Prisma.FotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoto>
          }
          groupBy: {
            args: Prisma.FotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoCountArgs<ExtArgs>
            result: $Utils.Optional<FotoCountAggregateOutputType> | number
          }
        }
      }
      Peca: {
        payload: Prisma.$PecaPayload<ExtArgs>
        fields: Prisma.PecaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PecaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PecaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          findFirst: {
            args: Prisma.PecaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PecaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          findMany: {
            args: Prisma.PecaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>[]
          }
          create: {
            args: Prisma.PecaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          createMany: {
            args: Prisma.PecaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PecaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>[]
          }
          delete: {
            args: Prisma.PecaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          update: {
            args: Prisma.PecaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          deleteMany: {
            args: Prisma.PecaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PecaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PecaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>[]
          }
          upsert: {
            args: Prisma.PecaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          aggregate: {
            args: Prisma.PecaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeca>
          }
          groupBy: {
            args: Prisma.PecaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PecaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PecaCountArgs<ExtArgs>
            result: $Utils.Optional<PecaCountAggregateOutputType> | number
          }
        }
      }
      MaoDeObra: {
        payload: Prisma.$MaoDeObraPayload<ExtArgs>
        fields: Prisma.MaoDeObraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaoDeObraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaoDeObraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>
          }
          findFirst: {
            args: Prisma.MaoDeObraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaoDeObraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>
          }
          findMany: {
            args: Prisma.MaoDeObraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>[]
          }
          create: {
            args: Prisma.MaoDeObraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>
          }
          createMany: {
            args: Prisma.MaoDeObraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaoDeObraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>[]
          }
          delete: {
            args: Prisma.MaoDeObraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>
          }
          update: {
            args: Prisma.MaoDeObraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>
          }
          deleteMany: {
            args: Prisma.MaoDeObraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaoDeObraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaoDeObraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>[]
          }
          upsert: {
            args: Prisma.MaoDeObraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaoDeObraPayload>
          }
          aggregate: {
            args: Prisma.MaoDeObraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaoDeObra>
          }
          groupBy: {
            args: Prisma.MaoDeObraGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaoDeObraGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaoDeObraCountArgs<ExtArgs>
            result: $Utils.Optional<MaoDeObraCountAggregateOutputType> | number
          }
        }
      }
      Deslocacao: {
        payload: Prisma.$DeslocacaoPayload<ExtArgs>
        fields: Prisma.DeslocacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeslocacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeslocacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>
          }
          findFirst: {
            args: Prisma.DeslocacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeslocacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>
          }
          findMany: {
            args: Prisma.DeslocacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>[]
          }
          create: {
            args: Prisma.DeslocacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>
          }
          createMany: {
            args: Prisma.DeslocacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeslocacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>[]
          }
          delete: {
            args: Prisma.DeslocacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>
          }
          update: {
            args: Prisma.DeslocacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>
          }
          deleteMany: {
            args: Prisma.DeslocacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeslocacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeslocacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>[]
          }
          upsert: {
            args: Prisma.DeslocacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeslocacaoPayload>
          }
          aggregate: {
            args: Prisma.DeslocacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeslocacao>
          }
          groupBy: {
            args: Prisma.DeslocacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeslocacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeslocacaoCountArgs<ExtArgs>
            result: $Utils.Optional<DeslocacaoCountAggregateOutputType> | number
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
    cliente?: ClienteOmit
    equipamento?: EquipamentoOmit
    servico?: ServicoOmit
    historico?: HistoricoOmit
    foto?: FotoOmit
    peca?: PecaOmit
    maoDeObra?: MaoDeObraOmit
    deslocacao?: DeslocacaoOmit
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    servicos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | ClienteCountOutputTypeCountServicosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }


  /**
   * Count Type EquipamentoCountOutputType
   */

  export type EquipamentoCountOutputType = {
    servicos: number
  }

  export type EquipamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | EquipamentoCountOutputTypeCountServicosArgs
  }

  // Custom InputTypes
  /**
   * EquipamentoCountOutputType without action
   */
  export type EquipamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipamentoCountOutputType
     */
    select?: EquipamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipamentoCountOutputType without action
   */
  export type EquipamentoCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }


  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    historico: number
    fotos: number
    pecas: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | ServicoCountOutputTypeCountHistoricoArgs
    fotos?: boolean | ServicoCountOutputTypeCountFotosArgs
    pecas?: boolean | ServicoCountOutputTypeCountPecasArgs
  }

  // Custom InputTypes
  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountPecasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PecaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    morada: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    morada: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    email: number
    morada: number
    tipo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    morada?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    morada?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    morada?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    morada?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servicos?: boolean | Cliente$servicosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    morada?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    morada?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    morada?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "email" | "morada" | "tipo" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | Cliente$servicosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string
      email: string
      morada: string
      tipo: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicos<T extends Cliente$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly morada: FieldRef<"Cliente", 'String'>
    readonly tipo: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.servicos
   */
  export type Cliente$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Equipamento
   */

  export type AggregateEquipamento = {
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  export type EquipamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipamentoSumAggregateOutputType = {
    id: number | null
  }

  export type EquipamentoMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    marca: string | null
    modelo: string | null
    numeroSerie: string | null
    dataCompra: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipamentoMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    marca: string | null
    modelo: string | null
    numeroSerie: string | null
    dataCompra: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipamentoCountAggregateOutputType = {
    id: number
    tipo: number
    marca: number
    modelo: number
    numeroSerie: number
    dataCompra: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipamentoAvgAggregateInputType = {
    id?: true
  }

  export type EquipamentoSumAggregateInputType = {
    id?: true
  }

  export type EquipamentoMinAggregateInputType = {
    id?: true
    tipo?: true
    marca?: true
    modelo?: true
    numeroSerie?: true
    dataCompra?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipamentoMaxAggregateInputType = {
    id?: true
    tipo?: true
    marca?: true
    modelo?: true
    numeroSerie?: true
    dataCompra?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipamentoCountAggregateInputType = {
    id?: true
    tipo?: true
    marca?: true
    modelo?: true
    numeroSerie?: true
    dataCompra?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamento to aggregate.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipamentos
    **/
    _count?: true | EquipamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipamentoMaxAggregateInputType
  }

  export type GetEquipamentoAggregateType<T extends EquipamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipamento[P]>
      : GetScalarType<T[P], AggregateEquipamento[P]>
  }




  export type EquipamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipamentoWhereInput
    orderBy?: EquipamentoOrderByWithAggregationInput | EquipamentoOrderByWithAggregationInput[]
    by: EquipamentoScalarFieldEnum[] | EquipamentoScalarFieldEnum
    having?: EquipamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipamentoCountAggregateInputType | true
    _avg?: EquipamentoAvgAggregateInputType
    _sum?: EquipamentoSumAggregateInputType
    _min?: EquipamentoMinAggregateInputType
    _max?: EquipamentoMaxAggregateInputType
  }

  export type EquipamentoGroupByOutputType = {
    id: number
    tipo: string
    marca: string
    modelo: string
    numeroSerie: string | null
    dataCompra: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  type GetEquipamentoGroupByPayload<T extends EquipamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
        }
      >
    >


  export type EquipamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    numeroSerie?: boolean
    dataCompra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servicos?: boolean | Equipamento$servicosArgs<ExtArgs>
    _count?: boolean | EquipamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type EquipamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    numeroSerie?: boolean
    dataCompra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipamento"]>

  export type EquipamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    numeroSerie?: boolean
    dataCompra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipamento"]>

  export type EquipamentoSelectScalar = {
    id?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    numeroSerie?: boolean
    dataCompra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "marca" | "modelo" | "numeroSerie" | "dataCompra" | "createdAt" | "updatedAt", ExtArgs["result"]["equipamento"]>
  export type EquipamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | Equipamento$servicosArgs<ExtArgs>
    _count?: boolean | EquipamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipamento"
    objects: {
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      marca: string
      modelo: string
      numeroSerie: string | null
      dataCompra: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipamento"]>
    composites: {}
  }

  type EquipamentoGetPayload<S extends boolean | null | undefined | EquipamentoDefaultArgs> = $Result.GetResult<Prisma.$EquipamentoPayload, S>

  type EquipamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipamentoCountAggregateInputType | true
    }

  export interface EquipamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipamento'], meta: { name: 'Equipamento' } }
    /**
     * Find zero or one Equipamento that matches the filter.
     * @param {EquipamentoFindUniqueArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipamentoFindUniqueArgs>(args: SelectSubset<T, EquipamentoFindUniqueArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipamentoFindUniqueOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoFindFirstArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipamentoFindFirstArgs>(args?: SelectSubset<T, EquipamentoFindFirstArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoFindFirstOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipamentos
     * const equipamentos = await prisma.equipamento.findMany()
     * 
     * // Get first 10 Equipamentos
     * const equipamentos = await prisma.equipamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipamentoFindManyArgs>(args?: SelectSubset<T, EquipamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipamento.
     * @param {EquipamentoCreateArgs} args - Arguments to create a Equipamento.
     * @example
     * // Create one Equipamento
     * const Equipamento = await prisma.equipamento.create({
     *   data: {
     *     // ... data to create a Equipamento
     *   }
     * })
     * 
     */
    create<T extends EquipamentoCreateArgs>(args: SelectSubset<T, EquipamentoCreateArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipamentos.
     * @param {EquipamentoCreateManyArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipamentoCreateManyArgs>(args?: SelectSubset<T, EquipamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipamentos and returns the data saved in the database.
     * @param {EquipamentoCreateManyAndReturnArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipamentos and only return the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipamento.
     * @param {EquipamentoDeleteArgs} args - Arguments to delete one Equipamento.
     * @example
     * // Delete one Equipamento
     * const Equipamento = await prisma.equipamento.delete({
     *   where: {
     *     // ... filter to delete one Equipamento
     *   }
     * })
     * 
     */
    delete<T extends EquipamentoDeleteArgs>(args: SelectSubset<T, EquipamentoDeleteArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipamento.
     * @param {EquipamentoUpdateArgs} args - Arguments to update one Equipamento.
     * @example
     * // Update one Equipamento
     * const equipamento = await prisma.equipamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipamentoUpdateArgs>(args: SelectSubset<T, EquipamentoUpdateArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipamentos.
     * @param {EquipamentoDeleteManyArgs} args - Arguments to filter Equipamentos to delete.
     * @example
     * // Delete a few Equipamentos
     * const { count } = await prisma.equipamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipamentoDeleteManyArgs>(args?: SelectSubset<T, EquipamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipamentoUpdateManyArgs>(args: SelectSubset<T, EquipamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos and returns the data updated in the database.
     * @param {EquipamentoUpdateManyAndReturnArgs} args - Arguments to update many Equipamentos.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipamentos and only return the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipamento.
     * @param {EquipamentoUpsertArgs} args - Arguments to update or create a Equipamento.
     * @example
     * // Update or create a Equipamento
     * const equipamento = await prisma.equipamento.upsert({
     *   create: {
     *     // ... data to create a Equipamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipamento we want to update
     *   }
     * })
     */
    upsert<T extends EquipamentoUpsertArgs>(args: SelectSubset<T, EquipamentoUpsertArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoCountArgs} args - Arguments to filter Equipamentos to count.
     * @example
     * // Count the number of Equipamentos
     * const count = await prisma.equipamento.count({
     *   where: {
     *     // ... the filter for the Equipamentos we want to count
     *   }
     * })
    **/
    count<T extends EquipamentoCountArgs>(
      args?: Subset<T, EquipamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipamentoAggregateArgs>(args: Subset<T, EquipamentoAggregateArgs>): Prisma.PrismaPromise<GetEquipamentoAggregateType<T>>

    /**
     * Group by Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoGroupByArgs} args - Group by arguments.
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
      T extends EquipamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipamentoGroupByArgs['orderBy'] }
        : { orderBy?: EquipamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipamento model
   */
  readonly fields: EquipamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicos<T extends Equipamento$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Equipamento$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Equipamento model
   */
  interface EquipamentoFieldRefs {
    readonly id: FieldRef<"Equipamento", 'Int'>
    readonly tipo: FieldRef<"Equipamento", 'String'>
    readonly marca: FieldRef<"Equipamento", 'String'>
    readonly modelo: FieldRef<"Equipamento", 'String'>
    readonly numeroSerie: FieldRef<"Equipamento", 'String'>
    readonly dataCompra: FieldRef<"Equipamento", 'DateTime'>
    readonly createdAt: FieldRef<"Equipamento", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipamento findUnique
   */
  export type EquipamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento findUniqueOrThrow
   */
  export type EquipamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento findFirst
   */
  export type EquipamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamentos.
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * Equipamento findFirstOrThrow
   */
  export type EquipamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamentos.
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * Equipamento findMany
   */
  export type EquipamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamentos to fetch.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipamentos.
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * Equipamento create
   */
  export type EquipamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipamento.
     */
    data: XOR<EquipamentoCreateInput, EquipamentoUncheckedCreateInput>
  }

  /**
   * Equipamento createMany
   */
  export type EquipamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipamentos.
     */
    data: EquipamentoCreateManyInput | EquipamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipamento createManyAndReturn
   */
  export type EquipamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipamentos.
     */
    data: EquipamentoCreateManyInput | EquipamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipamento update
   */
  export type EquipamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipamento.
     */
    data: XOR<EquipamentoUpdateInput, EquipamentoUncheckedUpdateInput>
    /**
     * Choose, which Equipamento to update.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento updateMany
   */
  export type EquipamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipamentos.
     */
    data: XOR<EquipamentoUpdateManyMutationInput, EquipamentoUncheckedUpdateManyInput>
    /**
     * Filter which Equipamentos to update
     */
    where?: EquipamentoWhereInput
    /**
     * Limit how many Equipamentos to update.
     */
    limit?: number
  }

  /**
   * Equipamento updateManyAndReturn
   */
  export type EquipamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * The data used to update Equipamentos.
     */
    data: XOR<EquipamentoUpdateManyMutationInput, EquipamentoUncheckedUpdateManyInput>
    /**
     * Filter which Equipamentos to update
     */
    where?: EquipamentoWhereInput
    /**
     * Limit how many Equipamentos to update.
     */
    limit?: number
  }

  /**
   * Equipamento upsert
   */
  export type EquipamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipamento to update in case it exists.
     */
    where: EquipamentoWhereUniqueInput
    /**
     * In case the Equipamento found by the `where` argument doesn't exist, create a new Equipamento with this data.
     */
    create: XOR<EquipamentoCreateInput, EquipamentoUncheckedCreateInput>
    /**
     * In case the Equipamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipamentoUpdateInput, EquipamentoUncheckedUpdateInput>
  }

  /**
   * Equipamento delete
   */
  export type EquipamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter which Equipamento to delete.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento deleteMany
   */
  export type EquipamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamentos to delete
     */
    where?: EquipamentoWhereInput
    /**
     * Limit how many Equipamentos to delete.
     */
    limit?: number
  }

  /**
   * Equipamento.servicos
   */
  export type Equipamento$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Equipamento without action
   */
  export type EquipamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    clienteId: number | null
    equipamentoId: number | null
    valorTotal: Decimal | null
  }

  export type ServicoSumAggregateOutputType = {
    clienteId: number | null
    equipamentoId: number | null
    valorTotal: Decimal | null
  }

  export type ServicoMinAggregateOutputType = {
    id: string | null
    clienteId: number | null
    equipamentoId: number | null
    tipo: string | null
    descricaoProblema: string | null
    estado: string | null
    dataEntrada: Date | null
    dataDiagnostico: Date | null
    dataReparacao: Date | null
    tecnico: string | null
    garantia: boolean | null
    periodoGarantia: string | null
    notas: string | null
    valorTotal: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicoMaxAggregateOutputType = {
    id: string | null
    clienteId: number | null
    equipamentoId: number | null
    tipo: string | null
    descricaoProblema: string | null
    estado: string | null
    dataEntrada: Date | null
    dataDiagnostico: Date | null
    dataReparacao: Date | null
    tecnico: string | null
    garantia: boolean | null
    periodoGarantia: string | null
    notas: string | null
    valorTotal: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicoCountAggregateOutputType = {
    id: number
    clienteId: number
    equipamentoId: number
    tipo: number
    descricaoProblema: number
    estado: number
    dataEntrada: number
    dataDiagnostico: number
    dataReparacao: number
    tecnico: number
    garantia: number
    periodoGarantia: number
    notas: number
    valorTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    clienteId?: true
    equipamentoId?: true
    valorTotal?: true
  }

  export type ServicoSumAggregateInputType = {
    clienteId?: true
    equipamentoId?: true
    valorTotal?: true
  }

  export type ServicoMinAggregateInputType = {
    id?: true
    clienteId?: true
    equipamentoId?: true
    tipo?: true
    descricaoProblema?: true
    estado?: true
    dataEntrada?: true
    dataDiagnostico?: true
    dataReparacao?: true
    tecnico?: true
    garantia?: true
    periodoGarantia?: true
    notas?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    equipamentoId?: true
    tipo?: true
    descricaoProblema?: true
    estado?: true
    dataEntrada?: true
    dataDiagnostico?: true
    dataReparacao?: true
    tecnico?: true
    garantia?: true
    periodoGarantia?: true
    notas?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicoCountAggregateInputType = {
    id?: true
    clienteId?: true
    equipamentoId?: true
    tipo?: true
    descricaoProblema?: true
    estado?: true
    dataEntrada?: true
    dataDiagnostico?: true
    dataReparacao?: true
    tecnico?: true
    garantia?: true
    periodoGarantia?: true
    notas?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date
    dataDiagnostico: Date | null
    dataReparacao: Date | null
    tecnico: string | null
    garantia: boolean
    periodoGarantia: string | null
    notas: string | null
    valorTotal: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    equipamentoId?: boolean
    tipo?: boolean
    descricaoProblema?: boolean
    estado?: boolean
    dataEntrada?: boolean
    dataDiagnostico?: boolean
    dataReparacao?: boolean
    tecnico?: boolean
    garantia?: boolean
    periodoGarantia?: boolean
    notas?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    equipamento?: boolean | EquipamentoDefaultArgs<ExtArgs>
    historico?: boolean | Servico$historicoArgs<ExtArgs>
    fotos?: boolean | Servico$fotosArgs<ExtArgs>
    pecas?: boolean | Servico$pecasArgs<ExtArgs>
    maoDeObra?: boolean | Servico$maoDeObraArgs<ExtArgs>
    deslocacao?: boolean | Servico$deslocacaoArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    equipamentoId?: boolean
    tipo?: boolean
    descricaoProblema?: boolean
    estado?: boolean
    dataEntrada?: boolean
    dataDiagnostico?: boolean
    dataReparacao?: boolean
    tecnico?: boolean
    garantia?: boolean
    periodoGarantia?: boolean
    notas?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    equipamento?: boolean | EquipamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    equipamentoId?: boolean
    tipo?: boolean
    descricaoProblema?: boolean
    estado?: boolean
    dataEntrada?: boolean
    dataDiagnostico?: boolean
    dataReparacao?: boolean
    tecnico?: boolean
    garantia?: boolean
    periodoGarantia?: boolean
    notas?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    equipamento?: boolean | EquipamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    equipamentoId?: boolean
    tipo?: boolean
    descricaoProblema?: boolean
    estado?: boolean
    dataEntrada?: boolean
    dataDiagnostico?: boolean
    dataReparacao?: boolean
    tecnico?: boolean
    garantia?: boolean
    periodoGarantia?: boolean
    notas?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "equipamentoId" | "tipo" | "descricaoProblema" | "estado" | "dataEntrada" | "dataDiagnostico" | "dataReparacao" | "tecnico" | "garantia" | "periodoGarantia" | "notas" | "valorTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["servico"]>
  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    equipamento?: boolean | EquipamentoDefaultArgs<ExtArgs>
    historico?: boolean | Servico$historicoArgs<ExtArgs>
    fotos?: boolean | Servico$fotosArgs<ExtArgs>
    pecas?: boolean | Servico$pecasArgs<ExtArgs>
    maoDeObra?: boolean | Servico$maoDeObraArgs<ExtArgs>
    deslocacao?: boolean | Servico$deslocacaoArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    equipamento?: boolean | EquipamentoDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    equipamento?: boolean | EquipamentoDefaultArgs<ExtArgs>
  }

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      equipamento: Prisma.$EquipamentoPayload<ExtArgs>
      historico: Prisma.$HistoricoPayload<ExtArgs>[]
      fotos: Prisma.$FotoPayload<ExtArgs>[]
      pecas: Prisma.$PecaPayload<ExtArgs>[]
      maoDeObra: Prisma.$MaoDeObraPayload<ExtArgs> | null
      deslocacao: Prisma.$DeslocacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: number
      equipamentoId: number
      tipo: string
      descricaoProblema: string
      estado: string
      dataEntrada: Date
      dataDiagnostico: Date | null
      dataReparacao: Date | null
      tecnico: string | null
      garantia: boolean
      periodoGarantia: string | null
      notas: string | null
      valorTotal: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoWithIdOnly = await prisma.servico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {ServicoUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
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
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipamento<T extends EquipamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipamentoDefaultArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historico<T extends Servico$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Servico$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fotos<T extends Servico$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Servico$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pecas<T extends Servico$pecasArgs<ExtArgs> = {}>(args?: Subset<T, Servico$pecasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maoDeObra<T extends Servico$maoDeObraArgs<ExtArgs> = {}>(args?: Subset<T, Servico$maoDeObraArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deslocacao<T extends Servico$deslocacaoArgs<ExtArgs> = {}>(args?: Subset<T, Servico$deslocacaoArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id: FieldRef<"Servico", 'String'>
    readonly clienteId: FieldRef<"Servico", 'Int'>
    readonly equipamentoId: FieldRef<"Servico", 'Int'>
    readonly tipo: FieldRef<"Servico", 'String'>
    readonly descricaoProblema: FieldRef<"Servico", 'String'>
    readonly estado: FieldRef<"Servico", 'String'>
    readonly dataEntrada: FieldRef<"Servico", 'DateTime'>
    readonly dataDiagnostico: FieldRef<"Servico", 'DateTime'>
    readonly dataReparacao: FieldRef<"Servico", 'DateTime'>
    readonly tecnico: FieldRef<"Servico", 'String'>
    readonly garantia: FieldRef<"Servico", 'Boolean'>
    readonly periodoGarantia: FieldRef<"Servico", 'String'>
    readonly notas: FieldRef<"Servico", 'String'>
    readonly valorTotal: FieldRef<"Servico", 'Decimal'>
    readonly createdAt: FieldRef<"Servico", 'DateTime'>
    readonly updatedAt: FieldRef<"Servico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico updateManyAndReturn
   */
  export type ServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico.historico
   */
  export type Servico$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    cursor?: HistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Servico.fotos
   */
  export type Servico$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Servico.pecas
   */
  export type Servico$pecasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    where?: PecaWhereInput
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    cursor?: PecaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }

  /**
   * Servico.maoDeObra
   */
  export type Servico$maoDeObraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    where?: MaoDeObraWhereInput
  }

  /**
   * Servico.deslocacao
   */
  export type Servico$deslocacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    where?: DeslocacaoWhereInput
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
  }


  /**
   * Model Historico
   */

  export type AggregateHistorico = {
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoAvgAggregateOutputType = {
    id: number | null
  }

  export type HistoricoSumAggregateOutputType = {
    id: number | null
  }

  export type HistoricoMinAggregateOutputType = {
    id: number | null
    servicoId: string | null
    data: Date | null
    hora: string | null
    acao: string | null
    autor: string | null
    createdAt: Date | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id: number | null
    servicoId: string | null
    data: Date | null
    hora: string | null
    acao: string | null
    autor: string | null
    createdAt: Date | null
  }

  export type HistoricoCountAggregateOutputType = {
    id: number
    servicoId: number
    data: number
    hora: number
    acao: number
    autor: number
    createdAt: number
    _all: number
  }


  export type HistoricoAvgAggregateInputType = {
    id?: true
  }

  export type HistoricoSumAggregateInputType = {
    id?: true
  }

  export type HistoricoMinAggregateInputType = {
    id?: true
    servicoId?: true
    data?: true
    hora?: true
    acao?: true
    autor?: true
    createdAt?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id?: true
    servicoId?: true
    data?: true
    hora?: true
    acao?: true
    autor?: true
    createdAt?: true
  }

  export type HistoricoCountAggregateInputType = {
    id?: true
    servicoId?: true
    data?: true
    hora?: true
    acao?: true
    autor?: true
    createdAt?: true
    _all?: true
  }

  export type HistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico to aggregate.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historicos
    **/
    _count?: true | HistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMaxAggregateInputType
  }

  export type GetHistoricoAggregateType<T extends HistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico[P]>
      : GetScalarType<T[P], AggregateHistorico[P]>
  }




  export type HistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithAggregationInput | HistoricoOrderByWithAggregationInput[]
    by: HistoricoScalarFieldEnum[] | HistoricoScalarFieldEnum
    having?: HistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoCountAggregateInputType | true
    _avg?: HistoricoAvgAggregateInputType
    _sum?: HistoricoSumAggregateInputType
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    id: number
    servicoId: string
    data: Date
    hora: string
    acao: string
    autor: string
    createdAt: Date
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  type GetHistoricoGroupByPayload<T extends HistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    data?: boolean
    hora?: boolean
    acao?: boolean
    autor?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    data?: boolean
    hora?: boolean
    acao?: boolean
    autor?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    data?: boolean
    hora?: boolean
    acao?: boolean
    autor?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectScalar = {
    id?: boolean
    servicoId?: boolean
    data?: boolean
    hora?: boolean
    acao?: boolean
    autor?: boolean
    createdAt?: boolean
  }

  export type HistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servicoId" | "data" | "hora" | "acao" | "autor" | "createdAt", ExtArgs["result"]["historico"]>
  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type HistoricoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type HistoricoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servicoId: string
      data: Date
      hora: string
      acao: string
      autor: string
      createdAt: Date
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type HistoricoGetPayload<S extends boolean | null | undefined | HistoricoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPayload, S>

  type HistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface HistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico'], meta: { name: 'Historico' } }
    /**
     * Find zero or one Historico that matches the filter.
     * @param {HistoricoFindUniqueArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoFindUniqueArgs>(args: SelectSubset<T, HistoricoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoFindUniqueOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoFindFirstArgs>(args?: SelectSubset<T, HistoricoFindFirstArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicos
     * const historicos = await prisma.historico.findMany()
     * 
     * // Get first 10 Historicos
     * const historicos = await prisma.historico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoWithIdOnly = await prisma.historico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoFindManyArgs>(args?: SelectSubset<T, HistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico.
     * @param {HistoricoCreateArgs} args - Arguments to create a Historico.
     * @example
     * // Create one Historico
     * const Historico = await prisma.historico.create({
     *   data: {
     *     // ... data to create a Historico
     *   }
     * })
     * 
     */
    create<T extends HistoricoCreateArgs>(args: SelectSubset<T, HistoricoCreateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historicos.
     * @param {HistoricoCreateManyArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoCreateManyArgs>(args?: SelectSubset<T, HistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historicos and returns the data saved in the database.
     * @param {HistoricoCreateManyAndReturnArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historicos and only return the `id`
     * const historicoWithIdOnly = await prisma.historico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico.
     * @param {HistoricoDeleteArgs} args - Arguments to delete one Historico.
     * @example
     * // Delete one Historico
     * const Historico = await prisma.historico.delete({
     *   where: {
     *     // ... filter to delete one Historico
     *   }
     * })
     * 
     */
    delete<T extends HistoricoDeleteArgs>(args: SelectSubset<T, HistoricoDeleteArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico.
     * @param {HistoricoUpdateArgs} args - Arguments to update one Historico.
     * @example
     * // Update one Historico
     * const historico = await prisma.historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoUpdateArgs>(args: SelectSubset<T, HistoricoUpdateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historicos.
     * @param {HistoricoDeleteManyArgs} args - Arguments to filter Historicos to delete.
     * @example
     * // Delete a few Historicos
     * const { count } = await prisma.historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoDeleteManyArgs>(args?: SelectSubset<T, HistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoUpdateManyArgs>(args: SelectSubset<T, HistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos and returns the data updated in the database.
     * @param {HistoricoUpdateManyAndReturnArgs} args - Arguments to update many Historicos.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historicos and only return the `id`
     * const historicoWithIdOnly = await prisma.historico.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoricoUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico.
     * @param {HistoricoUpsertArgs} args - Arguments to update or create a Historico.
     * @example
     * // Update or create a Historico
     * const historico = await prisma.historico.upsert({
     *   create: {
     *     // ... data to create a Historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoUpsertArgs>(args: SelectSubset<T, HistoricoUpsertArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoCountArgs} args - Arguments to filter Historicos to count.
     * @example
     * // Count the number of Historicos
     * const count = await prisma.historico.count({
     *   where: {
     *     // ... the filter for the Historicos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoCountArgs>(
      args?: Subset<T, HistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoAggregateArgs>(args: Subset<T, HistoricoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoAggregateType<T>>

    /**
     * Group by Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoGroupByArgs} args - Group by arguments.
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
      T extends HistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico model
   */
  readonly fields: HistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Historico model
   */
  interface HistoricoFieldRefs {
    readonly id: FieldRef<"Historico", 'Int'>
    readonly servicoId: FieldRef<"Historico", 'String'>
    readonly data: FieldRef<"Historico", 'DateTime'>
    readonly hora: FieldRef<"Historico", 'String'>
    readonly acao: FieldRef<"Historico", 'String'>
    readonly autor: FieldRef<"Historico", 'String'>
    readonly createdAt: FieldRef<"Historico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Historico findUnique
   */
  export type HistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findUniqueOrThrow
   */
  export type HistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findFirst
   */
  export type HistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findFirstOrThrow
   */
  export type HistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findMany
   */
  export type HistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historicos to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico create
   */
  export type HistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico.
     */
    data: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
  }

  /**
   * Historico createMany
   */
  export type HistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico createManyAndReturn
   */
  export type HistoricoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico update
   */
  export type HistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico.
     */
    data: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
    /**
     * Choose, which Historico to update.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico updateMany
   */
  export type HistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to update.
     */
    limit?: number
  }

  /**
   * Historico updateManyAndReturn
   */
  export type HistoricoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico upsert
   */
  export type HistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico to update in case it exists.
     */
    where: HistoricoWhereUniqueInput
    /**
     * In case the Historico found by the `where` argument doesn't exist, create a new Historico with this data.
     */
    create: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
    /**
     * In case the Historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
  }

  /**
   * Historico delete
   */
  export type HistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter which Historico to delete.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico deleteMany
   */
  export type HistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historicos to delete
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to delete.
     */
    limit?: number
  }

  /**
   * Historico without action
   */
  export type HistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
  }


  /**
   * Model Foto
   */

  export type AggregateFoto = {
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  export type FotoAvgAggregateOutputType = {
    id: number | null
  }

  export type FotoSumAggregateOutputType = {
    id: number | null
  }

  export type FotoMinAggregateOutputType = {
    id: number | null
    servicoId: string | null
    descricao: string | null
    url: string | null
    createdAt: Date | null
  }

  export type FotoMaxAggregateOutputType = {
    id: number | null
    servicoId: string | null
    descricao: string | null
    url: string | null
    createdAt: Date | null
  }

  export type FotoCountAggregateOutputType = {
    id: number
    servicoId: number
    descricao: number
    url: number
    createdAt: number
    _all: number
  }


  export type FotoAvgAggregateInputType = {
    id?: true
  }

  export type FotoSumAggregateInputType = {
    id?: true
  }

  export type FotoMinAggregateInputType = {
    id?: true
    servicoId?: true
    descricao?: true
    url?: true
    createdAt?: true
  }

  export type FotoMaxAggregateInputType = {
    id?: true
    servicoId?: true
    descricao?: true
    url?: true
    createdAt?: true
  }

  export type FotoCountAggregateInputType = {
    id?: true
    servicoId?: true
    descricao?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type FotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foto to aggregate.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotos
    **/
    _count?: true | FotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoMaxAggregateInputType
  }

  export type GetFotoAggregateType<T extends FotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoto[P]>
      : GetScalarType<T[P], AggregateFoto[P]>
  }




  export type FotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithAggregationInput | FotoOrderByWithAggregationInput[]
    by: FotoScalarFieldEnum[] | FotoScalarFieldEnum
    having?: FotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoCountAggregateInputType | true
    _avg?: FotoAvgAggregateInputType
    _sum?: FotoSumAggregateInputType
    _min?: FotoMinAggregateInputType
    _max?: FotoMaxAggregateInputType
  }

  export type FotoGroupByOutputType = {
    id: number
    servicoId: string
    descricao: string
    url: string | null
    createdAt: Date
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  type GetFotoGroupByPayload<T extends FotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGroupByOutputType[P]>
        }
      >
    >


  export type FotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    descricao?: boolean
    url?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    descricao?: boolean
    url?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    descricao?: boolean
    url?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectScalar = {
    id?: boolean
    servicoId?: boolean
    descricao?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type FotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servicoId" | "descricao" | "url" | "createdAt", ExtArgs["result"]["foto"]>
  export type FotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type FotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type FotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $FotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foto"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servicoId: string
      descricao: string
      url: string | null
      createdAt: Date
    }, ExtArgs["result"]["foto"]>
    composites: {}
  }

  type FotoGetPayload<S extends boolean | null | undefined | FotoDefaultArgs> = $Result.GetResult<Prisma.$FotoPayload, S>

  type FotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoCountAggregateInputType | true
    }

  export interface FotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foto'], meta: { name: 'Foto' } }
    /**
     * Find zero or one Foto that matches the filter.
     * @param {FotoFindUniqueArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoFindUniqueArgs>(args: SelectSubset<T, FotoFindUniqueArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoFindUniqueOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoFindFirstArgs>(args?: SelectSubset<T, FotoFindFirstArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.foto.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.foto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoWithIdOnly = await prisma.foto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoFindManyArgs>(args?: SelectSubset<T, FotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foto.
     * @param {FotoCreateArgs} args - Arguments to create a Foto.
     * @example
     * // Create one Foto
     * const Foto = await prisma.foto.create({
     *   data: {
     *     // ... data to create a Foto
     *   }
     * })
     * 
     */
    create<T extends FotoCreateArgs>(args: SelectSubset<T, FotoCreateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fotos.
     * @param {FotoCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoCreateManyArgs>(args?: SelectSubset<T, FotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fotos and returns the data saved in the database.
     * @param {FotoCreateManyAndReturnArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Foto.
     * @param {FotoDeleteArgs} args - Arguments to delete one Foto.
     * @example
     * // Delete one Foto
     * const Foto = await prisma.foto.delete({
     *   where: {
     *     // ... filter to delete one Foto
     *   }
     * })
     * 
     */
    delete<T extends FotoDeleteArgs>(args: SelectSubset<T, FotoDeleteArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foto.
     * @param {FotoUpdateArgs} args - Arguments to update one Foto.
     * @example
     * // Update one Foto
     * const foto = await prisma.foto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoUpdateArgs>(args: SelectSubset<T, FotoUpdateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fotos.
     * @param {FotoDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.foto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoDeleteManyArgs>(args?: SelectSubset<T, FotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoUpdateManyArgs>(args: SelectSubset<T, FotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos and returns the data updated in the database.
     * @param {FotoUpdateManyAndReturnArgs} args - Arguments to update many Fotos.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.updateManyAndReturn({
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
    updateManyAndReturn<T extends FotoUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Foto.
     * @param {FotoUpsertArgs} args - Arguments to update or create a Foto.
     * @example
     * // Update or create a Foto
     * const foto = await prisma.foto.upsert({
     *   create: {
     *     // ... data to create a Foto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foto we want to update
     *   }
     * })
     */
    upsert<T extends FotoUpsertArgs>(args: SelectSubset<T, FotoUpsertArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.foto.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends FotoCountArgs>(
      args?: Subset<T, FotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoAggregateArgs>(args: Subset<T, FotoAggregateArgs>): Prisma.PrismaPromise<GetFotoAggregateType<T>>

    /**
     * Group by Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGroupByArgs} args - Group by arguments.
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
      T extends FotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGroupByArgs['orderBy'] }
        : { orderBy?: FotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foto model
   */
  readonly fields: FotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Foto model
   */
  interface FotoFieldRefs {
    readonly id: FieldRef<"Foto", 'Int'>
    readonly servicoId: FieldRef<"Foto", 'String'>
    readonly descricao: FieldRef<"Foto", 'String'>
    readonly url: FieldRef<"Foto", 'String'>
    readonly createdAt: FieldRef<"Foto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Foto findUnique
   */
  export type FotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findUniqueOrThrow
   */
  export type FotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findFirst
   */
  export type FotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findFirstOrThrow
   */
  export type FotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findMany
   */
  export type FotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Fotos to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto create
   */
  export type FotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Foto.
     */
    data: XOR<FotoCreateInput, FotoUncheckedCreateInput>
  }

  /**
   * Foto createMany
   */
  export type FotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto createManyAndReturn
   */
  export type FotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto update
   */
  export type FotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Foto.
     */
    data: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
    /**
     * Choose, which Foto to update.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto updateMany
   */
  export type FotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
  }

  /**
   * Foto updateManyAndReturn
   */
  export type FotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto upsert
   */
  export type FotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Foto to update in case it exists.
     */
    where: FotoWhereUniqueInput
    /**
     * In case the Foto found by the `where` argument doesn't exist, create a new Foto with this data.
     */
    create: XOR<FotoCreateInput, FotoUncheckedCreateInput>
    /**
     * In case the Foto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
  }

  /**
   * Foto delete
   */
  export type FotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter which Foto to delete.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto deleteMany
   */
  export type FotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotos to delete
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to delete.
     */
    limit?: number
  }

  /**
   * Foto without action
   */
  export type FotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
  }


  /**
   * Model Peca
   */

  export type AggregatePeca = {
    _count: PecaCountAggregateOutputType | null
    _avg: PecaAvgAggregateOutputType | null
    _sum: PecaSumAggregateOutputType | null
    _min: PecaMinAggregateOutputType | null
    _max: PecaMaxAggregateOutputType | null
  }

  export type PecaAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    total: Decimal | null
  }

  export type PecaSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    total: Decimal | null
  }

  export type PecaMinAggregateOutputType = {
    id: number | null
    servicoId: string | null
    nome: string | null
    quantidade: number | null
    precoUnitario: Decimal | null
    total: Decimal | null
    createdAt: Date | null
  }

  export type PecaMaxAggregateOutputType = {
    id: number | null
    servicoId: string | null
    nome: string | null
    quantidade: number | null
    precoUnitario: Decimal | null
    total: Decimal | null
    createdAt: Date | null
  }

  export type PecaCountAggregateOutputType = {
    id: number
    servicoId: number
    nome: number
    quantidade: number
    precoUnitario: number
    total: number
    createdAt: number
    _all: number
  }


  export type PecaAvgAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    total?: true
  }

  export type PecaSumAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    total?: true
  }

  export type PecaMinAggregateInputType = {
    id?: true
    servicoId?: true
    nome?: true
    quantidade?: true
    precoUnitario?: true
    total?: true
    createdAt?: true
  }

  export type PecaMaxAggregateInputType = {
    id?: true
    servicoId?: true
    nome?: true
    quantidade?: true
    precoUnitario?: true
    total?: true
    createdAt?: true
  }

  export type PecaCountAggregateInputType = {
    id?: true
    servicoId?: true
    nome?: true
    quantidade?: true
    precoUnitario?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type PecaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peca to aggregate.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pecas
    **/
    _count?: true | PecaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PecaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PecaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PecaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PecaMaxAggregateInputType
  }

  export type GetPecaAggregateType<T extends PecaAggregateArgs> = {
        [P in keyof T & keyof AggregatePeca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeca[P]>
      : GetScalarType<T[P], AggregatePeca[P]>
  }




  export type PecaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PecaWhereInput
    orderBy?: PecaOrderByWithAggregationInput | PecaOrderByWithAggregationInput[]
    by: PecaScalarFieldEnum[] | PecaScalarFieldEnum
    having?: PecaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PecaCountAggregateInputType | true
    _avg?: PecaAvgAggregateInputType
    _sum?: PecaSumAggregateInputType
    _min?: PecaMinAggregateInputType
    _max?: PecaMaxAggregateInputType
  }

  export type PecaGroupByOutputType = {
    id: number
    servicoId: string
    nome: string
    quantidade: number
    precoUnitario: Decimal
    total: Decimal
    createdAt: Date
    _count: PecaCountAggregateOutputType | null
    _avg: PecaAvgAggregateOutputType | null
    _sum: PecaSumAggregateOutputType | null
    _min: PecaMinAggregateOutputType | null
    _max: PecaMaxAggregateOutputType | null
  }

  type GetPecaGroupByPayload<T extends PecaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PecaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PecaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PecaGroupByOutputType[P]>
            : GetScalarType<T[P], PecaGroupByOutputType[P]>
        }
      >
    >


  export type PecaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    total?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peca"]>

  export type PecaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    total?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peca"]>

  export type PecaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    total?: boolean
    createdAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peca"]>

  export type PecaSelectScalar = {
    id?: boolean
    servicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type PecaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servicoId" | "nome" | "quantidade" | "precoUnitario" | "total" | "createdAt", ExtArgs["result"]["peca"]>
  export type PecaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type PecaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type PecaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $PecaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peca"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servicoId: string
      nome: string
      quantidade: number
      precoUnitario: Prisma.Decimal
      total: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["peca"]>
    composites: {}
  }

  type PecaGetPayload<S extends boolean | null | undefined | PecaDefaultArgs> = $Result.GetResult<Prisma.$PecaPayload, S>

  type PecaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PecaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PecaCountAggregateInputType | true
    }

  export interface PecaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peca'], meta: { name: 'Peca' } }
    /**
     * Find zero or one Peca that matches the filter.
     * @param {PecaFindUniqueArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PecaFindUniqueArgs>(args: SelectSubset<T, PecaFindUniqueArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PecaFindUniqueOrThrowArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PecaFindUniqueOrThrowArgs>(args: SelectSubset<T, PecaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindFirstArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PecaFindFirstArgs>(args?: SelectSubset<T, PecaFindFirstArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindFirstOrThrowArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PecaFindFirstOrThrowArgs>(args?: SelectSubset<T, PecaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pecas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pecas
     * const pecas = await prisma.peca.findMany()
     * 
     * // Get first 10 Pecas
     * const pecas = await prisma.peca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pecaWithIdOnly = await prisma.peca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PecaFindManyArgs>(args?: SelectSubset<T, PecaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peca.
     * @param {PecaCreateArgs} args - Arguments to create a Peca.
     * @example
     * // Create one Peca
     * const Peca = await prisma.peca.create({
     *   data: {
     *     // ... data to create a Peca
     *   }
     * })
     * 
     */
    create<T extends PecaCreateArgs>(args: SelectSubset<T, PecaCreateArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pecas.
     * @param {PecaCreateManyArgs} args - Arguments to create many Pecas.
     * @example
     * // Create many Pecas
     * const peca = await prisma.peca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PecaCreateManyArgs>(args?: SelectSubset<T, PecaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pecas and returns the data saved in the database.
     * @param {PecaCreateManyAndReturnArgs} args - Arguments to create many Pecas.
     * @example
     * // Create many Pecas
     * const peca = await prisma.peca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pecas and only return the `id`
     * const pecaWithIdOnly = await prisma.peca.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PecaCreateManyAndReturnArgs>(args?: SelectSubset<T, PecaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peca.
     * @param {PecaDeleteArgs} args - Arguments to delete one Peca.
     * @example
     * // Delete one Peca
     * const Peca = await prisma.peca.delete({
     *   where: {
     *     // ... filter to delete one Peca
     *   }
     * })
     * 
     */
    delete<T extends PecaDeleteArgs>(args: SelectSubset<T, PecaDeleteArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peca.
     * @param {PecaUpdateArgs} args - Arguments to update one Peca.
     * @example
     * // Update one Peca
     * const peca = await prisma.peca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PecaUpdateArgs>(args: SelectSubset<T, PecaUpdateArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pecas.
     * @param {PecaDeleteManyArgs} args - Arguments to filter Pecas to delete.
     * @example
     * // Delete a few Pecas
     * const { count } = await prisma.peca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PecaDeleteManyArgs>(args?: SelectSubset<T, PecaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pecas
     * const peca = await prisma.peca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PecaUpdateManyArgs>(args: SelectSubset<T, PecaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pecas and returns the data updated in the database.
     * @param {PecaUpdateManyAndReturnArgs} args - Arguments to update many Pecas.
     * @example
     * // Update many Pecas
     * const peca = await prisma.peca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pecas and only return the `id`
     * const pecaWithIdOnly = await prisma.peca.updateManyAndReturn({
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
    updateManyAndReturn<T extends PecaUpdateManyAndReturnArgs>(args: SelectSubset<T, PecaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peca.
     * @param {PecaUpsertArgs} args - Arguments to update or create a Peca.
     * @example
     * // Update or create a Peca
     * const peca = await prisma.peca.upsert({
     *   create: {
     *     // ... data to create a Peca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peca we want to update
     *   }
     * })
     */
    upsert<T extends PecaUpsertArgs>(args: SelectSubset<T, PecaUpsertArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaCountArgs} args - Arguments to filter Pecas to count.
     * @example
     * // Count the number of Pecas
     * const count = await prisma.peca.count({
     *   where: {
     *     // ... the filter for the Pecas we want to count
     *   }
     * })
    **/
    count<T extends PecaCountArgs>(
      args?: Subset<T, PecaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PecaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PecaAggregateArgs>(args: Subset<T, PecaAggregateArgs>): Prisma.PrismaPromise<GetPecaAggregateType<T>>

    /**
     * Group by Peca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaGroupByArgs} args - Group by arguments.
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
      T extends PecaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PecaGroupByArgs['orderBy'] }
        : { orderBy?: PecaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PecaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPecaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peca model
   */
  readonly fields: PecaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PecaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Peca model
   */
  interface PecaFieldRefs {
    readonly id: FieldRef<"Peca", 'Int'>
    readonly servicoId: FieldRef<"Peca", 'String'>
    readonly nome: FieldRef<"Peca", 'String'>
    readonly quantidade: FieldRef<"Peca", 'Int'>
    readonly precoUnitario: FieldRef<"Peca", 'Decimal'>
    readonly total: FieldRef<"Peca", 'Decimal'>
    readonly createdAt: FieldRef<"Peca", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peca findUnique
   */
  export type PecaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca findUniqueOrThrow
   */
  export type PecaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca findFirst
   */
  export type PecaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pecas.
     */
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }

  /**
   * Peca findFirstOrThrow
   */
  export type PecaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pecas.
     */
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }

  /**
   * Peca findMany
   */
  export type PecaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Pecas to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }

  /**
   * Peca create
   */
  export type PecaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * The data needed to create a Peca.
     */
    data: XOR<PecaCreateInput, PecaUncheckedCreateInput>
  }

  /**
   * Peca createMany
   */
  export type PecaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pecas.
     */
    data: PecaCreateManyInput | PecaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peca createManyAndReturn
   */
  export type PecaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * The data used to create many Pecas.
     */
    data: PecaCreateManyInput | PecaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peca update
   */
  export type PecaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * The data needed to update a Peca.
     */
    data: XOR<PecaUpdateInput, PecaUncheckedUpdateInput>
    /**
     * Choose, which Peca to update.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca updateMany
   */
  export type PecaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pecas.
     */
    data: XOR<PecaUpdateManyMutationInput, PecaUncheckedUpdateManyInput>
    /**
     * Filter which Pecas to update
     */
    where?: PecaWhereInput
    /**
     * Limit how many Pecas to update.
     */
    limit?: number
  }

  /**
   * Peca updateManyAndReturn
   */
  export type PecaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * The data used to update Pecas.
     */
    data: XOR<PecaUpdateManyMutationInput, PecaUncheckedUpdateManyInput>
    /**
     * Filter which Pecas to update
     */
    where?: PecaWhereInput
    /**
     * Limit how many Pecas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peca upsert
   */
  export type PecaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * The filter to search for the Peca to update in case it exists.
     */
    where: PecaWhereUniqueInput
    /**
     * In case the Peca found by the `where` argument doesn't exist, create a new Peca with this data.
     */
    create: XOR<PecaCreateInput, PecaUncheckedCreateInput>
    /**
     * In case the Peca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PecaUpdateInput, PecaUncheckedUpdateInput>
  }

  /**
   * Peca delete
   */
  export type PecaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter which Peca to delete.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca deleteMany
   */
  export type PecaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pecas to delete
     */
    where?: PecaWhereInput
    /**
     * Limit how many Pecas to delete.
     */
    limit?: number
  }

  /**
   * Peca without action
   */
  export type PecaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PecaInclude<ExtArgs> | null
  }


  /**
   * Model MaoDeObra
   */

  export type AggregateMaoDeObra = {
    _count: MaoDeObraCountAggregateOutputType | null
    _avg: MaoDeObraAvgAggregateOutputType | null
    _sum: MaoDeObraSumAggregateOutputType | null
    _min: MaoDeObraMinAggregateOutputType | null
    _max: MaoDeObraMaxAggregateOutputType | null
  }

  export type MaoDeObraAvgAggregateOutputType = {
    id: number | null
    horas: Decimal | null
    valorHora: Decimal | null
    total: Decimal | null
  }

  export type MaoDeObraSumAggregateOutputType = {
    id: number | null
    horas: Decimal | null
    valorHora: Decimal | null
    total: Decimal | null
  }

  export type MaoDeObraMinAggregateOutputType = {
    id: number | null
    servicoId: string | null
    horas: Decimal | null
    valorHora: Decimal | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaoDeObraMaxAggregateOutputType = {
    id: number | null
    servicoId: string | null
    horas: Decimal | null
    valorHora: Decimal | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaoDeObraCountAggregateOutputType = {
    id: number
    servicoId: number
    horas: number
    valorHora: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaoDeObraAvgAggregateInputType = {
    id?: true
    horas?: true
    valorHora?: true
    total?: true
  }

  export type MaoDeObraSumAggregateInputType = {
    id?: true
    horas?: true
    valorHora?: true
    total?: true
  }

  export type MaoDeObraMinAggregateInputType = {
    id?: true
    servicoId?: true
    horas?: true
    valorHora?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaoDeObraMaxAggregateInputType = {
    id?: true
    servicoId?: true
    horas?: true
    valorHora?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaoDeObraCountAggregateInputType = {
    id?: true
    servicoId?: true
    horas?: true
    valorHora?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaoDeObraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaoDeObra to aggregate.
     */
    where?: MaoDeObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaoDeObras to fetch.
     */
    orderBy?: MaoDeObraOrderByWithRelationInput | MaoDeObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaoDeObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaoDeObras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaoDeObras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaoDeObras
    **/
    _count?: true | MaoDeObraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaoDeObraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaoDeObraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaoDeObraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaoDeObraMaxAggregateInputType
  }

  export type GetMaoDeObraAggregateType<T extends MaoDeObraAggregateArgs> = {
        [P in keyof T & keyof AggregateMaoDeObra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaoDeObra[P]>
      : GetScalarType<T[P], AggregateMaoDeObra[P]>
  }




  export type MaoDeObraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaoDeObraWhereInput
    orderBy?: MaoDeObraOrderByWithAggregationInput | MaoDeObraOrderByWithAggregationInput[]
    by: MaoDeObraScalarFieldEnum[] | MaoDeObraScalarFieldEnum
    having?: MaoDeObraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaoDeObraCountAggregateInputType | true
    _avg?: MaoDeObraAvgAggregateInputType
    _sum?: MaoDeObraSumAggregateInputType
    _min?: MaoDeObraMinAggregateInputType
    _max?: MaoDeObraMaxAggregateInputType
  }

  export type MaoDeObraGroupByOutputType = {
    id: number
    servicoId: string
    horas: Decimal
    valorHora: Decimal
    total: Decimal
    createdAt: Date
    updatedAt: Date
    _count: MaoDeObraCountAggregateOutputType | null
    _avg: MaoDeObraAvgAggregateOutputType | null
    _sum: MaoDeObraSumAggregateOutputType | null
    _min: MaoDeObraMinAggregateOutputType | null
    _max: MaoDeObraMaxAggregateOutputType | null
  }

  type GetMaoDeObraGroupByPayload<T extends MaoDeObraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaoDeObraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaoDeObraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaoDeObraGroupByOutputType[P]>
            : GetScalarType<T[P], MaoDeObraGroupByOutputType[P]>
        }
      >
    >


  export type MaoDeObraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    horas?: boolean
    valorHora?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maoDeObra"]>

  export type MaoDeObraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    horas?: boolean
    valorHora?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maoDeObra"]>

  export type MaoDeObraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    horas?: boolean
    valorHora?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maoDeObra"]>

  export type MaoDeObraSelectScalar = {
    id?: boolean
    servicoId?: boolean
    horas?: boolean
    valorHora?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaoDeObraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servicoId" | "horas" | "valorHora" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["maoDeObra"]>
  export type MaoDeObraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type MaoDeObraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type MaoDeObraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $MaoDeObraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaoDeObra"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servicoId: string
      horas: Prisma.Decimal
      valorHora: Prisma.Decimal
      total: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maoDeObra"]>
    composites: {}
  }

  type MaoDeObraGetPayload<S extends boolean | null | undefined | MaoDeObraDefaultArgs> = $Result.GetResult<Prisma.$MaoDeObraPayload, S>

  type MaoDeObraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaoDeObraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaoDeObraCountAggregateInputType | true
    }

  export interface MaoDeObraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaoDeObra'], meta: { name: 'MaoDeObra' } }
    /**
     * Find zero or one MaoDeObra that matches the filter.
     * @param {MaoDeObraFindUniqueArgs} args - Arguments to find a MaoDeObra
     * @example
     * // Get one MaoDeObra
     * const maoDeObra = await prisma.maoDeObra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaoDeObraFindUniqueArgs>(args: SelectSubset<T, MaoDeObraFindUniqueArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaoDeObra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaoDeObraFindUniqueOrThrowArgs} args - Arguments to find a MaoDeObra
     * @example
     * // Get one MaoDeObra
     * const maoDeObra = await prisma.maoDeObra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaoDeObraFindUniqueOrThrowArgs>(args: SelectSubset<T, MaoDeObraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaoDeObra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaoDeObraFindFirstArgs} args - Arguments to find a MaoDeObra
     * @example
     * // Get one MaoDeObra
     * const maoDeObra = await prisma.maoDeObra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaoDeObraFindFirstArgs>(args?: SelectSubset<T, MaoDeObraFindFirstArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaoDeObra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaoDeObraFindFirstOrThrowArgs} args - Arguments to find a MaoDeObra
     * @example
     * // Get one MaoDeObra
     * const maoDeObra = await prisma.maoDeObra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaoDeObraFindFirstOrThrowArgs>(args?: SelectSubset<T, MaoDeObraFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaoDeObras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaoDeObraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaoDeObras
     * const maoDeObras = await prisma.maoDeObra.findMany()
     * 
     * // Get first 10 MaoDeObras
     * const maoDeObras = await prisma.maoDeObra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maoDeObraWithIdOnly = await prisma.maoDeObra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaoDeObraFindManyArgs>(args?: SelectSubset<T, MaoDeObraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaoDeObra.
     * @param {MaoDeObraCreateArgs} args - Arguments to create a MaoDeObra.
     * @example
     * // Create one MaoDeObra
     * const MaoDeObra = await prisma.maoDeObra.create({
     *   data: {
     *     // ... data to create a MaoDeObra
     *   }
     * })
     * 
     */
    create<T extends MaoDeObraCreateArgs>(args: SelectSubset<T, MaoDeObraCreateArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaoDeObras.
     * @param {MaoDeObraCreateManyArgs} args - Arguments to create many MaoDeObras.
     * @example
     * // Create many MaoDeObras
     * const maoDeObra = await prisma.maoDeObra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaoDeObraCreateManyArgs>(args?: SelectSubset<T, MaoDeObraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaoDeObras and returns the data saved in the database.
     * @param {MaoDeObraCreateManyAndReturnArgs} args - Arguments to create many MaoDeObras.
     * @example
     * // Create many MaoDeObras
     * const maoDeObra = await prisma.maoDeObra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaoDeObras and only return the `id`
     * const maoDeObraWithIdOnly = await prisma.maoDeObra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaoDeObraCreateManyAndReturnArgs>(args?: SelectSubset<T, MaoDeObraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaoDeObra.
     * @param {MaoDeObraDeleteArgs} args - Arguments to delete one MaoDeObra.
     * @example
     * // Delete one MaoDeObra
     * const MaoDeObra = await prisma.maoDeObra.delete({
     *   where: {
     *     // ... filter to delete one MaoDeObra
     *   }
     * })
     * 
     */
    delete<T extends MaoDeObraDeleteArgs>(args: SelectSubset<T, MaoDeObraDeleteArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaoDeObra.
     * @param {MaoDeObraUpdateArgs} args - Arguments to update one MaoDeObra.
     * @example
     * // Update one MaoDeObra
     * const maoDeObra = await prisma.maoDeObra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaoDeObraUpdateArgs>(args: SelectSubset<T, MaoDeObraUpdateArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaoDeObras.
     * @param {MaoDeObraDeleteManyArgs} args - Arguments to filter MaoDeObras to delete.
     * @example
     * // Delete a few MaoDeObras
     * const { count } = await prisma.maoDeObra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaoDeObraDeleteManyArgs>(args?: SelectSubset<T, MaoDeObraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaoDeObras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaoDeObraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaoDeObras
     * const maoDeObra = await prisma.maoDeObra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaoDeObraUpdateManyArgs>(args: SelectSubset<T, MaoDeObraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaoDeObras and returns the data updated in the database.
     * @param {MaoDeObraUpdateManyAndReturnArgs} args - Arguments to update many MaoDeObras.
     * @example
     * // Update many MaoDeObras
     * const maoDeObra = await prisma.maoDeObra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaoDeObras and only return the `id`
     * const maoDeObraWithIdOnly = await prisma.maoDeObra.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaoDeObraUpdateManyAndReturnArgs>(args: SelectSubset<T, MaoDeObraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaoDeObra.
     * @param {MaoDeObraUpsertArgs} args - Arguments to update or create a MaoDeObra.
     * @example
     * // Update or create a MaoDeObra
     * const maoDeObra = await prisma.maoDeObra.upsert({
     *   create: {
     *     // ... data to create a MaoDeObra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaoDeObra we want to update
     *   }
     * })
     */
    upsert<T extends MaoDeObraUpsertArgs>(args: SelectSubset<T, MaoDeObraUpsertArgs<ExtArgs>>): Prisma__MaoDeObraClient<$Result.GetResult<Prisma.$MaoDeObraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaoDeObras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaoDeObraCountArgs} args - Arguments to filter MaoDeObras to count.
     * @example
     * // Count the number of MaoDeObras
     * const count = await prisma.maoDeObra.count({
     *   where: {
     *     // ... the filter for the MaoDeObras we want to count
     *   }
     * })
    **/
    count<T extends MaoDeObraCountArgs>(
      args?: Subset<T, MaoDeObraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaoDeObraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaoDeObra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaoDeObraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaoDeObraAggregateArgs>(args: Subset<T, MaoDeObraAggregateArgs>): Prisma.PrismaPromise<GetMaoDeObraAggregateType<T>>

    /**
     * Group by MaoDeObra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaoDeObraGroupByArgs} args - Group by arguments.
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
      T extends MaoDeObraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaoDeObraGroupByArgs['orderBy'] }
        : { orderBy?: MaoDeObraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaoDeObraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaoDeObraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaoDeObra model
   */
  readonly fields: MaoDeObraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaoDeObra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaoDeObraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaoDeObra model
   */
  interface MaoDeObraFieldRefs {
    readonly id: FieldRef<"MaoDeObra", 'Int'>
    readonly servicoId: FieldRef<"MaoDeObra", 'String'>
    readonly horas: FieldRef<"MaoDeObra", 'Decimal'>
    readonly valorHora: FieldRef<"MaoDeObra", 'Decimal'>
    readonly total: FieldRef<"MaoDeObra", 'Decimal'>
    readonly createdAt: FieldRef<"MaoDeObra", 'DateTime'>
    readonly updatedAt: FieldRef<"MaoDeObra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaoDeObra findUnique
   */
  export type MaoDeObraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * Filter, which MaoDeObra to fetch.
     */
    where: MaoDeObraWhereUniqueInput
  }

  /**
   * MaoDeObra findUniqueOrThrow
   */
  export type MaoDeObraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * Filter, which MaoDeObra to fetch.
     */
    where: MaoDeObraWhereUniqueInput
  }

  /**
   * MaoDeObra findFirst
   */
  export type MaoDeObraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * Filter, which MaoDeObra to fetch.
     */
    where?: MaoDeObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaoDeObras to fetch.
     */
    orderBy?: MaoDeObraOrderByWithRelationInput | MaoDeObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaoDeObras.
     */
    cursor?: MaoDeObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaoDeObras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaoDeObras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaoDeObras.
     */
    distinct?: MaoDeObraScalarFieldEnum | MaoDeObraScalarFieldEnum[]
  }

  /**
   * MaoDeObra findFirstOrThrow
   */
  export type MaoDeObraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * Filter, which MaoDeObra to fetch.
     */
    where?: MaoDeObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaoDeObras to fetch.
     */
    orderBy?: MaoDeObraOrderByWithRelationInput | MaoDeObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaoDeObras.
     */
    cursor?: MaoDeObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaoDeObras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaoDeObras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaoDeObras.
     */
    distinct?: MaoDeObraScalarFieldEnum | MaoDeObraScalarFieldEnum[]
  }

  /**
   * MaoDeObra findMany
   */
  export type MaoDeObraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * Filter, which MaoDeObras to fetch.
     */
    where?: MaoDeObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaoDeObras to fetch.
     */
    orderBy?: MaoDeObraOrderByWithRelationInput | MaoDeObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaoDeObras.
     */
    cursor?: MaoDeObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaoDeObras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaoDeObras.
     */
    skip?: number
    distinct?: MaoDeObraScalarFieldEnum | MaoDeObraScalarFieldEnum[]
  }

  /**
   * MaoDeObra create
   */
  export type MaoDeObraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * The data needed to create a MaoDeObra.
     */
    data: XOR<MaoDeObraCreateInput, MaoDeObraUncheckedCreateInput>
  }

  /**
   * MaoDeObra createMany
   */
  export type MaoDeObraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaoDeObras.
     */
    data: MaoDeObraCreateManyInput | MaoDeObraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaoDeObra createManyAndReturn
   */
  export type MaoDeObraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * The data used to create many MaoDeObras.
     */
    data: MaoDeObraCreateManyInput | MaoDeObraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaoDeObra update
   */
  export type MaoDeObraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * The data needed to update a MaoDeObra.
     */
    data: XOR<MaoDeObraUpdateInput, MaoDeObraUncheckedUpdateInput>
    /**
     * Choose, which MaoDeObra to update.
     */
    where: MaoDeObraWhereUniqueInput
  }

  /**
   * MaoDeObra updateMany
   */
  export type MaoDeObraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaoDeObras.
     */
    data: XOR<MaoDeObraUpdateManyMutationInput, MaoDeObraUncheckedUpdateManyInput>
    /**
     * Filter which MaoDeObras to update
     */
    where?: MaoDeObraWhereInput
    /**
     * Limit how many MaoDeObras to update.
     */
    limit?: number
  }

  /**
   * MaoDeObra updateManyAndReturn
   */
  export type MaoDeObraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * The data used to update MaoDeObras.
     */
    data: XOR<MaoDeObraUpdateManyMutationInput, MaoDeObraUncheckedUpdateManyInput>
    /**
     * Filter which MaoDeObras to update
     */
    where?: MaoDeObraWhereInput
    /**
     * Limit how many MaoDeObras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaoDeObra upsert
   */
  export type MaoDeObraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * The filter to search for the MaoDeObra to update in case it exists.
     */
    where: MaoDeObraWhereUniqueInput
    /**
     * In case the MaoDeObra found by the `where` argument doesn't exist, create a new MaoDeObra with this data.
     */
    create: XOR<MaoDeObraCreateInput, MaoDeObraUncheckedCreateInput>
    /**
     * In case the MaoDeObra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaoDeObraUpdateInput, MaoDeObraUncheckedUpdateInput>
  }

  /**
   * MaoDeObra delete
   */
  export type MaoDeObraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
    /**
     * Filter which MaoDeObra to delete.
     */
    where: MaoDeObraWhereUniqueInput
  }

  /**
   * MaoDeObra deleteMany
   */
  export type MaoDeObraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaoDeObras to delete
     */
    where?: MaoDeObraWhereInput
    /**
     * Limit how many MaoDeObras to delete.
     */
    limit?: number
  }

  /**
   * MaoDeObra without action
   */
  export type MaoDeObraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaoDeObra
     */
    select?: MaoDeObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaoDeObra
     */
    omit?: MaoDeObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaoDeObraInclude<ExtArgs> | null
  }


  /**
   * Model Deslocacao
   */

  export type AggregateDeslocacao = {
    _count: DeslocacaoCountAggregateOutputType | null
    _avg: DeslocacaoAvgAggregateOutputType | null
    _sum: DeslocacaoSumAggregateOutputType | null
    _min: DeslocacaoMinAggregateOutputType | null
    _max: DeslocacaoMaxAggregateOutputType | null
  }

  export type DeslocacaoAvgAggregateOutputType = {
    id: number | null
    km: Decimal | null
    valorKm: Decimal | null
    total: Decimal | null
  }

  export type DeslocacaoSumAggregateOutputType = {
    id: number | null
    km: Decimal | null
    valorKm: Decimal | null
    total: Decimal | null
  }

  export type DeslocacaoMinAggregateOutputType = {
    id: number | null
    servicoId: string | null
    km: Decimal | null
    valorKm: Decimal | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeslocacaoMaxAggregateOutputType = {
    id: number | null
    servicoId: string | null
    km: Decimal | null
    valorKm: Decimal | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeslocacaoCountAggregateOutputType = {
    id: number
    servicoId: number
    km: number
    valorKm: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeslocacaoAvgAggregateInputType = {
    id?: true
    km?: true
    valorKm?: true
    total?: true
  }

  export type DeslocacaoSumAggregateInputType = {
    id?: true
    km?: true
    valorKm?: true
    total?: true
  }

  export type DeslocacaoMinAggregateInputType = {
    id?: true
    servicoId?: true
    km?: true
    valorKm?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeslocacaoMaxAggregateInputType = {
    id?: true
    servicoId?: true
    km?: true
    valorKm?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeslocacaoCountAggregateInputType = {
    id?: true
    servicoId?: true
    km?: true
    valorKm?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeslocacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deslocacao to aggregate.
     */
    where?: DeslocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deslocacaos to fetch.
     */
    orderBy?: DeslocacaoOrderByWithRelationInput | DeslocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeslocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deslocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deslocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deslocacaos
    **/
    _count?: true | DeslocacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeslocacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeslocacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeslocacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeslocacaoMaxAggregateInputType
  }

  export type GetDeslocacaoAggregateType<T extends DeslocacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDeslocacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeslocacao[P]>
      : GetScalarType<T[P], AggregateDeslocacao[P]>
  }




  export type DeslocacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeslocacaoWhereInput
    orderBy?: DeslocacaoOrderByWithAggregationInput | DeslocacaoOrderByWithAggregationInput[]
    by: DeslocacaoScalarFieldEnum[] | DeslocacaoScalarFieldEnum
    having?: DeslocacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeslocacaoCountAggregateInputType | true
    _avg?: DeslocacaoAvgAggregateInputType
    _sum?: DeslocacaoSumAggregateInputType
    _min?: DeslocacaoMinAggregateInputType
    _max?: DeslocacaoMaxAggregateInputType
  }

  export type DeslocacaoGroupByOutputType = {
    id: number
    servicoId: string
    km: Decimal
    valorKm: Decimal
    total: Decimal
    createdAt: Date
    updatedAt: Date
    _count: DeslocacaoCountAggregateOutputType | null
    _avg: DeslocacaoAvgAggregateOutputType | null
    _sum: DeslocacaoSumAggregateOutputType | null
    _min: DeslocacaoMinAggregateOutputType | null
    _max: DeslocacaoMaxAggregateOutputType | null
  }

  type GetDeslocacaoGroupByPayload<T extends DeslocacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeslocacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeslocacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeslocacaoGroupByOutputType[P]>
            : GetScalarType<T[P], DeslocacaoGroupByOutputType[P]>
        }
      >
    >


  export type DeslocacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    km?: boolean
    valorKm?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deslocacao"]>

  export type DeslocacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    km?: boolean
    valorKm?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deslocacao"]>

  export type DeslocacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    km?: boolean
    valorKm?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deslocacao"]>

  export type DeslocacaoSelectScalar = {
    id?: boolean
    servicoId?: boolean
    km?: boolean
    valorKm?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeslocacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servicoId" | "km" | "valorKm" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["deslocacao"]>
  export type DeslocacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type DeslocacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type DeslocacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $DeslocacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deslocacao"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servicoId: string
      km: Prisma.Decimal
      valorKm: Prisma.Decimal
      total: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deslocacao"]>
    composites: {}
  }

  type DeslocacaoGetPayload<S extends boolean | null | undefined | DeslocacaoDefaultArgs> = $Result.GetResult<Prisma.$DeslocacaoPayload, S>

  type DeslocacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeslocacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeslocacaoCountAggregateInputType | true
    }

  export interface DeslocacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deslocacao'], meta: { name: 'Deslocacao' } }
    /**
     * Find zero or one Deslocacao that matches the filter.
     * @param {DeslocacaoFindUniqueArgs} args - Arguments to find a Deslocacao
     * @example
     * // Get one Deslocacao
     * const deslocacao = await prisma.deslocacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeslocacaoFindUniqueArgs>(args: SelectSubset<T, DeslocacaoFindUniqueArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deslocacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeslocacaoFindUniqueOrThrowArgs} args - Arguments to find a Deslocacao
     * @example
     * // Get one Deslocacao
     * const deslocacao = await prisma.deslocacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeslocacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, DeslocacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deslocacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeslocacaoFindFirstArgs} args - Arguments to find a Deslocacao
     * @example
     * // Get one Deslocacao
     * const deslocacao = await prisma.deslocacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeslocacaoFindFirstArgs>(args?: SelectSubset<T, DeslocacaoFindFirstArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deslocacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeslocacaoFindFirstOrThrowArgs} args - Arguments to find a Deslocacao
     * @example
     * // Get one Deslocacao
     * const deslocacao = await prisma.deslocacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeslocacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, DeslocacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deslocacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeslocacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deslocacaos
     * const deslocacaos = await prisma.deslocacao.findMany()
     * 
     * // Get first 10 Deslocacaos
     * const deslocacaos = await prisma.deslocacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deslocacaoWithIdOnly = await prisma.deslocacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeslocacaoFindManyArgs>(args?: SelectSubset<T, DeslocacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deslocacao.
     * @param {DeslocacaoCreateArgs} args - Arguments to create a Deslocacao.
     * @example
     * // Create one Deslocacao
     * const Deslocacao = await prisma.deslocacao.create({
     *   data: {
     *     // ... data to create a Deslocacao
     *   }
     * })
     * 
     */
    create<T extends DeslocacaoCreateArgs>(args: SelectSubset<T, DeslocacaoCreateArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deslocacaos.
     * @param {DeslocacaoCreateManyArgs} args - Arguments to create many Deslocacaos.
     * @example
     * // Create many Deslocacaos
     * const deslocacao = await prisma.deslocacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeslocacaoCreateManyArgs>(args?: SelectSubset<T, DeslocacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deslocacaos and returns the data saved in the database.
     * @param {DeslocacaoCreateManyAndReturnArgs} args - Arguments to create many Deslocacaos.
     * @example
     * // Create many Deslocacaos
     * const deslocacao = await prisma.deslocacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deslocacaos and only return the `id`
     * const deslocacaoWithIdOnly = await prisma.deslocacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeslocacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, DeslocacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deslocacao.
     * @param {DeslocacaoDeleteArgs} args - Arguments to delete one Deslocacao.
     * @example
     * // Delete one Deslocacao
     * const Deslocacao = await prisma.deslocacao.delete({
     *   where: {
     *     // ... filter to delete one Deslocacao
     *   }
     * })
     * 
     */
    delete<T extends DeslocacaoDeleteArgs>(args: SelectSubset<T, DeslocacaoDeleteArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deslocacao.
     * @param {DeslocacaoUpdateArgs} args - Arguments to update one Deslocacao.
     * @example
     * // Update one Deslocacao
     * const deslocacao = await prisma.deslocacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeslocacaoUpdateArgs>(args: SelectSubset<T, DeslocacaoUpdateArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deslocacaos.
     * @param {DeslocacaoDeleteManyArgs} args - Arguments to filter Deslocacaos to delete.
     * @example
     * // Delete a few Deslocacaos
     * const { count } = await prisma.deslocacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeslocacaoDeleteManyArgs>(args?: SelectSubset<T, DeslocacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deslocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeslocacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deslocacaos
     * const deslocacao = await prisma.deslocacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeslocacaoUpdateManyArgs>(args: SelectSubset<T, DeslocacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deslocacaos and returns the data updated in the database.
     * @param {DeslocacaoUpdateManyAndReturnArgs} args - Arguments to update many Deslocacaos.
     * @example
     * // Update many Deslocacaos
     * const deslocacao = await prisma.deslocacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deslocacaos and only return the `id`
     * const deslocacaoWithIdOnly = await prisma.deslocacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeslocacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, DeslocacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deslocacao.
     * @param {DeslocacaoUpsertArgs} args - Arguments to update or create a Deslocacao.
     * @example
     * // Update or create a Deslocacao
     * const deslocacao = await prisma.deslocacao.upsert({
     *   create: {
     *     // ... data to create a Deslocacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deslocacao we want to update
     *   }
     * })
     */
    upsert<T extends DeslocacaoUpsertArgs>(args: SelectSubset<T, DeslocacaoUpsertArgs<ExtArgs>>): Prisma__DeslocacaoClient<$Result.GetResult<Prisma.$DeslocacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deslocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeslocacaoCountArgs} args - Arguments to filter Deslocacaos to count.
     * @example
     * // Count the number of Deslocacaos
     * const count = await prisma.deslocacao.count({
     *   where: {
     *     // ... the filter for the Deslocacaos we want to count
     *   }
     * })
    **/
    count<T extends DeslocacaoCountArgs>(
      args?: Subset<T, DeslocacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeslocacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deslocacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeslocacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeslocacaoAggregateArgs>(args: Subset<T, DeslocacaoAggregateArgs>): Prisma.PrismaPromise<GetDeslocacaoAggregateType<T>>

    /**
     * Group by Deslocacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeslocacaoGroupByArgs} args - Group by arguments.
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
      T extends DeslocacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeslocacaoGroupByArgs['orderBy'] }
        : { orderBy?: DeslocacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeslocacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeslocacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deslocacao model
   */
  readonly fields: DeslocacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deslocacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeslocacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Deslocacao model
   */
  interface DeslocacaoFieldRefs {
    readonly id: FieldRef<"Deslocacao", 'Int'>
    readonly servicoId: FieldRef<"Deslocacao", 'String'>
    readonly km: FieldRef<"Deslocacao", 'Decimal'>
    readonly valorKm: FieldRef<"Deslocacao", 'Decimal'>
    readonly total: FieldRef<"Deslocacao", 'Decimal'>
    readonly createdAt: FieldRef<"Deslocacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Deslocacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deslocacao findUnique
   */
  export type DeslocacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Deslocacao to fetch.
     */
    where: DeslocacaoWhereUniqueInput
  }

  /**
   * Deslocacao findUniqueOrThrow
   */
  export type DeslocacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Deslocacao to fetch.
     */
    where: DeslocacaoWhereUniqueInput
  }

  /**
   * Deslocacao findFirst
   */
  export type DeslocacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Deslocacao to fetch.
     */
    where?: DeslocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deslocacaos to fetch.
     */
    orderBy?: DeslocacaoOrderByWithRelationInput | DeslocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deslocacaos.
     */
    cursor?: DeslocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deslocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deslocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deslocacaos.
     */
    distinct?: DeslocacaoScalarFieldEnum | DeslocacaoScalarFieldEnum[]
  }

  /**
   * Deslocacao findFirstOrThrow
   */
  export type DeslocacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Deslocacao to fetch.
     */
    where?: DeslocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deslocacaos to fetch.
     */
    orderBy?: DeslocacaoOrderByWithRelationInput | DeslocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deslocacaos.
     */
    cursor?: DeslocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deslocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deslocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deslocacaos.
     */
    distinct?: DeslocacaoScalarFieldEnum | DeslocacaoScalarFieldEnum[]
  }

  /**
   * Deslocacao findMany
   */
  export type DeslocacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Deslocacaos to fetch.
     */
    where?: DeslocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deslocacaos to fetch.
     */
    orderBy?: DeslocacaoOrderByWithRelationInput | DeslocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deslocacaos.
     */
    cursor?: DeslocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deslocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deslocacaos.
     */
    skip?: number
    distinct?: DeslocacaoScalarFieldEnum | DeslocacaoScalarFieldEnum[]
  }

  /**
   * Deslocacao create
   */
  export type DeslocacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Deslocacao.
     */
    data: XOR<DeslocacaoCreateInput, DeslocacaoUncheckedCreateInput>
  }

  /**
   * Deslocacao createMany
   */
  export type DeslocacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deslocacaos.
     */
    data: DeslocacaoCreateManyInput | DeslocacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deslocacao createManyAndReturn
   */
  export type DeslocacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Deslocacaos.
     */
    data: DeslocacaoCreateManyInput | DeslocacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deslocacao update
   */
  export type DeslocacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Deslocacao.
     */
    data: XOR<DeslocacaoUpdateInput, DeslocacaoUncheckedUpdateInput>
    /**
     * Choose, which Deslocacao to update.
     */
    where: DeslocacaoWhereUniqueInput
  }

  /**
   * Deslocacao updateMany
   */
  export type DeslocacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deslocacaos.
     */
    data: XOR<DeslocacaoUpdateManyMutationInput, DeslocacaoUncheckedUpdateManyInput>
    /**
     * Filter which Deslocacaos to update
     */
    where?: DeslocacaoWhereInput
    /**
     * Limit how many Deslocacaos to update.
     */
    limit?: number
  }

  /**
   * Deslocacao updateManyAndReturn
   */
  export type DeslocacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * The data used to update Deslocacaos.
     */
    data: XOR<DeslocacaoUpdateManyMutationInput, DeslocacaoUncheckedUpdateManyInput>
    /**
     * Filter which Deslocacaos to update
     */
    where?: DeslocacaoWhereInput
    /**
     * Limit how many Deslocacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deslocacao upsert
   */
  export type DeslocacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Deslocacao to update in case it exists.
     */
    where: DeslocacaoWhereUniqueInput
    /**
     * In case the Deslocacao found by the `where` argument doesn't exist, create a new Deslocacao with this data.
     */
    create: XOR<DeslocacaoCreateInput, DeslocacaoUncheckedCreateInput>
    /**
     * In case the Deslocacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeslocacaoUpdateInput, DeslocacaoUncheckedUpdateInput>
  }

  /**
   * Deslocacao delete
   */
  export type DeslocacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
    /**
     * Filter which Deslocacao to delete.
     */
    where: DeslocacaoWhereUniqueInput
  }

  /**
   * Deslocacao deleteMany
   */
  export type DeslocacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deslocacaos to delete
     */
    where?: DeslocacaoWhereInput
    /**
     * Limit how many Deslocacaos to delete.
     */
    limit?: number
  }

  /**
   * Deslocacao without action
   */
  export type DeslocacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deslocacao
     */
    select?: DeslocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deslocacao
     */
    omit?: DeslocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeslocacaoInclude<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    email: 'email',
    morada: 'morada',
    tipo: 'tipo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EquipamentoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    marca: 'marca',
    modelo: 'modelo',
    numeroSerie: 'numeroSerie',
    dataCompra: 'dataCompra',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipamentoScalarFieldEnum = (typeof EquipamentoScalarFieldEnum)[keyof typeof EquipamentoScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    equipamentoId: 'equipamentoId',
    tipo: 'tipo',
    descricaoProblema: 'descricaoProblema',
    estado: 'estado',
    dataEntrada: 'dataEntrada',
    dataDiagnostico: 'dataDiagnostico',
    dataReparacao: 'dataReparacao',
    tecnico: 'tecnico',
    garantia: 'garantia',
    periodoGarantia: 'periodoGarantia',
    notas: 'notas',
    valorTotal: 'valorTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    id: 'id',
    servicoId: 'servicoId',
    data: 'data',
    hora: 'hora',
    acao: 'acao',
    autor: 'autor',
    createdAt: 'createdAt'
  };

  export type HistoricoScalarFieldEnum = (typeof HistoricoScalarFieldEnum)[keyof typeof HistoricoScalarFieldEnum]


  export const FotoScalarFieldEnum: {
    id: 'id',
    servicoId: 'servicoId',
    descricao: 'descricao',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type FotoScalarFieldEnum = (typeof FotoScalarFieldEnum)[keyof typeof FotoScalarFieldEnum]


  export const PecaScalarFieldEnum: {
    id: 'id',
    servicoId: 'servicoId',
    nome: 'nome',
    quantidade: 'quantidade',
    precoUnitario: 'precoUnitario',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type PecaScalarFieldEnum = (typeof PecaScalarFieldEnum)[keyof typeof PecaScalarFieldEnum]


  export const MaoDeObraScalarFieldEnum: {
    id: 'id',
    servicoId: 'servicoId',
    horas: 'horas',
    valorHora: 'valorHora',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaoDeObraScalarFieldEnum = (typeof MaoDeObraScalarFieldEnum)[keyof typeof MaoDeObraScalarFieldEnum]


  export const DeslocacaoScalarFieldEnum: {
    id: 'id',
    servicoId: 'servicoId',
    km: 'km',
    valorKm: 'valorKm',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeslocacaoScalarFieldEnum = (typeof DeslocacaoScalarFieldEnum)[keyof typeof DeslocacaoScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    morada?: StringFilter<"Cliente"> | string
    tipo?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    servicos?: ServicoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    morada?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servicos?: ServicoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    morada?: StringFilter<"Cliente"> | string
    tipo?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    servicos?: ServicoListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    morada?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    morada?: StringWithAggregatesFilter<"Cliente"> | string
    tipo?: StringWithAggregatesFilter<"Cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type EquipamentoWhereInput = {
    AND?: EquipamentoWhereInput | EquipamentoWhereInput[]
    OR?: EquipamentoWhereInput[]
    NOT?: EquipamentoWhereInput | EquipamentoWhereInput[]
    id?: IntFilter<"Equipamento"> | number
    tipo?: StringFilter<"Equipamento"> | string
    marca?: StringFilter<"Equipamento"> | string
    modelo?: StringFilter<"Equipamento"> | string
    numeroSerie?: StringNullableFilter<"Equipamento"> | string | null
    dataCompra?: DateTimeNullableFilter<"Equipamento"> | Date | string | null
    createdAt?: DateTimeFilter<"Equipamento"> | Date | string
    updatedAt?: DateTimeFilter<"Equipamento"> | Date | string
    servicos?: ServicoListRelationFilter
  }

  export type EquipamentoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numeroSerie?: SortOrderInput | SortOrder
    dataCompra?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servicos?: ServicoOrderByRelationAggregateInput
  }

  export type EquipamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipamentoWhereInput | EquipamentoWhereInput[]
    OR?: EquipamentoWhereInput[]
    NOT?: EquipamentoWhereInput | EquipamentoWhereInput[]
    tipo?: StringFilter<"Equipamento"> | string
    marca?: StringFilter<"Equipamento"> | string
    modelo?: StringFilter<"Equipamento"> | string
    numeroSerie?: StringNullableFilter<"Equipamento"> | string | null
    dataCompra?: DateTimeNullableFilter<"Equipamento"> | Date | string | null
    createdAt?: DateTimeFilter<"Equipamento"> | Date | string
    updatedAt?: DateTimeFilter<"Equipamento"> | Date | string
    servicos?: ServicoListRelationFilter
  }, "id">

  export type EquipamentoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numeroSerie?: SortOrderInput | SortOrder
    dataCompra?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipamentoCountOrderByAggregateInput
    _avg?: EquipamentoAvgOrderByAggregateInput
    _max?: EquipamentoMaxOrderByAggregateInput
    _min?: EquipamentoMinOrderByAggregateInput
    _sum?: EquipamentoSumOrderByAggregateInput
  }

  export type EquipamentoScalarWhereWithAggregatesInput = {
    AND?: EquipamentoScalarWhereWithAggregatesInput | EquipamentoScalarWhereWithAggregatesInput[]
    OR?: EquipamentoScalarWhereWithAggregatesInput[]
    NOT?: EquipamentoScalarWhereWithAggregatesInput | EquipamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipamento"> | number
    tipo?: StringWithAggregatesFilter<"Equipamento"> | string
    marca?: StringWithAggregatesFilter<"Equipamento"> | string
    modelo?: StringWithAggregatesFilter<"Equipamento"> | string
    numeroSerie?: StringNullableWithAggregatesFilter<"Equipamento"> | string | null
    dataCompra?: DateTimeNullableWithAggregatesFilter<"Equipamento"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Equipamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipamento"> | Date | string
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id?: StringFilter<"Servico"> | string
    clienteId?: IntFilter<"Servico"> | number
    equipamentoId?: IntFilter<"Servico"> | number
    tipo?: StringFilter<"Servico"> | string
    descricaoProblema?: StringFilter<"Servico"> | string
    estado?: StringFilter<"Servico"> | string
    dataEntrada?: DateTimeFilter<"Servico"> | Date | string
    dataDiagnostico?: DateTimeNullableFilter<"Servico"> | Date | string | null
    dataReparacao?: DateTimeNullableFilter<"Servico"> | Date | string | null
    tecnico?: StringNullableFilter<"Servico"> | string | null
    garantia?: BoolFilter<"Servico"> | boolean
    periodoGarantia?: StringNullableFilter<"Servico"> | string | null
    notas?: StringNullableFilter<"Servico"> | string | null
    valorTotal?: DecimalNullableFilter<"Servico"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    equipamento?: XOR<EquipamentoScalarRelationFilter, EquipamentoWhereInput>
    historico?: HistoricoListRelationFilter
    fotos?: FotoListRelationFilter
    pecas?: PecaListRelationFilter
    maoDeObra?: XOR<MaoDeObraNullableScalarRelationFilter, MaoDeObraWhereInput> | null
    deslocacao?: XOR<DeslocacaoNullableScalarRelationFilter, DeslocacaoWhereInput> | null
  }

  export type ServicoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    equipamentoId?: SortOrder
    tipo?: SortOrder
    descricaoProblema?: SortOrder
    estado?: SortOrder
    dataEntrada?: SortOrder
    dataDiagnostico?: SortOrderInput | SortOrder
    dataReparacao?: SortOrderInput | SortOrder
    tecnico?: SortOrderInput | SortOrder
    garantia?: SortOrder
    periodoGarantia?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    valorTotal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    equipamento?: EquipamentoOrderByWithRelationInput
    historico?: HistoricoOrderByRelationAggregateInput
    fotos?: FotoOrderByRelationAggregateInput
    pecas?: PecaOrderByRelationAggregateInput
    maoDeObra?: MaoDeObraOrderByWithRelationInput
    deslocacao?: DeslocacaoOrderByWithRelationInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    clienteId?: IntFilter<"Servico"> | number
    equipamentoId?: IntFilter<"Servico"> | number
    tipo?: StringFilter<"Servico"> | string
    descricaoProblema?: StringFilter<"Servico"> | string
    estado?: StringFilter<"Servico"> | string
    dataEntrada?: DateTimeFilter<"Servico"> | Date | string
    dataDiagnostico?: DateTimeNullableFilter<"Servico"> | Date | string | null
    dataReparacao?: DateTimeNullableFilter<"Servico"> | Date | string | null
    tecnico?: StringNullableFilter<"Servico"> | string | null
    garantia?: BoolFilter<"Servico"> | boolean
    periodoGarantia?: StringNullableFilter<"Servico"> | string | null
    notas?: StringNullableFilter<"Servico"> | string | null
    valorTotal?: DecimalNullableFilter<"Servico"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    equipamento?: XOR<EquipamentoScalarRelationFilter, EquipamentoWhereInput>
    historico?: HistoricoListRelationFilter
    fotos?: FotoListRelationFilter
    pecas?: PecaListRelationFilter
    maoDeObra?: XOR<MaoDeObraNullableScalarRelationFilter, MaoDeObraWhereInput> | null
    deslocacao?: XOR<DeslocacaoNullableScalarRelationFilter, DeslocacaoWhereInput> | null
  }, "id">

  export type ServicoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    equipamentoId?: SortOrder
    tipo?: SortOrder
    descricaoProblema?: SortOrder
    estado?: SortOrder
    dataEntrada?: SortOrder
    dataDiagnostico?: SortOrderInput | SortOrder
    dataReparacao?: SortOrderInput | SortOrder
    tecnico?: SortOrderInput | SortOrder
    garantia?: SortOrder
    periodoGarantia?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    valorTotal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servico"> | string
    clienteId?: IntWithAggregatesFilter<"Servico"> | number
    equipamentoId?: IntWithAggregatesFilter<"Servico"> | number
    tipo?: StringWithAggregatesFilter<"Servico"> | string
    descricaoProblema?: StringWithAggregatesFilter<"Servico"> | string
    estado?: StringWithAggregatesFilter<"Servico"> | string
    dataEntrada?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
    dataDiagnostico?: DateTimeNullableWithAggregatesFilter<"Servico"> | Date | string | null
    dataReparacao?: DateTimeNullableWithAggregatesFilter<"Servico"> | Date | string | null
    tecnico?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    garantia?: BoolWithAggregatesFilter<"Servico"> | boolean
    periodoGarantia?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    notas?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    valorTotal?: DecimalNullableWithAggregatesFilter<"Servico"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    id?: IntFilter<"Historico"> | number
    servicoId?: StringFilter<"Historico"> | string
    data?: DateTimeFilter<"Historico"> | Date | string
    hora?: StringFilter<"Historico"> | string
    acao?: StringFilter<"Historico"> | string
    autor?: StringFilter<"Historico"> | string
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type HistoricoOrderByWithRelationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    acao?: SortOrder
    autor?: SortOrder
    createdAt?: SortOrder
    servico?: ServicoOrderByWithRelationInput
  }

  export type HistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    servicoId?: StringFilter<"Historico"> | string
    data?: DateTimeFilter<"Historico"> | Date | string
    hora?: StringFilter<"Historico"> | string
    acao?: StringFilter<"Historico"> | string
    autor?: StringFilter<"Historico"> | string
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id">

  export type HistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    acao?: SortOrder
    autor?: SortOrder
    createdAt?: SortOrder
    _count?: HistoricoCountOrderByAggregateInput
    _avg?: HistoricoAvgOrderByAggregateInput
    _max?: HistoricoMaxOrderByAggregateInput
    _min?: HistoricoMinOrderByAggregateInput
    _sum?: HistoricoSumOrderByAggregateInput
  }

  export type HistoricoScalarWhereWithAggregatesInput = {
    AND?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    OR?: HistoricoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Historico"> | number
    servicoId?: StringWithAggregatesFilter<"Historico"> | string
    data?: DateTimeWithAggregatesFilter<"Historico"> | Date | string
    hora?: StringWithAggregatesFilter<"Historico"> | string
    acao?: StringWithAggregatesFilter<"Historico"> | string
    autor?: StringWithAggregatesFilter<"Historico"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Historico"> | Date | string
  }

  export type FotoWhereInput = {
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    id?: IntFilter<"Foto"> | number
    servicoId?: StringFilter<"Foto"> | string
    descricao?: StringFilter<"Foto"> | string
    url?: StringNullableFilter<"Foto"> | string | null
    createdAt?: DateTimeFilter<"Foto"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type FotoOrderByWithRelationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    descricao?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    servico?: ServicoOrderByWithRelationInput
  }

  export type FotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    servicoId?: StringFilter<"Foto"> | string
    descricao?: StringFilter<"Foto"> | string
    url?: StringNullableFilter<"Foto"> | string | null
    createdAt?: DateTimeFilter<"Foto"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id">

  export type FotoOrderByWithAggregationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    descricao?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FotoCountOrderByAggregateInput
    _avg?: FotoAvgOrderByAggregateInput
    _max?: FotoMaxOrderByAggregateInput
    _min?: FotoMinOrderByAggregateInput
    _sum?: FotoSumOrderByAggregateInput
  }

  export type FotoScalarWhereWithAggregatesInput = {
    AND?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    OR?: FotoScalarWhereWithAggregatesInput[]
    NOT?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Foto"> | number
    servicoId?: StringWithAggregatesFilter<"Foto"> | string
    descricao?: StringWithAggregatesFilter<"Foto"> | string
    url?: StringNullableWithAggregatesFilter<"Foto"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Foto"> | Date | string
  }

  export type PecaWhereInput = {
    AND?: PecaWhereInput | PecaWhereInput[]
    OR?: PecaWhereInput[]
    NOT?: PecaWhereInput | PecaWhereInput[]
    id?: IntFilter<"Peca"> | number
    servicoId?: StringFilter<"Peca"> | string
    nome?: StringFilter<"Peca"> | string
    quantidade?: IntFilter<"Peca"> | number
    precoUnitario?: DecimalFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Peca"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type PecaOrderByWithRelationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    servico?: ServicoOrderByWithRelationInput
  }

  export type PecaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PecaWhereInput | PecaWhereInput[]
    OR?: PecaWhereInput[]
    NOT?: PecaWhereInput | PecaWhereInput[]
    servicoId?: StringFilter<"Peca"> | string
    nome?: StringFilter<"Peca"> | string
    quantidade?: IntFilter<"Peca"> | number
    precoUnitario?: DecimalFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Peca"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id">

  export type PecaOrderByWithAggregationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: PecaCountOrderByAggregateInput
    _avg?: PecaAvgOrderByAggregateInput
    _max?: PecaMaxOrderByAggregateInput
    _min?: PecaMinOrderByAggregateInput
    _sum?: PecaSumOrderByAggregateInput
  }

  export type PecaScalarWhereWithAggregatesInput = {
    AND?: PecaScalarWhereWithAggregatesInput | PecaScalarWhereWithAggregatesInput[]
    OR?: PecaScalarWhereWithAggregatesInput[]
    NOT?: PecaScalarWhereWithAggregatesInput | PecaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Peca"> | number
    servicoId?: StringWithAggregatesFilter<"Peca"> | string
    nome?: StringWithAggregatesFilter<"Peca"> | string
    quantidade?: IntWithAggregatesFilter<"Peca"> | number
    precoUnitario?: DecimalWithAggregatesFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Peca"> | Date | string
  }

  export type MaoDeObraWhereInput = {
    AND?: MaoDeObraWhereInput | MaoDeObraWhereInput[]
    OR?: MaoDeObraWhereInput[]
    NOT?: MaoDeObraWhereInput | MaoDeObraWhereInput[]
    id?: IntFilter<"MaoDeObra"> | number
    servicoId?: StringFilter<"MaoDeObra"> | string
    horas?: DecimalFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MaoDeObra"> | Date | string
    updatedAt?: DateTimeFilter<"MaoDeObra"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type MaoDeObraOrderByWithRelationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    horas?: SortOrder
    valorHora?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servico?: ServicoOrderByWithRelationInput
  }

  export type MaoDeObraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    servicoId?: string
    AND?: MaoDeObraWhereInput | MaoDeObraWhereInput[]
    OR?: MaoDeObraWhereInput[]
    NOT?: MaoDeObraWhereInput | MaoDeObraWhereInput[]
    horas?: DecimalFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MaoDeObra"> | Date | string
    updatedAt?: DateTimeFilter<"MaoDeObra"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id" | "servicoId">

  export type MaoDeObraOrderByWithAggregationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    horas?: SortOrder
    valorHora?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaoDeObraCountOrderByAggregateInput
    _avg?: MaoDeObraAvgOrderByAggregateInput
    _max?: MaoDeObraMaxOrderByAggregateInput
    _min?: MaoDeObraMinOrderByAggregateInput
    _sum?: MaoDeObraSumOrderByAggregateInput
  }

  export type MaoDeObraScalarWhereWithAggregatesInput = {
    AND?: MaoDeObraScalarWhereWithAggregatesInput | MaoDeObraScalarWhereWithAggregatesInput[]
    OR?: MaoDeObraScalarWhereWithAggregatesInput[]
    NOT?: MaoDeObraScalarWhereWithAggregatesInput | MaoDeObraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaoDeObra"> | number
    servicoId?: StringWithAggregatesFilter<"MaoDeObra"> | string
    horas?: DecimalWithAggregatesFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalWithAggregatesFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"MaoDeObra"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"MaoDeObra"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaoDeObra"> | Date | string
  }

  export type DeslocacaoWhereInput = {
    AND?: DeslocacaoWhereInput | DeslocacaoWhereInput[]
    OR?: DeslocacaoWhereInput[]
    NOT?: DeslocacaoWhereInput | DeslocacaoWhereInput[]
    id?: IntFilter<"Deslocacao"> | number
    servicoId?: StringFilter<"Deslocacao"> | string
    km?: DecimalFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Deslocacao"> | Date | string
    updatedAt?: DateTimeFilter<"Deslocacao"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type DeslocacaoOrderByWithRelationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    km?: SortOrder
    valorKm?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servico?: ServicoOrderByWithRelationInput
  }

  export type DeslocacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    servicoId?: string
    AND?: DeslocacaoWhereInput | DeslocacaoWhereInput[]
    OR?: DeslocacaoWhereInput[]
    NOT?: DeslocacaoWhereInput | DeslocacaoWhereInput[]
    km?: DecimalFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Deslocacao"> | Date | string
    updatedAt?: DateTimeFilter<"Deslocacao"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id" | "servicoId">

  export type DeslocacaoOrderByWithAggregationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    km?: SortOrder
    valorKm?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeslocacaoCountOrderByAggregateInput
    _avg?: DeslocacaoAvgOrderByAggregateInput
    _max?: DeslocacaoMaxOrderByAggregateInput
    _min?: DeslocacaoMinOrderByAggregateInput
    _sum?: DeslocacaoSumOrderByAggregateInput
  }

  export type DeslocacaoScalarWhereWithAggregatesInput = {
    AND?: DeslocacaoScalarWhereWithAggregatesInput | DeslocacaoScalarWhereWithAggregatesInput[]
    OR?: DeslocacaoScalarWhereWithAggregatesInput[]
    NOT?: DeslocacaoScalarWhereWithAggregatesInput | DeslocacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deslocacao"> | number
    servicoId?: StringWithAggregatesFilter<"Deslocacao"> | string
    km?: DecimalWithAggregatesFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalWithAggregatesFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Deslocacao"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Deslocacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deslocacao"> | Date | string
  }

  export type ClienteCreateInput = {
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    morada?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    morada?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    morada?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    morada?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipamentoCreateInput = {
    tipo: string
    marca: string
    modelo: string
    numeroSerie?: string | null
    dataCompra?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoCreateNestedManyWithoutEquipamentoInput
  }

  export type EquipamentoUncheckedCreateInput = {
    id?: number
    tipo: string
    marca: string
    modelo: string
    numeroSerie?: string | null
    dataCompra?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutEquipamentoInput
  }

  export type EquipamentoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    dataCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutEquipamentoNestedInput
  }

  export type EquipamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    dataCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutEquipamentoNestedInput
  }

  export type EquipamentoCreateManyInput = {
    id?: number
    tipo: string
    marca: string
    modelo: string
    numeroSerie?: string | null
    dataCompra?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipamentoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    dataCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    dataCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutServicosInput
    equipamento: EquipamentoCreateNestedOneWithoutServicosInput
    historico?: HistoricoCreateNestedManyWithoutServicoInput
    fotos?: FotoCreateNestedManyWithoutServicoInput
    pecas?: PecaCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateInput = {
    id?: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUncheckedCreateNestedManyWithoutServicoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutServicoInput
    pecas?: PecaUncheckedCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraUncheckedCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    equipamento?: EquipamentoUpdateOneRequiredWithoutServicosNestedInput
    historico?: HistoricoUpdateManyWithoutServicoNestedInput
    fotos?: FotoUpdateManyWithoutServicoNestedInput
    pecas?: PecaUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUncheckedUpdateManyWithoutServicoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutServicoNestedInput
    pecas?: PecaUncheckedUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoCreateManyInput = {
    id?: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoCreateInput = {
    data?: Date | string
    hora: string
    acao: string
    autor: string
    createdAt?: Date | string
    servico: ServicoCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateInput = {
    id?: number
    servicoId: string
    data?: Date | string
    hora: string
    acao: string
    autor: string
    createdAt?: Date | string
  }

  export type HistoricoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoCreateManyInput = {
    id?: number
    servicoId: string
    data?: Date | string
    hora: string
    acao: string
    autor: string
    createdAt?: Date | string
  }

  export type HistoricoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoCreateInput = {
    descricao: string
    url?: string | null
    createdAt?: Date | string
    servico: ServicoCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateInput = {
    id?: number
    servicoId: string
    descricao: string
    url?: string | null
    createdAt?: Date | string
  }

  export type FotoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoCreateManyInput = {
    id?: number
    servicoId: string
    descricao: string
    url?: string | null
    createdAt?: Date | string
  }

  export type FotoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaCreateInput = {
    nome: string
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    servico: ServicoCreateNestedOneWithoutPecasInput
  }

  export type PecaUncheckedCreateInput = {
    id?: number
    servicoId: string
    nome: string
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PecaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutPecasNestedInput
  }

  export type PecaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaCreateManyInput = {
    id?: number
    servicoId: string
    nome: string
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PecaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaoDeObraCreateInput = {
    horas: Decimal | DecimalJsLike | number | string
    valorHora: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    servico: ServicoCreateNestedOneWithoutMaoDeObraInput
  }

  export type MaoDeObraUncheckedCreateInput = {
    id?: number
    servicoId: string
    horas: Decimal | DecimalJsLike | number | string
    valorHora: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaoDeObraUpdateInput = {
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutMaoDeObraNestedInput
  }

  export type MaoDeObraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaoDeObraCreateManyInput = {
    id?: number
    servicoId: string
    horas: Decimal | DecimalJsLike | number | string
    valorHora: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaoDeObraUpdateManyMutationInput = {
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaoDeObraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeslocacaoCreateInput = {
    km: Decimal | DecimalJsLike | number | string
    valorKm: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    servico: ServicoCreateNestedOneWithoutDeslocacaoInput
  }

  export type DeslocacaoUncheckedCreateInput = {
    id?: number
    servicoId: string
    km: Decimal | DecimalJsLike | number | string
    valorKm: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeslocacaoUpdateInput = {
    km?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutDeslocacaoNestedInput
  }

  export type DeslocacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    km?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeslocacaoCreateManyInput = {
    id?: number
    servicoId: string
    km: Decimal | DecimalJsLike | number | string
    valorKm: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeslocacaoUpdateManyMutationInput = {
    km?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeslocacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    km?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ServicoListRelationFilter = {
    every?: ServicoWhereInput
    some?: ServicoWhereInput
    none?: ServicoWhereInput
  }

  export type ServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    morada?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    morada?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    morada?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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

  export type EquipamentoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numeroSerie?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numeroSerie?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipamentoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numeroSerie?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipamentoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type EquipamentoScalarRelationFilter = {
    is?: EquipamentoWhereInput
    isNot?: EquipamentoWhereInput
  }

  export type HistoricoListRelationFilter = {
    every?: HistoricoWhereInput
    some?: HistoricoWhereInput
    none?: HistoricoWhereInput
  }

  export type FotoListRelationFilter = {
    every?: FotoWhereInput
    some?: FotoWhereInput
    none?: FotoWhereInput
  }

  export type PecaListRelationFilter = {
    every?: PecaWhereInput
    some?: PecaWhereInput
    none?: PecaWhereInput
  }

  export type MaoDeObraNullableScalarRelationFilter = {
    is?: MaoDeObraWhereInput | null
    isNot?: MaoDeObraWhereInput | null
  }

  export type DeslocacaoNullableScalarRelationFilter = {
    is?: DeslocacaoWhereInput | null
    isNot?: DeslocacaoWhereInput | null
  }

  export type HistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PecaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    equipamentoId?: SortOrder
    tipo?: SortOrder
    descricaoProblema?: SortOrder
    estado?: SortOrder
    dataEntrada?: SortOrder
    dataDiagnostico?: SortOrder
    dataReparacao?: SortOrder
    tecnico?: SortOrder
    garantia?: SortOrder
    periodoGarantia?: SortOrder
    notas?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    clienteId?: SortOrder
    equipamentoId?: SortOrder
    valorTotal?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    equipamentoId?: SortOrder
    tipo?: SortOrder
    descricaoProblema?: SortOrder
    estado?: SortOrder
    dataEntrada?: SortOrder
    dataDiagnostico?: SortOrder
    dataReparacao?: SortOrder
    tecnico?: SortOrder
    garantia?: SortOrder
    periodoGarantia?: SortOrder
    notas?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    equipamentoId?: SortOrder
    tipo?: SortOrder
    descricaoProblema?: SortOrder
    estado?: SortOrder
    dataEntrada?: SortOrder
    dataDiagnostico?: SortOrder
    dataReparacao?: SortOrder
    tecnico?: SortOrder
    garantia?: SortOrder
    periodoGarantia?: SortOrder
    notas?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    clienteId?: SortOrder
    equipamentoId?: SortOrder
    valorTotal?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ServicoScalarRelationFilter = {
    is?: ServicoWhereInput
    isNot?: ServicoWhereInput
  }

  export type HistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    acao?: SortOrder
    autor?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoricoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    acao?: SortOrder
    autor?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    acao?: SortOrder
    autor?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoricoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FotoCountOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FotoMaxOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoMinOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PecaCountOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PecaAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    total?: SortOrder
  }

  export type PecaMaxOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PecaMinOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PecaSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    total?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type MaoDeObraCountOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    horas?: SortOrder
    valorHora?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaoDeObraAvgOrderByAggregateInput = {
    id?: SortOrder
    horas?: SortOrder
    valorHora?: SortOrder
    total?: SortOrder
  }

  export type MaoDeObraMaxOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    horas?: SortOrder
    valorHora?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaoDeObraMinOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    horas?: SortOrder
    valorHora?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaoDeObraSumOrderByAggregateInput = {
    id?: SortOrder
    horas?: SortOrder
    valorHora?: SortOrder
    total?: SortOrder
  }

  export type DeslocacaoCountOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    km?: SortOrder
    valorKm?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeslocacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    km?: SortOrder
    valorKm?: SortOrder
    total?: SortOrder
  }

  export type DeslocacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    km?: SortOrder
    valorKm?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeslocacaoMinOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    km?: SortOrder
    valorKm?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeslocacaoSumOrderByAggregateInput = {
    id?: SortOrder
    km?: SortOrder
    valorKm?: SortOrder
    total?: SortOrder
  }

  export type ServicoCreateNestedManyWithoutClienteInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServicoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutClienteInput | ServicoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutClienteInput | ServicoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutClienteInput | ServicoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServicoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutClienteInput | ServicoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutClienteInput | ServicoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutClienteInput | ServicoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ServicoCreateNestedManyWithoutEquipamentoInput = {
    create?: XOR<ServicoCreateWithoutEquipamentoInput, ServicoUncheckedCreateWithoutEquipamentoInput> | ServicoCreateWithoutEquipamentoInput[] | ServicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutEquipamentoInput | ServicoCreateOrConnectWithoutEquipamentoInput[]
    createMany?: ServicoCreateManyEquipamentoInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutEquipamentoInput = {
    create?: XOR<ServicoCreateWithoutEquipamentoInput, ServicoUncheckedCreateWithoutEquipamentoInput> | ServicoCreateWithoutEquipamentoInput[] | ServicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutEquipamentoInput | ServicoCreateOrConnectWithoutEquipamentoInput[]
    createMany?: ServicoCreateManyEquipamentoInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServicoUpdateManyWithoutEquipamentoNestedInput = {
    create?: XOR<ServicoCreateWithoutEquipamentoInput, ServicoUncheckedCreateWithoutEquipamentoInput> | ServicoCreateWithoutEquipamentoInput[] | ServicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutEquipamentoInput | ServicoCreateOrConnectWithoutEquipamentoInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutEquipamentoInput | ServicoUpsertWithWhereUniqueWithoutEquipamentoInput[]
    createMany?: ServicoCreateManyEquipamentoInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutEquipamentoInput | ServicoUpdateWithWhereUniqueWithoutEquipamentoInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutEquipamentoInput | ServicoUpdateManyWithWhereWithoutEquipamentoInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutEquipamentoNestedInput = {
    create?: XOR<ServicoCreateWithoutEquipamentoInput, ServicoUncheckedCreateWithoutEquipamentoInput> | ServicoCreateWithoutEquipamentoInput[] | ServicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutEquipamentoInput | ServicoCreateOrConnectWithoutEquipamentoInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutEquipamentoInput | ServicoUpsertWithWhereUniqueWithoutEquipamentoInput[]
    createMany?: ServicoCreateManyEquipamentoInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutEquipamentoInput | ServicoUpdateWithWhereUniqueWithoutEquipamentoInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutEquipamentoInput | ServicoUpdateManyWithWhereWithoutEquipamentoInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutServicosInput = {
    create?: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutServicosInput
    connect?: ClienteWhereUniqueInput
  }

  export type EquipamentoCreateNestedOneWithoutServicosInput = {
    create?: XOR<EquipamentoCreateWithoutServicosInput, EquipamentoUncheckedCreateWithoutServicosInput>
    connectOrCreate?: EquipamentoCreateOrConnectWithoutServicosInput
    connect?: EquipamentoWhereUniqueInput
  }

  export type HistoricoCreateNestedManyWithoutServicoInput = {
    create?: XOR<HistoricoCreateWithoutServicoInput, HistoricoUncheckedCreateWithoutServicoInput> | HistoricoCreateWithoutServicoInput[] | HistoricoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutServicoInput | HistoricoCreateOrConnectWithoutServicoInput[]
    createMany?: HistoricoCreateManyServicoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type FotoCreateNestedManyWithoutServicoInput = {
    create?: XOR<FotoCreateWithoutServicoInput, FotoUncheckedCreateWithoutServicoInput> | FotoCreateWithoutServicoInput[] | FotoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutServicoInput | FotoCreateOrConnectWithoutServicoInput[]
    createMany?: FotoCreateManyServicoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type PecaCreateNestedManyWithoutServicoInput = {
    create?: XOR<PecaCreateWithoutServicoInput, PecaUncheckedCreateWithoutServicoInput> | PecaCreateWithoutServicoInput[] | PecaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicoInput | PecaCreateOrConnectWithoutServicoInput[]
    createMany?: PecaCreateManyServicoInputEnvelope
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
  }

  export type MaoDeObraCreateNestedOneWithoutServicoInput = {
    create?: XOR<MaoDeObraCreateWithoutServicoInput, MaoDeObraUncheckedCreateWithoutServicoInput>
    connectOrCreate?: MaoDeObraCreateOrConnectWithoutServicoInput
    connect?: MaoDeObraWhereUniqueInput
  }

  export type DeslocacaoCreateNestedOneWithoutServicoInput = {
    create?: XOR<DeslocacaoCreateWithoutServicoInput, DeslocacaoUncheckedCreateWithoutServicoInput>
    connectOrCreate?: DeslocacaoCreateOrConnectWithoutServicoInput
    connect?: DeslocacaoWhereUniqueInput
  }

  export type HistoricoUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<HistoricoCreateWithoutServicoInput, HistoricoUncheckedCreateWithoutServicoInput> | HistoricoCreateWithoutServicoInput[] | HistoricoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutServicoInput | HistoricoCreateOrConnectWithoutServicoInput[]
    createMany?: HistoricoCreateManyServicoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<FotoCreateWithoutServicoInput, FotoUncheckedCreateWithoutServicoInput> | FotoCreateWithoutServicoInput[] | FotoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutServicoInput | FotoCreateOrConnectWithoutServicoInput[]
    createMany?: FotoCreateManyServicoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type PecaUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<PecaCreateWithoutServicoInput, PecaUncheckedCreateWithoutServicoInput> | PecaCreateWithoutServicoInput[] | PecaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicoInput | PecaCreateOrConnectWithoutServicoInput[]
    createMany?: PecaCreateManyServicoInputEnvelope
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
  }

  export type MaoDeObraUncheckedCreateNestedOneWithoutServicoInput = {
    create?: XOR<MaoDeObraCreateWithoutServicoInput, MaoDeObraUncheckedCreateWithoutServicoInput>
    connectOrCreate?: MaoDeObraCreateOrConnectWithoutServicoInput
    connect?: MaoDeObraWhereUniqueInput
  }

  export type DeslocacaoUncheckedCreateNestedOneWithoutServicoInput = {
    create?: XOR<DeslocacaoCreateWithoutServicoInput, DeslocacaoUncheckedCreateWithoutServicoInput>
    connectOrCreate?: DeslocacaoCreateOrConnectWithoutServicoInput
    connect?: DeslocacaoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClienteUpdateOneRequiredWithoutServicosNestedInput = {
    create?: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutServicosInput
    upsert?: ClienteUpsertWithoutServicosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutServicosInput, ClienteUpdateWithoutServicosInput>, ClienteUncheckedUpdateWithoutServicosInput>
  }

  export type EquipamentoUpdateOneRequiredWithoutServicosNestedInput = {
    create?: XOR<EquipamentoCreateWithoutServicosInput, EquipamentoUncheckedCreateWithoutServicosInput>
    connectOrCreate?: EquipamentoCreateOrConnectWithoutServicosInput
    upsert?: EquipamentoUpsertWithoutServicosInput
    connect?: EquipamentoWhereUniqueInput
    update?: XOR<XOR<EquipamentoUpdateToOneWithWhereWithoutServicosInput, EquipamentoUpdateWithoutServicosInput>, EquipamentoUncheckedUpdateWithoutServicosInput>
  }

  export type HistoricoUpdateManyWithoutServicoNestedInput = {
    create?: XOR<HistoricoCreateWithoutServicoInput, HistoricoUncheckedCreateWithoutServicoInput> | HistoricoCreateWithoutServicoInput[] | HistoricoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutServicoInput | HistoricoCreateOrConnectWithoutServicoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutServicoInput | HistoricoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: HistoricoCreateManyServicoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutServicoInput | HistoricoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutServicoInput | HistoricoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type FotoUpdateManyWithoutServicoNestedInput = {
    create?: XOR<FotoCreateWithoutServicoInput, FotoUncheckedCreateWithoutServicoInput> | FotoCreateWithoutServicoInput[] | FotoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutServicoInput | FotoCreateOrConnectWithoutServicoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutServicoInput | FotoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: FotoCreateManyServicoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutServicoInput | FotoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutServicoInput | FotoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type PecaUpdateManyWithoutServicoNestedInput = {
    create?: XOR<PecaCreateWithoutServicoInput, PecaUncheckedCreateWithoutServicoInput> | PecaCreateWithoutServicoInput[] | PecaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicoInput | PecaCreateOrConnectWithoutServicoInput[]
    upsert?: PecaUpsertWithWhereUniqueWithoutServicoInput | PecaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: PecaCreateManyServicoInputEnvelope
    set?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    disconnect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    delete?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    update?: PecaUpdateWithWhereUniqueWithoutServicoInput | PecaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: PecaUpdateManyWithWhereWithoutServicoInput | PecaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: PecaScalarWhereInput | PecaScalarWhereInput[]
  }

  export type MaoDeObraUpdateOneWithoutServicoNestedInput = {
    create?: XOR<MaoDeObraCreateWithoutServicoInput, MaoDeObraUncheckedCreateWithoutServicoInput>
    connectOrCreate?: MaoDeObraCreateOrConnectWithoutServicoInput
    upsert?: MaoDeObraUpsertWithoutServicoInput
    disconnect?: MaoDeObraWhereInput | boolean
    delete?: MaoDeObraWhereInput | boolean
    connect?: MaoDeObraWhereUniqueInput
    update?: XOR<XOR<MaoDeObraUpdateToOneWithWhereWithoutServicoInput, MaoDeObraUpdateWithoutServicoInput>, MaoDeObraUncheckedUpdateWithoutServicoInput>
  }

  export type DeslocacaoUpdateOneWithoutServicoNestedInput = {
    create?: XOR<DeslocacaoCreateWithoutServicoInput, DeslocacaoUncheckedCreateWithoutServicoInput>
    connectOrCreate?: DeslocacaoCreateOrConnectWithoutServicoInput
    upsert?: DeslocacaoUpsertWithoutServicoInput
    disconnect?: DeslocacaoWhereInput | boolean
    delete?: DeslocacaoWhereInput | boolean
    connect?: DeslocacaoWhereUniqueInput
    update?: XOR<XOR<DeslocacaoUpdateToOneWithWhereWithoutServicoInput, DeslocacaoUpdateWithoutServicoInput>, DeslocacaoUncheckedUpdateWithoutServicoInput>
  }

  export type HistoricoUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<HistoricoCreateWithoutServicoInput, HistoricoUncheckedCreateWithoutServicoInput> | HistoricoCreateWithoutServicoInput[] | HistoricoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutServicoInput | HistoricoCreateOrConnectWithoutServicoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutServicoInput | HistoricoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: HistoricoCreateManyServicoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutServicoInput | HistoricoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutServicoInput | HistoricoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<FotoCreateWithoutServicoInput, FotoUncheckedCreateWithoutServicoInput> | FotoCreateWithoutServicoInput[] | FotoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutServicoInput | FotoCreateOrConnectWithoutServicoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutServicoInput | FotoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: FotoCreateManyServicoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutServicoInput | FotoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutServicoInput | FotoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type PecaUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<PecaCreateWithoutServicoInput, PecaUncheckedCreateWithoutServicoInput> | PecaCreateWithoutServicoInput[] | PecaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicoInput | PecaCreateOrConnectWithoutServicoInput[]
    upsert?: PecaUpsertWithWhereUniqueWithoutServicoInput | PecaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: PecaCreateManyServicoInputEnvelope
    set?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    disconnect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    delete?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    update?: PecaUpdateWithWhereUniqueWithoutServicoInput | PecaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: PecaUpdateManyWithWhereWithoutServicoInput | PecaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: PecaScalarWhereInput | PecaScalarWhereInput[]
  }

  export type MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput = {
    create?: XOR<MaoDeObraCreateWithoutServicoInput, MaoDeObraUncheckedCreateWithoutServicoInput>
    connectOrCreate?: MaoDeObraCreateOrConnectWithoutServicoInput
    upsert?: MaoDeObraUpsertWithoutServicoInput
    disconnect?: MaoDeObraWhereInput | boolean
    delete?: MaoDeObraWhereInput | boolean
    connect?: MaoDeObraWhereUniqueInput
    update?: XOR<XOR<MaoDeObraUpdateToOneWithWhereWithoutServicoInput, MaoDeObraUpdateWithoutServicoInput>, MaoDeObraUncheckedUpdateWithoutServicoInput>
  }

  export type DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput = {
    create?: XOR<DeslocacaoCreateWithoutServicoInput, DeslocacaoUncheckedCreateWithoutServicoInput>
    connectOrCreate?: DeslocacaoCreateOrConnectWithoutServicoInput
    upsert?: DeslocacaoUpsertWithoutServicoInput
    disconnect?: DeslocacaoWhereInput | boolean
    delete?: DeslocacaoWhereInput | boolean
    connect?: DeslocacaoWhereUniqueInput
    update?: XOR<XOR<DeslocacaoUpdateToOneWithWhereWithoutServicoInput, DeslocacaoUpdateWithoutServicoInput>, DeslocacaoUncheckedUpdateWithoutServicoInput>
  }

  export type ServicoCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<ServicoCreateWithoutHistoricoInput, ServicoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutHistoricoInput
    connect?: ServicoWhereUniqueInput
  }

  export type ServicoUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<ServicoCreateWithoutHistoricoInput, ServicoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutHistoricoInput
    upsert?: ServicoUpsertWithoutHistoricoInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutHistoricoInput, ServicoUpdateWithoutHistoricoInput>, ServicoUncheckedUpdateWithoutHistoricoInput>
  }

  export type ServicoCreateNestedOneWithoutFotosInput = {
    create?: XOR<ServicoCreateWithoutFotosInput, ServicoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutFotosInput
    connect?: ServicoWhereUniqueInput
  }

  export type ServicoUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<ServicoCreateWithoutFotosInput, ServicoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutFotosInput
    upsert?: ServicoUpsertWithoutFotosInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutFotosInput, ServicoUpdateWithoutFotosInput>, ServicoUncheckedUpdateWithoutFotosInput>
  }

  export type ServicoCreateNestedOneWithoutPecasInput = {
    create?: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutPecasInput
    connect?: ServicoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ServicoUpdateOneRequiredWithoutPecasNestedInput = {
    create?: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutPecasInput
    upsert?: ServicoUpsertWithoutPecasInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutPecasInput, ServicoUpdateWithoutPecasInput>, ServicoUncheckedUpdateWithoutPecasInput>
  }

  export type ServicoCreateNestedOneWithoutMaoDeObraInput = {
    create?: XOR<ServicoCreateWithoutMaoDeObraInput, ServicoUncheckedCreateWithoutMaoDeObraInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutMaoDeObraInput
    connect?: ServicoWhereUniqueInput
  }

  export type ServicoUpdateOneRequiredWithoutMaoDeObraNestedInput = {
    create?: XOR<ServicoCreateWithoutMaoDeObraInput, ServicoUncheckedCreateWithoutMaoDeObraInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutMaoDeObraInput
    upsert?: ServicoUpsertWithoutMaoDeObraInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutMaoDeObraInput, ServicoUpdateWithoutMaoDeObraInput>, ServicoUncheckedUpdateWithoutMaoDeObraInput>
  }

  export type ServicoCreateNestedOneWithoutDeslocacaoInput = {
    create?: XOR<ServicoCreateWithoutDeslocacaoInput, ServicoUncheckedCreateWithoutDeslocacaoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutDeslocacaoInput
    connect?: ServicoWhereUniqueInput
  }

  export type ServicoUpdateOneRequiredWithoutDeslocacaoNestedInput = {
    create?: XOR<ServicoCreateWithoutDeslocacaoInput, ServicoUncheckedCreateWithoutDeslocacaoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutDeslocacaoInput
    upsert?: ServicoUpsertWithoutDeslocacaoInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutDeslocacaoInput, ServicoUpdateWithoutDeslocacaoInput>, ServicoUncheckedUpdateWithoutDeslocacaoInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type ServicoCreateWithoutClienteInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipamento: EquipamentoCreateNestedOneWithoutServicosInput
    historico?: HistoricoCreateNestedManyWithoutServicoInput
    fotos?: FotoCreateNestedManyWithoutServicoInput
    pecas?: PecaCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutClienteInput = {
    id?: string
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUncheckedCreateNestedManyWithoutServicoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutServicoInput
    pecas?: PecaUncheckedCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraUncheckedCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutClienteInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput>
  }

  export type ServicoCreateManyClienteInputEnvelope = {
    data: ServicoCreateManyClienteInput | ServicoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ServicoUpsertWithWhereUniqueWithoutClienteInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutClienteInput, ServicoUncheckedUpdateWithoutClienteInput>
    create: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutClienteInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutClienteInput, ServicoUncheckedUpdateWithoutClienteInput>
  }

  export type ServicoUpdateManyWithWhereWithoutClienteInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ServicoScalarWhereInput = {
    AND?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    OR?: ServicoScalarWhereInput[]
    NOT?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    id?: StringFilter<"Servico"> | string
    clienteId?: IntFilter<"Servico"> | number
    equipamentoId?: IntFilter<"Servico"> | number
    tipo?: StringFilter<"Servico"> | string
    descricaoProblema?: StringFilter<"Servico"> | string
    estado?: StringFilter<"Servico"> | string
    dataEntrada?: DateTimeFilter<"Servico"> | Date | string
    dataDiagnostico?: DateTimeNullableFilter<"Servico"> | Date | string | null
    dataReparacao?: DateTimeNullableFilter<"Servico"> | Date | string | null
    tecnico?: StringNullableFilter<"Servico"> | string | null
    garantia?: BoolFilter<"Servico"> | boolean
    periodoGarantia?: StringNullableFilter<"Servico"> | string | null
    notas?: StringNullableFilter<"Servico"> | string | null
    valorTotal?: DecimalNullableFilter<"Servico"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
  }

  export type ServicoCreateWithoutEquipamentoInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutServicosInput
    historico?: HistoricoCreateNestedManyWithoutServicoInput
    fotos?: FotoCreateNestedManyWithoutServicoInput
    pecas?: PecaCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutEquipamentoInput = {
    id?: string
    clienteId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUncheckedCreateNestedManyWithoutServicoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutServicoInput
    pecas?: PecaUncheckedCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraUncheckedCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutEquipamentoInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutEquipamentoInput, ServicoUncheckedCreateWithoutEquipamentoInput>
  }

  export type ServicoCreateManyEquipamentoInputEnvelope = {
    data: ServicoCreateManyEquipamentoInput | ServicoCreateManyEquipamentoInput[]
    skipDuplicates?: boolean
  }

  export type ServicoUpsertWithWhereUniqueWithoutEquipamentoInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutEquipamentoInput, ServicoUncheckedUpdateWithoutEquipamentoInput>
    create: XOR<ServicoCreateWithoutEquipamentoInput, ServicoUncheckedCreateWithoutEquipamentoInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutEquipamentoInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutEquipamentoInput, ServicoUncheckedUpdateWithoutEquipamentoInput>
  }

  export type ServicoUpdateManyWithWhereWithoutEquipamentoInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutEquipamentoInput>
  }

  export type ClienteCreateWithoutServicosInput = {
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutServicosInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutServicosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
  }

  export type EquipamentoCreateWithoutServicosInput = {
    tipo: string
    marca: string
    modelo: string
    numeroSerie?: string | null
    dataCompra?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipamentoUncheckedCreateWithoutServicosInput = {
    id?: number
    tipo: string
    marca: string
    modelo: string
    numeroSerie?: string | null
    dataCompra?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipamentoCreateOrConnectWithoutServicosInput = {
    where: EquipamentoWhereUniqueInput
    create: XOR<EquipamentoCreateWithoutServicosInput, EquipamentoUncheckedCreateWithoutServicosInput>
  }

  export type HistoricoCreateWithoutServicoInput = {
    data?: Date | string
    hora: string
    acao: string
    autor: string
    createdAt?: Date | string
  }

  export type HistoricoUncheckedCreateWithoutServicoInput = {
    id?: number
    data?: Date | string
    hora: string
    acao: string
    autor: string
    createdAt?: Date | string
  }

  export type HistoricoCreateOrConnectWithoutServicoInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutServicoInput, HistoricoUncheckedCreateWithoutServicoInput>
  }

  export type HistoricoCreateManyServicoInputEnvelope = {
    data: HistoricoCreateManyServicoInput | HistoricoCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type FotoCreateWithoutServicoInput = {
    descricao: string
    url?: string | null
    createdAt?: Date | string
  }

  export type FotoUncheckedCreateWithoutServicoInput = {
    id?: number
    descricao: string
    url?: string | null
    createdAt?: Date | string
  }

  export type FotoCreateOrConnectWithoutServicoInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutServicoInput, FotoUncheckedCreateWithoutServicoInput>
  }

  export type FotoCreateManyServicoInputEnvelope = {
    data: FotoCreateManyServicoInput | FotoCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type PecaCreateWithoutServicoInput = {
    nome: string
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PecaUncheckedCreateWithoutServicoInput = {
    id?: number
    nome: string
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PecaCreateOrConnectWithoutServicoInput = {
    where: PecaWhereUniqueInput
    create: XOR<PecaCreateWithoutServicoInput, PecaUncheckedCreateWithoutServicoInput>
  }

  export type PecaCreateManyServicoInputEnvelope = {
    data: PecaCreateManyServicoInput | PecaCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type MaoDeObraCreateWithoutServicoInput = {
    horas: Decimal | DecimalJsLike | number | string
    valorHora: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaoDeObraUncheckedCreateWithoutServicoInput = {
    id?: number
    horas: Decimal | DecimalJsLike | number | string
    valorHora: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaoDeObraCreateOrConnectWithoutServicoInput = {
    where: MaoDeObraWhereUniqueInput
    create: XOR<MaoDeObraCreateWithoutServicoInput, MaoDeObraUncheckedCreateWithoutServicoInput>
  }

  export type DeslocacaoCreateWithoutServicoInput = {
    km: Decimal | DecimalJsLike | number | string
    valorKm: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeslocacaoUncheckedCreateWithoutServicoInput = {
    id?: number
    km: Decimal | DecimalJsLike | number | string
    valorKm: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeslocacaoCreateOrConnectWithoutServicoInput = {
    where: DeslocacaoWhereUniqueInput
    create: XOR<DeslocacaoCreateWithoutServicoInput, DeslocacaoUncheckedCreateWithoutServicoInput>
  }

  export type ClienteUpsertWithoutServicosInput = {
    update: XOR<ClienteUpdateWithoutServicosInput, ClienteUncheckedUpdateWithoutServicosInput>
    create: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutServicosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutServicosInput, ClienteUncheckedUpdateWithoutServicosInput>
  }

  export type ClienteUpdateWithoutServicosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    morada?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutServicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    morada?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipamentoUpsertWithoutServicosInput = {
    update: XOR<EquipamentoUpdateWithoutServicosInput, EquipamentoUncheckedUpdateWithoutServicosInput>
    create: XOR<EquipamentoCreateWithoutServicosInput, EquipamentoUncheckedCreateWithoutServicosInput>
    where?: EquipamentoWhereInput
  }

  export type EquipamentoUpdateToOneWithWhereWithoutServicosInput = {
    where?: EquipamentoWhereInput
    data: XOR<EquipamentoUpdateWithoutServicosInput, EquipamentoUncheckedUpdateWithoutServicosInput>
  }

  export type EquipamentoUpdateWithoutServicosInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    dataCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipamentoUncheckedUpdateWithoutServicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    dataCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUpsertWithWhereUniqueWithoutServicoInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutServicoInput, HistoricoUncheckedUpdateWithoutServicoInput>
    create: XOR<HistoricoCreateWithoutServicoInput, HistoricoUncheckedCreateWithoutServicoInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutServicoInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutServicoInput, HistoricoUncheckedUpdateWithoutServicoInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutServicoInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutServicoInput>
  }

  export type HistoricoScalarWhereInput = {
    AND?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    OR?: HistoricoScalarWhereInput[]
    NOT?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    id?: IntFilter<"Historico"> | number
    servicoId?: StringFilter<"Historico"> | string
    data?: DateTimeFilter<"Historico"> | Date | string
    hora?: StringFilter<"Historico"> | string
    acao?: StringFilter<"Historico"> | string
    autor?: StringFilter<"Historico"> | string
    createdAt?: DateTimeFilter<"Historico"> | Date | string
  }

  export type FotoUpsertWithWhereUniqueWithoutServicoInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutServicoInput, FotoUncheckedUpdateWithoutServicoInput>
    create: XOR<FotoCreateWithoutServicoInput, FotoUncheckedCreateWithoutServicoInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutServicoInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutServicoInput, FotoUncheckedUpdateWithoutServicoInput>
  }

  export type FotoUpdateManyWithWhereWithoutServicoInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutServicoInput>
  }

  export type FotoScalarWhereInput = {
    AND?: FotoScalarWhereInput | FotoScalarWhereInput[]
    OR?: FotoScalarWhereInput[]
    NOT?: FotoScalarWhereInput | FotoScalarWhereInput[]
    id?: IntFilter<"Foto"> | number
    servicoId?: StringFilter<"Foto"> | string
    descricao?: StringFilter<"Foto"> | string
    url?: StringNullableFilter<"Foto"> | string | null
    createdAt?: DateTimeFilter<"Foto"> | Date | string
  }

  export type PecaUpsertWithWhereUniqueWithoutServicoInput = {
    where: PecaWhereUniqueInput
    update: XOR<PecaUpdateWithoutServicoInput, PecaUncheckedUpdateWithoutServicoInput>
    create: XOR<PecaCreateWithoutServicoInput, PecaUncheckedCreateWithoutServicoInput>
  }

  export type PecaUpdateWithWhereUniqueWithoutServicoInput = {
    where: PecaWhereUniqueInput
    data: XOR<PecaUpdateWithoutServicoInput, PecaUncheckedUpdateWithoutServicoInput>
  }

  export type PecaUpdateManyWithWhereWithoutServicoInput = {
    where: PecaScalarWhereInput
    data: XOR<PecaUpdateManyMutationInput, PecaUncheckedUpdateManyWithoutServicoInput>
  }

  export type PecaScalarWhereInput = {
    AND?: PecaScalarWhereInput | PecaScalarWhereInput[]
    OR?: PecaScalarWhereInput[]
    NOT?: PecaScalarWhereInput | PecaScalarWhereInput[]
    id?: IntFilter<"Peca"> | number
    servicoId?: StringFilter<"Peca"> | string
    nome?: StringFilter<"Peca"> | string
    quantidade?: IntFilter<"Peca"> | number
    precoUnitario?: DecimalFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Peca"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Peca"> | Date | string
  }

  export type MaoDeObraUpsertWithoutServicoInput = {
    update: XOR<MaoDeObraUpdateWithoutServicoInput, MaoDeObraUncheckedUpdateWithoutServicoInput>
    create: XOR<MaoDeObraCreateWithoutServicoInput, MaoDeObraUncheckedCreateWithoutServicoInput>
    where?: MaoDeObraWhereInput
  }

  export type MaoDeObraUpdateToOneWithWhereWithoutServicoInput = {
    where?: MaoDeObraWhereInput
    data: XOR<MaoDeObraUpdateWithoutServicoInput, MaoDeObraUncheckedUpdateWithoutServicoInput>
  }

  export type MaoDeObraUpdateWithoutServicoInput = {
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaoDeObraUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorHora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeslocacaoUpsertWithoutServicoInput = {
    update: XOR<DeslocacaoUpdateWithoutServicoInput, DeslocacaoUncheckedUpdateWithoutServicoInput>
    create: XOR<DeslocacaoCreateWithoutServicoInput, DeslocacaoUncheckedCreateWithoutServicoInput>
    where?: DeslocacaoWhereInput
  }

  export type DeslocacaoUpdateToOneWithWhereWithoutServicoInput = {
    where?: DeslocacaoWhereInput
    data: XOR<DeslocacaoUpdateWithoutServicoInput, DeslocacaoUncheckedUpdateWithoutServicoInput>
  }

  export type DeslocacaoUpdateWithoutServicoInput = {
    km?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeslocacaoUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    km?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateWithoutHistoricoInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutServicosInput
    equipamento: EquipamentoCreateNestedOneWithoutServicosInput
    fotos?: FotoCreateNestedManyWithoutServicoInput
    pecas?: PecaCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutHistoricoInput = {
    id?: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fotos?: FotoUncheckedCreateNestedManyWithoutServicoInput
    pecas?: PecaUncheckedCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraUncheckedCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutHistoricoInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutHistoricoInput, ServicoUncheckedCreateWithoutHistoricoInput>
  }

  export type ServicoUpsertWithoutHistoricoInput = {
    update: XOR<ServicoUpdateWithoutHistoricoInput, ServicoUncheckedUpdateWithoutHistoricoInput>
    create: XOR<ServicoCreateWithoutHistoricoInput, ServicoUncheckedCreateWithoutHistoricoInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutHistoricoInput, ServicoUncheckedUpdateWithoutHistoricoInput>
  }

  export type ServicoUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    equipamento?: EquipamentoUpdateOneRequiredWithoutServicosNestedInput
    fotos?: FotoUpdateManyWithoutServicoNestedInput
    pecas?: PecaUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoUncheckedUpdateManyWithoutServicoNestedInput
    pecas?: PecaUncheckedUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoCreateWithoutFotosInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutServicosInput
    equipamento: EquipamentoCreateNestedOneWithoutServicosInput
    historico?: HistoricoCreateNestedManyWithoutServicoInput
    pecas?: PecaCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutFotosInput = {
    id?: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUncheckedCreateNestedManyWithoutServicoInput
    pecas?: PecaUncheckedCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraUncheckedCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutFotosInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutFotosInput, ServicoUncheckedCreateWithoutFotosInput>
  }

  export type ServicoUpsertWithoutFotosInput = {
    update: XOR<ServicoUpdateWithoutFotosInput, ServicoUncheckedUpdateWithoutFotosInput>
    create: XOR<ServicoCreateWithoutFotosInput, ServicoUncheckedCreateWithoutFotosInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutFotosInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutFotosInput, ServicoUncheckedUpdateWithoutFotosInput>
  }

  export type ServicoUpdateWithoutFotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    equipamento?: EquipamentoUpdateOneRequiredWithoutServicosNestedInput
    historico?: HistoricoUpdateManyWithoutServicoNestedInput
    pecas?: PecaUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutFotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUncheckedUpdateManyWithoutServicoNestedInput
    pecas?: PecaUncheckedUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoCreateWithoutPecasInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutServicosInput
    equipamento: EquipamentoCreateNestedOneWithoutServicosInput
    historico?: HistoricoCreateNestedManyWithoutServicoInput
    fotos?: FotoCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutPecasInput = {
    id?: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUncheckedCreateNestedManyWithoutServicoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraUncheckedCreateNestedOneWithoutServicoInput
    deslocacao?: DeslocacaoUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutPecasInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput>
  }

  export type ServicoUpsertWithoutPecasInput = {
    update: XOR<ServicoUpdateWithoutPecasInput, ServicoUncheckedUpdateWithoutPecasInput>
    create: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutPecasInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutPecasInput, ServicoUncheckedUpdateWithoutPecasInput>
  }

  export type ServicoUpdateWithoutPecasInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    equipamento?: EquipamentoUpdateOneRequiredWithoutServicosNestedInput
    historico?: HistoricoUpdateManyWithoutServicoNestedInput
    fotos?: FotoUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutPecasInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUncheckedUpdateManyWithoutServicoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoCreateWithoutMaoDeObraInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutServicosInput
    equipamento: EquipamentoCreateNestedOneWithoutServicosInput
    historico?: HistoricoCreateNestedManyWithoutServicoInput
    fotos?: FotoCreateNestedManyWithoutServicoInput
    pecas?: PecaCreateNestedManyWithoutServicoInput
    deslocacao?: DeslocacaoCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutMaoDeObraInput = {
    id?: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUncheckedCreateNestedManyWithoutServicoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutServicoInput
    pecas?: PecaUncheckedCreateNestedManyWithoutServicoInput
    deslocacao?: DeslocacaoUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutMaoDeObraInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutMaoDeObraInput, ServicoUncheckedCreateWithoutMaoDeObraInput>
  }

  export type ServicoUpsertWithoutMaoDeObraInput = {
    update: XOR<ServicoUpdateWithoutMaoDeObraInput, ServicoUncheckedUpdateWithoutMaoDeObraInput>
    create: XOR<ServicoCreateWithoutMaoDeObraInput, ServicoUncheckedCreateWithoutMaoDeObraInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutMaoDeObraInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutMaoDeObraInput, ServicoUncheckedUpdateWithoutMaoDeObraInput>
  }

  export type ServicoUpdateWithoutMaoDeObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    equipamento?: EquipamentoUpdateOneRequiredWithoutServicosNestedInput
    historico?: HistoricoUpdateManyWithoutServicoNestedInput
    fotos?: FotoUpdateManyWithoutServicoNestedInput
    pecas?: PecaUpdateManyWithoutServicoNestedInput
    deslocacao?: DeslocacaoUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutMaoDeObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUncheckedUpdateManyWithoutServicoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutServicoNestedInput
    pecas?: PecaUncheckedUpdateManyWithoutServicoNestedInput
    deslocacao?: DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoCreateWithoutDeslocacaoInput = {
    id?: string
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutServicosInput
    equipamento: EquipamentoCreateNestedOneWithoutServicosInput
    historico?: HistoricoCreateNestedManyWithoutServicoInput
    fotos?: FotoCreateNestedManyWithoutServicoInput
    pecas?: PecaCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraCreateNestedOneWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutDeslocacaoInput = {
    id?: string
    clienteId: number
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUncheckedCreateNestedManyWithoutServicoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutServicoInput
    pecas?: PecaUncheckedCreateNestedManyWithoutServicoInput
    maoDeObra?: MaoDeObraUncheckedCreateNestedOneWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutDeslocacaoInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutDeslocacaoInput, ServicoUncheckedCreateWithoutDeslocacaoInput>
  }

  export type ServicoUpsertWithoutDeslocacaoInput = {
    update: XOR<ServicoUpdateWithoutDeslocacaoInput, ServicoUncheckedUpdateWithoutDeslocacaoInput>
    create: XOR<ServicoCreateWithoutDeslocacaoInput, ServicoUncheckedCreateWithoutDeslocacaoInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutDeslocacaoInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutDeslocacaoInput, ServicoUncheckedUpdateWithoutDeslocacaoInput>
  }

  export type ServicoUpdateWithoutDeslocacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    equipamento?: EquipamentoUpdateOneRequiredWithoutServicosNestedInput
    historico?: HistoricoUpdateManyWithoutServicoNestedInput
    fotos?: FotoUpdateManyWithoutServicoNestedInput
    pecas?: PecaUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutDeslocacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUncheckedUpdateManyWithoutServicoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutServicoNestedInput
    pecas?: PecaUncheckedUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoCreateManyClienteInput = {
    id?: string
    equipamentoId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipamento?: EquipamentoUpdateOneRequiredWithoutServicosNestedInput
    historico?: HistoricoUpdateManyWithoutServicoNestedInput
    fotos?: FotoUpdateManyWithoutServicoNestedInput
    pecas?: PecaUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUncheckedUpdateManyWithoutServicoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutServicoNestedInput
    pecas?: PecaUncheckedUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipamentoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateManyEquipamentoInput = {
    id?: string
    clienteId: number
    tipo: string
    descricaoProblema: string
    estado: string
    dataEntrada: Date | string
    dataDiagnostico?: Date | string | null
    dataReparacao?: Date | string | null
    tecnico?: string | null
    garantia?: boolean
    periodoGarantia?: string | null
    notas?: string | null
    valorTotal?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicoUpdateWithoutEquipamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    historico?: HistoricoUpdateManyWithoutServicoNestedInput
    fotos?: FotoUpdateManyWithoutServicoNestedInput
    pecas?: PecaUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutEquipamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUncheckedUpdateManyWithoutServicoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutServicoNestedInput
    pecas?: PecaUncheckedUpdateManyWithoutServicoNestedInput
    maoDeObra?: MaoDeObraUncheckedUpdateOneWithoutServicoNestedInput
    deslocacao?: DeslocacaoUncheckedUpdateOneWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutEquipamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDiagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReparacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnico?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    periodoGarantia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoCreateManyServicoInput = {
    id?: number
    data?: Date | string
    hora: string
    acao: string
    autor: string
    createdAt?: Date | string
  }

  export type FotoCreateManyServicoInput = {
    id?: number
    descricao: string
    url?: string | null
    createdAt?: Date | string
  }

  export type PecaCreateManyServicoInput = {
    id?: number
    nome: string
    quantidade: number
    precoUnitario: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type HistoricoUpdateWithoutServicoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUpdateWithoutServicoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaUpdateWithoutServicoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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