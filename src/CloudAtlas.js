import React, { Component } from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';

import history from './history'
import Home from './pages/Home';
import About from './pages/About';
import OccurrenceSearch from './pages/OccurrenceSearch';

const style = {
  border: '10px solid deepskyblue',
  padding: '10px'
};
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { config: props.config };
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to={{ pathname: '/'}} exact={true} activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: '/about'}} exact={true} activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: '/occurrences'}} activeClassName="active">Occurrences</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' render={(props) => <Home config={this.state.config} />} />
            <Route exact path='/about' render={(props) => <About config={this.state.config} />} />
            <Route exact path='/occurrences' render={(props) => <OccurrenceSearch config={this.state.config} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
