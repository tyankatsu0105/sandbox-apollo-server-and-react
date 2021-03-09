import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * ISO 8601準拠 YYYY-MM-DDTHH:mm:ss.sssZ
   * ex: 2011-10-05T14:48:00.000Z
   */
  DateTime: string;
  /**
   * YYYY-MM-DD
   * ex: 2020-01-01
   */
  Date: string;
};

export const Blood = {
  A: 'A',
  B: 'B',
  O: 'O',
  Ab: 'AB'
} as const;

export type Blood = typeof Blood[keyof typeof Blood];


export type Query = {
  readonly __typename: 'Query';
  readonly node: Maybe<Node>;
  readonly nodes: ReadonlyArray<Maybe<Node>>;
  readonly user: Maybe<User>;
  readonly users: UserConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: ReadonlyArray<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  page: PaginationInput;
  ids: ReadonlyArray<Scalars['ID']>;
};

export type PageInfo = {
  readonly __typename: 'PageInfo';
  readonly startCursor: Scalars['String'];
  readonly endCursor: Scalars['String'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
};

export type PaginationInput = {
  readonly first: Maybe<Scalars['Int']>;
  readonly last: Maybe<Scalars['Int']>;
  readonly after: Maybe<Scalars['String']>;
  readonly before: Maybe<Scalars['String']>;
};

export type Edge = {
  readonly cursor: Scalars['String'];
  readonly node: Node;
};

export type Node = {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  readonly __typename: 'Mutation';
  readonly createUser: CreateUserPayload;
  readonly createUsers: CreateUsersPayload;
  readonly deleteUser: DeleteUserPayload;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUsersArgs = {
  input: ReadonlyArray<CreateUserInput>;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type UserConnectionEdge = Edge & {
  readonly __typename: 'UserConnectionEdge';
  readonly cursor: Scalars['String'];
  readonly node: User;
};

export type UserConnection = {
  readonly __typename: 'UserConnection';
  readonly edges: Maybe<ReadonlyArray<Maybe<UserConnectionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type User = Node & {
  readonly __typename: 'User';
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
  /** 名前 */
  readonly name: Scalars['String'];
  /** 年齢 */
  readonly age: Scalars['Int'];
  /** 血液型 */
  readonly blood: Blood;
  /** 出身国 */
  readonly country: Maybe<Scalars['String']>;
  /** 誕生日 */
  readonly birthDay: Maybe<Scalars['Date']>;
};

export type CreateUserInput = {
  /** 名前 */
  readonly name: Scalars['String'];
  /** 年齢 */
  readonly age: Scalars['Int'];
  /** 血液型 */
  readonly blood: Blood;
};

export type CreateUserPayload = {
  readonly __typename: 'CreateUserPayload';
  readonly user: Maybe<User>;
};

export type CreateUsersPayload = {
  readonly __typename: 'CreateUsersPayload';
  readonly users: Maybe<ReadonlyArray<Maybe<User>>>;
};

export type DeleteUserInput = {
  readonly userID: Scalars['ID'];
};

export type DeleteUserPayload = {
  readonly __typename: 'DeleteUserPayload';
  readonly DeletedUserID: Scalars['ID'];
  readonly user: Maybe<User>;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = (
  { readonly __typename: 'Mutation' }
  & { readonly createUser: (
    { readonly __typename: 'CreateUserPayload' }
    & { readonly user: Maybe<(
      { readonly __typename: 'User' }
      & Pick<User, 'id' | 'name'>
    )> }
  ) }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { readonly __typename: 'Query' }
  & { readonly user: Maybe<(
    { readonly __typename: 'User' }
    & Pick<User, 'name'>
  )> }
);

export type UsersQueryVariables = Exact<{
  page: PaginationInput;
  ids: ReadonlyArray<Scalars['ID']> | Scalars['ID'];
}>;


export type UsersQuery = (
  { readonly __typename: 'Query' }
  & { readonly users: (
    { readonly __typename: 'UserConnection' }
    & Pick<UserConnection, 'totalCount'>
    & { readonly edges: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename: 'UserConnectionEdge' }
      & { readonly node: (
        { readonly __typename: 'User' }
        & Pick<User, 'id'>
      ) }
    )>>> }
  ) }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
export type ResolversTypes = {
  Blood: Blood;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  PaginationInput: PaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Edge: ResolversTypes['UserConnectionEdge'];
  Node: ResolversTypes['User'];
  Mutation: ResolverTypeWrapper<{}>;
  UserConnectionEdge: ResolverTypeWrapper<UserConnectionEdge>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  User: ResolverTypeWrapper<User>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  CreateUsersPayload: ResolverTypeWrapper<CreateUsersPayload>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime'];
  Date: Scalars['Date'];
  Query: {};
  ID: Scalars['ID'];
  PageInfo: PageInfo;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  PaginationInput: PaginationInput;
  Int: Scalars['Int'];
  Edge: ResolversParentTypes['UserConnectionEdge'];
  Node: ResolversParentTypes['User'];
  Mutation: {};
  UserConnectionEdge: UserConnectionEdge;
  UserConnection: UserConnection;
  User: User;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: CreateUserPayload;
  CreateUsersPayload: CreateUsersPayload;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: DeleteUserPayload;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  node: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodes: Resolver<ReadonlyArray<Maybe<ResolversTypes['Node']>>, ParentType, ContextType, RequireFields<QueryNodesArgs, 'ids'>>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'page' | 'ids'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  startCursor: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endCursor: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasNextPage: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']> = {
  __resolveType: TypeResolveFn<'UserConnectionEdge', ParentType, ContextType>;
  cursor: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node: Resolver<ResolversTypes['Node'], ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser: Resolver<ResolversTypes['CreateUserPayload'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUsers: Resolver<ResolversTypes['CreateUsersPayload'], ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'input'>>;
  deleteUser: Resolver<ResolversTypes['DeleteUserPayload'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
};

export type UserConnectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnectionEdge'] = ResolversParentTypes['UserConnectionEdge']> = {
  cursor: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserConnectionEdge']>>>, ParentType, ContextType>;
  nodes: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  pageInfo: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  age: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blood: Resolver<ResolversTypes['Blood'], ParentType, ContextType>;
  country: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDay: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUsersPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUsersPayload'] = ResolversParentTypes['CreateUsersPayload']> = {
  users: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  DeletedUserID: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime: GraphQLScalarType;
  Date: GraphQLScalarType;
  Query: QueryResolvers<ContextType>;
  PageInfo: PageInfoResolvers<ContextType>;
  Edge: EdgeResolvers<ContextType>;
  Node: NodeResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  UserConnectionEdge: UserConnectionEdgeResolvers<ContextType>;
  UserConnection: UserConnectionResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  CreateUserPayload: CreateUserPayloadResolvers<ContextType>;
  CreateUsersPayload: CreateUsersPayloadResolvers<ContextType>;
  DeleteUserPayload: DeleteUserPayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
