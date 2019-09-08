import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './LoginStyles.css';

class MenuOptions extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/game`} className="btn btn-primary menuButton">vs A.I</Link> <br/>
                <Link to={`/game`} className="btn btn-primary menuButton">vs Player</Link> <br/>
                <Link to={`/player-stats/${this.props.userId}`} className="btn btn-primary menuButton">Your Stats</Link> <br/>
                <Link to={`/global-stats`} className="btn btn-primary menuButton">Global Stats</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {userId: state.user.userId}
}

export default connect(mapStateToProps)(MenuOptions);