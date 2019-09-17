import React from 'react';
import {connect} from 'react-redux';

import {storeSelectedPlayerData, fetchAllPlayerStats} from '../../../actions';
import PlayerStats from './PlayerStats';

class SelectedPlayerStats extends React.Component {
    componentDidMount() {

    }

    /*If storeSelectedPlayerData is not triggered by onClick in GlobalStats component in
    (in cases such as refreshing page or being linked directly to url /selected-player)
    this function is called to trigger it*/
    //Note: By delegating action call to onClick load time is faster
    //document.URL.substring(44)
    getSelectedPlayerStatsIndependently() {
        if(!this.props.player) {
            this.props.fetchAllPlayerStats();
            //TO DO: FIND userId in allPlayerStats using id in URL
            
            this.props.storeSelectedPlayerData();
        }
    }

    renderStatsTable = () => {
        if(this.props.player) {
            return (
                <table className="text-center">
                <tbody>
                    <tr>
                        <th>Stat</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <th>Wins</th>
                        <th>{this.props.player.stats[0].wins}</th>
                    </tr>
                    <tr>
                        <th>Losses</th>
                        <th>{this.props.player.stats[0].losses}</th>
                    </tr>
                    <tr>
                        <th>WLR</th>
                        <th>{this.props.player.stats[0].WLR}</th>
                    </tr>
                    <tr>
                        <th>Ships Destroyed</th>
                        <th>{this.props.player.stats[0].shipsDestroyed}</th>
                    </tr>
                    <tr>
                        <th>Hits</th>
                        <th>{this.props.player.stats[0].hits}</th>
                    </tr>
                    <tr>
                        <th>Misses</th>
                        <th>{this.props.player.stats[0].misses}</th>
                    </tr>
                    <tr>
                        <th>HMR</th>
                        <th>{this.props.player.stats[0].HMR}</th>
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
            <PlayerStats renderTable={this.renderStatsTable} title="Player Stats" />
        )
    }
}

const mapStateToProps = (state) => {
    return {player: state.selectedPlayer.data, allPlayerStats: state.stats.allPlayerStats}
}

export default connect(mapStateToProps, {storeSelectedPlayerData, fetchAllPlayerStats})(SelectedPlayerStats);