import React, { useState, useEffect } from 'react'
import PokemonCards from './PokemonCards'

const Pokemon = () => {

  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())
    .then(data => setAllPokemon(data))
  }, [])

  return (
    allPokemon.map(pokemon => {
      return <PokemonCards key={pokemon.id} pokemon={pokemon} />
    })
  )
}

export default Pokemon