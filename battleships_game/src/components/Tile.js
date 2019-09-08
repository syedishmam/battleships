import React from 'react'
import '../styles/tile.css'
import {shootTile} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Tile extends React.Component{

  updateTiles(){
    var updatedTiles;
    if (this.props.shotTiles){
      var tile_num = this.props.num
      updatedTiles = {...this.props.shotTiles,tile_num}
      this.props.shootTile(updatedTiles)
    }
    else{
      updatedTiles = this.props.num
      this.props.shootTile(updatedTiles)
    }
  }

  render(){

    // CONDITIONAL RENDER OF TILE BASED ON GRID TYPE //
    var tile = null
    this.props.type === 'Opponent' ? 
    (tile = <div className="tile" onClick={() => this.props.shootTile(this.props.num)}></div>):
    (tile = <div className="tile"></div>)

    return tile
  }
}

function mapStateToProps(state){  
  
  // GET LOCATIONS OF ENEMY SHIPS //
  var ship_one_cor = state.players[0].ships[0].tiles
  var ship_two_cor = state.players[0].ships[1].tiles
  var ship_locations = [...ship_one_cor,...ship_two_cor]

  return(
    state.players[0]
  )
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({shootTile: shootTile}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Tile);