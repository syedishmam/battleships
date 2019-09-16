import React from 'react';
import Grid from './Grid';
import Ships from './Ships';
import '../../styles/game.css';
import {connect} from 'react-redux';
import Setup from './Setup';

class Game extends React.Component{
  render(){

    
    // IF SETUP
    if(this.props.setup_status){ 
      return(
        <div className='border border-primary d-flex flex-column align-items-center justify-content-center game'>
          <Grid type='Opponent' />
        </div>
      )
    }
    // IF NOT SETUP
    else{
      return(
        <Setup />
      )
    }

    
  }
}

function mapStateToProps(state){
  return ({
    setup_status: state.setup.isSetup
  })
}

export default connect(mapStateToProps,null)(Game);