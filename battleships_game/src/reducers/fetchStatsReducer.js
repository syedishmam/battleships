export default (state = {
    currentPlayerStats: null,
    allPlayerStats: null
}, action) => {
    switch(action.type) {
        case 'FETCH_PLAYER_STATS': 
            return {...state, currentPlayerStats: action.payload};
        
        case 'FETCH_ALL_PLAYER_STATS':
            return {...state, allPlayerStats: action.payload};

        default:
            return state;
    }
}