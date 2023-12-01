const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect("mongodb://localhost:27017/user_db"); //Link goes here
  console.log("mongoose connected");

  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
}

startServer();
