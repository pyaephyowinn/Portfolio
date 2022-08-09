import styles from "./index.module.css";
import social from "../../../images/img1.png";
import restaurant from "../../../images/img2.png";

const Projects = () => {
  return (
    <div id="projects" className={styles["projects-container"]}>
      <div className={styles.container}>
        <h2>My recent projects</h2>

        <div className={styles["projects-grid"]}>
          <div className={styles["project-card"]}>
            <img src={social} alt="project-screenshot" loading="lazy" />
            <div className={styles["project-description"]}>
              <h4>React Social</h4>
              <p>A basic social app where you can share you thoughts!</p>
              <div className={styles["project-links"]}>
                <a
                  href="https://react-social423.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/pyaephyowinn/react-social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </div>
            </div>
          </div>

          <div className={styles["project-card"]}>
            <img src={restaurant} alt="project-screenshot" loading="lazy" />
            <div className={styles["project-description"]}>
              <h4>React Restaurant</h4>
              <p>An online fooder order app with admin dashboard made with React.</p>
              <div className={styles["project-links"]}>
                <a
                  href="https://reactorderfood-5b0e4.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/pyaephyowinn/React-Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.action}>
          <a
            href="https://github.com/pyaephyowinn?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["btn-all-projects"]}
          >
            All Projects
          </a>
          <p>on github</p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
