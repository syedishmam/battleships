import React from 'react'
import '../styles/tile.css'
import {shootTile} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Tile extends React.Component{

  updateTile(num){
    
    if (num in this.props.enemy_ships){
      // STATUS 2 REPRESENTS A HIT
      this.props.shootTile(num,2)
    }
    else{
      // STATUS 1 REPRESENTS A MISS
      this.props.shootTile(num,1)
    }
  }

  getTileNum(){
    return this.props.num
  }

  render(){
    var tiles = this.props.tiles
    // RENDER OPPONENT TILES
    if (this.props.type === 'Opponent'){

      var status = tiles[this.props.num].status

      // RENDER TILES BASED ON THE INITIAL TILE DATA WITHIN STATE
      if(status === 0){
        return <div className='tile' onClick={() => this.updateTile(this.props.num)}></div>
      }

      // RE-RENDER IF A MISS IS REGISTERED
      if(status === 1){
        return <div className='tile-miss' onClick={() => this.updateTile(this.props.num)}></div>
      }

      // RE-RENDER IF A HIT IS REGISTERED
      else{
        return <div className='tile-hit' onClick={() => this.updateTile(this.props.num)}></div>
      }
    }

    // RENDER FRIEDLY TILES
    else{
      return <div className='tile'></div>
    }
  }
}

function mapStateToProps(state){  

  // GET LOCATIONS OF BOTH ENEMY SHIPS FROM STORE
  var ship_one = state.players[0].ships[0].tiles
  var ship_two = state.players[0].ships[1].tiles
  var ships = [...ship_one,...ship_two]
  
  // GET TILE DATA FROM STORE
  var tiles = state.tiles
  
  return ({
    tiles:tiles,
    enemy_ships:ships
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({shootTile: shootTile}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Tile);