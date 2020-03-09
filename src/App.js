import React, { useState, useEffect } from 'react'
import PokemonCards from './Components/PokemonCards'
import { Button, Jumbotron, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const App = () => {

  const [randomPokes, setRandomPokes] = useState([])

  useEffect(() => {
    let randomIDs = []
    while (randomIDs.length < 6) {
      let num = Array.from({length: 6}, () => Math.floor(Math.random() * 12) + 1);
      if (randomIDs.indexOf(num) === -1) {
        randomIDs.push(num)
      }
    }

    let newPokes = []
    randomIDs.map(num => 
       fetch(`http://localhost:3000/pokemons/${num}`)
      .then(resp => resp.json())
      .then(data => newPokes.push(data))
    )
    setRandomPokes(newPokes)
  }, [])

  return (
    <div>
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
      </div>

      <div>
        <Jumbotron>
          <h1>Welcome to Better Pokedex Entries!</h1>
          <p>We know the Pokedex in the games can be a little... lackluster. Practice making some!</p>
          <hr className="my-2" />
          <p>Start by choosing a pokemon!</p>
          <p><Link to="/pokemon"><Button color="primary">Pokemon List</Button></Link></p>
        </Jumbotron>
      </div>

      <div>
        {randomPokes.map(pokemon => {
          return <PokemonCards key={pokemon.id} pokemon={pokemon} />
        })}
      </div>

    </div>
  )
}

export default App;
