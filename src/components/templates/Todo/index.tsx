'use client';
/**
 * TodoTemplate
 *
 * @package templates
 */
import styles from './styles.module.css';
import Link from 'next/link';
import { EventType } from '@/interfaces/Event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '@/contexts/TodoContext';
import { TodoType } from '@/interfaces/Todo';
import { useRouter } from 'next/router';
import InputForm from '@/components/atoms/InputForm';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import TodoList from '@/components/organisms/TodoList';

/**
 * TodoTemplate
 * @returns {JSX.Element}
 */
export const TodoTemplate = () => {
  /* state定義 */
  const { originalTodoList, setOriginalTodoList } = useContext(TodoContext);
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  // const router = useRouter();

  /* action定義 */
  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSearchKeyword: EventType['onChangeInput'] = useCallback(
    (e) => setSearchKeyWord(e.target.value),
    []
  )

  /**
   * 表示用TodoList
   */
    const showTodoList = useMemo(() => {
      return originalTodoList.filter((todo) => {
        const regexp = new RegExp('^' + searchKeyWord, 'i');
        return todo.title.match(regexp);
      });
    }, [searchKeyWord, originalTodoList]);

    
  /**
   * todoの削除処理
   * @param { number } targetId
   * @param { string } taskName
   */
  const handleDeleteTodoTask = (targetId: number, taskName: string) => {
    if (window.confirm(`「${taskName}」を削除していいですか？`)) {
      const newTodoList = originalTodoList.filter(
        (todo) => todo.id !== targetId
      );
      setOriginalTodoList(newTodoList);
    }
  };


  return (
    <>
      <h1 className={styles.title}>TodoList</h1>
      <div className={styles.common}>
        <div className={styles.area}>
          <InputForm 
            className={styles.input}
            placeholder={"Search Keyword"}
            InputValue={searchKeyWord}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        <div className={styles.area}>
          {/* <ul className={styles.todolist}>
            {
              showTodoList.length > 0 && (
                showTodoList.map((todo: TodoType) => (
                  <li className={styles.todoitem} key={todo.id}>
                  <span className={styles.task}>{todo.title}</span>
                  <div className={styles.todo_top_icons}>
                    <Link href={`/todo/detail/${todo.id}`} className={styles.icon_wrapper}>
                        <FontAwesomeIcon icon={faFile} size='lg'/>
                      </Link>
                      <Link href={`/todo/edit/${todo.id}`} className={styles.icon_wrapper}>
                        <FontAwesomeIcon icon={faPenToSquare} size='lg'/>
                      </Link>
                      <div className={styles.icon_wrapper}>
                        <FontAwesomeIcon icon={faTrashCan} size='lg' onClick={() => handleDeleteTodoTask(todo.id, todo.title)}/>
                      </div>
                  </div>
                </li>
                ))
              )
            }
          </ul> */}
          <TodoList showTodoList={showTodoList} handleDeleteTodoTask={handleDeleteTodoTask}/>
        </div>
      </div>
    </>
  )
}