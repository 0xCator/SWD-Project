const { gql } = require("apollo-server-express");

// schema
const typeDefs = gql`
  type Document {
    id: ID!
    docType: String!    
    #Initiation phase
    title: String
    startDate: String
    endDate: String
    objective: String
    manager: String
    budget: Float
    scope: String

    #Requirement phase
    intro: String
    purpose: String
    intendedAudience: String
    description: String
    srs: String
    useCases: String

    #Design phase
    image: [Images]
  }

  type Images {
    imageTitle: String!
    imagePath: String!
  }
  input ImagesInput {
    imageTitle: String!
    imagePath: String!
  }

  type Query {
    getAllDocuments: [Document]
    getDocument(id: ID!): Document 
  }

  input documentInput {
    docType: String!

    #Initiation phase
    title: String
    startDate: String
    endDate: String
    objective: String
    manager: String
    budget: Float
    scope: String

    #Requirement phase
    intro: String
    purpose: String
    intendedAudience: String
    description: String
    srs: String
    useCases: String

    #Design phase
    image: [ImagesInput]
  }

  input updateInput {

    #Initiation phase
    title: String
    startDate: String
    endDate: String
    objective: String
    manager: String
    budget: Float
    scope: String

    #Requirement phase
    intro: String
    purpose: String
    intendedAudience: String
    description: String
    srs: String
    useCases: String

    #Design phase
    image: [ImagesInput]
    
  }

  type Mutation {
    createDocument(document: documentInput): Document
    updateDocument(id: ID!, document: updateInput): Document
    deleteDocument(id: ID!): String
  }
`;

module.exports = { typeDefs };
