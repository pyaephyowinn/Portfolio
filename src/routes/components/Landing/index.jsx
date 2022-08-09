import { SiFacebook, SiTwitter, SiLinkedin, SiDiscord } from "react-icons/si";

import styles from "./index.module.css";
import Navbar from "../../../components/Navbar";

const Landing = () => {
  return (
    <div className={styles["landing-container"]}>
      <div className={styles.container}>
        <Navbar />
        <section className={styles["landing-body"]}>
          <section className={styles["content-section"]}>
            <p className={styles["thin-text"]}>Hi, I'm</p>
            <div className={styles["intro-section"]}>
              <div className={styles.name}>
                <h1>Pyae Phyo Win</h1>
              </div>
              <p>
                A passionate web developer who love tech and exploring new
                things. I learn myself, design the websites, write the code and
                love what I am doing.
              </p>
            </div>
            <div className={styles.action}>
              <a href="#projects" className={styles["btn-projects"]}>
                My Projects
              </a>
            </div>
          </section>

          <div className={styles["animation-section"]}>
            <div className={styles.square}>
              <p>
                <span className={styles.emphasized}>L</span>ets{" "}
                <span className={styles.emphasized}>T</span>alk
              </p>
              <div className={styles.circle}>
                <div className={`${styles["icon"]} ${styles["icon-facebook"]}`}>
                  <a
                    href="https://www.facebook.com/ProsaicElderberry423"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiFacebook />
                  </a>
                </div>
                <div className={`${styles["icon"]} ${styles["icon-discord"]}`}>
                <a
                    href="https://www.discordapp.com/users/pyaephyowinn#0530"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiDiscord />
                  </a>
                </div>
                <div className={`${styles["icon"]} ${styles["icon-linkedin"]}`}>
                  <a
                    href="https://www.linkedin.com/in/pyae-phyo-win-762792246"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLinkedin />
                  </a>
                </div>
                <div className={`${styles["icon"]} ${styles["icon-twitter"]}`}>
                  <a
                    href="https://twitter.com/pyaephy71657741"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Landing;
