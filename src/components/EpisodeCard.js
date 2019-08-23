import React from "react";

export default function EpisodeCard(props) {
  let episode = props.episode;
  return (
    <div className="episode-card">
      <h3>{episode.name}</h3>
      <p className="ep-count">{episode.episode}</p>
      <p>Aired on: {episode.air_date}</p>
    </div>
  )
}
