import {gql} from 'apollo-angular';

export const CREATE_DOC = gql`
mutation CreateDocument($document: documentInput) {
  createDocument(document: $document) {
    id
  }
}`;

export const UPLOAD_FILE = gql`
mutation Mutation($file: Upload!) {
  uploadFile(file: $file) {
    url
  }
}
`;

export const UPDATE_DOC = gql`
mutation UpdateDocument($updateDocumentId: ID!, $document: updateInput) {
  updateDocument(id: $updateDocumentId, document: $document) {
    id
  }
}`;

export const DELETE_DOC = gql`
mutation UpdateDocument($deleteDocumentId: ID!) {
  deleteDocument(id: $deleteDocumentId)
}
`;
