# Project description: Sovtech Apollo GraphQL Server

This is the backend application for the react frontend app


> This Application will runs on an Apollo GraphQL Backend, consuming the Starwsrs API endpoints


Please use the following instructions to setup the project and run the application

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