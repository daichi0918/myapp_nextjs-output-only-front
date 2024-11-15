import { ChangeEvent, FC } from "react"

interface InputFormProps {
  className: string;
  placeholder: string;
  InputValue: string; 
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: FC<InputFormProps> = (props) => {
  const {className, placeholder, InputValue, onChange} = props;

  return (
    <input 
      className={className}
      placeholder={placeholder}
      value={InputValue}
      onChange={onChange}
    />
  )
}

export default InputForm