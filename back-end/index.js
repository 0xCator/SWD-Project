const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/type-defs");
const { resolvers } = require("./Schema/resolvers");
const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js');
//const {graphqlUploadExpress} = require('graphql-upload');
const mongoose = require("mongoose");
const cors = require("cors");

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  server.applyMiddleware({ app });

  app.use(express.static('public'));
  app.use(cors());

  await mongoose.connect("mongodb://127.0.0.1:27017/user_db"); //Link goes here
  console.log("mongoose connected");

  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
}

startServer();
