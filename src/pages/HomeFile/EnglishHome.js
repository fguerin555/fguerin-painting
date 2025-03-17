import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./EnglishHome.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import QrCode from "../../assets/QrCode/site-painting.png";
const EnglishHome = () => {
  return (
    <div>
      <div className={styles.EnglishHomePage}>
        <div className={styles.LangageChoice}>
          <div className={styles.FrancaisHome}>
            <Link to="/FrancaisHome">
              <button>Français</button>
            </Link>
          </div>
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
        </div>
        <div className={styles.QrCode}>
          <img src={QrCode} alt="QR Code" />
        </div>
        <p>Frederic Guerin</p>
        <div className={styles.MailLink}>
          <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
        </div>
        <div>
          <p>Born in Boulogne-Billancourt - France</p>
          <p>on 13 November 1959</p>
          <p>Living in Tuscany</p>
          <p>Studies: Classic Shool</p>
          <p>
            2004 : Personnal Exibition at “L’IMPRONTA” - Amelia Buzzi-Puccini.
            Rome.
          </p>
          <p>
            2005: Personnal Exibition at “VECCHIO FRANTOIO”.
            <br />
            Capalbio. Tuscany.
          </p>
          <p>2006: Personnal Exibition at “ZOE SPAZIO ARTE”. Roma. </p>
          <p>
            2007: Mostra collettiva a "L'IMPRONTA" - Amelia Buzzi-Puccini. Roma.
          </p>
          <p>2008: Personnal Exibition at Galleria Horti Lamiani. Roma.</p>
          <p>
            2009: Group exhibition at the Museum of Contemporary Art of
            L’Aquila.
            <br />
            "Falce e Martello Simboli di Ferro". Catalogo.
          </p>
          <p>2009: Mostra collettiva alla “TAKEAWAYGALLERY”.Roma.</p>
          <p>
            2010: Mostra collettiva itinerante “13 X 17” a cura di Philippe
            Daverio e Jean Blanchaert.
            <br />
            Biennale di Venezia. Palazzo Fava di Bologna. Spazio d'Arte
            Alviti.Roma.
            <br />
            Catalogo Edizione Rizzoli a cura di Philippe Daverio e Jean
            Blanchaert
          </p>
          <p>
            2010: Mostra collettiva “24 X 24 “ galleria “OPERA UNICA”.Roma.
            Catalogo.
          </p>
          <p>2011: Mostra collettiva "24 X 24" Studio Claudio Abate.Roma</p>
          <p>
            2012-2016 : Produzione del "Museo Infinito", 1000 pezzi oli su tela
            di 14 x 9cm.
          </p>
          <p>
            2022: Produzione Arte Digitale di 110 pezzi par la collezione
            "Visitors".
          </p>
        </div>
        <div className={styles.WorksButton}>
          <Link to="/Paint">
            <button>Art Works</button>
          </Link>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default EnglishHome;
