export const signIn = (userId) => {
  return {
      type: 'SIGN_IN',
      payload: userId
  }
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