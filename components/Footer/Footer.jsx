import styles from "./Footer.module.scss";

export default (props) => {
  return (
    <>
      <div className={styles.main}>
        <img
          src='/img/logo.svg'
          alt='Department Logo'
          className={styles.logo}
        />
        <div>
          <h5>
            Система взаимодействия между заявителями и исполнителями в структуре
            снабжения предприятия
          </h5>
        </div>
        <div>
          <h5>&copy; Copyright T.O.J tools 2022</h5>
        </div>
      </div>
    </>
  );
};
