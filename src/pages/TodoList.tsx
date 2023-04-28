import { useEffect, useState } from 'react';
import { Todo } from '../@types/todo';
import SingleTodo from '../components/todo/SingleTodo';
import CreateTodo from '../components/todo/CreateTodo';
import { getTodoData, removeTodo } from '../api/todo';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<Todo['id'] | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getTodoData();
      setTodos(data);
    })();
  }, []);

  const addNewTodo = (newTodo: Todo) => {
    setTodos((prev) => {
      if (!prev) return prev;
      return [...prev, newTodo];
    });
  };

  const updateRevisedTodo = (targetId: Todo['id'], newTodo: Todo) => {
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

  const onClickDelete = async (id: Todo['id']) => {
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
          {todos.map((todo: Todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              updateRevisedTodo={updateRevisedTodo}
              onClickDelete={onClickDelete}
              isEditing={editingId === todo.id}
              setEditingId={setEditingId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
