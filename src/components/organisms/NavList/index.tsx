/**
 * TodoList
 *
 * @package organisms
 */

import styles from './styles.module.css';
import Link from 'next/link';

/**
 * @returns {JSX.Element}
 */
const NavList = () => {
  return (
    <section className={styles.common}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Top</Link>
          </li>
          <li className={styles.item}>
            <Link href="/create">Create</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavList;
