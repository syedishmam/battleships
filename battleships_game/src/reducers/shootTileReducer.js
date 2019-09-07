export default (state= {shotTiles:null},action) => {
  if (action.type === 'SHOOT_TILE'){
    return {...state,shootTile(shotTiles)}
  }
  else{
    return state
  }
}
