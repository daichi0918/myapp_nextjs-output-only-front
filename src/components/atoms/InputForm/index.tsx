import { read } from "fs";
import { ChangeEvent, FC } from "react"

interface InputFormProps {
  className: string;
  placeholder?: string;
  InputValue: string; 
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const InputForm: FC<InputFormProps> = (props) => {
  const {className, placeholder = '', InputValue, onChange, readOnly = false} = props;

  return (
    <input 
      className={className}
      placeholder={placeholder}
      value={InputValue}
      onChange={onChange}
      readOnly={readOnly}
    />
  )
}

export default InputForm