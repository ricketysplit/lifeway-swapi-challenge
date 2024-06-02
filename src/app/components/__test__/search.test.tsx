import "@testing-library/jest-dom";
jest.mock("next/navigation", () => ({
  useRouter: () => {
    return {
      prefetch: () => null,
    };
  },
}));
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import Search from "../search";
import client from "@/app/api/serverGraphQLClient";
import { act } from "react";

describe("Search", () => {
  it("renders the component and loads initial options", async () => {
    const findPersonSpy = jest.spyOn(client, "findPerson").mockResolvedValue([
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        url: "https://swapi.dev/api/people/1/",
      },
    ]);
    act(() => render(<Search />));

    const component = screen.getByTestId("autocomplete-search");

    expect(component).toBeInTheDocument();

    const input = within(component).getByRole("combobox");

    act(() =>
      fireEvent.change(input, {
        target: {
          value: "l",
        },
      }),
    );
    await waitFor(() => screen.getByRole("option"));
    const options = screen.getByRole("option");

    expect(options.textContent).toContain("Luke Skywalker");
  });
});
