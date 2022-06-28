import styles from "./Header.module.scss";

export default () => {
  return (
    <div className={styles.container}>
      <img src='/img/logo.svg' alt="Company's logo" className={styles.logo} />
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Первое</li>
        <li className={styles.menuItem}>Второе</li>
        <li className={styles.menuItem}>Третье</li>
      </ul>
    </div>
  );
};
