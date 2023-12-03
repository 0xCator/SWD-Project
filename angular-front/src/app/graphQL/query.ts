import { gql } from "apollo-angular";

export const GET_FORM = gql`
query GetForm {
    initation {
      id
      name
      age
    },
    srs {
      start
      end
    },
    design{
      image
    }
  }
`;