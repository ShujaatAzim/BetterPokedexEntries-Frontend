import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PokemonCards = props => {

  const { pokemon } = props
  const name = props.pokemon.name.toLowerCase()

  const [complete, setComplete] = useState(false)
  
  return (
      <Card style={{ width: '18rem', height: "100%", display: 'inline-block', margin: "1rem" }}>
        <Card.Header>National Dex #{pokemon.id}</Card.Header>
        <Card.Img style={{ width: "100%", height: "15vw", objectFit: "contain" }} 
          variant="top" src={`https://img.pokemondb.net/artwork/${name}.jpg`} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <hr />
          <Card.Text>
            <Button variant="outline-primary"><Link to={{pathname: `/pokemon/${name}`, state: pokemon}} style={{ marginRight: "0.5rem" }}>More Info</Link></Button>
            <Button onClick={() => setComplete(!complete)} variant={complete ? "success" : "outline-secondary"} style={{ marginLeft: "0.5rem" }}>
              { complete? "Complete!" : "Mark Complete" }</Button>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default PokemonCards
