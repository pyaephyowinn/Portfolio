import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Portfolio</div>

      <ul className={styles["nav-links"]}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <Link to="/contact" className={styles.important}>
          Say Hi
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
