/**
 * TodoEdit
 *
 * @packge hooks
 */
import { useContext, useMemo, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useRouter } from 'next/navigation';

/**
 * useTodoEdit
 */

export const useTodoEdit = ({ id }: { id: string }) => {
  const router = useRouter();
  /**
   * state定義
   */
  const {
    originalTodoList,
    setOriginalTodoList,
    todoListLength,
    setTodoListLength,
  } = useContext(TodoContext);
  // 該当のtodoを取得
  const targetTodo = originalTodoList.filter((todo) => todo.id === Number(id));

  if (!targetTodo) {
    throw new Error(`Todo with id ${id} not found`);
  }

  // 初期値設定
  const [editInputTitleValue, setEditInputTitleValue] = useState<string>(
    targetTodo[0].title || ''
  );
  const [editTextareaContentValue, setEditTextareaContentValue] =
    useState<string>(targetTodo[0].content || '');

  /**
   * action定義
   */
  /**
   * titleの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleEditInputTitlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEditInputTitleValue(e.target.value);
  /**
   * contentの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleEditTextareaContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setEditTextareaContentValue(e.target.value);
  /**
   * todoListの更新発火処理
   * @param {React.MouseEvent<HTMLButtonElement>} e
   * @param {string} targetId
   */
  const handleUpdateTodo = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (editInputTitleValue !== '') {
      console.log('editInputTitleValue');
      console.log(editInputTitleValue);

      // 疑問：なんで順序変わらないの？？
      const updatedTodoList = originalTodoList.map((todo) =>
        todo.id === Number(targetId)
          ? {
              ...todo,
              title: editInputTitleValue,
              content: editTextareaContentValue,
            }
          : todo
      );
      setOriginalTodoList(updatedTodoList);

      router.push('/');
    }
  };
  return {
    editInputTitleValue,
    editTextareaContentValue,
    handleEditInputTitlChange,
    handleEditTextareaContentChange,
    handleUpdateTodo,
  };
};
