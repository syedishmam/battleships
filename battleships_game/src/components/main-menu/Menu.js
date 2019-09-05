import React from 'react';
import {connect} from 'react-redux';

import GoogleAuth from './GoogleAuth';
import MenuOptions from './MenuOptions';
import './LoginStyles.css'

class Menu extends React.Component {
    renderMenuOptions() {
        if(this.props.isSignedIn || this.props.isGuest) {
            return (
                <MenuOptions />
            )
        }
    }

    render() {
        return (
            <div className="mx-3">
                <h1 className="display-1 title text-center">Battleships</h1>
                <div className="text-center">
                    {this.renderMenuOptions()}
                    <GoogleAuth />
                </div>
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

export default connect(mapStateToProps)(Menu);
