import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./ItalianoMuseo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const ItalianoMuseo = () => {
  return (
    <div>
      <div className={styles.ItalianoMuseoPage}>
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
            <p>Collezione Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              Essere un collezionista d'arte e seguire l'evoluzione del "MUSEO
              INFINITO" L'arte contemporanea accessibile..... Pitture ad olio su
              tela di cartone (15x9 cm - 5,91x3,19 pollici), tutte firmate e
              numerate, a 20 euro l'una. Seguendo il concetto di musei che
              ospitano diversi linguaggi artistici, nasce una nuova arte
              freestyle, che racconta la relazione tra l'opera d'arte e il
              pubblico
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.WorksButton}>
            <Link to="/Museo">
              <button>Opere</button>
            </Link>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default ItalianoMuseo;
