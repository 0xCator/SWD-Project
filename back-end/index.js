const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/type-defs");
const { resolvers } = require("./Schema/resolvers");
const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js');
const mongoose = require("mongoose");

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  app.use(graphqlUploadExpress());
  app.use(express.static('public'))

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://127.0.0.1:27017/user_db"); //Link goes here
  console.log("mongoose connected");

  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
}

startServer();
