import React, { useState } from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

const PokemonProfile = props => {

  const [pokemon] = useState(props.location.state)
  const [complete, setComplete] = useState(props.location.state.complete)

  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Better Pokedex</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
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
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>{pokemon.name}</h1>
        <br />
        <img src={`https://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`} alt={`${pokemon.name}`} />
        <br />
        <h3>{pokemon.species} Pokemon</h3>
        <br />
        <h5>{pokemon.pokedex}</h5>
        <br />
        <Button style={{ margin: "1rem" }}>Edit</Button>
        <Button onClick={() => setComplete(!complete)} variant={complete ? "success" : "outline-secondary"} style={{ marginLeft: "0.5rem" }}>
              { complete? "Complete!" : "Complete?" }</Button>
      </div>
    </div>
  )
}

export default PokemonProfile