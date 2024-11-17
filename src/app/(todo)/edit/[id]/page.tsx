'use client';
/**
 * TodoEdit
 *
 * @package todo
 */
import { TodoUpdateTemplate } from "@/components/templates/TodoUpdate";
import { useParams } from "next/navigation"; 

/**
 * TodoPage
 * @returns {JSX.Element}
 */
const TodoEditPage = () =>  {
  const params = useParams();
  const todoId = params.id as string || '';

  return(
    <TodoUpdateTemplate id={todoId}/>
  )

}

export default TodoEditPage;