/**
 * TodoCreateTemplate
 *
 * @package templates
 */
import styles from './styles.module.css';

const TodoCreateTemplate = () => {
  return (
    <>
      <h1 className={styles.title}>Create Todo</h1>
      <form className={styles.container}>
        <div className={styles.area}>
          <input type={"text"} className={styles.input} placeholder={"TItle"} />
        </div>
        <div className={styles.area}>
          <textarea placeholder={"Content"} className={styles.textarea} />
        </div>
        <div className={styles.area}>
          <button type={"submit"} className={styles.button}>
            Create Todo
          </button>
        </div>
      </form>

    </>
  )
}

export default TodoCreateTemplate