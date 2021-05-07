const { gql } = require('apollo-server');
/** 
 * This GraphQL server uses this schema to describe the shape of the data graph as is from SWAPI API.
 * This schema defines a hierarchy of types with fields that are populated from the StarWarsAPI datastore.
 * The schema also specifies exactly which queries are available for clients to execute against the data graph.
 */

export const typeDefs: string | string[] | any = gql`


type Query{
  getPeople(page: Int): People!
  getPerson(name: String): People!
}



type People {
  count: Int!
  next: String
  previous: String
  results: [ Person! ]!
}



type HomeWorld{
  name: String!
  climate: String!
  diameter: String!
  population: String!
}



type Person{
  name: String!
  mass: String!
  height: String!
  gender: String!
  homeworld: HomeWorld!
}`;
