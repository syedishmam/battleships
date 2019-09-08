import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchAllPlayerStats} from '../../../actions';
import './GlobalStats.css';

class GlobalStats extends React.Component {
    componentDidMount() {
        this.props.fetchAllPlayerStats();
    }

<<<<<<< HEAD
    componentDidUpdate() {
        this.mapAllPlayerUserIds();
    }

    mapAllPlayerUserIds() {
        const playerIds = [];
        if(this.props.allPlayerStats) {
            this.props.allPlayerStats.map(player => {
                playerIds.push(player.id);
                console.log(playerIds);
            }); 
        } else {
            console.log('Loading Player Stats...');
        }
    }

=======
>>>>>>> df4822971c26d3054d7afddb5d0d7af4bb7889d7
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