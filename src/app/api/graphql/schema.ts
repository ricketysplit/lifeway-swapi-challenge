const typeDefs = `#graphql
  type Person {
    name: ID!
    height: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
    homeworld: String!
    films: [Film]
    starships: [Starship]
    url: String!
  }

  type Film {
    title: ID!
    episode_id: Int!
    opening_crawl: String!
    director: String!
    producer: String!
    release_date: String!
    characters: [Person]
  }

  type Starship {
    name: ID!
    model: String!
    manufacturer: String!
    cost_in_credits: String!
    length: String!
    max_atmosphering_speed: String!
    crew: String!
    passengers: String!
    consumables: String!
    hyperdrive_rating: String!
    MGLT: String!
    starship_class: String!
    films: [Film]
  }
  
  input NewFilm {
    title: ID!
    episode_id: Int!
    opening_crawl: String!
    director: String!
    producer: String!
    release_date: String!
    characters: [String]
  }
  
  input NewPerson {
    name: ID!
    height: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
    homeworld: String!
  }

  input NewStarship {
    name: ID!
    model: String!
    manufacturer: String!
    cost_in_credits: String!
    length: String!
    max_atmosphering_speed: String!
    crew: String!
    passengers: String!
    consumables: String!
    hyperdrive_rating: String!
    MGLT: String!
    starship_class: String!
    films: [String]
  }

  type Query {
    findPerson(search: String!): [Person]
    person(id: Int!): Person
    film(id: Int!): Film
    starship(id: Int!): Starship
  }

  type Mutation {
    createFilm(film: NewFilm!): Film
    createPerson(person: NewPerson!): Person
    createStarship(starship: NewStarship!): Starship
  }
`;

export default typeDefs;
