import { Person } from "../types/person";

type PersonProps = {
  person: Person;
};

type DetailFieldProps = {
  name: string;
  value: string;
};

const displayFields: Record<string, string> = {
  birth_year: "Birth Year",
  height: "Height",
  mass: "Mass",
  hair_color: "Hair Color",
  skin_color: "Skin Color",
  gender: "Gender",
  eye_color: "Eye Color",
};

const DetailField = ({ name, value }: DetailFieldProps) => {
  return (
    <div className="w-40 shadow-sm mb-4 p-3 rounded border-2 border-slate-300 break-inside-avoid-column">
      <div className="text-sm">{displayFields[name]}</div>
      <div className="text-xl text-right">{value}</div>
    </div>
  );
};

const PersonDetails = ({ person }: PersonProps) => {
  return (
    <div className="grid container h-4/6">
      <h2 className="justify-self-center text-3xl pb-8">{person.name}</h2>
      <div className="columns-3">
        {Object.entries(person)
          .filter(([key, value]) => displayFields[key] && value !== "n/a")
          .map(([key, value]) => (
            <DetailField key={key} name={key} value={value} />
          ))}
      </div>
    </div>
  );
};

export default PersonDetails;
