/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNonDalliance = /* GraphQL */ `
  query GetNonDalliance($id: ID!) {
    getNonDalliance(id: $id) {
      id
      activity
      date
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNonDalliances = /* GraphQL */ `
  query ListNonDalliances(
    $filter: ModelNonDallianceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonDalliances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        activity
        date
        value
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
