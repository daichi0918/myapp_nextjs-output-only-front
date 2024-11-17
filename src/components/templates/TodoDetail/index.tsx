'use client';
/**
 * TodoDetail
 * 
 * @package templates
 */

import { useContext } from "react";
import { Params } from "react-router-dom"
import { TodoContext } from "../../../contexts/TodoContext";
import { TextAreaForm } from "../../atoms/TextAreaForm";
import InputForm from "@/components/atoms/InputForm";
import styles from "./styles.module.css";


/**
 * @param {id: string } id 
 * @return {JSX.Element}
 */
export const TodoDetailTemplate = ({id}: {id: string}) => {
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


  return (
    <>
      <>
      <h1 className={styles.title}>ToDo Detail</h1>
      <form className={styles.contents_container}>
        <div className={styles.area}>
          <InputForm
            className={styles.input}
            InputValue={targetTodo[0].title}
            readOnly={true}
          />
        </div>
        <div className={styles.area}>
          <TextAreaForm 
            className={styles.textarea}
            TextAreaValue={targetTodo[0].content || ''}
            readOnly={true}
          />
        </div>
      </form>
      </>
    </>
  )
}