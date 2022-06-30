import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";

export default (props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
