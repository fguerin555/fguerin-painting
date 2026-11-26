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
            <p>111 Totems</p>{" "}
          </div>

          <div>
            <p>
              Phase 1: Réalisation numérique graphique à plat des 111 Totems.
              Imprimables sur aluminium. tirage limité à 6 exemplaires.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Visitors">
                <button>Aluminiums</button>
              </Link>
            </div>
            <p>. . . . . . . . . . . . . . . . . </p>

            <p>
              {" "}
              Phase 2: impression des totems en *trompe-l'œil* bas-relief
              céramique. (impression sur ®Forex, 33x33 cm) tirage limité à 6
              exemplaires.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Ceramique">
                <button>Ceramics</button>
              </Link>
            </div>
            <p>. . . . . . . . . . . . . . . </p>

            <p>
              Phase3 : Réalisation matérielle des bas-reliefs en céramique
              colorée. Dimensions : 30 x 30 cm. tirage limité à 6 exemplaires.
            </p>
            <p>. . . . . . . . . . . . . . . .............................</p>
            <p>
              Tendant vers un geste unique et spontané pour fixer l’état fugitif
              de l’esprit, pour en fixer rapidement la vision, j’ai choisi un
              langage simple, utilisant une application basique (®Sketch Book)
              et la souris, ce qui m’a permis d’en rester à l’essentiel. En
              phase de création féconde, j’ai produit en deux mois l’ensemble de
              la collection digitale (mars avril 2024).
            </p>
            <p>
              Tout en gardant les codes graphiques basés sur la symétrie, la
              séparation affirmée des surfaces et des lignes et une
              représentation unique à chaque opération, l’évolution est bien
              réelle entre le premier et le dernier travail. Laissant libre
              court à la forme et à l’expression brute, le signifiant totémique
              et le signifié iconique ont, à chaque étape, suivi l’évolution
              naturelle de l’oeuvre totale conçue avec frénésie et constance.
            </p>

            <p>Frédéric Guérin Novembre 2026</p>

            <p> Frédéric Guérin</p>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default FrancaisVisitors;
