export default (state = {
    currentPlayerStats: null
}, action) => {
    if(action.type === 'FETCH_PLAYER_STATS') {
        return {...state, currentPlayerStats: action.payload}
    } else {
        return state
    }
}