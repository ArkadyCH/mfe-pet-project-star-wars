export interface Pilot {
  id: string;
  name: string;
}

export interface Film {
  id: string;
  title: string;
}

export interface Starship {
  MGLT: string;
  cargoCapacity: string;
  consumables: string;
  costInCredits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdriveRating: string;
  id: string;
  length: string;
  manufacturers: string[];
  maxAtmospheringSpeed: string;
  model: string;
  name: string;
  passengers: string;
  starshipClass: string;
  pilotConnection: {
    pilots: Pilot[];
  };
  filmConnection: {
    films: Film[];
  };
}

export type StarshipListItem = Pick<
  Starship,
  "id" | "name" | "costInCredits" | "starshipClass" | "passengers"
>;

export interface StarshipsQueryResult {
  allStarships: {
    starships: StarshipListItem[];
  };
}

export interface StarshipQueryResult {
  starship: Starship;
}
