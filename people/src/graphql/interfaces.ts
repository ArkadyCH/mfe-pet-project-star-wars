export type Character = {
    id: string;
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: number;
    mass: number;
    skinColor: string;
    homeworld: {
      id: string;
      name: string;
    };
    filmConnection: {
      films: { id: string; title: string }[];
    };
    species: {
      id: string;
      name: string;
    } | null;
    starshipConnection: {
      starships: { id: string; name: string }[];
    };
    vehicleConnection: {
      vehicles: { id: string; name: string }[];
    };
};

export type PeopleListItem = Pick<Character, "id" | "name" | "gender" | "birthYear" | "homeworld">;

export type PeopleQueryResult = {
  allPeople: {
    people: PeopleListItem[];
  };
};

export type PeopleDetailQueryResult = {
  person: Character;
};

export type PilotsQueryResult = {
    person: PeopleListItem;
};
