'use client';
/**
 * TodoList
 *
 * @package organisms
 */
import { TodoType } from '@/interfaces/Todo';
import { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_LIST, NAVIGATION_PATH } from '@/constants/navigation';
import { useRouter } from 'next/navigation';

interface TodoListProps {
  showTodoList: Array<TodoType>;
  handleDeleteTodoTask: (targetId: number, taskName: string) => void;
}

/**
 *
 * @param {TodoListProps}props
 * @returns {JSX.Element}
 */
const TodoList: FC<TodoListProps> = (props) => {
  const router = useRouter();
  const { showTodoList, handleDeleteTodoTask } = props;
  return (
    <ul className={styles.todolist}>
      {showTodoList.length > 0 &&
        showTodoList.map((todo: TodoType) => (
          <li className={styles.todoitem} key={todo.id}>
            <span className={styles.task}>{todo.title}</span>
            <div className={styles.todo_top_icons}>
              <Link
                href={`${NAVIGATION_PATH.DETAIL}${todo.id}`}
                className={styles.icon_wrapper}
              >
                <FontAwesomeIcon icon={faFile} size="lg" />
              </Link>
              <Link
                href={`${NAVIGATION_PATH.EDIT}${todo.id}`}
                className={styles.icon_wrapper}
              >
                <FontAwesomeIcon icon={faPenToSquare} size="lg" />
              </Link>
              <div className={styles.icon_wrapper}>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  onClick={() => handleDeleteTodoTask(todo.id, todo.title)}
                />
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
