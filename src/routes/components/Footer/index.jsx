import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import styles from "./index.module.css";
import Foot from "../../../components/Footer"

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles.container}>
        <div className={styles["footer-information"]}>
          <div className={styles["footer-quote"]}>
            <p>
              “Coming together is a beginning. Keeping together is progress.
              Working together is success.”
            </p>
            <span>— Henry Ford</span>
          </div>
          <div className={styles["footer-contact"]}>
            <h3>Contact</h3>
            <div className={styles.address}>Palaw township, Tanintharyi</div>
            <div className={styles.email}>pyaephyowinnn@gmail.com</div>
            <div className={styles["social-apps"]}>
              <a
                href="https://www.facebook.com/ProsaicElderberry423"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/pyae-phyo-win-762792246"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://twitter.com/pyaephy71657741"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </footer>
  );
};
export default Footer;
