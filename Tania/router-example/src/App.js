import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import Add from './pages/Add'
import View from './pages/View'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={UserPage} />
      <Route path="/Add" component={Add} />
      <Route path="/view/:id" component={View} />   
    </Switch>
  )
}
