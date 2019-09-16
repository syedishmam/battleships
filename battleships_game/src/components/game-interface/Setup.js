import React from 'react';
import {connect} from 'react-redux';
import {finishSetup} from '../../actions/index';
import { bindActionCreators } from 'redux';

class Setup extends React.Component{

  render(){
    return(
      <div>
        Setup
      </div>
    )
  }
}

function mapStateToProps(state){
  var status = state.setup.isSetup
  return ({
    status: status
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({finishSetup:finishSetup},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Setup);