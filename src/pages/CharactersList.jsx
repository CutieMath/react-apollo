import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharactersList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something happend... Try again later.</p>;
  }

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => (
        <div key={character.id} className="CharacterList-item">
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
