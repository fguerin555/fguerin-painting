import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./FrancaisMuseo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const FrancaisMuseo = () => {
  return (
    <div>
      <div className={styles.FrancaisMuseoPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishMuseo}>
            <Link to="/EnglishMuseo">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.FrancaisMuseo}>
            <Link to="/FrancaisMuseo">
              <button>Français</button>
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
            <p>Collection Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              Soyez un collectionneur d’art et suivez l’évolution du "MUSEO
              INFINITO" Art contemporain accessible... Peintures à l’huile sur
              toile carton (15x9 cm - 5,91x3,19 pouces), toutes signées et
              numérotées, 20 euros l'exemplaire. Suivant le concept des musées
              qui accueillent différents langages artistiques, un nouvel art
              freestyle est né, qui raconte la relation entre l’œuvre et le
              public
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.WorksButton}>
            <Link to="/Museo">
              <button>Oeuvres</button>
            </Link>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default FrancaisMuseo;
