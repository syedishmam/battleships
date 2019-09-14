import React from 'react'
import '../styles/tile.css'
import {addTile,shootTile} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Tile extends React.Component{

  componentDidMount(){
    this.props.addTile(this.props.type,this.props.num)
  }

  updateTile(num){
    if (num in this.props.enemy_ships){
      this.props.shootTile(num,2)
    }
    else{
      this.props.shootTile(num,1)
    }
  }

  render(){
    if (this.props.type === 'Opponent'){
      return <div className='tile' onClick={() => this.updateTile(this.props.num)}></div>
    }
    else{
      return <div className='tile'></div>
    }
  }
}

function mapStateToProps(state){  
  var ship_one = state.players[0].ships[0].tiles
  var ship_two = state.players[0].ships[1].tiles
  var ships = [...ship_one,...ship_two]
  return ({
    enemy_ships:ships
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({addTile:addTile, shootTile: shootTile}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Tile);