import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Grid from './Grid';
import history from '../history'
import '../styles/app.css'
import Menu from './main-menu/Menu';
import PlayerStats from './stats/player-stats/PlayerStats';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/menu" component={Menu}/>
        <Route path="/game" component={() => <Grid type="Opponent"/>} />
        <Route path="/game" component={() => <Grid type="You" />} />
        <Route path="/player-stats" component={PlayerStats} />
      </Switch>
    </Router>
  );
}

export default App;