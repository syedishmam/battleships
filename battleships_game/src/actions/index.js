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

export const addTile = (owner,number,status) => {
  return{
    type: 'ADD_TILE',
    owner: owner,
    number: number,
    status:0,
  }
}

export const shootTile = (number,status) => {
  return {
    type: 'SHOOT_TILE',
    number: number,
    status: status
  }
}

export const finishSetup = () => {
  return{
    type: 'FINISH_SETUP'
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

export const storeSelectedPlayerData = (user) => {
  return {
    type: 'STORE_SELECTED_PLAYER_DATA',
    payload: user
  }
}