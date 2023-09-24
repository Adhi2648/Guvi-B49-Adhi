import React, { useState } from "react";
import { useTodoState } from "./useTodoState";

const TodoForm = () => {
  const { addTodo } = useTodoState();

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("not completed");

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      taskName,
      description,
      status,
    };

    addTodo(todo);

    setTaskName("");
    setDescription("");
    setStatus("not completed");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="not completed">Not Completed</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
