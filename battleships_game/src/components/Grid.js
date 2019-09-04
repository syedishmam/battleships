import React from 'react';
import Tile from './Tile';
import '../styles/grid.css';

class Grid extends React.Component{ 

  render(){
    var tiles = []

    for(var i = 0; i < 48; i ++){
      this.props.type === 'Opponent' ? 
      (tiles.push(<Tile type="Opponent" num={i} />)):
      (tiles.push(<Tile type="You" num={i} />))
    }

    console.log(tiles)

    return(
      <div className="grid">
        {tiles}
      </div>
    ) 
  }
}

export default Grid;