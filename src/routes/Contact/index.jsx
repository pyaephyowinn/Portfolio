import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

import styles from "./index.module.css";
import Footer from "../../components/Footer";

const Contact = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    document.title = "Contact me";
  });

  const submitForm = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_7oczyho";
    const TEMPLATE_ID = "template_qdyy1ol";
    const PUBLIC_KEY = "3rDPQ5Y-s_GaGDZVJ";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setMessage(
          "Your message is successfully sent. Thanks for contacting me"
        );
      },
      (error) => {
        setMessage(error.text);
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  const clickOnClose = () => {
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles["navbar-container"]}>
        <nav className={styles.navbar}>
          <h1>
            <Link to={"/"}>Portfolio</Link>
          </h1>
        </nav>
      </div>

      {message && (
        <div className={styles["toast-container"]}>
          <div>
            <p>{message}</p>
            <div onClick={clickOnClose} className={styles["btn-close"]}>
              x
            </div>
          </div>
        </div>
      )}

      <section className={styles["grid-container"]}>
        <div className={styles["form-section"]}>
          <h2>Send message</h2>

          <form onSubmit={submitForm} className={styles.form}>
            <div className={styles["form-group"]}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>

            <div className={styles.action}>
              <button>submit</button>
            </div>
          </form>
        </div>

        <div className={styles["card-section"]}>
          <h2>
            Lets talk <span>on</span>
          </h2>

          <div>
            <AiFillFacebook />
            <a
              href="https://www.facebook.com/ProsaicElderberry423"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
          </div>
          <div>
            <AiFillTwitterSquare />
            <a
              href="https://twitter.com/pyaephy71657741"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </div>
          <div>
            <AiFillLinkedin />
            <a
              href="https://www.linkedin.com/in/pyae-phyo-win-762792246"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
          <div className={styles.email}>pyaephyowinnn@gmail.com</div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Footer className={styles.foot} />
      </footer>
    </div>
  );
};
export default Contact;
