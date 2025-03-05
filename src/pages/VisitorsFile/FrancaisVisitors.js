import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./FrancaisVisitors.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const FrancaisVisitors = () => {
  return (
    <div>
      <div className={styles.FrancaisVisitorsPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishVisitors}>
            <Link to="/EnglishVisitors">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.FrancaisVisitors}>
            <Link to="/FrancaisVisitors">
              <button>Français</button>
            </Link>
          </div>
          <div className={styles.ItalianoVisitors}>
            <Link to="/ItalianoVisitors">
              <button>Italiano</button>
            </Link>
          </div>
        </div>
        <div className={styles.Text}>
          <div>
            {" "}
            <p>Collection Visitors</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              J’ai choisi un langage simple, utilisant une application basique
              et la souris ce qui m’a permis d’en rester à l’essentiel. Tendant
              vers un geste unique et spontané pour garder la trace de l’état
              d’esprit fugitif, j’ai produit en deux mois l’ensemble de la
              collection. L’évolution est bien visible, entre le premier et le
              dernier travail beaucoup de choses se passent, touchant à la
              forme, l’expression et la signification. Tout en gardant les codes
              du concept graphique basé sur la symétrie, la séparation et une
              représentation unique entre le totem et l’icone, j’ai
              naturellement suivi l’évolution naturelle de l’oeuvre conçue avec
              frénésie et constance.
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.WorksButton}>
            <Link to="/Visitors">
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

export default FrancaisVisitors;
