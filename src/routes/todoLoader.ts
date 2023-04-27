import { getTodoData } from '../api/todo';

export default async function todoLoader() {
  try {
    const todoArr = await getTodoData();
    return todoArr;
  } catch (err) {
    if (err instanceof Error) alert(err.message);
  }
  return undefined;
}
