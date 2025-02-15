import gql from "graphql-tag";

export const STARSHIPS_QUERY = gql`
  query Starships {
    allStarships {
      starships {
        costInCredits
        id
        name
        passengers
        starshipClass
      }
    }
  }
`;

export const STARSHIP_DETAIL_QUERY = gql`
  query Starship($id: ID!) {
    starship(id: $id) {
      MGLT
      cargoCapacity
      consumables
      costInCredits
      created
      crew
      edited
      hyperdriveRating
      id
      length
      manufacturers
      maxAtmospheringSpeed
      model
      name
      passengers
      starshipClass
      pilotConnection {
        pilots {
          id
          name
        }
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;

export const STARSHIP_LIST_ITEM_QUERY = gql`
  query Starship($id: ID!) {
    starship(id: $id) {
      costInCredits
      id
      name
      passengers
      starshipClass
    }
  }
`;
