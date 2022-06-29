import styles from "./Button.module.scss";

export default ({ children, height, margin, ...attrs }) => {
  return (
    <button
      {...attrs}
      style={{ height: height, margin: margin }}
      className={styles.button}
    >
      {children}
    </button>
  );
};
