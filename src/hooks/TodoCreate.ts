import { useCallback, useContext, useState } from 'react';
import { EventType } from '@/interfaces/Event';
import { TodoContext } from '@/contexts/TodoContext';
import { useRouter } from 'next/navigation';

export const useTodoCreate = () => {
  const router = useRouter();
  /* state定義 */
  const {
    originalTodoList,
    setOriginalTodoList,
    todoListLength,
    setTodoListLength,
  } = useContext(TodoContext);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [textareaContent, setTextareaContent] = useState<string>('');

  /* action定義 */
  /**
   * titleのvalue更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputTitleChange: EventType['onChangeInput'] = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );
  /**
   * contentのvalue更新処理
   * @param { React.ChangeEvent<HTMLTextAreaElement>} e
   */
  const handleTextareaContentChange: EventType['onChangeTextArea'] =
    useCallback((e) => setTextareaContent(e.target.value), []);
  /**
   * todoListの追加発火処理
   * @param {React.MouseEvent<HTMLButtonElement>} e
   */
  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (inputTitle !== '') {
      const newId = todoListLength + 1;
      const newTodoList = [
        ...originalTodoList,
        {
          id: newId,
          title: inputTitle,
          content: textareaContent,
        },
      ];
      setOriginalTodoList(newTodoList);
      setInputTitle('');
      setTextareaContent('');
      setTodoListLength(newId);

      router.push('/');
    }
  };
};
