"use client"

import { INITIAL_TODO_LIST, INITIAL_TODO_LIST_LENGTH } from '@/constants/data';
import { TodoType } from '@/interfaces/Todo';
import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface TodoContextInterface {
  originalTodoList: Array<TodoType>;
  setOriginalTodoList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
  todoListLength: number;
  setTodoListLength: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoContext = createContext({} as TodoContextInterface);

export const TodoProvider: FC<Props> = ({children}) => {
  const [ originalTodoList, setOriginalTodoList] = useState(INITIAL_TODO_LIST);
  const [todoListLength, setTodoListLength] = useState<number>(INITIAL_TODO_LIST_LENGTH);
  return (
    <TodoContext.Provider value={{ originalTodoList, setOriginalTodoList, todoListLength, setTodoListLength}}>
      {children}
    </TodoContext.Provider>
  )
}
