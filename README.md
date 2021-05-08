# Sovtech Apollo GraphQL Server Test

This project creates an Apollo GraphQL API that wraps the Star Wars API https://swapi.dev

> This Application is built with **`NodeJS`** and **`TypeScript`**

### Live GraphQL Playground
https://oi9z9.sse.codesandbox.io/
#
### Tools Used
- GraphQL
- Apollo Server
- Apollo Datasource Rest
#
## Project Setup
Clone this repository and **`cd`** into the project directory then use the following instructions to setup the project and run the application
```
$ yarn install

$ yarn dev
```
Executing **`yarn dev`** will launch the server and open the GraphQL playground at http://localhost:4000 
#
## Project Instructions

- You should develop an Apollo GraphQL API
- Your GraphQL API should wrap the Star Wars API (https://swapi.dev/)
- Your GraphQL API should have a Query type that resolves all People
(https://swapi.dev/api/people/), but only the Person's details (name, height,
mass, gender, homeworld).
- The People Query should cater for pagination, you will notice the next
property in the response. When given a page number, the respective People
page should be returned (i.e. https://swapi.dev/api/people/?page=2)
- Your GraphQL API should have a Query type that resolves (searches for) a
particular Person People) given their name (i.e. https://swapi.dev/api/people/?
search=Anakin Skywalker)
