import React from 'react'
import '../styles/tile.css'
import {shootTile} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Tile extends React.Component{

  render(){
    console.log(this.props.type)
    return(
      <div className="tile" onClick={() => this.props.shootTile(1,2)} >
       
      </div>
    )
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