import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TodoProps } from '../@types/response';
import SingleTodo from '../components/todo/SingleTodo';

const TodoList = () => {
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [todos, setTodos] = useState<TodoProps[] | null>(useLoaderData() as TodoProps[]);

  const filterDeletedTodo = (targetId: number) => {
    setTodos((prevTodos) => {
      if (!prevTodos) return prevTodos;
      return prevTodos.filter((prevTodo) => prevTodo.id !== targetId);
    });
  };
  const updateRevisedTodo = (targetId: number, newTodo: TodoProps) => {
    setTodos((prevTodos) => {
      if (!prevTodos) return prevTodos;
      const newTodos = prevTodos.map((prevTodo) => {
        return {
          ...prevTodo,
          todo: prevTodo.id === targetId ? newTodo.todo : prevTodo.todo,
        };
      });
      return newTodos;
    });
  };

  return (
    <div>
      {todos &&
        todos.map((todo: TodoProps) => {
          return <SingleTodo editingTodoId={editingTodoId} todoData={todo} />;
        })}
    </div>
  );
};

export default TodoList;
