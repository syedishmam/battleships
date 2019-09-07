import React from 'react';

import './GlobalStats.css';

class GlobalStats extends React.Component {
    renderStatsTable() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th colSpan="2">Rankings</th>
                    </tr>
                    <tr>
                        <th className="rankingNumericalPosition">1.</th>
                        <th><a href="/">Ish</a></th>
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

export default GlobalStats;