import { createStore } from 'redux'

const  INITIAL_STATE = {
  data: []
}

// REDUCER
function todo(state, action) {
  switch(action.type) {
    case 'ADD_TASK': 
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }
    default:
      return state
  }
}

const store = createStore(todo)

export default store