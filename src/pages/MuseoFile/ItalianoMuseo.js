import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./ItalianoMuseo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const ItalianoMuseo = () => {
  return (
    <div>
      <div className={styles.ItalianoMuseoPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishMuseo}>
            <Link to="/EnglishMuseo">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.ItalianoMuseo}>
            <Link to="/ItalianoMuseo">
              <button>Italiano</button>
            </Link>
          </div>
          <div className={styles.FrancaisMuseo}>
            <Link to="/FrancaisMuseo">
              <button>Français</button>
            </Link>
          </div>
        </div>
        <div className={styles.Text}>
          <div>
            {" "}
            <p>Collezione Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              Essere un collezionista d'arte e seguire l'evoluzione del "MUSEO
              INFINITO" L'arte contemporanea accessibile..... Pitture ad olio su
              tela di cartone (15x9 cm - 5,91x3,19 pollici), tutte firmate e
              numerate, a 20 euro l'una. Seguendo il concetto di musei che
              ospitano diversi linguaggi artistici, nasce una nuova arte
              freestyle, che racconta la relazione tra l'opera d'arte e il
              pubblico
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.ButtonContainer}>
            <div className={styles.HorizButton}>
              <Link to="/MuseoHoriz">
                <button>Opere Orizontali</button>
              </Link>
            </div>

            <div className={styles.VerticButton}>
              <Link to="/MuseoVertic">
                <button>Opere Verticali</button>
              </Link>
            </div>
          </div>
          <div className={styles.NameVideo}>
            <p>2012 Video "MUSEO INFINITO ONE".</p>
          </div>
          <div className={styles.MusinfOne}>
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
          <div className={styles.NameVideo}>
            <p>2012 Video "MUSEO INFINITO TWO".</p>
          </div>
          <div className={styles.MusinfTwo}>
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
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default ItalianoMuseo;
