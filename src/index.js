import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
  </Router>, document.getElementById('root'))

serviceWorker.unregister()
