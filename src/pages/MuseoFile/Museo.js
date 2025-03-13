import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Museo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Museo = () => {
  return (
    <div>
      <div className={styles.MuseoPage}>
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
            <p>Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
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

export default Museo;
