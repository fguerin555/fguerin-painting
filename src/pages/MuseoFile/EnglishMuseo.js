import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./EnglishMuseo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const EnglishMuseo = () => {
  return (
    <div>
      <div className={styles.EnglishMuseoPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.ItalianoMuseo}>
            <Link to="/ItalianoMuseo">
              <button>Italiano</button>
            </Link>
          </div>
          <div className={styles.EnglishMuseo}>
            <Link to="/EnglishMuseo">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.FrancaisMuseo}>
            <Link to="/FrancaisMuseo">
              <button>Français</button>
            </Link>
          </div>
        </div>
        <div className={styles.Title}>
          <div>
            {" "}
            <p>Museo Infinito Collection</p>{" "}
          </div>

          <div className={styles.MailLink}>
            {" "}
            <p>For any informations : </p>
            <a href="mailto:fguerin555a@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div className={styles.Text}>
            <p>
              Be an art collector and follow the evolution of the "MUSEO
              INFINITO" The affordable contemporary art….. Small-size oil
              paintings on cardboard canvas (14,5 x 9 cm - 5,71 x 3,54 inches),
              all signed and numbered, at 20 Euro each. Following the concept of
              museums housing different artistic languages, a new freestyle art
              is born, that tells the relationship between the artwork and the
              public
            </p>
            <p> Frédéric Guérin</p>
          </div>

          <div className={styles.ButtonContainer}>
            <div className={styles.HorizButton}>
              <Link to="/MuseoHoriz">
                <button>Orizontal Artworks</button>
              </Link>
            </div>

            <div className={styles.VerticButton}>
              <Link to="/MuseoVertic">
                <button>Vertical Artworks</button>
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

export default EnglishMuseo;
