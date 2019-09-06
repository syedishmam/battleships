import React from 'react';
import {connect} from 'react-redux';

import {fetchPlayerStats} from '../../../actions';

import './PlayerStats.css';

class PlayerStats extends React.Component {
    getPlayerStats() {
        this.props.fetchPlayerStats(this.props.userId);
    }

    renderStatsTable() {
        this.getPlayerStats();
        return (
            <table className="text-center">
                <tbody>
                    <tr>
                        <th>Stat</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <th>Wins</th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <th>Losses</th>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>WLR</th>
                        <th>1.66</th>
                    </tr>
                    <tr>
                        <th>Ships Destroyed</th>
                        <th>14</th>
                    </tr>
                    <tr>
                        <th>Hits</th>
                        <th>35</th>
                    </tr>
                    <tr>
                        <th>Misses</th>
                        <th>54</th>
                    </tr>
                    <tr>
                        <th>HMR</th>
                        <th>0.64</th>
                    </tr>
                </tbody>
        </table>
        )
    }

    render() {
        return (
            <div>
                <div className="display-1 title text-center">Player Stats</div>
                {this.renderStatsTable()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.user.userId,
        currentPlayerStates: state.stats.currentPlayerStates
    }
}

export default connect(mapStateToProps, {fetchPlayerStats})(PlayerStats);