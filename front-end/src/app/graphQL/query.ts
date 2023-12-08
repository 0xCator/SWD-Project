import { gql } from 'apollo-angular';

export const GET_ALL_DOC = gql`
query GetAllDocuments {
  getAllDocuments {
    id
    docType
    title
    startDate
    endDate
    objective
    manager
    budget
    scope
    intro
    purpose
    intendedAudience
    description
    srs
    useCases
    image {
      imageTitle
      imagePath
    }
  }
}`;
export const GET_ALL_IMG= gql`
query GetAllDocuments {
  getAllDocuments {
    useCases
    image {
      imageTitle
      imagePath
    }
  }
}`;

export const GET_DOC = gql`
query Query($getDocumentId: ID!) {
  getDocument(id: $getDocumentId) {
    id
    docType
    title
    startDate
    endDate
    objective
    manager
    budget
    scope
    intro
    purpose
    intendedAudience
    description
    srs
    useCases
    image {
      imageTitle
      imagePath
    }
  }
}`;
