// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: Date | string | number;
};

export type users = {
  accounts?: Maybe<accounts>;
  id: Scalars['String'];
  iduser: Scalars['Int'];
  account_id: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type Query = {
  accounts?: Maybe<Array<Maybe<accounts>>>;
  count_accounts?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<users>>>;
  count_users?: Maybe<Scalars['Int']>;
};


export type QueryaccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<accounts_WhereInput>;
  orderBy?: InputMaybe<accounts_OrderByInput>;
};


export type Querycount_accountsArgs = {
  where?: InputMaybe<accounts_WhereInput>;
};


export type QueryusersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<users_WhereInput>;
  orderBy?: InputMaybe<users_OrderByInput>;
};


export type Querycount_usersArgs = {
  where?: InputMaybe<users_WhereInput>;
};

export type accounts = {
  id: Scalars['String'];
  idaccount: Scalars['Int'];
  fullname: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type accounts_WhereInput = {
  id?: InputMaybe<Scalars['String']>;
  idaccount?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};

export type accounts_OrderByInput = {
  id?: InputMaybe<OrderBy>;
  idaccount?: InputMaybe<OrderBy>;
  fullname?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

export type OrderBy =
  | 'asc'
  | 'desc';

export type users_WhereInput = {
  id?: InputMaybe<Scalars['String']>;
  iduser?: InputMaybe<Scalars['String']>;
  account_id?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};

export type users_OrderByInput = {
  id?: InputMaybe<OrderBy>;
  iduser?: InputMaybe<OrderBy>;
  account_id?: InputMaybe<OrderBy>;
  firstname?: InputMaybe<OrderBy>;
  lastname?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

export type Mutation = {
  insert_accounts?: Maybe<accounts>;
  update_accounts?: Maybe<accounts>;
  delete_accounts?: Maybe<Scalars['Boolean']>;
  insert_users?: Maybe<users>;
  update_users?: Maybe<users>;
  delete_users?: Maybe<Scalars['Boolean']>;
};


export type Mutationinsert_accountsArgs = {
  accounts: accounts_InsertInput;
};


export type Mutationupdate_accountsArgs = {
  accounts: accounts_UpdateInput;
  where?: InputMaybe<accounts_WhereInput>;
};


export type Mutationdelete_accountsArgs = {
  where?: InputMaybe<accounts_WhereInput>;
};


export type Mutationinsert_usersArgs = {
  users: users_InsertInput;
};


export type Mutationupdate_usersArgs = {
  users: users_UpdateInput;
  where?: InputMaybe<users_WhereInput>;
};


export type Mutationdelete_usersArgs = {
  where?: InputMaybe<users_WhereInput>;
};

export type accounts_InsertInput = {
  id: Scalars['String'];
  idaccount: Scalars['Int'];
  fullname: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type accounts_UpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  idaccount?: InputMaybe<Scalars['Int']>;
  fullname?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Timestamp']>;
  updated_at?: InputMaybe<Scalars['Timestamp']>;
};

export type users_InsertInput = {
  id: Scalars['String'];
  iduser: Scalars['Int'];
  account_id: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type users_UpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  iduser?: InputMaybe<Scalars['Int']>;
  account_id?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Timestamp']>;
  updated_at?: InputMaybe<Scalars['Timestamp']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  users: ResolverTypeWrapper<users>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  accounts: ResolverTypeWrapper<accounts>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  accounts_WhereInput: accounts_WhereInput;
  accounts_OrderByInput: accounts_OrderByInput;
  OrderBy: OrderBy;
  users_WhereInput: users_WhereInput;
  users_OrderByInput: users_OrderByInput;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  accounts_InsertInput: accounts_InsertInput;
  accounts_UpdateInput: accounts_UpdateInput;
  users_InsertInput: users_InsertInput;
  users_UpdateInput: users_UpdateInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  users: users;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Query: {};
  accounts: accounts;
  Timestamp: Scalars['Timestamp'];
  accounts_WhereInput: accounts_WhereInput;
  accounts_OrderByInput: accounts_OrderByInput;
  users_WhereInput: users_WhereInput;
  users_OrderByInput: users_OrderByInput;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  accounts_InsertInput: accounts_InsertInput;
  accounts_UpdateInput: accounts_UpdateInput;
  users_InsertInput: users_InsertInput;
  users_UpdateInput: users_UpdateInput;
}>;

export type usersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = ResolversObject<{
  accounts?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iduser?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['accounts']>>>, ParentType, ContextType, Partial<QueryaccountsArgs>>;
  count_accounts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<Querycount_accountsArgs>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['users']>>>, ParentType, ContextType, Partial<QueryusersArgs>>;
  count_users?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<Querycount_usersArgs>>;
}>;

export type accountsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['accounts'] = ResolversParentTypes['accounts']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idaccount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fullname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  insert_accounts?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutationinsert_accountsArgs, 'accounts'>>;
  update_accounts?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutationupdate_accountsArgs, 'accounts'>>;
  delete_accounts?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<Mutationdelete_accountsArgs>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutationinsert_usersArgs, 'users'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutationupdate_usersArgs, 'users'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<Mutationdelete_usersArgs>>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  users?: usersResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  accounts?: accountsResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace MySmTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: Date | string | number;
};

export type Query = {
  accounts?: Maybe<Array<Maybe<accounts>>>;
  count_accounts?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<users>>>;
  count_users?: Maybe<Scalars['Int']>;
};


export type QueryaccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<accounts_WhereInput>;
  orderBy?: InputMaybe<accounts_OrderByInput>;
};


export type Querycount_accountsArgs = {
  where?: InputMaybe<accounts_WhereInput>;
};


export type QueryusersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<users_WhereInput>;
  orderBy?: InputMaybe<users_OrderByInput>;
};


