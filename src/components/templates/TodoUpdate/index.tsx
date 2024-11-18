'use client';
/**
 * TodoUpdate
 *
 * @package templates
 */

'use client';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import InputForm from '@/components/atoms/InputForm';
import styles from './styles.module.css';
import { useTodoEdit } from '@/hooks/TodoEdit';
import { Button } from '@/components/atoms/Button';

/**
 * @param {id: string } id
 * @return {JSX.Element}
 */
export const TodoUpdateTemplate = ({ id }: { id: string }) => {
  // hooksからstateとactionを取得
  const {
    editInputTitleValue,
    editTextareaContentValue,
    handleEditInputTitlChange,
    handleEditTextareaContentChange,
    handleUpdateTodo,
  } = useTodoEdit({ id });
  return (
    <>
      <h1 className={styles.title}>TodoEdit</h1>
      <form className={styles.contents_container}>
        <div className={styles.area}>
          <InputForm
            placeholder={'Title'}
            InputValue={editInputTitleValue}
            onChange={handleEditInputTitlChange}
          />
        </div>
        <div className={styles.area}>
          <TextAreaForm
            className={styles.textarea}
            placeholder={'Content'}
            TextAreaValue={editTextareaContentValue}
            onChange={handleEditTextareaContentChange}
          />
        </div>
        <div className={styles.area}>
          <Button
            buttonName={'Edit Todo'}
            onClick={(e) => {
              e.preventDefault();
              handleUpdateTodo(id);
            }}
          />
        </div>
      </form>
    </>
  );
};
