import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_LAST = "REMOVE_LAST";
export const ADD_RANDOM = "ADD_LAST";


export const addTodoAction = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodoAction = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId
});
export const removeLastAction = (todo) => ({
  type: REMOVE_LAST,
  payload: todo
});
export const addRandomAction = (todo) => ({
  type: ADD_RANDOM,
  payload: todo
});

const initialState = {
  todos: [],
};


function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] }
    }
    case REMOVE_TODO: {
      const todoIndex = action.payload;
      const updatedTodos = state.todos.filter((todo, index) => index !== todoIndex)
      return { ...state, todos: updatedTodos }
    }
    case REMOVE_LAST: {
      const updatedTodos = state.todos.pop()
      return { ...state, todos: updatedTodos }
    }
    default: {
      return state;
    }
  }
}

export const store = createStore(
  todoReducer,
  composeWithDevTools()
  // other store enhancers if any
);
