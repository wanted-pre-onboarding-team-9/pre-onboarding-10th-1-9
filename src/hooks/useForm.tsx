import { useEffect, useState } from 'react';

type Name = string;
type Value = React.InputHTMLAttributes<HTMLInputElement>['value'];
type Validator = (value: Value) => string | null;

const useForm = ({
  initialValues,
  validators,
}: {
  initialValues: Record<Name, Value>;
  validators?: Record<Name, Validator>;
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<Name, string>>({});
  const isError = Object.keys(errors).length !== 0;

  useEffect(() => {
    const newErrors = Object.entries(values).reduce((acc, [name, value]) => {
      const validator = validators && validators[name];
      if (typeof validator === 'function') {
        const error = validator(value);
        if (error) {
          return { ...acc, [name]: error };
        }
      }
      return acc;
    }, {});
    setErrors(newErrors);
  }, [values]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, errors, isError, onChange };
};

export default useForm;
