import { TextInputProps } from '../../@types/todo';
import { TextInputContainer } from './style';

const TextInput = ({
  className,
  name,
  value,
  width = '240px',
  onChange,
  placeholder,
}: TextInputProps) => {
  return (
    <TextInputContainer className={className} width={width}>
      <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </TextInputContainer>
  );
};

export default TextInput;
