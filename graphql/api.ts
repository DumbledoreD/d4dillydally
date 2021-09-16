/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNonDallianceInput = {
  id?: string | null,
  activity: string,
  date: string,
  value: number,
};

export type ModelNonDallianceConditionInput = {
  activity?: ModelStringInput | null,
  date?: ModelStringInput | null,
  value?: ModelIntInput | null,
  and?: Array< ModelNonDallianceConditionInput | null > | null,
  or?: Array< ModelNonDallianceConditionInput | null > | null,
  not?: ModelNonDallianceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type NonDalliance = {
  __typename: "NonDalliance",
  id: string,
  activity: string,
  date: string,
  value: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNonDallianceInput = {
  id: string,
  activity?: string | null,
  date?: string | null,
  value?: number | null,
};

export type DeleteNonDallianceInput = {
  id: string,
};

export type ModelNonDallianceFilterInput = {
  id?: ModelIDInput | null,
  activity?: ModelStringInput | null,
  date?: ModelStringInput | null,
  value?: ModelIntInput | null,
  and?: Array< ModelNonDallianceFilterInput | null > | null,
  or?: Array< ModelNonDallianceFilterInput | null > | null,
  not?: ModelNonDallianceFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelNonDallianceConnection = {
  __typename: "ModelNonDallianceConnection",
  items?:  Array<NonDalliance | null > | null,
  nextToken?: string | null,
};

export type CreateNonDallianceMutationVariables = {
  input: CreateNonDallianceInput,
  condition?: ModelNonDallianceConditionInput | null,
};

export type CreateNonDallianceMutation = {
  createNonDalliance?:  {
    __typename: "NonDalliance",
    id: string,
    activity: string,
    date: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNonDallianceMutationVariables = {
  input: UpdateNonDallianceInput,
  condition?: ModelNonDallianceConditionInput | null,
};

export type UpdateNonDallianceMutation = {
  updateNonDalliance?:  {
    __typename: "NonDalliance",
    id: string,
    activity: string,
    date: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNonDallianceMutationVariables = {
  input: DeleteNonDallianceInput,
  condition?: ModelNonDallianceConditionInput | null,
};

export type DeleteNonDallianceMutation = {
  deleteNonDalliance?:  {
    __typename: "NonDalliance",
    id: string,
    activity: string,
    date: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetNonDallianceQueryVariables = {
  id: string,
};

export type GetNonDallianceQuery = {
  getNonDalliance?:  {
    __typename: "NonDalliance",
    id: string,
    activity: string,
    date: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNonDalliancesQueryVariables = {
  filter?: ModelNonDallianceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNonDalliancesQuery = {
  listNonDalliances?:  {
    __typename: "ModelNonDallianceConnection",
    items?:  Array< {
      __typename: "NonDalliance",
      id: string,
      activity: string,
      date: string,
      value: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNonDallianceSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNonDallianceSubscription = {
  onCreateNonDalliance?:  {
    __typename: "NonDalliance",
    id: string,
    activity: string,
    date: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNonDallianceSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNonDallianceSubscription = {
  onUpdateNonDalliance?:  {
    __typename: "NonDalliance",
    id: string,
    activity: string,
    date: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNonDallianceSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNonDallianceSubscription = {
  onDeleteNonDalliance?:  {
    __typename: "NonDalliance",
    id: string,
    activity: string,
    date: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
