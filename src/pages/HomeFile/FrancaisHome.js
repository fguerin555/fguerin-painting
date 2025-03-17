import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./FrancaisHome.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import QrCode from "../../assets/QrCode/site-painting.png";

const FrancaisHome = () => {
  return (
    <div>
      <div className={styles.FrancaisHomePage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishHome}>
            <Link to="/EnglishHome">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.FrancaisHome}>
            <Link to="/FrancaisHome">
              <button>Français</button>
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
          <p>Né à Boulogne-Billancourt - France</p>
          <p>le 13 November 1959</p>
          <p>Vit en Toscane</p>
          <p>Etudes: Lycée Classique</p>
          <p>
            2004 : Exposition personnelle à "L’IMPRONTA" - Amelia Buzzi-Puccini.
            Rome.
          </p>
          <p>
            2005: Exposition personnelle au “VECCHIO FRANTOIO”.
            <br />
            Capalbio GR.
          </p>
          <p> 2006: Exposition personnelle à “ZOE SPAZIO ARTE”. Rome.</p>
          <p>
            2007: Exposition collective à "L'IMPRONTA" - Amelia Buzzi-Puccini.
            Rome.
          </p>
          <p>2008: Exposition personnelle à la Galerie Horti Lamiani. Rome.</p>
          <p>
            2009: Exposition collective au Musée d'Art Contemporain de L'Aquila.
            <br />
            "Falce e Martello Simboli di Ferro". Catalogo.
          </p>
          <p>2009: Exposition collective à la “TAKEAWAYGALLERY”.Rome.</p>
          <p>
            2010: Exposition collective itinérante “13 X 17” a cura di Philippe
            Daverio e Jean Blanchaert.
            <br />
            Biennale de Venise. Palais Fava. Bologne. Spazio d'Arte Alviti.
            Rome.
            <br />
            Catalogo Edizione Rizzoli de Philippe Daverio et Jean Blanchaert
          </p>
          <p>
            2010: Exposition collective “24 X 24 “ galleria “OPERA UNICA”.Rome.
            Catalogue.
          </p>
          <p>2011: Exposition collective "24 X 24" Studio Claudio Abate.Rome</p>
          <p>
            2012-2016 : Production du "Museo Infinito", 1000 pièces huile sur
            toile de 14 x 9cm.
          </p>
          <p>
            2022: Production d'Art Numérique de 110 pièces pour la collection
            "Visitors".
          </p>
        </div>

        <div className={styles.WorksButton}>
          <Link to="/Paint">
            <button>Oeuvres</button>
          </Link>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default FrancaisHome;
