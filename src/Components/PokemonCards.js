import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PokemonCards = props => {

  const { pokemon } = props
  const name = props.pokemon.name.toLowerCase()
  const [complete, setComplete] = useState(props.pokemon.complete)
  
  return (
      <Card style={{ width: '18rem', height: "100%", display: 'inline-block', margin: "1rem" }}>
        <Card.Header>National Dex #{pokemon.id}</Card.Header>
        <Card.Img style={{ width: "100%", height: "15vw", objectFit: "contain" }} 
          variant="top" src={`https://img.pokemondb.net/artwork/${name}.jpg`} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <hr />
          <Card.Text>
          <Link to={{pathname: `/pokemon/${name}`, state: pokemon}}><Button variant="outline-primary" style={{ marginRight: "0.5rem" }}>
            More Info</Button></Link>
            <Button onClick={() => setComplete(!complete)} variant={complete ? "success" : "outline-secondary"} style={{ marginLeft: "0.5rem" }}>
              { complete? "Complete!" : "Complete?" }</Button>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default PokemonCards
