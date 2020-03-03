import React from 'react'
import { Card } from 'react-bootstrap'

const PokemonCards = props => {

  return (
    props.allPokemon.map(pokemon => {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>
              <p>{pokemon.pokedex.entry}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })
  )
}

export default PokemonCards
