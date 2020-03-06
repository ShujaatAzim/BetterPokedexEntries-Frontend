import React, { useState } from 'react'

const PokemonProfile = props => {

  const [pokemon] = useState(props.location.state)

  return (
    <h1>Pokemon Profile for: {pokemon.name} </h1>
  )
}

export default PokemonProfile