import React, { useState, useEffect } from 'react'
import PokemonCards from './PokemonCards'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

const Pokemon = () => {

  const [allPokemon, setAllPokemon] = useState([])
  const [randomPokemon, setRandomPokemon] = useState(null)

  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 12)
    fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())
    .then(data => {setAllPokemon(data);console.log(data[randomNum])})
  }, [])

  const getRandomPoke = () => {
    let pokes = [...allPokemon]
    let num = Math.floor(Math.random() * allPokemon.length)
    let rando = pokes.filter(pokemon => pokemon.id === num)
    setRandomPokemon(rando[0])
    // window.location = '/pokemon/randomPokemon.name.toLowerCase()'
  }

// this is for generating random pokes:
// href={randomPokemon !== null ? `/pokemon/${randomPokemon.name.toLowerCase()}` : ""}

  return (
    <div>
      <Navbar>
        <Navbar.Brand href="/">Better Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pokemon">All Pokemon</Nav.Link>
              <Nav.Link href="" onClick={() => getRandomPoke()}>Random</Nav.Link>
              <NavDropdown title="Placeholder" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Kanto # 001-151</NavDropdown.Item>
                <NavDropdown.Item href="">Johto # 152-251</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
    {allPokemon.map(pokemon => {
      return <PokemonCards key={pokemon.id} pokemon={pokemon} />
    })}
    </div>
  )
}

export default Pokemon