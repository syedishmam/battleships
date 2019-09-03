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
      <div className="App">
        <div className="grid-container">
          <Grid title="Opponent" />
          <Grid title="You" />
        </div>
      </div>
    </Router>
  );
}

export default App;