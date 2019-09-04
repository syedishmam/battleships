import React from 'react';
import Tile from './Tile';
import '../styles/grid.css';

class Grid extends React.Component{ 

  gridRow(){
    /* CONDITIONAL RETURN OF GRID ROW BASED ON GRID TYPE */
    var output = null
    this.props.type === 'Opponent' ? 
      (
        output = 
        <div className="grid-row">
          <Tile type="Opponent" />
          <Tile type="Opponent" />
          <Tile type="Opponent" />
          <Tile type="Opponent" />
          <Tile type="Opponent" />
          <Tile type="Opponent" />
          <Tile type="Opponent" />
          <Tile type="Opponent" />
        </div>
      ):
      (
        output = 
        <div className="grid-row">
          <Tile type="You" />
          <Tile type="You" />
          <Tile type="You" />
          <Tile type="You" />
          <Tile type="You" />
          <Tile type="You" />
          <Tile type="You" />
          <Tile type="You" />
        </div>
      )
      return output
  }

  render(){
    return(
      <div className="grid">
        <span className="grid-title">
          {this.props.type}
        </span>
        {this.gridRow()}
        {this.gridRow()}
        {this.gridRow()}
        {this.gridRow()}
        {this.gridRow()}
        {this.gridRow()}
      </div>
    ) 
  }
}

export default Grid;