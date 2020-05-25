import React, { useState, useContext, useEffect } from "react";
import TodosContext from "../Context";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.todo) {
      setTodo(currentTodo.todo);
    } else {
      setTodo("");
    }
  }, [currentTodo.id]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodo.id) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row m-3 justify-content-center">
        <div className="col-4 text-center">
          <input
            type="text"
            className="form-control"
            value={todo}
            placeholder="Enter New Todo..."
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
}
