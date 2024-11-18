/**
 * TodoList
 *
 * @package organisms
 */

import styles from './styles.module.css';
import Link from 'next/link';
import { NAVIGATION_LIST } from '@/constants/navigation';

/**
 * @returns {JSX.Element}
 */
const NavList = () => {
  return (
    <section className={styles.common}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={NAVIGATION_LIST.TOP}>Top</Link>
          </li>
          <li className={styles.item}>
            <Link href={NAVIGATION_LIST.CREATE}>Create</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavList;
