import { Person } from "../types/person";
import constants from "../constants";

const findPerson = async (nameStr?: string): Promise<Person[]> => {
  const url = `/api/graphql`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query GetPerson {
            findPerson(search: "${nameStr}") {
                name
                url
            }
        }`,
      }),
    });
    const results = await res.json();
    return results.data?.findPerson || [];
  } catch (err) {
    console.log({ err });
    return [];
  }
};

export default {
  findPerson,
};
