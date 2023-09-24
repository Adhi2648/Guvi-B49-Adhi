import React from "react";
import { useTodoState } from "./useTodoState";

const TodoList = () => {
  const { todos, deleteTodo, updateTodo } = useTodoState();
  console.log(todos);

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleUpdateTodo = (id, todo) => {
    updateTodo(id, todo);
  };

  const handleStatusChange = (id, newStatus) => {
    updateTodo(id, { status: newStatus });
  };

  const renderTodoList = () => {
    return todos.map((todo) => (
      <div className="card" key={todo.id}>
        <div className="card-header">
          <h3>{todo.taskName}</h3>
          <p>{todo.description}</p>
        </div>
        <div className="card-footer">
          <select
            value={todo.status}
            onChange={(e) => handleStatusChange(todo.id, e.target.value)}
          >
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          <button onClick={() => handleUpdateTodo(todo.id, todo)}>
            Update
          </button>
        </div>
      </div>
    ));
  };

  return <div>{renderTodoList()}</div>;
};

export default TodoList;
