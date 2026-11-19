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
            <p>111 Totems</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              Tendendo verso un gesto unico e spontaneo per catturare lo stato
              fugace della mente – per fissarne rapidamente la visione – ho
              scelto un linguaggio semplice, avvalendomi di un’applicazione
              essenziale (®Sketch Book) e del mouse; ciò mi ha permesso di
              concentrarmi sull’essenziale.
            </p>

            <p>
              Durante una fase creativa particolarmente feconda, nell’arco di
              due mesi (marzo-aprile 2024), ho realizzato l’intera collezione
              digitale. Pur mantenendo costanti i codici grafici – basati sulla
              simmetria, sulla netta separazione tra superfici e linee, e su una
              rappresentazione peculiare per ogni singolo intervento – è
              evidente un’evoluzione tra la prima e l’ultima opera.Lasciando
              libero sfogo alla forma e all’espressione pura, il significante
              totemico e il significato iconico hanno seguito, in ogni fase,
              l’evoluzione naturale di un corpus di lavori concepito con
              frenesia e costanza.
            </p>

            <p>Il progetto di 111 pezzi è suddiviso in diverse fasi</p>

            <p>
              La prima fase, già completata, consiste nella realizzazione
              grafica digitale in piano dei 111 pezzi. Dimensioni stampabili:
              62x35 cm.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Visitors">
                <button>Prima Fase - Opere</button>
              </Link>
            </div>
            <p>
              La seconda fase - attualmente in corso di produzione - consiste in
              una rappresentazione grafica 2D (stampata su ®Forex, 33x33 cm) di
              bassorilievi in ​​ceramica. Di ogni pezzo verranno prodotti sei
              esemplari, numerati e firmati.
            </p>

            <div className={styles.WorksButton}>
              <Link to="/Ceramique">
                <button>Seconda Fase - Opere</button>
              </Link>
            </div>
            <p>
              La terza fase, prevista per i primi dieci pezzi nel 2027 – e
              disponibile su ordinazione per ogni elemento della collezione –
              consisterà nella realizzazione materiale dei bassorilievi in
              ​​ceramica colorata. Dimensioni: 30x30 cm. Ogni pezzo sarà
              realizzato in sei esemplari, numerati e firmati.
            </p>

            <p>
              Credendo fermamente nella portata positiva e nell'impatto visivo
              universale di questi totem, non escludo alcuna delle possibili
              forme in cui il progetto potrà declinarsi, murales, arazzi, neon,
              ecc…
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

export default ItalianoVisitors;
