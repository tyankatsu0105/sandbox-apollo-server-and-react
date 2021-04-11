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
   * YYYY-MM-DD
   * ex: 2020-01-01
   */
  Date: string;
  /**
   * ISO 8601準拠 YYYY-MM-DDTHH:mm:ss.sssZ
   * ex: 2011-10-05T14:48:00.000Z
   */
  DateTime: string;
};

/** 血液型 */
export const Blood = {
  A: 'A',
  B: 'B',
  O: 'O',
  Ab: 'AB'
} as const;

export type Blood = typeof Blood[keyof typeof Blood];
export type Book = Node & {
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

export type BookConnection = {
  edges?: Maybe<Array<BookConnectionEdge>>;
  nodes?: Maybe<Array<Book>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BookConnectionEdge = Edge & {
  cursor: Scalars['String'];
  node: Book;
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
  user?: Maybe<User>;
};

export type CreateUsersPayload = {
  users?: Maybe<Array<Maybe<User>>>;
};



export type DeleteUserInput = {
  userID: Scalars['ID'];
};

export type DeleteUserPayload = {
  DeletedUserID: Scalars['ID'];
  user?: Maybe<User>;
};

export type Edge = {
  cursor: Scalars['String'];
  node: Node;
};

export type Favorites = {
  books?: Maybe<Array<Scalars['ID']>>;
  movies?: Maybe<Array<Scalars['ID']>>;
  musics?: Maybe<Array<Scalars['ID']>>;
};

export type Movie = Node & {
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

export type MovieConnection = {
  edges?: Maybe<Array<MovieConnectionEdge>>;
  nodes?: Maybe<Array<Movie>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieConnectionEdge = Edge & {
  cursor: Scalars['String'];
  node: Movie;
};

export type Music = Node & {
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

export type MusicConnection = {
  edges?: Maybe<Array<MusicConnectionEdge>>;
  nodes?: Maybe<Array<Music>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MusicConnectionEdge = Edge & {
  cursor: Scalars['String'];
  node: Music;
};

export type Mutation = {
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

export type Node = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NoopInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type NoopPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type PageInfo = {
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

export type Price = {
  amount: Scalars['Float'];
  symbol: Scalars['String'];
};

export type Query = {
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

export type User = Node & {
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

export type UserConnection = {
  edges?: Maybe<Array<UserConnectionEdge>>;
  nodes?: Maybe<Array<User>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserConnectionEdge = Edge & {
  cursor: Scalars['String'];
  node: User;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { user?: Maybe<Pick<User, 'id' | 'name'>> } };

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = { node?: Maybe<Pick<Book, 'id' | 'name'>> };

export type BooksQueryVariables = Exact<{
  page: PaginationInput;
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type BooksQuery = { books: (
    Pick<BookConnection, 'totalCount'>
    & { edges?: Maybe<Array<{ node: Pick<Book, 'id' | 'name'> }>> }
  ) };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { node?: Maybe<(
    Pick<User, 'id' | 'name' | 'birthDay' | 'createdAt'>
    & { favorites?: Maybe<Pick<Favorites, 'books' | 'movies' | 'musics'>> }
  )> };

export type UserFavoriteBooksQueryVariables = Exact<{
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  page: PaginationInput;
}>;


export type UserFavoriteBooksQuery = { books: { pageInfo: Pick<PageInfo, 'startCursor' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage'>, edges?: Maybe<Array<(
      Pick<BookConnectionEdge, 'cursor'>
      & { node: Pick<Book, 'id' | 'name'> }
    )>> } };

export type UserFavoriteMoviesQueryVariables = Exact<{
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  page: PaginationInput;
}>;


export type UserFavoriteMoviesQuery = { movies: { pageInfo: Pick<PageInfo, 'startCursor' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage'>, edges?: Maybe<Array<(
      Pick<MovieConnectionEdge, 'cursor'>
      & { node: Pick<Movie, 'id' | 'name'> }
    )>> } };

export type UserFavoriteMusicsQueryVariables = Exact<{
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  page: PaginationInput;
}>;


export type UserFavoriteMusicsQuery = { musics: { pageInfo: Pick<PageInfo, 'startCursor' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage'>, edges?: Maybe<Array<(
      Pick<MusicConnectionEdge, 'cursor'>
      & { node: Pick<Music, 'id' | 'name'> }
    )>> } };

export type UsersQueryVariables = Exact<{
  page: PaginationInput;
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type UsersQuery = { users: (
    Pick<UserConnection, 'totalCount'>
    & { pageInfo: Pick<PageInfo, 'startCursor' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage'>, edges?: Maybe<Array<(
      Pick<UserConnectionEdge, 'cursor'>
      & { node: Pick<User, 'id' | 'name'> }
    )>> }
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
export function refetchBookQuery(variables?: BookQueryVariables) {
      return { query: BookDocument, variables: variables }
    }
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
export function refetchBooksQuery(variables?: BooksQueryVariables) {
      return { query: BooksDocument, variables: variables }
    }
export const UserDocument = gql`
    query User($id: ID!) {
  node(id: $id) {
    ... on User {
      id
      name
      birthDay
      createdAt
      favorites {
        books
        movies
        musics
      }
    }
  }
}
    `;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
      return { query: UserDocument, variables: variables }
    }
export const UserFavoriteBooksDocument = gql`
    query UserFavoriteBooks($ids: [ID!], $page: PaginationInput!) {
  books(ids: $ids, page: $page) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
}
    `;
export type UserFavoriteBooksQueryResult = Apollo.QueryResult<UserFavoriteBooksQuery, UserFavoriteBooksQueryVariables>;
export function refetchUserFavoriteBooksQuery(variables?: UserFavoriteBooksQueryVariables) {
      return { query: UserFavoriteBooksDocument, variables: variables }
    }
export const UserFavoriteMoviesDocument = gql`
    query UserFavoriteMovies($ids: [ID!], $page: PaginationInput!) {
  movies(ids: $ids, page: $page) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
}
    `;
export type UserFavoriteMoviesQueryResult = Apollo.QueryResult<UserFavoriteMoviesQuery, UserFavoriteMoviesQueryVariables>;
export function refetchUserFavoriteMoviesQuery(variables?: UserFavoriteMoviesQueryVariables) {
      return { query: UserFavoriteMoviesDocument, variables: variables }
    }
export const UserFavoriteMusicsDocument = gql`
    query UserFavoriteMusics($ids: [ID!], $page: PaginationInput!) {
  musics(ids: $ids, page: $page) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
}
    `;
export type UserFavoriteMusicsQueryResult = Apollo.QueryResult<UserFavoriteMusicsQuery, UserFavoriteMusicsQueryVariables>;
export function refetchUserFavoriteMusicsQuery(variables?: UserFavoriteMusicsQueryVariables) {
      return { query: UserFavoriteMusicsDocument, variables: variables }
    }
export const UsersDocument = gql`
    query Users($page: PaginationInput!, $ids: [ID!]) {
  users(page: $page, ids: $ids) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
}
    `;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export function refetchUsersQuery(variables?: UsersQueryVariables) {
      return { query: UsersDocument, variables: variables }
    }