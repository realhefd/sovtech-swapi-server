const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs} = require('./schema')
const { resolvers} = require('./resolvers')

const app = express();

const server: any = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


// Starting the grapgql server to serve the API endpoints.
server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
