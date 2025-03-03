import React from "react";
import "../../Global.css";
import styles from "./Home.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Home = () => {
  return (
    <div>
      <div className={styles.HomePage}>
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
            Capalbio GR. 2006: Mostra personnale allo “ZOE SPAZIO ARTE”. Roma.{" "}
          </p>
          <p>
            2007: Mostra collettiva a "L'IMPRONTA" - Amelia Buzzi-Puccini. Roma.
          </p>
          <p>2008: Mostra personnale alla Galleria Horti Lamiani. Roma.</p>
          <p>
            2009: Mostra collettiva al Museo d'Arte Contemporanea di l'Aquila.
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
        <div className={styles.MusinfOne}>
          <p>2012 Video "MUSEO INFINITO ONE".</p>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/9_Jr4r_rG5w?si=RKMlrIqicQPMxfN-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            alt="Video Museo infinito Uno"
          ></iframe>
        </div>
        <div className={styles.MusinfTwo}>
          <p>2012 Video "MUSEO INFINITO TWO".</p>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/siOe6He9bME?si=jErQf_iXbhNNIFj-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            alt="Video Museo infinito Due"
          ></iframe>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Home;
