import styles from "../styles/Home.module.scss";
import Splash from "../components/Modal/Splash";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <Link href='/login'>
        <a>
          <Splash className={styles.splash} />
        </a>
      </Link>
    </div>
  );
}
