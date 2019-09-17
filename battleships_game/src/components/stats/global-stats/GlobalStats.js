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
        if(this.state.rankings === null) {
            this.setState({rankings: this.orderAllPlayersByWins()});
        }
    }

    //Reorganize players from database to be ordered by how many wins they have
    orderAllPlayersByWins() {
            let players = this.props.allPlayerStats;
            players.sort((a, b) => {return b.stats[0].wins - a.stats[0].wins;});
            console.log(players);
            return players;
    }

    renderStatsTable() {
        if(this.state.rankings === null) {
            return (
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="2">Rankings</th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">1.</th>
                            <th>...</th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">2.</th>
                            <th>...</th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">3.</th>
                            <th>...</th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">4.</th>
                            <th>...</th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">5.</th>
                            <th>...</th>
                        </tr>
                    </tbody>
                </table>
            )
        } else {
            return (
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="2">Rankings</th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">1.</th>
                            <th><Link to={`/selected-player-stats/${this.state.rankings[0].id}`}>{this.state.rankings[0].userName}</Link></th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">2.</th>
                            <th><Link to={`/selected-player-stats/${this.state.rankings[1].id}`}>{this.state.rankings[1].userName}</Link></th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">3.</th>
                            <th><Link to={`/selected-player-stats/${this.state.rankings[2].id}`}>{this.state.rankings[2].userName}</Link></th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">4.</th>
                            <th><Link to={`/selected-player-stats/${this.state.rankings[3].id}`}>{this.state.rankings[3].userName}</Link></th>
                        </tr>
                        <tr>
                            <th className="rankingNumericalPosition">5.</th>
                            <th><Link to={`/selected-player-stats/${this.state.rankings[4].id}`}>{this.state.rankings[4].userName}</Link></th>
                        </tr>
                    </tbody>
                </table>
            )
        }
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