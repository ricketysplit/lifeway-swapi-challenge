import { Person } from "../types/person";
import constants from "../constants";

type PeopleResponse = {
  results: Person[];
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

const findPerson = async (
  nameStr?: string,
): Promise<PeopleResponse | undefined> => {
  const url =
    `${constants.SWAPI_URI}/people` + (nameStr ? `?search=${nameStr}` : "");

  try {
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    console.log({ err });
    return;
  }
};

export default {
  findPerson,
  getPerson,
};
