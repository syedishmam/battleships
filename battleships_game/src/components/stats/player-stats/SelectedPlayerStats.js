import React from 'react';

class SelectedPlayerStats extends React.Component {
    componentDidMount() {
        this.getPlayerStats();
    }

    getPlayerStats() {
        if(this.props.userId) {
            this.props.fetchPlayerStats(this.props.userId);
        } else {
            this.props.fetchPlayerStats(document.URL.substring(35));
        }
    }

    renderStatsTable = () => {
        if(this.props.currentPlayerStats) {
            return (
                <table className="text-center">
                <tbody>
                    <tr>
                        <th>Stat</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <th>Wins</th>
                        <th>{this.props.currentPlayerStats.stats[0].wins}</th>
                    </tr>
                    <tr>
                        <th>Losses</th>
                        <th>{this.props.currentPlayerStats.stats[0].losses}</th>
                    </tr>
                    <tr>
                        <th>WLR</th>
                        <th>{this.props.currentPlayerStats.stats[0].WLR}</th>
                    </tr>
                    <tr>
                        <th>Ships Destroyed</th>
                        <th>{this.props.currentPlayerStats.stats[0].shipsDestroyed}</th>
                    </tr>
                    <tr>
                        <th>Hits</th>
                        <th>{this.props.currentPlayerStats.stats[0].hits}</th>
                    </tr>
                    <tr>
                        <th>Misses</th>
                        <th>{this.props.currentPlayerStats.stats[0].misses}</th>
                    </tr>
                    <tr>
                        <th>HMR</th>
                        <th>{this.props.currentPlayerStats.stats[0].HMR}</th>
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
            <div>SelectedPlayerStats</div>
        )
    }
}

export default SelectedPlayerStats;