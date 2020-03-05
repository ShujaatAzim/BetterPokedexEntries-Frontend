import React, { useState, useEffect } from 'react'
import PokemonCards from './Components/PokemonCards'
import { Button, Jumbotron, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

const App = () => {

  const [allPokemon, setAllPokemon] = useState([])
  const [randoms, setRandoms] = useState([])

  useEffect(() => {
    const randomSix = () => {
      let i = 6
      let randomInts = []
      while (i > 0) {
        let num = getRandomInt()
        if (randomInts.includes(num)) {
          num = getRandomInt()
        } else {
          randomInts.push(num)
          i--
        }
      }
      // let finalSix = randomInts.map(num => allPokemon.filter(pokemon => pokemon.id === num))
      // setDisplayed(finalSix)
      // console.log(displayed)
    }

    const filtration = () => {
      let finalSix = []
      for (let i = 0; i > randoms.length; i++) {
        let found = allPokemon.find(pokemon => pokemon.id === randoms[i])
        finalSix.push(found)
      }
      console.log(finalSix)
    }
    
    fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())
    .then(data => setAllPokemon(data))
    .then(() => randomSix())
    .then(() => filtration())
  }, [])

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(6) + 1)
  }
  

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

      <Jumbotron>
        <h1>Welcome to Better Pokedex Entries!</h1>
        <p>We know the Pokedex in the games can be a little... lackluster. Practice making some!</p>
        <hr className="my-2" />
        <p>Start by choosing a pokemon!</p>
        <p><Button color="primary">Pokemon</Button></p>
      </Jumbotron>



      {allPokemon.map(pokemon => {
        return <PokemonCards key={pokemon.id} pokemon={pokemon} />
      })}

    </div>
  )
}

export default App;
