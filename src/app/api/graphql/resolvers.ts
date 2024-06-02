import { Person } from "@/app/types/person";
import serverClient from "../serverClient";
import { Film } from "@/app/types/film";

type IdParams = {
  id: number;
};

type PeopleSearchParams = {
  search: string;
};

const resolvers = {
  Query: {
    film: (obj: any, { id }: IdParams) => {
      return serverClient.getFilm(id);
    },
    findPerson: (obj: any, { search }: PeopleSearchParams) => {
      return serverClient.findPerson(search);
    },
    person: (obj: any, { id }: IdParams) => {
      return serverClient.getPerson(id);
    },
    starship: (obj: any, { id }: IdParams) => {
      return serverClient.getStarship(id);
    },
  },
  Mutation: {
    createPerson: (obj: any, { person }: { person: Person }) => {
      console.log({ person });
      console.log("should create person here");
      return person;
    },
    createFilm: (obj: any, { film }: { film: Film }) => {
      console.log({ film });
      console.log("should create film here");
      return film;
    },
  },
  Film: {
    characters: (obj: Film) => {
      return Promise.all(
        obj.characters.map((charurl) =>
          fetch(charurl).then((result) => result.json()),
        ),
      );
    },
  },
  Person: {
    films: (obj: Person, args: any) => {
      return Promise.all(
        obj.films.map((filmUrl) =>
          fetch(filmUrl).then((result) => result.json()),
        ),
      );
    },
    starships: (obj: Person, args: any) => {
      return Promise.all(
        obj.starships.map((starshipUrl) =>
          fetch(starshipUrl).then((result) => result.json()),
        ),
      );
    },
  },
};

export default resolvers;
