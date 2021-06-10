import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// ⬇ What we need to import
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// ⬇ The Reducers
const customerOrder = (state = [], action) => {
  if(action.type === 'ADD_PIZZA'){
      console.log(action.payload)
      return [...state, action.payload]
  }
  if(action.type === 'REMOVE_PIZZA'){
      console.log(action.payload)
      const matchPizza = employee => employee.idNumber !== action.payload.idNumber;
      return state.filter(matchPizza)
  }
  if(action.type === 'REMOVE_ORDER'){
      return []
  }
  return state;
}

const customerInfo = (state = [], action) => {
  if(action.type === 'ADD_CUSTOMER'){
    console.log(action.payload)
    return [...state, action.payload]
  }
  if(action.type === 'REMOVE_CUSTOMER'){
      return []
  }
  return state;
}


// ⬇ Creating our store
const store = createStore(
    combineReducers({
      // ⬇ Reducers go here
      customerOrder, customerInfo
    }),
    applyMiddleware(
      logger
    )
)
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
