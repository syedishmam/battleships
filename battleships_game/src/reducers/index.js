import {combineReducers} from 'redux';

import signInAndOutReducer from './signInAndOutReducer';
import playersReducer from './playersReducer';
import tileReducer from './tileReducer';
import continueAsGuest from './continueAsGuestReducer';
import fetchStatsReducer from './fetchStatsReducer';
import setupReducer from './setupReducer';

export default combineReducers({
    players: playersReducer,
    user: signInAndOutReducer,
    tiles: tileReducer,
    isGuest: continueAsGuest,
    stats: fetchStatsReducer,
    setup: setupReducer
});