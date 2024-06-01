import ButWaitTheresMore from "../components/butWaitTheresMore";
import { Starship } from "../types/starship";

type StarshipDetailsProps = {
  starshipUrl: string;
};

type StarshipsProps = {
  starships: string[];
};

const StarshipDetails = async ({ starshipUrl }: StarshipDetailsProps) => {
  const result = await fetch(starshipUrl);
  const starship: Starship = await result.json();
  return (
    <ButWaitTheresMore text={starship.name}>
      <div className="flex flex-col">
        <span>Model: {starship.model}</span>
        <span>Manufacturer: {starship.manufacturer}</span>
      </div>
    </ButWaitTheresMore>
  );
};

const Starships = ({ starships }: StarshipsProps) => {
  return (
    <div className="grid container ">
      <h2 className="justify-self-center text-2xl pb-8">Starships Flown</h2>
      {starships.map((starshipUrl) => (
        <StarshipDetails key={starshipUrl} starshipUrl={starshipUrl} />
      ))}
    </div>
  );
};

export default Starships;
