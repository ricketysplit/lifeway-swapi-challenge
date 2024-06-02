const SwapiSchema = {
  version: "0.1.0",
  format: "onetable:1.0.0",
  models: {
    Person: {
      pk: { value: "personId" },
      sk: { staticValue: "PERSON" },

      personId: { type: String },
      name: { type: String },
      height: { type: String },
      mass: { type: String },
      hair_color: { type: String },
      skin_color: { type: String },
      eye_color: { type: String },
      birth_year: { type: String },
      gender: { type: String },
      planetId: { type: String },
    },
    Film: {
      pk: { value: "filmId" },
      sk: { staticValue: "FILM" },

      title: { type: String },
      episode_id: { type: Number },
      opening_crawl: { type: String },
      director: { type: String },
      producer: { type: String },
      release_date: { type: String },
    },
    Starship: {
      pk: { value: "starshipId" },
      sk: { staticValue: "STARSHIP" },

      name: { type: String },
      model: { type: String },
      manufacturer: { type: String },
      cost_in_credits: { type: String },
      length: { type: String },
      max_atmosphering_speed: { type: String },
      crew: { type: String },
      passengers: { type: String },
      cargo_capacity: { type: String },
      consumables: { type: String },
      hyperdrive_rating: { type: String },
      MGLT: { type: String },
      starship_class: { type: String },
    },
    PersonFilm: {
      pk: { value: "personId" },
      sk: { value: "filmId" },

      gsi1pk: { value: "filmId" },
      gsi1sk: { value: "personId" },

      personId: { type: String },
      filmId: { type: String },
      starshipId: { type: String },
    },
  },
};
