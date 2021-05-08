const { StarWarsAPI } = require('./datasources/people');
const { ApolloServer } = require('apollo-server');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');

// Pass schema definition, resolvers and data sources instance to the ApolloServer constructor
const server: any = new ApolloServer({
    typeDefs, resolvers,
    dataSources: () => ({ starWarsAPI: new StarWarsAPI() })
  }
);

// Starting the grapgql server to serve the API endpoints.
server.listen().then(({ url }: any) => console.log(`🚀  Server ready at ${url}`));
