import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Grids from './Grids';
import history from '../history'
import '../styles/app.css'
import Menu from './main-menu/Menu';
import PlayerStats from './stats/player-stats/PlayerStats';
import GlobalStats from './stats/global-stats/GlobalStats';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/menu" component={Menu}/>
        <Route path="/game" component={Grids} />
        <Route path="/player-stats/:userId" component={PlayerStats} />
        <Route path="/global-stats" component={GlobalStats} />
      </Switch>
    </Router>
  );
}

export default App;