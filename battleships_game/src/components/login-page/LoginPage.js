import React from 'react';
import GoogleAuth from './GoogleAuth';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="">
                <h1>Battleships</h1>
                <div>
                    <GoogleAuth />
                    <button>Sign In As Guest</button>
                </div>
            </div>
        )
    }
}

export default LoginPage;