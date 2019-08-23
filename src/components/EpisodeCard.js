import React from "react";
import {Card} from "semantic-ui-react";

export default function EpisodeCard(props) {
  let episode = props.episode;
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {episode.name}
        </Card.Header>
        <Card.Description>
          {episode.episode}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Aired on: {episode.air_date}
      </Card.Content>
    </Card>
  )
}
