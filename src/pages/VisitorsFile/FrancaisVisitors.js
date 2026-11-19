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

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
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

            <p>Le projet de 111 pièces est réparti en plusieurs phases</p>

            <p>
              La première phase, complétée, est la réalisation graphique
              digitale plate virtuelle des 111 pièces. Dimension imprimable :
              62x35 cm.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Visitors">
                <button>Première phase - Oeuvres</button>
              </Link>
            </div>

            <p>
              {" "}
              La seconde phase est encore en cours de réalisation (actuellement
              60 pièces sur 111) sous forme de représentation graphique 2D
              (impression sur ®Forex 33x33 cm) de bas relief de céramique.
              Chaque pièce sera tirée à cinq exemplaires numérotés et signés.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Ceramique">
                <button>Seconde Phase - Oeuvres</button>
              </Link>
            </div>

            <p>
              La troisième phase, prévue pour les dix premières pièces en 2027,
              et sur commande pour chaque pièce de la collection, sera la
              réalisation matérielle des bas reliefs en céramique colorée.
              Dimension 30x30 cm. Chaque pièce sera réalisée en cinq exemplaires
              numérotés et signés.
            </p>

            <p>
              Croyant fermement à la portée positive et à l'impact visuel
              universel de ces totems, je n'exclus aucune des formes possibles
              sous lesquelles le projet pourra se décliner : peintures murales,
              tapisseries, néons, etc. Frédéric Guérin Novembre 2026
            </p>

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
