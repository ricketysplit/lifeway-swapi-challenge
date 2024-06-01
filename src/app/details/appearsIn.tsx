import ButWaitTheresMore from "../components/butWaitTheresMore";
import { Film } from "../types/film";
import { Person } from "../types/person";

type FilmDetailsProps = {
  filmUrl: string;
};

type AppearsInProps = {
  person: Person;
};

const FilmDetails = async ({ filmUrl }: FilmDetailsProps) => {
  const result = await fetch(filmUrl);
  const film: Film = await result.json();
  return (
    <ButWaitTheresMore text={film.title}>
      <div className="flex flex-col w-60 h-40 p-2 bg-black text-yellow-200 text-center">
        {/* @ts-ignore */}
        <marquee
          className="text-center"
          direction="up"
          loop="3"
          scrollamount="2"
          scrolldelay="60"
        >
          {film.opening_crawl}
          {/* @ts-ignore */}
        </marquee>
      </div>
    </ButWaitTheresMore>
  );
};

const AppearsIn = ({ person }: AppearsInProps) => {
  return (
    <div className="grid container">
      <h2 className="justify-self-center text-2xl pb-8">Appears In</h2>
      {person.films?.map((filmUrl) => (
        <FilmDetails key={filmUrl} filmUrl={filmUrl} />
      ))}
    </div>
  );
};

export default AppearsIn;
