import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./EnglishMuseo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const EnglishMuseo = () => {
  return (
    <div>
      <div className={styles.EnglishMuseoPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.FrancaisMuseo}>
            <Link to="/FrancaisMuseo">
              <button>Français</button>
            </Link>
          </div>
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
        </div>
        <div className={styles.Text}>
          <div>
            {" "}
            <p>Museo Infinito Collection</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              Be an art collector and follow the evolution of the "MUSEO
              INFINITO" The affordable contemporary art….. Small-size oil
              paintings on cardboard canvas (15x9 cm - 5,91x3,19 inches), all
              signed and numbered, at 20 Euro each. Following the concept of
              museums housing different artistic languages, a new freestyle art
              is born, that tells the relationship between the artwork and the
              public
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.WorksButton}>
            <Link to="/Museo">
              <button>Art Works</button>
            </Link>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default EnglishMuseo;
