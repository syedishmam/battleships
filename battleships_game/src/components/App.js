import React from 'react';
import {Router, Route} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';
import Grid from './Grid';
import history from '../history'
import '../styles/app.css'

function App() {
  return (
    <Router history={history}>
      <Route path="/login" component={GoogleAuth}/>
        <div className="grid-container">
          <Route path="/game" component={() => <Grid title="Opponent" />} />
          <Route path="/game" component={() => <Grid title="You" />} />
        </div>
    </Router>
  );
}

export default App;