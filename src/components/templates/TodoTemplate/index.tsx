'use client';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
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

/**
 * TodoTemplate
 * @returns {JSX.Element}
 */
export const TodoTemplate = () => {
  /* state定義 */
  const { originalTodoList, setOriginalTodoList } = useContext(TodoContext);
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const router = useRouter();

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


  /* 詳細ページ遷移関数 */
  const linkToDetailPage = (targetId: number) => router.push(`/todo/detail/${targetId}`);

  /* 編集ページ遷移関数 */
  const linkToEditPage = (targetId: number) => router.push(`/todo/edit/${targetId}`);




  return (
    <>
      <section className={styles.common}>
        <nav>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href='/todo'>Top</Link>
            </li>
            <li className={styles.item}>
            <Link href='/todo/create'>Create</Link>
            </li>
          </ul>
        </nav>
      </section>
      <h1 className={styles.title}>TodoList</h1>
      <div className={styles.common}>
        <div className={styles.area}>
          <input className={styles.input} type={"text"} placeholder={"Search Keyword"} value={searchKeyWord} onChange={handleChangeSearchKeyword}/>
        </div>
        <div className={styles.area}>
          <ul className={styles.todolist}>
            {
              showTodoList.length > 0 && (
                showTodoList.map((todo: TodoType) => (
                  <li className={styles.todoitem} key={todo.id}>
                  <span className={styles.task}>{todo.title}</span>
                  <div className={styles.todo_top_icons}>
                    <div className={styles.icon_wrapper}>
                        <FontAwesomeIcon icon={faFile} size='lg' onClick={() => linkToDetailPage(todo.id)}/>
                      </div>
                      <div className={styles.icon_wrapper}>
                        <FontAwesomeIcon icon={faPenToSquare} size='lg' onClick={() => linkToEditPage(todo.id)}/>
                      </div>
                      <div className={styles.icon_wrapper}>
                        <FontAwesomeIcon icon={faTrashCan} size='lg' />
                      </div>
                  </div>
                </li>
                ))
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}