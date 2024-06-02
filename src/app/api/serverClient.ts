import { Film } from "../types/film";
import { Person } from "../types/person";
import { Starship } from "../types/starship";
import constants from "../constants";

type PeopleResponse = {
  results: Person[];
};

const getFilm = async (id: number): Promise<Film | undefined> => {
  const url = `${constants.SWAPI_URI}/films/${id}`;
  try {
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    console.log({ err });
    return;
  }
};

const getPerson = async (id: number): Promise<Person | undefined> => {
  const url = `${constants.SWAPI_URI}/people/${id}`;
  try {
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    console.log({ err });
    return;
  }
};

const getStarship = async (id: number): Promise<Starship | undefined> => {
  const url = `${constants.SWAPI_URI}/starships/${id}`;
  try {
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    console.log({ err });
    return;
  }
};

const findPerson = async (
  nameStr?: string,
): Promise<PeopleResponse | undefined> => {
  const url =
    `${constants.SWAPI_URI}/people` + (nameStr ? `?search=${nameStr}` : "");

  try {
    const res = await fetch(url);
    const people = await res.json();
    return people?.results || [];
  } catch (err) {
    console.log({ err });
    return;
  }
};

export default {
  getFilm,
  findPerson,
  getPerson,
  getStarship,
};
