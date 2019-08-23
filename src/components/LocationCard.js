import React from "react";

export default function LocationCard(props) {
  let episode = props.episode;
  return (
    <div className="location-card">
      <h3>{episode.name}</h3>
      <p>{episode.type} - {episode.dimension}</p>
      <p>{episode.residents.length} residents</p>
    </div>
  )
}
