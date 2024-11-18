/**
 * TextAreaForm
 *
 * @package atoms
 */
import styles from './styles.module.css';

interface TextAreaFormProps {
  className: string;
  placeholder?: string;
  TextAreaValue: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

/**
 * @param {TextAreaFormProps} props
 * @returns {JSX.Element}
 */
export const TextAreaForm = (props: TextAreaFormProps) => {
  const {
    className,
    placeholder = '',
    TextAreaValue,
    onChange,
    readOnly = false,
  } = props;

  return (
    <textarea
      placeholder={placeholder}
      className={styles.textarea}
      value={TextAreaValue}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};
