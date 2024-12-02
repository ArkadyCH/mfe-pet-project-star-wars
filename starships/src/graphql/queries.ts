import gql from "graphql-tag";

export const STARSHIPS_QUERY = gql`
  query Characters {
    allStarships {
      starships {
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
  }
`;
