import { gql } from "apollo-angular";

export const CREATE_FORM = gql`
mutation CreateUser($user: userInput) {
    createUser(user: $user) {
      id
    }
  }
`;
export const EDIT_FORM = gql`
mutation EditForm($user: userInput) {
    EditForm(user: $user) {
      id
    }
  }
`;
export const DELETE_FORM = gql`
mutation deleteForm($user: userInput) {
    deleteForm(user: $user) {
      id
    }
  }
`;
export const GETALL_FORMS = gql`
mutation getAllForms($user: userInput) {
  getAllForms(user: $user) {
      id
    }
  }
`;

