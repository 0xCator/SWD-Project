import {gql} from 'apollo-angular';

export const CREATE_DOC = gql`
mutation CreateDocument($document: documentInput) {
  createDocument(document: $document) {
    id
  }
}`;

