import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const PokemonCards = props => {

  const [complete, setComplete] = useState(false)
  
  return (
    <Card style={{ width: '18rem', height: "100%", display: 'inline-block', margin: "1rem" }}>
      <Card.Header>National Dex #{props.pokemon.id}</Card.Header>
      <Card.Img style={{ width: "100%", height: "15vw", objectFit: "contain" }} 
        variant="top" src={`https://img.pokemondb.net/artwork/${props.pokemon.name.toLowerCase()}.jpg`} />
      <Card.Body>
        <Card.Title>{props.pokemon.name}</Card.Title>
        <hr />
        <Card.Text>
          <Button style={{ marginRight: "0.5rem" }}>Info Page</Button>
          <Button onClick={() => setComplete(!complete)} variant={complete ? "success" : "outline-secondary"} style={{ marginLeft: "0.5rem" }}>
            { complete? "Complete!" : "Mark Complete" }</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokemonCards
