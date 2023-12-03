import { gql } from "apollo-angular";

export const CREATE_FORM = gql`
mutation CreateUser($user: userInput) {
    createUser(user: $user) {
      id
    }
  }
`;


