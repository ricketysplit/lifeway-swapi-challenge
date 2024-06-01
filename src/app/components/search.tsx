"use client";
import Autocomplete, {
  AutocompleteChangeReason,
} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Person } from "../types/person";

const SearchBar = () => {
  const router = useRouter();
  const [people, setPeople] = useState<Person[]>([]);

  const findPeople = useCallback(
    (value: string) => {
      fetch(`/api/person?search=${value || ""}`).then(async (results) => {
        const allPeople = (await results.json()) as Person[];
        setPeople(allPeople);
      });
    },
    [setPeople],
  );

  useEffect(() => findPeople(""), []);

  const handleChange = (
    event: React.SyntheticEvent,
    value: Person | null,
    reason: AutocompleteChangeReason,
  ) => {
    if (["clear", "selectOption"].includes(reason)) {
      const id = value && /[0-9]+/.exec(value.url);
      router.push(id ? `/details?id=${id}` : "details");
    }
  };

  const handleInputChange = useCallback(
    (event: React.SyntheticEvent, value: string) => findPeople(value),
    [setPeople],
  );

  return (
    <Autocomplete
      className="w-50"
      disablePortal
      id="combo-box-demo"
      options={people}
      sx={{ width: 300 }}
      filterOptions={(x) => x}
      getOptionLabel={(opt) => opt.name}
      isOptionEqualToValue={(opt, value) => opt.name === value.name}
      onChange={handleChange}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} label="Search for person" />
      )}
    />
  );
};

export default SearchBar;
