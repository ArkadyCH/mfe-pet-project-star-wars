import gql from "graphql-tag";

export const PEOPLE_QUERY = gql`
  query Character {
    allPeople {
      people {
        birthYear
        gender
        height
        name
        homeworld {
          name
        }
      }
    }
  }
`;
