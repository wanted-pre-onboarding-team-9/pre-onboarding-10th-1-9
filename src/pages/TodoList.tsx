import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TodoProps } from '../@types';

function TodoList() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoProps[] | unknown>(useLoaderData());

  return <>todolist</>;
}
export default TodoList;
