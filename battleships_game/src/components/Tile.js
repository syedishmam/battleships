import React from 'react'
import '../styles/tile.css'
import {shootTile} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Tile extends React.Component{

  render(){
    /* CONDITIONAL RENDER OF TILE BASED ON GRID TYPE */
    var output = null
    this.props.type === 'Opponent' ? 
    (output = <div className="tile" onClick={() => alert('hi')}></div>):
    (output = <div className="tile"></div>)
    return output
  }
}

function mapStateToProps(state){
  return(
    state.players
  )
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({shootTile: shootTile}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Tile);