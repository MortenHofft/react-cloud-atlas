import React, { Component } from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import injectSheet, {ThemeProvider} from 'react-jss'

import history from './history'
import Home from './pages/Home';
import About from './pages/About';
import HeaderBar from './components/HeaderBar';
import OccurrenceSearch from './pages/OccurrenceSearch';

const style = {
  cloudAtlas: {
    border: '10px solid deepskyblue',
    padding: '10px'
  }
};

const defaultTheme = {
  colorPrimary: '#1785fb'
}

export default injectSheet(style)(class extends Component {
  constructor(props) {
    super(props);

    const theme = _.assignIn(defaultTheme, this.props.theme)
    this.state = { config: props.config, theme: theme };
  }
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={this.state.theme}>
          <div className={this.props.classes.cloudAtlas}>
            <HeaderBar />
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
        </ThemeProvider>
      </Router>
    );
  }
});
