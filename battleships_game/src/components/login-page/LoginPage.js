import React from 'react';
import {connect} from 'react-redux';

import GoogleAuth from './GoogleAuth';
import './LoginStyles.css'

class LoginPage extends React.Component {
    render() {
        return (
            <div className="mx-3">
                <h1 className="display-1 title text-center">Battleships</h1>
                <div className="text-center">
                    <GoogleAuth />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.user.isSignedIn}
}

export default connect(mapStateToProps)(LoginPage);
