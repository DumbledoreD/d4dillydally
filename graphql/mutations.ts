/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNonDalliance = /* GraphQL */ `
  mutation CreateNonDalliance(
    $input: CreateNonDallianceInput!
    $condition: ModelNonDallianceConditionInput
  ) {
    createNonDalliance(input: $input, condition: $condition) {
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
export const updateNonDalliance = /* GraphQL */ `
  mutation UpdateNonDalliance(
    $input: UpdateNonDallianceInput!
    $condition: ModelNonDallianceConditionInput
  ) {
    updateNonDalliance(input: $input, condition: $condition) {
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
export const deleteNonDalliance = /* GraphQL */ `
  mutation DeleteNonDalliance(
    $input: DeleteNonDallianceInput!
    $condition: ModelNonDallianceConditionInput
  ) {
    deleteNonDalliance(input: $input, condition: $condition) {
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
