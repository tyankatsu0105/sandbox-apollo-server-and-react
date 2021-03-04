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

export const Blood = {
  A: 'A',
  B: 'B',
  O: 'O',
  Ab: 'AB'
} as const;

export type Blood = typeof Blood[keyof typeof Blood];
export type CreateUserInput = {
  /** 名前 */
  readonly name: Scalars['String'];
  /** 年齢 */
  readonly age: Scalars['Int'];
  /** 血液型 */
  readonly blood: Blood;
};

export type CreateUserPayload = {
  readonly user: Maybe<User>;
};

export type CreateUsersPayload = {
  readonly users: Maybe<ReadonlyArray<Maybe<User>>>;
};

export type UserConnectionEdge = {
  readonly cursor: Maybe<Scalars['String']>;
  readonly node: Maybe<User>;
};

export type UserConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<UserConnectionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type User = Node & {
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



export type Query = {
  readonly users: Maybe<UserConnection>;
  readonly user: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  readonly createUser: Maybe<CreateUserPayload>;
  readonly createUsers: Maybe<CreateUsersPayload>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUsersArgs = {
  input: ReadonlyArray<CreateUserInput>;
};

export type PageInfo = {
  readonly endCursor: Maybe<Scalars['String']>;
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly startCursor: Maybe<Scalars['String']>;
};

export type Node = {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { readonly user: Maybe<Pick<User, 'name'>> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { readonly users: Maybe<(
    Pick<UserConnection, 'totalCount'>
    & { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: Maybe<Pick<User, 'id'>> }>>> }
  )> };


export const UserDocument = gql`
    query User($id: ID!) {
  user(id: $id) {
    name
  }
}
    `;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    totalCount
    edges {
      node {
        id
      }
    }
  }
}
    `;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;