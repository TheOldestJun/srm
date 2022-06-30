import styles from "./Modal.module.scss";
import { splash } from "../../constants/constants";
import Image from "next/image";
import { version } from "../../constants/constants";
import React from "react";

export default React.forwardRef((props, ref) => {
  return (
    <>
      <div className={styles.modalBackground}></div>
      <div className={styles.splash} ref={ref}>
        {<Image src={splash} alt='Splash screen' width='300%' height='300%' />}
        <h1>Добро пожаловать!</h1>
        <h5>Supply Chain Management v.{version}</h5>
        <p>Нажмите на светлую область для перехода к авторизации</p>
      </div>
    </>
  );
});
