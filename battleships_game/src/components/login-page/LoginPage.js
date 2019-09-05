import React from 'react';

import GoogleAuth from './GoogleAuth';
import './LoginStyles.css'

class LoginPage extends React.Component {
    render() {
        return (
            <div className="mx-3">
                <h1 className="display-1 title text-center">Battleships</h1>
                <div className="text-center">
                    <GoogleAuth />
                    <button className="btn btn-info buttonWidth">Sign In As Guest</button>
                </div>
            </div>
        )
    }
}

export default LoginPage;
