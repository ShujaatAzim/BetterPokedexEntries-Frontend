import React from 'react'
import { Button, Jumbotron, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const App = () => {

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
    </div>
  )
}

export default App;
