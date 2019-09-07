import React from 'react';
import Tile from './Tile';
import '../styles/grid.css';

class Grids extends React.Component{
  
  makeGrid(type){
    let tiles = []
    for(var i = 0; i < 48; i ++){
      tiles.push(<Tile type={type} num={i} key={i} />)
    }
    return tiles
  }

  render()
  {
    var grid_one = this.makeGrid('Opponent')
    var grid_two = this.makeGrid('You')
    
    return(
      <div className="d-flex flex-column align-items-center justify-content-center grid-container">
        <div className="grid">
          {grid_one} 
        </div>
        <div className="grid">
          {grid_two} 
        </div>
      </div>
    )
  }
}

export default Grids;