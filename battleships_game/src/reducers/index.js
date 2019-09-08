import {combineReducers} from 'redux';

import signInAndOutReducer from './signInAndOutReducer';
import playersReducer from './playersReducer';
import shootTileReducer from './shootTileReducer';
import continueAsGuest from './continueAsGuestReducer';
import fetchStatsReducer from './fetchStatsReducer';

export default combineReducers({
    players: playersReducer,
    user: signInAndOutReducer,
    shootTile: shootTileReducer,
    isGuest: continueAsGuest,
    stats: fetchStatsReducer
});