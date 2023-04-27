import axios from 'axios';
import ApiUrl from './ApiUrl';
import instance from '.';
import { TodoProps } from '../@types/response';

export const getTodoData = async () => {
  const todoArr = await instance.get(ApiUrl.todo);
  return todoArr;
};

export const removeTodo = async (id: number) => {
  await instance.delete(`${ApiUrl.todo}/${id}`);
};

export const updateTodo = async (todo: TodoProps, isChecked: boolean) => {
  await instance.put(`${ApiUrl.todo}/${todo.id}`, {
    todo: todo.todo,
    isCompleted: isChecked,
  });
};

export const createTodoData = async (todo: string) => {
  await axios.post(ApiUrl.todo, { todo }).then((res) => {
    return res.data;
  });
};
