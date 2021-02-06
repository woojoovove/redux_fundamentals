// const initialState = {
//     todos: [
//         {
//             id: 0,
//             text: 'Learn React', 
//             completed: true
//         },
//         {
//             id: 1,
//             text: 'Learn Redux', 
//             completed: false,
//             color: 'purple'
//         },
//         {
//             id: 2,
//             text: 'Learn Redux',
//             completed: false,
//             color: 'blue'
//         }
//     ],
    
//     filter: {
//         status: 'All',
//         colors: []
//     }
// }

// function nextTodoId(todos) {
//     const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
//     return maxId + 1
// }

  
// export default function appReducer(state = initialState, action) {
//     switch (action.type) {
        
//         case 'todos/todoAdded': {
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         id: nextTodoId(state.todos),
//                         text: action.payload,
//                         completed: false
//                     }
//                 ]
//             }
//         }

//         case 'todos/todoToggled': {
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         completed: true
//                     }
//                 ]
//             }
//         }

//         case 'filters/statusFilterChanged': {
//             return {

//                 ...state,
//                 filters: {

//                     ...state.filters,
//                     status: action.payload
        
//                 }
//             }
                
//         }
        
//         default:
//             return state

//     }
// }
import { combineReducers } from 'redux'
import todoReducer from './features/todos/todoSlice'
import filtersReducer from './features/filters/filtersSlice'

// export default function rootReducer(state = {}, action) {
//     return {
//         todos: todoReducer(state.todos, action),
//         filters: filtersReducer(state.filters, action)
//     }
// }

const rootReducer = combineReducers({
    // {key for your state} : {Reducer assigned to handle the state}
    todos: todoReducer,
    filters: filtersReducer
})

export default rootReducer


