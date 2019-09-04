export default (state={},action) => {
  switch(action.type){
    case 'SHOOT_TILE':
      console.log(action.payload)
      return {
        cors: action.payload
      }
    default:
      return state
  }
}