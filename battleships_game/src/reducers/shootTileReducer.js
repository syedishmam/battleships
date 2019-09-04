export default (state={test:1},action) => {
  switch(action){
    case 'SHOOT_TILE':
      console.log('gotee')
      return state
    default:
      console.log('shoot reducer')
      return state
  }
}