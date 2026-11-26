import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./EnglishHome.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

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

        <p>Frederic Guerin</p>

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
            2007: Group exhibition at "L'IMPRONTA" – Amelia Buzzi-Puccini, Rome.
          </p>

          <p>2008: Solo exhibition at Galleria Horti Lamiani, Rome.</p>
          <p>
            2009: Group exhibition at the Museum of Contemporary Art of
            L’Aquila.
            <br />
            "Falce e Martello Simboli di Ferro" (Hammer and Sickle: Iron
            Symbols). Catalogue.
          </p>
          <p>2009: Group exhibition at "TAKEAWAYGALLERY," Rome.</p>
          <p>
            2010: Traveling group exhibition "13 X 17," curated by Philippe
            Daverio and Jean Blanchaert.
            <br />
            Venice Biennale; Palazzo Fava, Bologna; Spazio d'Arte Alviti, Rome.
            <br />
            Catalogue published by Rizzoli, curated by Philippe Daverio and Jean
            Blanchaert.
          </p>
          <p>
            2010: Group exhibition "24 X 24" at the "OPERA UNICA" gallery, Rome.
            Catalogue.
          </p>
          <p>2011: Group exhibition "24 X 24" at Studio Claudio Abate, Rome.</p>
          <p>
            2012–2016: Creation of the "Infinite Museum" (*Museo Infinito*),
            consisting of 1,000 oil-on-canvas pieces, each measuring 14 x 9 cm.
          </p>
          <p>2022/2026: Digital Creation for the "111-Totems" collection.</p>

          <p>
            December 2026: Collective exhibition “Un Opera, una coppia, un
            lavoro. At Gallery “Takeaway Gallery Rome.
          </p>
          <p>fguerin555@gmail.com</p>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default EnglishHome;
