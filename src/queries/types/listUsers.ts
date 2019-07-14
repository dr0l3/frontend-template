/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: listUsers
// ====================================================

export interface listUsers_users {
  __typename: "User";
  id: any;
  name: string;
  email: string;
}

export interface listUsers {
  users: (listUsers_users | null)[];
}
