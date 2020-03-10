import React, { useState, useEffect } from 'react'
import PokemonCards from './Components/PokemonCards'
import { Button, Jumbotron, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const App = () => {

  const [randomPokes, setRandomPokes] = useState([])

  useEffect(() => {
    
    let randomIDs = []
    let newPokes = []
    while (randomIDs.length < 6) {
      let num = Math.floor(Math.random() * 12) + 1
      if (!randomIDs.includes(num)) {
        randomIDs.push(num)
      }
    }
    
    randomIDs.forEach(num => {
      fetch(`http://localhost:3000/pokemons/${num}`)
      .then(resp => resp.json())
      .then(data => newPokes.push(data))
      .then(() => setRandomPokes([...newPokes]))
    })

  }, [])

  return (
    <div>
      
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Better Pokedex</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pokemon">All Pokemon</Nav.Link>
              <Nav.Link href="">Random</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

      
        <Jumbotron>
          <h1>Welcome to Better Pokedex Entries!</h1>
          <p>We know the Pokedex in the games can be a little... lackluster. Practice making some!</p>
          <hr className="my-2" />
          <p>Start by choosing a pokemon!</p>
          <p><Link to="/pokemon"><Button color="primary">Pokemon List</Button></Link></p>
        </Jumbotron>

      {randomPokes.map(pokemon => <PokemonCards key={pokemon.id} pokemon={pokemon} />)}
      
    </div>
  )
}

export default App;
