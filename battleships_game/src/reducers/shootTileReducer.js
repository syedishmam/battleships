export default (state= {shotTiles:null},action) => {
  if (action.type === 'SHOOT_TILE'){
    console.log(action.payload)
    return state
  }
  else{
    return state
  }
}
