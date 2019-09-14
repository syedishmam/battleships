export default (state = [],action) => {
  switch(action.type){
    case 'ADD_TILE':
      return [...state,{owner:action.owner, number:action.number}]
    case 'SHOOT_TILE':
      var num = action.number
      var status = action.status
      var new_state = [...state]
      new_state[num].status = status 
      return new_state
    default:
      return state
  }
}
