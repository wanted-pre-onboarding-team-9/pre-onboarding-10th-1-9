import { useState } from 'react';
import { AuthProps, TodoProps } from '../@types/response';

type FormProps = AuthProps | TodoProps;

export default function useInput(initialState: FormProps) {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) return;

    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const clear = () => setForm(initialState);
  return { form, onChangeForm, setForm, clear };
}
