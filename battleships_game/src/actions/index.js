import db from '../apis/stats';

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

export const shootTile = (x) => {
  return {
    type: 'SHOOT_TILE',
    payload: x
  }
}

export const fetchAllPlayerStats = () => async (dispatch) => {
  const response = await db.get(`/playerStats`);
  dispatch({type: 'FETCH_ALL_PLAYER_STATS', payload: response.data});
}

export const fetchPlayerStats = (id) => async (dispatch) => {
  const response = await db.get(`/playerStats/${id}`)
  dispatch({type: 'FETCH_PLAYER_STATS', payload: response.data});
}

export const fetchGlobalStats = () => async (dispatch) => {
  //const response = await globalStats.get(`/globalStats`);
}