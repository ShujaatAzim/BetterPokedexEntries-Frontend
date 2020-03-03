import React, { useState, useEffect } from 'react'
import PokemonCards from './Components/PokemonCards'
import { Button, Jumbotron, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [allEntries, setAllEntries] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())
    .then(data => setAllPokemon(data))

    fetch('http://localhost:3000/pokedexes')
    .then(resp => resp.json())
    .then(data => setAllEntries(data))

  }, [])

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Better Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pokemon">Pokemon</Nav.Link>
            <Nav.Link href="">Random</Nav.Link>
            <NavDropdown title="Placeholder" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Placeholder 1</NavDropdown.Item>
              <NavDropdown.Item href="">Placeholder 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron>
        <h1>Hello, World!</h1>
        <p>
          We know the Pokedex in the games can be a little... lackluster. Practice making some!
        </p>
        <hr className="my-2" />
        <p>
          Start by choosing a pokemon!
        </p>
        <p>
          <Button color="primary">Pokemon</Button>
        </p>
      </Jumbotron>

      <PokemonCards allPokemon={allPokemon} allEntries={allEntries} />
    </div>
  )
}

export default App;
