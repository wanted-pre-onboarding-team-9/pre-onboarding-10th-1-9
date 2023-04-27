import { getTodoData } from '../api/todo';

export default async function todoLoader() {
  try {
    const { data } = await getTodoData();
    return data;
  } catch (err) {
    if (err instanceof Error) alert(err.message);
  }
  return undefined;
}
