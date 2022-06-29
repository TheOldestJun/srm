import styles from "./Modal.module.scss";
import { splash } from "../../constants/constants";
import Image from "next/image";

export default (props) => {
  return (
    <>
      <div className={styles.modalBackground}></div>
      <div className={styles.modal} onClick={() => props.close()}>
        {<Image src={splash} alt='Splash screen' width='300%' height='300%' />}
      </div>
    </>
  );
};
