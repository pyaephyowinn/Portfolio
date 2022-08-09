import { Link } from "react-router-dom";
import styles from "./index.module.css";
import school from "../../../images/school.jpg";

const About = () => {
  return (
    <section id="about" className={styles["about-container"]}>
      <div className={styles.container}>
        <div className={styles["about-body"]}>
          <div className={styles["img-container"]}>
            <img src={school} alt="school" />
          </div>
          <div className={styles["about-info"]}>
            <h2>About Me</h2>
            <p>
              My name is Pyae Phyo Win. I am a 4th year CS student in the
              University of Computer Studies, Myeik. Covid-19 and some other
              problems caused me not to finish the school. But I keep studing
              computer science on my own. I have learned web development from
              the online platforms mostly on the Udemy and Youtube.
            </p>
            <div className={styles.action}>
              <Link to="/contact" className={styles["btn-contact"]}>
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
