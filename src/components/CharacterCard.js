import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
export default function CharacterCard(props) {
  let character = props.character;
  return (
    <Card>
      <Image src={character.image} alt={character.name}/>
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span>{character.species} {character.status}</span>
        </Card.Meta>
        <Card.Description>
          <p>Location: {character.location.name}</p>
          <p>Origin: {character.origin.name}</p>
        </Card.Description>
        <Card.Content extra>
          <Icon name='user'/> {character.episode.length} Episodes
        </Card.Content>
      </Card.Content>
    </Card>
  )
}
