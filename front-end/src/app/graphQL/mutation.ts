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