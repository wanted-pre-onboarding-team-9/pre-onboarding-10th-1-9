import { useState } from 'react';
import { Todo } from '../@types/todo';

// type FormProps = AuthProps | Todo;

export default function useInput(initialState: Todo) {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) return;

    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const clear = () => setForm(initialState);
  return { form, onChangeForm, setForm, clear };
}
