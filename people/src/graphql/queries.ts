import gql from "graphql-tag";

export const PEOPLE_QUERY = gql`
  query People {
    allPeople {
      people {
        id
        name
        gender
        birthYear
        homeworld {
          name
        }
      }
    }
  }
`;

export const PEOPLE_DETAIL_QUERY = gql`
  query PeopleDetail($id: ID!) {
    person(id: $id) {
      id
      name
      gender
      birthYear
      homeworld {
        name
      } 
      eyeColor
      hairColor
      skinColor
      height
      mass
      starshipConnection {
        starships {
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

export const PILOTS_QUERY = gql`
  query Pilots($id: ID!) {
    person(id: $id) {
       id
       name
       gender
       birthYear
       homeworld {
         name
       }
    }
  }
`;
