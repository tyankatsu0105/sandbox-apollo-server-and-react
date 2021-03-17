import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  readonly createUser: CreateUserPayload;
  readonly createUsers: CreateUsersPayload;
  readonly deleteUser: DeleteUserPayload;
  /** 実際に使うことはない extendしてMutationを拡張していくために元のMutationが必要なので作っただけ */
  readonly noop?: Maybe<NoopPayload>;
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


export type MutationNoopArgs = {
  input?: Maybe<NoopInput>;
};

export type NoopInput = {
  readonly clientMutationId?: Maybe<Scalars['String']>;
};

export type NoopPayload = {
  readonly clientMutationId?: Maybe<Scalars['String']>;
};

export type Query = {
  readonly book?: Maybe<Book>;
  readonly books: BookConnection;
  readonly movie?: Maybe<Movie>;
  readonly movies: MovieConnection;
  readonly node?: Maybe<Node>;
  readonly nodes: ReadonlyArray<Maybe<Node>>;
  readonly user?: Maybe<User>;
  readonly users: UserConnection;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBooksArgs = {
  page?: Maybe<PaginationInput>;
  ids?: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
};


export type QueryMoviesArgs = {
  page?: Maybe<PaginationInput>;
  ids?: Maybe<ReadonlyArray<Scalars['ID']>>;
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
  page?: Maybe<PaginationInput>;
  ids?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

export type PageInfo = {
  readonly startCursor?: Maybe<Scalars['String']>;
  readonly endCursor?: Maybe<Scalars['String']>;
  readonly hasNextPage?: Maybe<Scalars['Boolean']>;
  readonly hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type PaginationInput = {
  readonly first?: Maybe<Scalars['Int']>;
  readonly last?: Maybe<Scalars['Int']>;
  readonly after?: Maybe<Scalars['String']>;
  readonly before?: Maybe<Scalars['String']>;
};

export type Edge = {
  readonly cursor: Scalars['String'];
  readonly node: Node;
};

export type Node = {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Price = {
  readonly amount: Scalars['Float'];
  readonly symbol: Scalars['String'];
};

export type BookConnectionEdge = Edge & {
  readonly cursor: Scalars['String'];
  readonly node: Book;
};

export type BookConnection = {
  readonly edges?: Maybe<ReadonlyArray<Maybe<BookConnectionEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Book>>>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type Book = Node & {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 名前 */
  readonly name: Scalars['String'];
  /** 著者 */
  readonly author: Scalars['String'];
  /** 金額 */
  readonly price: Price;
  /** 発売日 */
  readonly releaseAt: Scalars['Date'];
};

export type MovieConnectionEdge = Edge & {
  readonly cursor: Scalars['String'];
  readonly node: Movie;
};

export type MovieConnection = {
  readonly edges?: Maybe<ReadonlyArray<Maybe<MovieConnectionEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Movie>>>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type Movie = Node & {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 名前 */
  readonly name: Scalars['String'];
  /** 映画監督 */
  readonly director: Scalars['String'];
  /** 公開日 */
  readonly releaseAt: Scalars['Date'];
  /** 公開地域 */
  readonly releaseCountry?: Maybe<ReadonlyArray<Scalars['String']>>;
};

export type UserConnectionEdge = Edge & {
  readonly cursor: Scalars['String'];
  readonly node: User;
};

export type UserConnection = {
  readonly edges?: Maybe<ReadonlyArray<Maybe<UserConnectionEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type User = Node & {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 名前 */
  readonly name: Scalars['String'];
  /** 年齢 */
  readonly age: Scalars['Int'];
  /** 血液型 */
  readonly blood: Blood;
  /** 出身国 */
  readonly country?: Maybe<Scalars['String']>;
  /** 誕生日 */
  readonly birthDay?: Maybe<Scalars['Date']>;
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
  readonly user?: Maybe<User>;
};

export type CreateUsersPayload = {
  readonly users?: Maybe<ReadonlyArray<Maybe<User>>>;
};

export type DeleteUserInput = {
  readonly userID: Scalars['ID'];
};

export type DeleteUserPayload = {
  readonly DeletedUserID: Scalars['ID'];
  readonly user?: Maybe<User>;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { readonly createUser: { readonly user?: Maybe<Pick<User, 'id' | 'name'>> } };

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = { readonly node?: Maybe<Pick<Book, 'id' | 'name'>> };

export type BooksQueryVariables = Exact<{
  page: PaginationInput;
  ids: ReadonlyArray<Scalars['ID']> | Scalars['ID'];
}>;


export type BooksQuery = { readonly books: (
    Pick<BookConnection, 'totalCount'>
    & { readonly edges?: Maybe<ReadonlyArray<Maybe<{ readonly node: Pick<Book, 'id' | 'name'> }>>> }
  ) };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { readonly node?: Maybe<Pick<User, 'id' | 'name'>> };

export type UsersQueryVariables = Exact<{
  page: PaginationInput;
  ids: ReadonlyArray<Scalars['ID']> | Scalars['ID'];
}>;


export type UsersQuery = { readonly users: (
    Pick<UserConnection, 'totalCount'>
    & { readonly edges?: Maybe<ReadonlyArray<Maybe<{ readonly node: Pick<User, 'id' | 'name'> }>>> }
  ) };


export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      id
      name
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const BookDocument = gql`
    query Book($id: ID!) {
  node(id: $id) {
    ... on Book {
      id
      name
    }
  }
}
    `;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const BooksDocument = gql`
    query Books($page: PaginationInput!, $ids: [ID!]!) {
  books(page: $page, ids: $ids) {
    totalCount
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!) {
  node(id: $id) {
    ... on User {
      id
      name
    }
  }
}
    `;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users($page: PaginationInput!, $ids: [ID!]!) {
  users(page: $page, ids: $ids) {
    totalCount
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;