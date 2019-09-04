import React from 'react'
import '../styles/tile.css'
import {shootTile} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Tile extends React.Component{

  render(){
    return(
      <div className="tile" onClick={this.props.shootTile}>
       
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({shootTile: shootTile}, dispatch)
}

export default connect(null,matchDispatchToProps)(Tile);