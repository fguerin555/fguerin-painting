import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Museo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import img0302 from "../../assets/Museo-img/MI302.jpg";
import img0316 from "../../assets/Museo-img/MI316.jpg";
import img0317 from "../../assets/Museo-img/MI317.jpg";

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
          <div className={styles.Titre}>
            {" "}
            <p>Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>
        </div>

        <div className={styles.ImgContainer}>
          <div className={styles.Section}>
            <p>Museo Infinito n°302</p>
            <img
              src={img0302}
              alt="Museo Infinito - oil on canvas 15x9 cm - n° 302"
            />
            <div className={styles.Mesure}>
              <p>Oil on canvas - 15x9 cm - 2012 - for sale</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo Infinito n°316</p>
            <img
              src={img0316}
              alt="Museo Infinito - oil on canvas 15x9 cm - n° 316"
            />
            <div className={styles.Mesure}>
              <p>Oil on canvas - 15x9 cm - 2012 - for sale</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo Infinito n°317</p>
            <img
              src={img0317}
              alt="Museo Infinito - oil on canvas 15x9 cm - n° 317"
            />
            <div className={styles.Mesure}>
              <p>Oil on canvas - 15x9 cm - 2012 - for sale</p>
            </div>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Museo;
