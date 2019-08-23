import React from "react";

export default function CharacterCard(props) {
  let character = props.character;
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name}/>
      <h3>{character.name}</h3>
      <p className="status">{character.species} {character.status}</p>
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Episodes</p>
    </div>
  )
}
