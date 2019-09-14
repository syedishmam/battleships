export default (state = [],action) => {
  switch(action.type){
    case 'ADD_TILE':
      return [...state,{owner:action.owner, number:action.number}]
    case 'SHOOT_TILE':
      // UDPATE THE SPECIFIC TILE 
      console.log(state[action.number])
      return state
    default:
      return state
  }
}
