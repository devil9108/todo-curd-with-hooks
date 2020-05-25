import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, todo: "Learn React Hooks", status: false },
    { id: 2, todo: "Recall JavaScript", status: false },
    { id: 3, todo: "Recall CSS and HTML", status: true },
  ],
  currentTodo: {},
});

export default TodosContext;
