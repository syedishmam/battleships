import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {signIn, signOut} from '../../actions';
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

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

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
                    <button onClick={this.onSignInClick} className="btn btn-danger">
                        <img className="googleIcon" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon"/>
                        Sign in With Google
                    </button> <br />
                    <Link to={`/menu`} className="btn btn-info guestButtonWidth">Continue as Guest</Link>
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
    return {isSignedIn: state.user.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);