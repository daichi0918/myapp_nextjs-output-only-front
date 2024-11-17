'use client';
/**
 * TodoDetail
 *
 * @package todo
 */
import { TodoDetailTemplate } from "@/components/templates/TodoDetail";
import { useParams } from "next/navigation"; 

/**
 * TodoPage
 * @returns {JSX.Element}
 */
const TodoDetailPage = () =>  {

  const params = useParams();
  const todoId = params.id as string || '';

  return(
    <TodoDetailTemplate id={todoId}/>
  )

}

export default TodoDetailPage;

