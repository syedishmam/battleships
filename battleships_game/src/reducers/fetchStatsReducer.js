export default (state = {
    currentUserStats: null,
    allPlayerStats: null,
    selectedPlayerStats: null
}, action) => {
    switch(action.type) {
        case 'FETCH_PLAYER_STATS': 
            return {...state, currentUserStats: action.payload};
        
        case 'FETCH_ALL_PLAYER_STATS':
            return {...state, allPlayerStats: action.payload};

        case 'STORE_SELECTED_PLAYER_STATS':
            return {...state, selectedPlayerStats: action.payload};

        default:
            return state;
    }
}