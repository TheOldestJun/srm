import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Splash from "../Modal/Splash";
import Login from "../Modal/Login";

import styles from "./Layout.module.scss";
import { useState } from "react";

export default (props) => {
  const [login, setLogin] = useState(false);
  const [closed, setClosed] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer className={styles.footer} />
      {login ? <Login /> : <Splash close={() => setLogin(true)} />}
    </div>
  );
};
