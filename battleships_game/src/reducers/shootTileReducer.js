export default (state={},action) => {
  switch(action.type){
    case 'SHOOT_TILE':
      console.log('reduced')
      return {
        ...state, cors:action.payload
      }
    default:
      return state
  }
}