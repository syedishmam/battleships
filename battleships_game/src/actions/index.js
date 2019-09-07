import playerStats from '../apis/playerStats';

export const continueAsGuest = (boolean) => {
  return {
    type: 'CONTINUE_GUEST',
    payload: boolean
  }
}

export const signIn = (userId) => (dispatch) => {
  dispatch({type: 'SIGN_IN', payload: userId});
}

export const signOut = () => {
  return {
      type: 'SIGN_OUT'
  }
}

export const shootTile = (x,y) => {
  return {
    type: 'SHOOT_TILE',
    payload: {x,y}
  }
}

export const fetchPlayerStats = (id) => async (dispatch) => {
  const response = await playerStats.get(`/playerStats/${id}`)
  dispatch({type: 'FETCH_PLAYER_STATS', payload: response.data});
}

export const fetchGlobalStats = () => async (dispatch) => {
  //const response = await globalStats.get(`/globalStats`);
}