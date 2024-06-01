import swapiClient from "../api/swapiClient";
import AppearsIn from "./appearsIn";
import PersonDetails from "./person";
import Starships from "./starships";

type ProfileProps = {
  searchParams: {
    id: string;
  };
};

export default async function Profile({ searchParams }: ProfileProps) {
  if (searchParams.id) {
    const person = await swapiClient.getPerson(Number(searchParams.id));
    if (person) {
      return (
        <>
          <div className="bg-white w-1/4 m-4 p-6 rounded-md shadow-sm bg-zinc-200">
            <AppearsIn person={person} />
          </div>
          <div className="bg-white w-1/2 m-4 p-6 rounded-md shadow-sm bg-zinc-200">
            <PersonDetails person={person} />
          </div>
          <div className="bg-white w-1/4 m-4 p-6 rounded-md shadow-sm bg-zinc-200">
            <Starships starships={person.starships} />
          </div>
        </>
      );
    }
  }
  return;
}
