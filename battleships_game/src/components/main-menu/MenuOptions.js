import React from 'react';
import {Link} from 'react-router-dom';

class MenuOptions extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/game`} className="btn btn-primary">vs AI</Link> <br/>
                <Link to={`/game`} className="btn btn-primary">vs Player</Link> <br/>
                <Link to={`/game`} className="btn btn-primary">Your Stats</Link> <br/>
                <Link to={`/game`} className="btn btn-primary">Global Stats</Link>
            </div>
        )
    }
}

export default MenuOptions;