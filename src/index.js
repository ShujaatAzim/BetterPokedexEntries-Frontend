import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pokemon from './Components/Pokemon'
import PokemonProfile from './Components/PokemonProfile'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/pokemon" component={Pokemon} />
    <Route exact path="/pokemon/:name" render={(props) => <PokemonProfile {...props} />} />
  </Router>, document.getElementById('root'))

serviceWorker.unregister()
