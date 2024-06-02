import serverClient from "../serverClient";

describe("serverClient", () => {
  describe("getFilm", () => {
    test("fetches film data from SWAPI", () => {
      expect.assertions(1);
      return serverClient.getFilm(1).then((result) => {
        expect(result).toEqual(
          expect.objectContaining({ title: "A New Hope" }),
        );
      });
    });
  });
  describe("getPerson", () => {
    test("fetches film data from SWAPI", () => {
      expect.assertions(1);
      return serverClient.getPerson(1).then((result) => {
        expect(result).toEqual(
          expect.objectContaining({ name: "Luke Skywalker" }),
        );
      });
    });
  });
  describe("getStarship", () => {
    test("fetches film data from SWAPI", () => {
      expect.assertions(1);
      return serverClient.getStarship(2).then((result) => {
        expect(result).toEqual(
          expect.objectContaining({ name: "CR90 corvette" }),
        );
      });
    });
  });
  describe("findPerson", () => {
    test("fetches film data from SWAPI", () => {
      expect.assertions(1);
      return serverClient.findPerson("Leia").then((result) => {
        expect(result).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: "Leia Organa" }),
          ]),
        );
      });
    });
  });
});
