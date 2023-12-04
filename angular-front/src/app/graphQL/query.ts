import { gql } from "apollo-angular";


export const GET_INITIATION_QUERY = gql`
  query GetInitiation {
    initiation {
      title
      startDate
      endDate
      objective
      manager
      budget
      scope
    }
  }
`;

export const UPDATE_INITIATION_MUTATION = gql`
  mutation UpdateInitiation($input: InitiationInput!) {
    updateInitiation(input: $input) {
      title
      startDate
      endDate
      objective
      manager
      budget
      scope
    }
  }
`;

export const GET_FORMS_QUERY = gql`
  query GetForms {
    forms {
      id
      title
      phase
    }
  }
`;


export const DELETE_FORM_MUTATION = gql`
  mutation DeleteForm($id: ID!) {
    deleteForm(id: $id)
  }
`;

export const UPDATE_FORM_MUTATION = gql`
  mutation UpdateForm($id: ID!, $input: FormInput!) {
    updateForm(id: $id, input: $input) {
      id
      title
      phase
    }
  }
`;

export const GET_IMAGES_QUERY = gql`
  query GetImages {
    images {
      id
      url
      description
    }
  }
`;