import React from "react";
import {Card} from "semantic-ui-react";

export default function LocationCard(props) {
  let location = props.location;
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {location.name}
        </Card.Header>
        <Card.Description>
        {location.type} - {location.dimension}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p className="location">{location.residents.length} residents</p>
      </Card.Content>
      
    </Card>
  )
}
