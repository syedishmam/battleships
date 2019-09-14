import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchAllPlayerStats} from '../../../actions';
import './GlobalStats.css';

class GlobalStats extends React.Component {
    state = {rankings: null};

    componentDidMount() {
        this.props.fetchAllPlayerStats();
    }

    componentDidUpdate() {
        this.orderAllPlayersByWins();
    }

    placeAllPlayersInArray() {
        let players = [];
        for(let i = 0; i < this.props.allPlayerStats.length; i++) {
            players.push(this.props.allPlayerStats[i]);
        }
        return players;  
    }

    orderAllPlayersByWins() {
        if(this.state.rankings === null) {
            let players = this.placeAllPlayersInArray();
            players.sort((a, b) => {return b.stats[0].wins - a.stats[0].wins;});
            console.log(players);
            this.setState({rankings: players});
        }
    }

    renderStatsTable() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th colSpan="2">Rankings</th>
                    </tr>
                    <tr>
                        <th className="rankingNumericalPosition">1.</th>
                        <th><Link to={`/player-stats/`}>Ish</Link></th>
                    </tr>
                    <tr>
                        <th className="rankingNumericalPosition">2.</th>
                        <th><a href="/">Niaz</a></th>
                    </tr>
                    <tr>
                        <th className="rankingNumericalPosition">3.</th>
                        <th><a href="/">Bob</a></th>
                    </tr>
                    <tr>
                        <th className="rankingNumericalPosition">4.</th>
                        <th><a href="/">Tom</a></th>
                    </tr>
                    <tr>
                        <th className="rankingNumericalPosition">5.</th>
                        <th><a href="/">Bill</a></th>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                <div className="display-1 title text-center">Global Stats</div>
                {this.renderStatsTable()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {allPlayerStats: state.stats.allPlayerStats}
}

export default connect(mapStateToProps, {fetchAllPlayerStats})(GlobalStats);