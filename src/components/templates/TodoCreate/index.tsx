'use client'
/**
 * TodoCreateTemplate
 *
 * @package templates
 */
import InputForm from '@/components/atoms/InputForm';
import styles from './styles.module.css';
import { useTodoCreate } from '@/hooks/TodoCreate';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';

const TodoCreateTemplate = () => {
  const {
    inputTitle,
    textareaContent,
    handleInputTitleChange,
    handleTextareaContentChange,
    handleAddTodo
  } = useTodoCreate();


  return (
    <>
      <h1 className={styles.title}>Create Todo</h1>
      <form className={styles.container}>
        <div className={styles.area}>
          <InputForm className={styles.input} placeholder={"Title"} InputValue={inputTitle} onChange={handleInputTitleChange}/>
        </div>
        <div className={styles.area}>
          <TextAreaForm placeholder={"Content"} className={styles.textarea} TextAreaValue={textareaContent} onChange={handleTextareaContentChange}/>
        </div>
        <div className={styles.area}>
          <button type={"submit"} className={styles.button} onClick={handleAddTodo}>
            Create Todo
          </button>
        </div>
      </form>

    </>
  )
}

export default TodoCreateTemplate