interface TextAreaFormProps {
  className: string;
  placeholder?: string;
  TextAreaValue: string; 
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

export const TextAreaForm = (props: TextAreaFormProps) => {
  const { className, placeholder = '', TextAreaValue, onChange, readOnly = false} = props;

  return (
    <textarea placeholder={placeholder} className={className} value={TextAreaValue} onChange={onChange} readOnly={readOnly}/>
  )
}