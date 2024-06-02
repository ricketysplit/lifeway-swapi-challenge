"use client";

import { Person } from "../types/person";

const findPerson = (value: string): Promise<Person[]> => {
  return fetch(`/api/person?search=${value || ""}`).then(async (results) => {
    return results.json();
  });
};

export default {
  findPerson,
};
