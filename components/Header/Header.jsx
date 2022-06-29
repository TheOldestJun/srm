import styles from "./Header.module.scss";
import Link from "next/link";

import { logo } from "../../constants/constants";

export default () => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a>
          <img src={logo} alt="Company's logo" className={styles.logo} />
        </a>
      </Link>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>Первое</li>
        <li className={styles.menuItem}>Второе</li>
        <li className={styles.menuItem}>Третье</li>
      </ul>
    </div>
  );
};
