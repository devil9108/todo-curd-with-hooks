import React, { useContext } from "react";

import TodosContext from "../Context";

export default function TodosList() {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <div className="container">
      <div className="row text-center m-3">
        <div className="col">
          <h1>{state.todos.length} ToDos</h1>
        </div>
      </div>
      {state.todos.map((todo) => (
        <div className="card border-dark m-3" key={todo.id}>
          <div className="card-body  d-flex p-1">
            <span
              className={`mr-auto p-1 font-weight-bold align-self-center ${
                todo.status ? "text-secondary" : "text-success"
              }`}
              style={{
                cursor: "pointer",
                textDecoration: todo.status ? "line-through" : "",
              }}
              onDoubleClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo })
              }
            >
              {todo.todo}
            </span>
            <span className="p-1">
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => dispatch({ type: "EDIT_TODO", payload: todo })}
              >
                <img
                  src="https://icon.now.sh/mode_edit/00f"
                  style={{ height: "25px", width: "25px" }}
                  alt="Edit"
                />
              </button>
              <button
                type="button"
                className="btn btn-link ml-3 p-0"
                onClick={() => dispatch({ type: "DELETE_TODO", payload: todo })}
              >
                <img
                  src="https://icon.now.sh/trash/f00"
                  style={{ height: "25px", width: "25px" }}
                  alt="delete"
                />
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
