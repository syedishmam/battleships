import React from 'react';
import GoogleAuth from './GoogleAuth';
import Grid from './Grid';
import '../styles/app.css'

function App() {
  return (
    <div className="App">
      <GoogleAuth />
      <div className="grid-container">
        <Grid title="Opponent" />
        <Grid title="You" />
      </div>
    </div>
  );
}

export default App;