/**
 * TodoTop
 *
 * @packge hooks
 */
import { EventType } from '@/interfaces/Event';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { TodoContext } from '@/contexts/TodoContext';
import { TodoType } from '@/interfaces/Todo';
export const useTodo = () => {
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
  );

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

  return {
    showTodoList,
    searchKeyWord,
    handleDeleteTodoTask,
    handleChangeSearchKeyword,
  };
};
