export default (state={},action) => {
  switch(action.type){
    case 'SHOOT_TILE':
      return {
        ...state, cors:action.payload
      }
    default:
      return state
  }
}