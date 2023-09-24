import React, { useState } from "react";

export const useTodoState = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return todo;
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
