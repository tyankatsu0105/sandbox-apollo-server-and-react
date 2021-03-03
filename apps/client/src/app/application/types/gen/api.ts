import { gql } from '@apollo/client';
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
};

export type User = {
  readonly id: Scalars['ID'];
  /** 名前 */
  readonly name: Scalars['String'];
  /** 年齢 */
  readonly age: Scalars['Int'];
  /** 血液型 */
  readonly blood: Blood;
  /** 出身国 */
  readonly Country: Maybe<Scalars['String']>;
};

export const Blood = {
  A: 'A',
  B: 'B',
  O: 'O',
  Ab: 'AB'
} as const;

export type Blood = typeof Blood[keyof typeof Blood];
export type Query = {
  readonly users: ReadonlyArray<User>;
  readonly user: User;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { readonly user: Pick<User, 'name'> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { readonly users: ReadonlyArray<Pick<User, 'name'>> };


export const UserDocument = gql`
    query User($id: ID!) {
  user(id: $id) {
    name
  }
}
    `;
export const UsersDocument = gql`
    query Users {
  users {
    name
  }
}
    `;