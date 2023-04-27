import ApiUrl from './ApiUrl';
import instance from '.';

export const getTodoData = async () => {
  const todoArr = await instance.get(ApiUrl.todo);
  return todoArr;
};

export const removeTodo = 'aa';
