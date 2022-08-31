import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

const CharactersList = () => {
  const { loading, error, data } = useCharacters();

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
