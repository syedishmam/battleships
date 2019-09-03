import {combineReducers} from 'redux';

import signInAndOutReducer from './signInAndOutReducer';
import playersReducer from './playersReducer';

export default combineReducers({
    players: playersReducer,
    user: signInAndOutReducer
});