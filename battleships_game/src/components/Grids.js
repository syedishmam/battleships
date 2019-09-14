import React from 'react';
import Tile from './Tile';
import {addTile} from '../actions/index';
import '../styles/grid.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Grids extends React.Component{
  
  makeGrid(type){
    let tiles = []
    console.log(type)
    if(type === 'Opponent'){
      for(var i = 0; i < 48; i++){
        // ADD TILE DATA TO STATE WHILE ITERATING SO TILE CLASS CAN READ IT WHEN RENDERED
        this.props.addTile('Opponent',i,0)
        tiles.push(<Tile type='Opponent' num={i} key={i} />)
      }
    }
    else{
      for(var i = 0; i < 48; i++){
        // ADD TILE DATA TO STATE WHILE ITERATING SO TILE CLASS CAN READ IT WHEN RENDERED
        this.props.addTile('You',i,0)
        tiles.push(<Tile type='You' num={i} key={i} />)
      }
    }

    console.log(tiles)
 
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

function matchDispatchToProps(dispatch){
  return bindActionCreators({addTile:addTile},dispatch)
}

export default connect(null,matchDispatchToProps)(Grids);