import styles from "./styles.module.css";
import Link from "next/link";

const NavList = () => {
  return (
    <section className={styles.common}>
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/todo'>Top</Link>
        </li>
        <li className={styles.item}>
        <Link href='/todo/create'>Create</Link>
        </li>
      </ul>
    </nav>
  </section>
  )
}

export default NavList