import { v4 as uuidv4 } from "uuid";

export default function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex((t) => t.todo === action.payload) > -1) {
        return state;
      }
      const newTodo = {
        id: uuidv4(),
        todo: action.payload,
        status: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case "TOGGLE_TODO": {
      const todos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, status: !action.payload.status }
          : { ...t }
      );
      return {
        ...state,
        todos: todos,
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        currentTodo: action.payload,
      };
    }
    case "UPDATE_TODO": {
      let updatedTodo = { ...state.currentTodo, todo: action.payload };
      let todos = state.todos;
      let index = todos.findIndex((t) => t.id === state.currentTodo.id);
      todos.splice(index, 1, updatedTodo);
      return {
        ...state,
        todos: [...todos],
        currentTodo: {},
      };
    }
    case "DELETE_TODO": {
      const todos = state.todos.filter((t) => t.id !== action.payload.id);
      const isTodoDeleted =
        action.payload.id === state.currentTodo.id ? {} : state.currentTodo;
      return {
        ...state,
        todos: todos,
        currentTodo: isTodoDeleted,
      };
    }
    default:
      return state;
  }
}
