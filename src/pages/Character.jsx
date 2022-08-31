import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

const Character = () => {
  const { data, loading, error } = useCharacter(1);
  if (error) return <div>Error!</div>;
  if (loading) return <div>Loading...</div>;
  const { image, name, episode } = data.character;
  return (
    <div className="Character">
      <img src={image} width={450} height={450}></img>
      <div className="Character-content">
        <h1>{name}</h1>
        <div className="Character-episode">
          {episode.map((episode) => (
            <div key={episode.id}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;