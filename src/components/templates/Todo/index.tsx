'use client';
/**
 * Todo
 *
 * @package templates
 */
import styles from './styles.module.css';
import { useTodo } from '@/hooks/Todo';
import InputForm from '@/components/atoms/InputForm';
import TodoList from '@/components/organisms/TodoList';

/**
 * TodoTemplate
 * @returns {JSX.Element}
 */
export const TodoTemplate = () => {
  const {
    showTodoList,
    searchKeyWord,
    handleDeleteTodoTask,
    handleChangeSearchKeyword
  } = useTodo();
  return (
    <>
      <h1 className={styles.title}>TodoList</h1>
      <div className={styles.common}>
        <div className={styles.area}>
          <InputForm 
            placeholder={"Search Keyword"}
            InputValue={searchKeyWord}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        <div className={styles.area}>
          <TodoList showTodoList={showTodoList} handleDeleteTodoTask={handleDeleteTodoTask}/>
        </div>
      </div>
    </>
  )
}