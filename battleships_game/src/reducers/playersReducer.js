export default (state = [
    {
      username:'p_one',
      previous_moves: {},
      tilesShot:{},
      ships:[
        {
          name:'carrier_one',
          alive: true,
          position:'vertical',
          tiles: [1,9,17]
        },
        {
          name:'frigate_one',
          alive: true,
          position:'horizontal',
          tiles: [13,14,15]
        }
      ]  
    },
    {
      username:'p_two',
      previous_moves: {},
      tilesShot:{},
      ships:[
        {
          name:'carrier_two',
          alive: true,
          position:'vertical',
          tiles: [25,33,41]
        },
        {
          name:'frigate_two',
          alive: true,
          position:'horizontal',
          tiles: [35,36,37]
        }
      ]  
    }
  ]) => {
    return {...state}
}