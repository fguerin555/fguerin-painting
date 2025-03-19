import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Museo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Museo = () => {
  return (
    <div>
      <div className={styles.MuseoPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishMuseo}>
            <Link to="/EnglishMuseo">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.ItalianoMuseo}>
            <Link to="/ItalianoMuseo">
              <button>Italiano</button>
            </Link>
          </div>
          <div className={styles.FrancaisMuseo}>
            <Link to="/FrancaisMuseo">
              <button>Français</button>
            </Link>
          </div>
        </div>
        <div className={styles.Text}>
          <div>
            {" "}
            <p>Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Museo;
