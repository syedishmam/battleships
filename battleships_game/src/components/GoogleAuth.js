import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1060584970583-k247tknjfq2qp4lm9ob0k0qbhj7svtjm.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            
        }
    }

    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth;