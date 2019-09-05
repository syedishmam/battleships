import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut, continueAsGuest} from '../../actions';
import './LoginStyles.css'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1060584970583-k247tknjfq2qp4lm9ob0k0qbhj7svtjm.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    /* 
        If user is guest, only display Sign In button
        If user is not guest and has not signed in, display Sign In and Continue as Guest
    */
    displayUserLogInOptions() {
        if(this.props.isGuest) {
            return (
                <div>
                    <button onClick={this.onSignInClick} className="btn btn-danger">
                        <img className="googleIcon" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon"/>
                        Sign in With Google
                    </button> <br />
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.onSignInClick} className="btn btn-danger">
                        <img className="googleIcon" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon"/>
                        Sign in With Google
                    </button> <br />
                    <button onClick={this.onContinueAsGuestClick} className="btn btn-info guestButtonWidth">Continue as Guest</button>
                </div>
            )
        }
    }

    //When button is clicked, update state
    onContinueAsGuestClick = () => {
        this.props.continueAsGuest(true);
    }

    //When Google OAuth signs in/out update state
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
            this.props.continueAsGuest(false);
        } else {
            this.props.signOut();
        }
    }

    //Sign in with Google OAuth
    onSignInClick = () => {
        this.auth.signIn();
    }

    //Sign out with Google OAuth
    onSignOutClick = () => {
        this.auth.signOut();
    }

    /*
        If user is signed in display Sign Out
        If user is signed in/is guest, run displayUserLogInOptions
    */
    renderAuthButton() {
        if(this.props.isSignedIn === null) { 
            return null
        } else if(this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="btn btn-danger">
                    Sign Out
                </button>
            )
        } else {
            return (
                <div>
                    {this.displayUserLogInOptions()}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.user.isSignedIn,
        isGuest: state.isGuest.value
    }
}

export default connect(mapStateToProps, {signIn, signOut, continueAsGuest})(GoogleAuth);