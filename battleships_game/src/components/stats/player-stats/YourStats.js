import React from 'react';
import {connect} from 'react-redux';

import PlayerStats from './PlayerStats';
import {fetchPlayerStats} from '../../../actions';

import './PlayerStats.css';

class YourStats extends React.Component {
    componentDidMount() {
        this.getPlayerStats();
    }

    //If userId prop is not null run fetchPlayerStats action else get userId from URL
    getPlayerStats() {
        if(this.props.userId) {
            this.props.fetchPlayerStats(this.props.userId);
        } else {
            this.props.fetchPlayerStats(document.URL.substring(33));
        }
    }

    renderStatsTable = () => {
        if(this.props.currentUserStats) {
            return (
                <table className="text-center">
                <tbody>
                    <tr>
                        <th>Stat</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <th>Wins</th>
                        <th>{this.props.currentUserStats.stats[0].wins}</th>
                    </tr>
                    <tr>
                        <th>Losses</th>
                        <th>{this.props.currentUserStats.stats[0].losses}</th>
                    </tr>
                    <tr>
                        <th>WLR</th>
                        <th>{this.props.currentUserStats.stats[0].WLR}</th>
                    </tr>
                    <tr>
                        <th>Ships Destroyed</th>
                        <th>{this.props.currentUserStats.stats[0].shipsDestroyed}</th>
                    </tr>
                    <tr>
                        <th>Hits</th>
                        <th>{this.props.currentUserStats.stats[0].hits}</th>
                    </tr>
                    <tr>
                        <th>Misses</th>
                        <th>{this.props.currentUserStats.stats[0].misses}</th>
                    </tr>
                    <tr>
                        <th>HMR</th>
                        <th>{this.props.currentUserStats.stats[0].HMR}</th>
                    </tr>
                </tbody>
            </table>
            )
        } else {
            return <div>Loading...</div>
        }
    }

    render() {
        return (
            <PlayerStats renderTable={this.renderStatsTable} title="Your Stats"/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.user.userId,
        currentUserStats: state.stats.currentUserStats
    }
}

export default connect(mapStateToProps, {fetchPlayerStats})(YourStats);