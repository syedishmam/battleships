import playerStats from '../apis/stats';

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

export const fetchPlayerStats = (userId = 1234) => async (dispatch) => {
  const response = await playerStats.get(`/player-stats/${userId}`)
  dispatch({type: 'FETCH_PLAYER_STATS', payload: response});
}