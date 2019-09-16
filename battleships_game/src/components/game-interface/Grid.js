import React from 'react';
import Tile from './Tile';
import {addTile} from '../../actions/index';
import '../../styles/grid.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Grid extends React.Component{
  
  makeGrid(type){
    let tiles = []

    if(type === 'Opponent'){
      for(var i = 0; i < 48; i++){
        // ADD TILE DATA TO STATE WHILE ITERATING SO TILE CLASS CAN READ IT WHEN RENDERED
        this.props.addTile(-1,i,0)
        tiles.push(<Tile type={-1} num={i} key={i} />)
      }
    }
    else{
      for(i = 0; i < 48; i++){
        // ADD TILE DATA TO STATE WHILE ITERATING SO TILE CLASS CAN READ IT WHEN RENDERED
        this.props.addTile(1,i,0)
        tiles.push(<Tile type={1} num={i} key={i} />)
      }
    }
 
    return tiles
  }

  render()
  {
    var grid = this.makeGrid(this.props.type)

    return(
      <div className="grid">
        {grid} 
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({addTile:addTile},dispatch)
}

export default connect(null,matchDispatchToProps)(Grid);