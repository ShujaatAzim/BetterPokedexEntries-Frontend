import React from 'react'
import { Card, Button } from 'react-bootstrap'

const PokemonCards = props => {
  
  return (
    <Card style={{ width: '18rem', height: "100%", display: 'inline-block' }}>
      <Card.Img style={{ width: "100%", height: "15vw", objectFit: "contain" }} 
        variant="top" src={`https://img.pokemondb.net/artwork/${props.pokemon.name.toLowerCase()}.jpg`} />
      <Card.Body>
        <Card.Title style={{ align: "center" }}>{props.pokemon.name}</Card.Title>
        <Card.Text>
          <p>
            <Button style={{ marginRight: "0.5rem" }}>Edit Pokemon</Button>
            <Button style={{ MarginLeft: "0.5rem" }}>Pokedex</Button>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokemonCards
