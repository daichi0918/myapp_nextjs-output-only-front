'use client';
import { useCallback, useState } from 'react';
/**
 * TodoTemplate
 *
 * @package templates
 */
import styles from './styles.module.css';
import Link from 'next/link';
import { EventType } from '@/interfaces/Event';

/**
 * TodoTemplate
 * @returns {JSX.Element}
 */
export const TodoTemplate = () => {
  /* state定義 */
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');

  /* action定義 */

  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSearchKeyword: EventType['onChangeInput'] = useCallback(
    (e) => setSearchKeyWord(e.target.value),
    []
  )

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
            <li className={styles.todoitem}>
              <span className={styles.task}>Todo1</span>
            </li>
            <li className={styles.todoitem}>
              <span className={styles.task}>Todo2</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}