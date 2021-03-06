import React from 'react';

import './PlayerStats.css';

class PlayerStats extends React.Component {

    render() {
        return (
            <div>
                <div className="display-1 title text-center">{this.props.title}</div>
                {this.props.renderTable()}
            </div>
        )
    }
}

export default PlayerStats;