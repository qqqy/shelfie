import { Link, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import React from 'react'

export default (
  <Switch>
    <Route path='/add' component={ Form } />
    <Route path='/edit/:id' component={ Form } />
    <Route path='/' component={ Dashboard } />
  </Switch>
)