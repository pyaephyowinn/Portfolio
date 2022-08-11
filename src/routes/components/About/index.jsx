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
              problems caused me not to finish the school. But I keep studying
              computer science on my own. I have learned MERN stack web development from
              the online platforms mostly on the Udemy and Youtube.
            </p>
            <div className={styles.action}>
              <a
                href="https://docs.google.com/document/d/1dmwLahptpn_YVAOiUF0lU8WB8rQ37-PKkNj34Fo3SDA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["btn-contact"]}
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
