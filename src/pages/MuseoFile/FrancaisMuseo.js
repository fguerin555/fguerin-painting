import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./FrancaisMuseo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const FrancaisMuseo = () => {
  return (
    <div>
      <div className={styles.FrancaisMuseoPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishMuseo}>
            <Link to="/EnglishMuseo">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.FrancaisMuseo}>
            <Link to="/FrancaisMuseo">
              <button>Francais</button>
            </Link>
          </div>
          <div className={styles.ItalianoMuseo}>
            <Link to="/ItalianoMuseo">
              <button>Italiano</button>
            </Link>
          </div>
        </div>
        <div className={styles.Title}>
          <div>
            {" "}
            <p>Collection Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            {" "}
            <p>Pour toutes informations : </p>
            <a href="mailto:fguerin555a@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div className={styles.Text}>
            <p>
              Soyez un collectionneur d’art et suivez l’évolution du "MUSEO
              INFINITO" Art contemporain accessible... Peintures à l’huile sur
              toile carton (14,5 x 9 cm - 5,71 x 3,54 pouces), toutes signées et
              numérotées, 20 euros l'exemplaire. Suivant le concept des musées
              qui accueillent différents langages artistiques, un nouvel art
              freestyle est né, qui raconte la relation entre l’œuvre et le
              public.
            </p>
            <p> Frédéric Guérin</p>
          </div>

          <div className={styles.ButtonContainer}>
            <div className={styles.HorizButton}>
              <Link to="/MuseoHoriz">
                <button>Oeuvres Horizontales</button>
              </Link>
            </div>

            <div className={styles.VerticButton}>
              <Link to="/MuseoVertic">
                <button>Oeuvres Verticales</button>
              </Link>
            </div>
          </div>
          <div className={styles.NameVideo}>
            <p>2012 Video "MUSEO INFINITO ONE"</p>
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
            <p>2012 Video "MUSEO INFINITO TWO"</p>
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

export default FrancaisMuseo;
