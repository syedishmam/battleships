import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Grid from './Grid';
import history from '../history'
import '../styles/app.css'
import LoginPage from './login-page/LoginPage';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <div className="grid-container">
            <Route path="/game" component={() => <Grid type="Opponent"/>} />
            <Route path="/game" component={() => <Grid type="You" />} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;