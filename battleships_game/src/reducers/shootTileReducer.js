export default (state= {shotTiles:null},action) => {
  if (action.type === 'SHOOT_TILE'){
    var tile_num = action.payload
    return {...state,shootTile:tile_num}
  }
  else{
    return (
      'test'
    )
  }
}
