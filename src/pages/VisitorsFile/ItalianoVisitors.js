import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./ItalianoVisitors.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const ItalianoVisitors = () => {
  return (
    <div>
      <div className={styles.ItalianoVisitorsPage}>
        <div className={styles.LangageChoice}>
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
          <div className={styles.EnglishVisitors}>
            <Link to="/EnglishVisitors">
              <button>English</button>
            </Link>
          </div>
        </div>
        <div className={styles.Text}>
          <div>
            {" "}
            <p>Collezione Visitors</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              Ho scelto un linguaggio semplice, utilizzando un'applicazione base
              e il mouse che me ha permesso di attenermi all'essenziale.
              Tendendo verso un gesto unico e spontaneo per tenere traccia dello
              stato d'animo fugace, ho prodotto l'intera collezione in due mesi.
              L'evoluzione è chiaramente visibile, tra il primo e l'ultimo
              lavoro succedono molte cose che influenzano forma, espressione e
              significato. Pur mantenendo i codici del concept grafico basati
              sulla simmetria, sulla separazione e su una rapresentazione
              univoca tra il totem e l'icona, ho seguito la naturale evoluzione
              dell'opera progettata con frenesia e coeranza.
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.WorksButton}>
            <Link to="/Visitors">
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

export default ItalianoVisitors;
