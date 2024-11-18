/**
 * InputForm
 * 
 * @package atoms
 */
import { ChangeEvent, FC } from "react";
import styles from "./styles.module.css";
interface InputFormProps {
  placeholder?: string;
  InputValue: string; 
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

/**
 * @param {InputFormProps} props 
 * @returns {JSX.Element}
 */
const InputForm: FC<InputFormProps> = (props) => {
  const {placeholder = '', InputValue, onChange, readOnly = false} = props;

  return (
    <input 
      type={"text"}
      className={styles.input}
      placeholder={placeholder}
      value={InputValue}
      onChange={onChange}
      readOnly={readOnly}
    />
  )
}

export default InputForm