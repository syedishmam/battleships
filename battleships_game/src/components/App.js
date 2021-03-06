import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Game from './game-interface/Game';
import history from '../history'
import '../styles/app.css'
import Menu from './main-menu/Menu';
import YourStats from './stats/player-stats/YourStats';
import GlobalStats from './stats/global-stats/GlobalStats';
import SelectedPlayerStats from './stats/player-stats/SelectedPlayerStats';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/menu" component={Menu}/>
        <Route path="/game" component={Game} />
        <Route path="/your-stats/:userId" component={YourStats} />
        <Route path="/selected-player-stats/:userId" component={SelectedPlayerStats} />
        <Route path="/global-stats" component={GlobalStats} />
      </Switch>
    </Router>
  );
}

export default App;