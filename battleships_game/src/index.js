import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

const initial_state = {
  players:[
    {
      username:'p_one',
      previous_move: [0,0],
      ships:[
        {
          name:'carrier_one',
          alive: true,
          position:'vertical',
          coordinates: [
            [1,2],
            [1,3],
            [1,4]
          ]
        },
        {
          name:'frigate_one',
          alive: true,
          position:'horizontal',
          coordinates: [
            [1,6],
            [2,6],
            [3,6]
          ]
        }
      ]  
    },
    {
      username:'p_two',
      previous_move: [1,1],
      ships:[
        {
          name:'carrier_two',
          alive: true,
          position:'vertical',
          coordinates: [
            [4,7],
            [4,8],
            [4,9]
          ]
        },
        {
          name:'frigate_two',
          alive: true,
          position:'horizontal',
          coordinates: [
            [4,6],
            [5,6],
            [6,6]
          ]
        }
      ]  
    }
  ]
}

const store = createStore(
    reducers,
    initial_state
)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

