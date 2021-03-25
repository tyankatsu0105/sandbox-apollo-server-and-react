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

/** 血液型 */
export const Blood = {
  A: 'A',
  B: 'B',
  O: 'O',
  Ab: 'AB'
} as const;

export type Blood = typeof Blood[keyof typeof Blood];


export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserPayload;
  createUsers: CreateUsersPayload;
  deleteUser: DeleteUserPayload;
  /** 実際に使うことはない extendしてMutationを拡張していくために元のMutationが必要なので作っただけ */
  noop?: Maybe<NoopPayload>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUsersArgs = {
  input: Array<CreateUserInput>;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationNoopArgs = {
  input?: Maybe<NoopInput>;
};

export type NoopInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type NoopPayload = {
  __typename?: 'NoopPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: BookConnection;
  movie?: Maybe<Movie>;
  movies: MovieConnection;
  music?: Maybe<Music>;
  musics: MusicConnection;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBooksArgs = {
  page: PaginationInput;
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
};


export type QueryMoviesArgs = {
  page: PaginationInput;
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type QueryMusicArgs = {
  id: Scalars['ID'];
};


export type QueryMusicsArgs = {
  page: PaginationInput;
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  page: PaginationInput;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type PaginationInput = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type Edge = {
  cursor: Scalars['String'];
  node: Node;
};

export type Node = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float'];
  symbol: Scalars['String'];
};

export type BookConnectionEdge = Edge & {
  __typename?: 'BookConnectionEdge';
  cursor: Scalars['String'];
  node: Book;
};

export type BookConnection = {
  __typename?: 'BookConnection';
  edges: Array<Maybe<BookConnectionEdge>>;
  nodes: Array<Maybe<Book>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Book = Node & {
  __typename?: 'Book';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 名前 */
  name: Scalars['String'];
  /** 著者 */
  author: Scalars['String'];
  /** 金額 */
  price: Price;
  /** 発売日 */
  releaseAt: Scalars['Date'];
};

export type MovieConnectionEdge = Edge & {
  __typename?: 'MovieConnectionEdge';
  cursor: Scalars['String'];
  node: Movie;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  edges: Array<Maybe<MovieConnectionEdge>>;
  nodes: Array<Maybe<Movie>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Movie = Node & {
  __typename?: 'Movie';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 名前 */
  name: Scalars['String'];
  /** 映画監督 */
  director: Scalars['String'];
  /** 公開日 */
  releaseAt: Scalars['Date'];
  /** 公開地域 */
  releaseCountry?: Maybe<Array<Scalars['String']>>;
};

export type MusicConnectionEdge = Edge & {
  __typename?: 'MusicConnectionEdge';
  cursor: Scalars['String'];
  node: Music;
};

export type MusicConnection = {
  __typename?: 'MusicConnection';
  edges: Array<Maybe<MusicConnectionEdge>>;
  nodes: Array<Maybe<Music>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Music = Node & {
  __typename?: 'Music';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 楽曲名 */
  name: Scalars['String'];
  /** アーティスト名 */
  artist: Scalars['String'];
  /** 公開日 */
  releaseAt: Scalars['Date'];
};

export type UserConnectionEdge = Edge & {
  __typename?: 'UserConnectionEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<Maybe<UserConnectionEdge>>;
  nodes: Array<Maybe<User>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 名前 */
  name: Scalars['String'];
  /** 年齢 */
  age: Scalars['Int'];
  /** 血液型 */
  blood: Blood;
  /** 出身国 */
  country?: Maybe<Scalars['String']>;
  /** 誕生日 */
  birthDay?: Maybe<Scalars['Date']>;
  favorites?: Maybe<Favorites>;
};

export type Favorites = {
  __typename?: 'Favorites';
  books?: Maybe<Array<Maybe<Scalars['ID']>>>;
  movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  musics?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CreateUserInput = {
  /** 名前 */
  name: Scalars['String'];
  /** 年齢 */
  age: Scalars['Int'];
  /** 血液型 */
  blood: Blood;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  user?: Maybe<User>;
};

export type CreateUsersPayload = {
  __typename?: 'CreateUsersPayload';
  users?: Maybe<Array<Maybe<User>>>;
};

export type DeleteUserInput = {
  userID: Scalars['ID'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  DeletedUserID: Scalars['ID'];
  user?: Maybe<User>;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'CreateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    )> }
  ) }
);

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'name'>
  ) | { __typename?: 'Movie' } | { __typename?: 'Music' } | { __typename?: 'User' }> }
);

export type BooksQueryVariables = Exact<{
  page: PaginationInput;
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: (
    { __typename?: 'BookConnection' }
    & Pick<BookConnection, 'totalCount'>
    & { edges: Array<Maybe<(
      { __typename?: 'BookConnectionEdge' }
      & { node: (
        { __typename?: 'Book' }
        & Pick<Book, 'id' | 'name'>
      ) }
    )>> }
  ) }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'Book' } | { __typename?: 'Movie' } | { __typename?: 'Music' } | (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export type UsersQueryVariables = Exact<{
  page: PaginationInput;
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UserConnection' }
    & Pick<UserConnection, 'totalCount'>
    & { edges: Array<Maybe<(
      { __typename?: 'UserConnectionEdge' }
      & Pick<UserConnectionEdge, 'cursor'>
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'birthDay' | 'createdAt'>
        & { favorites?: Maybe<(
          { __typename?: 'Favorites' }
          & Pick<Favorites, 'books' | 'movies' | 'musics'>
        )> }
      ) }
    )>> }
  ) }
);

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
export type ResolversTypes = ResolversObject<{
  Blood: Blood;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Mutation: ResolverTypeWrapper<{}>;
  NoopInput: NoopInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  NoopPayload: ResolverTypeWrapper<NoopPayload>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  PaginationInput: PaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Edge: ResolversTypes['BookConnectionEdge'] | ResolversTypes['MovieConnectionEdge'] | ResolversTypes['MusicConnectionEdge'] | ResolversTypes['UserConnectionEdge'];
  Node: ResolversTypes['Book'] | ResolversTypes['Movie'] | ResolversTypes['Music'] | ResolversTypes['User'];
  Price: ResolverTypeWrapper<Price>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  BookConnectionEdge: ResolverTypeWrapper<BookConnectionEdge>;
  BookConnection: ResolverTypeWrapper<BookConnection>;
  Book: ResolverTypeWrapper<Book>;
  MovieConnectionEdge: ResolverTypeWrapper<MovieConnectionEdge>;
  MovieConnection: ResolverTypeWrapper<MovieConnection>;
  Movie: ResolverTypeWrapper<Movie>;
  MusicConnectionEdge: ResolverTypeWrapper<MusicConnectionEdge>;
  MusicConnection: ResolverTypeWrapper<MusicConnection>;
  Music: ResolverTypeWrapper<Music>;
  UserConnectionEdge: ResolverTypeWrapper<UserConnectionEdge>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  User: ResolverTypeWrapper<User>;
  Favorites: ResolverTypeWrapper<Favorites>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  CreateUsersPayload: ResolverTypeWrapper<CreateUsersPayload>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  DateTime: Scalars['DateTime'];
  Date: Scalars['Date'];
  Mutation: {};
  NoopInput: NoopInput;
  String: Scalars['String'];
  NoopPayload: NoopPayload;
  Query: {};
  ID: Scalars['ID'];
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  PaginationInput: PaginationInput;
  Int: Scalars['Int'];
  Edge: ResolversParentTypes['BookConnectionEdge'] | ResolversParentTypes['MovieConnectionEdge'] | ResolversParentTypes['MusicConnectionEdge'] | ResolversParentTypes['UserConnectionEdge'];
  Node: ResolversParentTypes['Book'] | ResolversParentTypes['Movie'] | ResolversParentTypes['Music'] | ResolversParentTypes['User'];
  Price: Price;
  Float: Scalars['Float'];
  BookConnectionEdge: BookConnectionEdge;
  BookConnection: BookConnection;
  Book: Book;
  MovieConnectionEdge: MovieConnectionEdge;
  MovieConnection: MovieConnection;
  Movie: Movie;
  MusicConnectionEdge: MusicConnectionEdge;
  MusicConnection: MusicConnection;
  Music: Music;
  UserConnectionEdge: UserConnectionEdge;
  UserConnection: UserConnection;
  User: User;
  Favorites: Favorites;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: CreateUserPayload;
  CreateUsersPayload: CreateUsersPayload;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: DeleteUserPayload;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createUser?: Resolver<ResolversTypes['CreateUserPayload'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUsers?: Resolver<ResolversTypes['CreateUsersPayload'], ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'input'>>;
  deleteUser?: Resolver<ResolversTypes['DeleteUserPayload'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  noop?: Resolver<Maybe<ResolversTypes['NoopPayload']>, ParentType, ContextType, RequireFields<MutationNoopArgs, never>>;
}>;

export type NoopPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoopPayload'] = ResolversParentTypes['NoopPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<ResolversTypes['BookConnection'], ParentType, ContextType, RequireFields<QueryBooksArgs, 'page'>>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'id'>>;
  movies?: Resolver<ResolversTypes['MovieConnection'], ParentType, ContextType, RequireFields<QueryMoviesArgs, 'page'>>;
  music?: Resolver<Maybe<ResolversTypes['Music']>, ParentType, ContextType, RequireFields<QueryMusicArgs, 'id'>>;
  musics?: Resolver<ResolversTypes['MusicConnection'], ParentType, ContextType, RequireFields<QueryMusicsArgs, 'page'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Node']>>, ParentType, ContextType, RequireFields<QueryNodesArgs, 'ids'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'page'>>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']> = ResolversObject<{
  __resolveType?: TypeResolveFn<'BookConnectionEdge' | 'MovieConnectionEdge' | 'MusicConnectionEdge' | 'UserConnectionEdge', ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Node'], ParentType, ContextType>;
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType?: TypeResolveFn<'Book' | 'Movie' | 'Music' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
}>;

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookConnectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookConnectionEdge'] = ResolversParentTypes['BookConnectionEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookConnection'] = ResolversParentTypes['BookConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['BookConnectionEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Book']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Price'], ParentType, ContextType>;
  releaseAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieConnectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieConnectionEdge'] = ResolversParentTypes['MovieConnectionEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieConnection'] = ResolversParentTypes['MovieConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['MovieConnectionEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Movie']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  releaseCountry?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MusicConnectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MusicConnectionEdge'] = ResolversParentTypes['MusicConnectionEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Music'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MusicConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MusicConnection'] = ResolversParentTypes['MusicConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['MusicConnectionEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Music']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MusicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Music'] = ResolversParentTypes['Music']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnectionEdge'] = ResolversParentTypes['UserConnectionEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['UserConnectionEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blood?: Resolver<ResolversTypes['Blood'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDay?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  favorites?: Resolver<Maybe<ResolversTypes['Favorites']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FavoritesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Favorites'] = ResolversParentTypes['Favorites']> = ResolversObject<{
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  musics?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateUsersPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUsersPayload'] = ResolversParentTypes['CreateUsersPayload']> = ResolversObject<{
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = ResolversObject<{
  DeletedUserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  NoopPayload?: NoopPayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Edge?: EdgeResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  BookConnectionEdge?: BookConnectionEdgeResolvers<ContextType>;
  BookConnection?: BookConnectionResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  MovieConnectionEdge?: MovieConnectionEdgeResolvers<ContextType>;
  MovieConnection?: MovieConnectionResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  MusicConnectionEdge?: MusicConnectionEdgeResolvers<ContextType>;
  MusicConnection?: MusicConnectionResolvers<ContextType>;
  Music?: MusicResolvers<ContextType>;
  UserConnectionEdge?: UserConnectionEdgeResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Favorites?: FavoritesResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  CreateUsersPayload?: CreateUsersPayloadResolvers<ContextType>;
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
