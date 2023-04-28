import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TodoProps } from '../@types/response';
import SingleTodo from '../components/todo/SingleTodo';
import CreateTodo from '../components/todo/CreateTodo';
import { removeTodo } from '../api/todo';
import useInput from '../hooks/useInput';

const TodoList = () => {
  const [todos, setTodos] = useState<TodoProps[] | null>(useLoaderData() as TodoProps[]);
  const { form, onChangeForm, setForm, clear } = useInput({
    id: undefined,
    todo: '',
    isCompleted: false,
    userId: 0,
  });
  const addNewTodo = (newTodo: TodoProps) => {
    setTodos((prev) => {
      if (!prev) return prev;
      return [...prev, newTodo];
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

  const onClickDelete = async (id: number) => {
    await removeTodo(id);
    setTodos((prevTodos) => {
      if (!prevTodos) return prevTodos;
      return prevTodos.filter((prevTodo) => prevTodo.id !== id);
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: 'auto' }}>
        <CreateTodo addNewTodo={addNewTodo} />
        <ul style={{ paddingLeft: '0px' }}>
          {todos &&
            todos?.map((todo: TodoProps) => (
              <SingleTodo
                key={todo.id}
                todo={todo}
                updateRevisedTodo={updateRevisedTodo}
                onClickDelete={onClickDelete}
                form={form}
                onChangeForm={onChangeForm}
                setForm={setForm}
                clear={clear}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
