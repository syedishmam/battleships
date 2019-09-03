import React from 'react'
import '../styles/tile.css'

class Tile extends React.Component{

  onClick = () =>{
    
  }

  render(){
    return(
      <div className="tile" onClick={this.onClick}>
       
      </div>
    )
  }
}

export default Tile;