export type Querycount_usersArgs = {
  where?: InputMaybe<users_WhereInput>;
};

export type accounts = {
  id: Scalars['String'];
  idaccount: Scalars['Int'];
  fullname: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type accounts_WhereInput = {
  id?: InputMaybe<Scalars['String']>;
  idaccount?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};

export type accounts_OrderByInput = {
  id?: InputMaybe<OrderBy>;
  idaccount?: InputMaybe<OrderBy>;
  fullname?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

export type OrderBy =
  | 'asc'
  | 'desc';

export type users = {
  id: Scalars['String'];
  iduser: Scalars['Int'];
  account_id: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type users_WhereInput = {
  id?: InputMaybe<Scalars['String']>;
  iduser?: InputMaybe<Scalars['String']>;
  account_id?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};

export type users_OrderByInput = {
  id?: InputMaybe<OrderBy>;
  iduser?: InputMaybe<OrderBy>;
  account_id?: InputMaybe<OrderBy>;
  firstname?: InputMaybe<OrderBy>;
  lastname?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

export type Mutation = {
  insert_accounts?: Maybe<accounts>;
  update_accounts?: Maybe<accounts>;
  delete_accounts?: Maybe<Scalars['Boolean']>;
  insert_users?: Maybe<users>;
  update_users?: Maybe<users>;
  delete_users?: Maybe<Scalars['Boolean']>;
};


export type Mutationinsert_accountsArgs = {
  accounts: accounts_InsertInput;
};


export type Mutationupdate_accountsArgs = {
  accounts: accounts_UpdateInput;
  where?: InputMaybe<accounts_WhereInput>;
};


export type Mutationdelete_accountsArgs = {
  where?: InputMaybe<accounts_WhereInput>;
};


export type Mutationinsert_usersArgs = {
  users: users_InsertInput;
};


export type Mutationupdate_usersArgs = {
  users: users_UpdateInput;
  where?: InputMaybe<users_WhereInput>;
};


export type Mutationdelete_usersArgs = {
  where?: InputMaybe<users_WhereInput>;
};

export type accounts_InsertInput = {
  id: Scalars['String'];
  idaccount: Scalars['Int'];
  fullname: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type accounts_UpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  idaccount?: InputMaybe<Scalars['Int']>;
  fullname?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Timestamp']>;
  updated_at?: InputMaybe<Scalars['Timestamp']>;
};

export type users_InsertInput = {
  id: Scalars['String'];
  iduser: Scalars['Int'];
  account_id: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
};

export type users_UpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  iduser?: InputMaybe<Scalars['Int']>;
  account_id?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Timestamp']>;
  updated_at?: InputMaybe<Scalars['Timestamp']>;
};

    }
    export type QueryMySmSdk = {
  /** undefined **/
  accounts: InContextSdkMethod<MySmTypes.Query['accounts'], MySmTypes.QueryaccountsArgs, MeshContext>,
  /** undefined **/
  count_accounts: InContextSdkMethod<MySmTypes.Query['count_accounts'], MySmTypes.Querycount_accountsArgs, MeshContext>,
  /** undefined **/
  users: InContextSdkMethod<MySmTypes.Query['users'], MySmTypes.QueryusersArgs, MeshContext>,
  /** undefined **/
  count_users: InContextSdkMethod<MySmTypes.Query['count_users'], MySmTypes.Querycount_usersArgs, MeshContext>
};

export type MutationMySmSdk = {
  /** undefined **/
  insert_accounts: InContextSdkMethod<MySmTypes.Mutation['insert_accounts'], MySmTypes.Mutationinsert_accountsArgs, MeshContext>,
  /** undefined **/
  update_accounts: InContextSdkMethod<MySmTypes.Mutation['update_accounts'], MySmTypes.Mutationupdate_accountsArgs, MeshContext>,
  /** undefined **/
  delete_accounts: InContextSdkMethod<MySmTypes.Mutation['delete_accounts'], MySmTypes.Mutationdelete_accountsArgs, MeshContext>,
  /** undefined **/
  insert_users: InContextSdkMethod<MySmTypes.Mutation['insert_users'], MySmTypes.Mutationinsert_usersArgs, MeshContext>,
  /** undefined **/
  update_users: InContextSdkMethod<MySmTypes.Mutation['update_users'], MySmTypes.Mutationupdate_usersArgs, MeshContext>,
  /** undefined **/
  delete_users: InContextSdkMethod<MySmTypes.Mutation['delete_users'], MySmTypes.Mutationdelete_usersArgs, MeshContext>
};

export type SubscriptionMySmSdk = {

};

export type MySmContext = {
      ["MySM"]: { Query: QueryMySmSdk, Mutation: MutationMySmSdk, Subscription: SubscriptionMySmSdk },
      
    };

export type MeshContext = MySmContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                    additionalPackagePrefixes: [],
                    initialLoggerPrefix: "🕸️  Mesh",
                  });
                }
              

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));