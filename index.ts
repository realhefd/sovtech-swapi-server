const { StarWarsAPI } = require('./datasources/people');
const { ApolloServer } = require('apollo-server');
const { typeDefs} = require('./schema')
const { resolvers} = require('./resolvers')

const server: any = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        people: new StarWarsAPI()
      }
    }
  }
);

// Starting the grapgql server to serve the API endpoints.
server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
