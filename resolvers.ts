const fetch = require('node-fetch');

/**
 * A resolver is a function that's responsible for populating the data for a single field in a schema.
 * These resolvers will populate relevant fields in the peoples schema from https://swapi.dev/api
 */

export const resolvers: any = {
  Query:{    
    getPeople: async (parent: any, {page}: any, {dataSources}) => {
      const people = await dataSources.people.getPeople(page)
      return people
    },
    getPerson: async (parent: any, { name }: any, { dataSources }) => {
      const person = await dataSources.people.getPerson(name)
      return person
    }
  }
};
