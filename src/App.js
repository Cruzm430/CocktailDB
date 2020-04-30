import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

import NavBar from './components/Navbar'

export default function App() {
  return (
  <Router>
    <NavBar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/cocktail/:id">
        <SingleCocktail/>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
    </Switch>
  </Router>)

}