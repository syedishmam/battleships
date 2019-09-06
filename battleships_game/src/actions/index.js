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

export const getPlayerStats = (userId) => async (dispatch) => {
  dispatch({type: 'GET_PLAYER_STATS', payload: userId});
}