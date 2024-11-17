interface TextAreaFormProps {
  className: string;
  placeholder: string;
  TextAreaValue: string; 
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaForm = (props: TextAreaFormProps) => {
  const { className, placeholder, TextAreaValue, onChange} = props;

  return (
    <textarea placeholder={placeholder} className={className} value={TextAreaValue} onChange={onChange}/>
  )
}