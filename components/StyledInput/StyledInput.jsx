import styles from "./StyledInput.module.scss";

export default ({ ...attrs }) => {
  return (
    <>
      <input {...attrs} className={styles.input} />
    </>
  );
};
