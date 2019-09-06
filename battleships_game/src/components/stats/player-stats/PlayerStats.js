import React from 'react';

import './PlayerStats.css';

class PlayerStats extends React.Component {
    render() {
        return (
            <div>
                <div className="display-1 title text-center">Player Stats</div>
                <table>
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
            </div>
        )
    }
}

export default PlayerStats;