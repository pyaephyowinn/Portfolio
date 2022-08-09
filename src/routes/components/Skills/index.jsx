import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiGit,
} from "react-icons/si";
import styles from "./index.module.css";

const Skills = () => {
  return (
    <div className={styles["skills-container"]}>
      <div className={styles.spacing}></div>
      <div id="skills" className={styles["skills-body"]}>
        <div className={styles["skills-header"]}>
          <h2>Techologies</h2>
          <span>that I use</span>
        </div>
        <div className={styles["tools-container"]}>
          <h3>Development</h3>
          <p className={styles["tools-name"]}>
            Html, CSS, JavaScript, Bootstrap
          </p>
          <p className={styles["tools-name"]}>Mongo, Express, React, Node.js</p>
          <div className={styles.icons}>
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiBootstrap />
            <SiMongodb />
            <SiReact />
            <SiExpress />
            <SiNodedotjs />
          </div>
        </div>
        <div className={styles["tools-container"]}>
          <h3>Others</h3>
          <p className={styles["tools-name"]}>Figma, Git</p>
          <div className={styles.icons}>
            <SiFigma />
            <SiGit />
            {/* <DiGit /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
