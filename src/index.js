import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'
import store from './store'

console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe( () => 
    console.log('State after dispatch: ', store.getState())
)

// action object consists of action.type, action.payload fields

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions'})
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers'})
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores'})

/***************************************************************
 * what happens when every time we call store.dispatch(action)?*
 ***************************************************************/

 /**
  * 1. The store calls rootReducer(state, acton)
  * 2. rootReducer calls slice reducers inside of itself 
  *    - (todoReducer(state.todos, action))
  *    - (filtersReducer(state.filters, action))
  * 3. The store saves the new state value inside
  * 4. The store calls all the listener subscription callbacks
  */


store.dispatch({ type: 'todos/todoToggled', payload: 'Learn about 0'})
store.dispatch({ type: 'todos/todoToggled', payload: 'Learn about 1'})

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active'})
store.dispatch({ 
  type: 'filters/statusFilterChanged', 
  payload: 'Active'
})

unsubscribe()


store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store'})


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

