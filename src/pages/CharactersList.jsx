import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const { loading, error, data } = useCharacters();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something happened... Try again later.</p>;
  }

  const { characters } = data;
  return (
    <div className="CharacterList">
      {characters.results.map((character) => (
        <Link
          to={character.id}
          key={character.id}
          className="CharacterList-item"
        >
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
