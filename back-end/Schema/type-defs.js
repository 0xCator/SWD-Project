const { gql } = require("apollo-server-express");

// schema
const typeDefs = gql`
  type Document {
    id: ID!
    docType: String!
    
    #Initiation phase

    #Requirement phase

    #Design phase
  }

  type Query {
    getAllDocuments: [Document]
    getDocument(id: ID!): User
  }

  input documentInput {
    docType: String!

    #Rest of variables (phases) go here
  }

  input updateInput {
    #Rest of variables (phases) go here
    
  }

  type Mutation {
    createDocument(document: documentInput): Document
    updateDocument(id: ID!, document: updateInput): Document
    deleteDocument(id: ID!): String
  }
`;

module.exports = { typeDefs };