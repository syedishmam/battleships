import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Grid from './Grid';
import history from '../history'
import '../styles/app.css'
import Menu from './login-page/Menu';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/menu" component={Menu}/>
        <div className="grid-container">
            <Route path="/game" component={() => <Grid type="Opponent"/>} />
            <Route path="/game" component={() => <Grid type="You" />} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;