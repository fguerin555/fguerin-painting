import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./ItalianoHome.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import QrCode from "../../assets/QrCode/site-painting.png";

const ItalianoHome = () => {
  return (
    <div>
      <div className={styles.ItalianoHomePage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishHome}>
            <Link to="/EnglishHome">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.ItalianoHome}>
            <Link to="/ItalianoHome">
              <button>Italiano</button>
            </Link>
          </div>
          <div className={styles.FrancaisHome}>
            <Link to="/FrancaisHome">
              <button>Français</button>
            </Link>
          </div>
        </div>
        <div className={styles.QrCode}>
          <img src={QrCode} alt="QR Code" />
        </div>
        <p>Frederic Guerin</p>
        <div className={styles.MailLink}>
          <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
        </div>
        <div>
          <p>Nato a Boulogne-Billancourt - France</p>
          <p>il 13 November 1959</p>
          <p>Vive in Toscana </p>
          <p>Studi: Liceo classico</p>
          <p>2004 : Mostra personale a “L’IMPRONTA”. Roma.</p>
          <p>
            2005: Mostra personnale al “VECCHIO FRANTOIO”.
            <br />
            Capalbio GR.
          </p>
          <p> 2006: Mostra personnale allo “ZOE SPAZIO ARTE”. Roma. </p>
          <p>
            2007: Mostra collettiva a "L'IMPRONTA" - Amelia Buzzi-Puccini. Roma.
          </p>
          <p>2008: Mostra personnale alla Galleria Horti Lamiani. Roma.</p>
          <p>
            2009: Mostra collettiva al Museo d'Arte Contemporanea di l'Aquila.
            <br />
            "Falce e Martello Simboli di Ferro". Catalogo.
          </p>
          <p>2009: Group exhibition at “TAKEAWAYGALLERY”.Roma.</p>
          <p>
            2010: Traveling group exhibition “13 X 17” curated by Philippe
            Daverio and Jean Blanchaert.
            <br />
            Venice Biennale. Palazzo Fava in Bologna. Alviti Art Space. Rome.
            Catalog.
            <br />
            Catalog Rizzoli Edition by Philippe Daverio and Jean Blanchaert
          </p>
          <p>
            2010: Group exhibition “24 X 24 “ at gallery “OPERA UNICA”.Rome.
            Catalogo.
          </p>
          <p>2011: Group exhibition "24 X 24" Studio Claudio Abate.Rome</p>
          <p>
            2012-2016 : Produzction of the "Museo Infinito", 1000 pieces oils on
            canvas of 14 x 9cm.
          </p>
          <p>
            2022: Digital Art Production of 110 pieces for the "Visitors"
            collection.
          </p>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default ItalianoHome;
