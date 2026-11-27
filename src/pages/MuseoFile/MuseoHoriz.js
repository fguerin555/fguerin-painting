import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./MuseoHoriz.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import img0302 from "../../assets/Museo-img/Horizontales/MI302.jpg";
import img0316 from "../../assets/Museo-img/Horizontales/MI316.jpg";
import img0318 from "../../assets/Museo-img/Horizontales/MI318.jpg";
import img0327 from "../../assets/Museo-img/Horizontales/MI327.jpg";
import img0331 from "../../assets/Museo-img/Horizontales/MI331.jpg";
import img0337 from "../../assets/Museo-img/Horizontales/MI337.jpg";
import img0342 from "../../assets/Museo-img/Horizontales/MI385.jpg";

import img0382 from "../../assets/Museo-img/Horizontales/MI382.jpg";
import img0385 from "../../assets/Museo-img/Horizontales/MI385.jpg";
import img0389 from "../../assets/Museo-img/Horizontales/MI389.jpg";
import img0390 from "../../assets/Museo-img/Horizontales/MI390.jpg";
import img0394 from "../../assets/Museo-img/Horizontales/MI394.jpg";
import BeforeFooterMuseo from "../../components/BeforeFooterMuseo";

const MuseoHoriz = () => {
  return (
    <div>
      <div className={styles.MuseoHorizPage}>
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
            <p>Museo Infinito - 2014</p>{" "}
            <div className={styles.SubTitle}>
              <p>Oil on canvas - Huile sur toile - Olio su tela</p>
              <p>9 x 14,5cm - 5,71 x 3,54 inches</p>
            </div>
          </div>
        </div>

        <div className={styles.ImgContainer}>
          <div className={styles.Section}>
            <p>Museo infinito n°302</p>
            <img src={img0302} alt="Oil on canvas: Museo Infinito n°302" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°316</p>
            <img src={img0316} alt="Oil on canvas: Museo Infinito n°316" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°318</p>
            <img src={img0318} alt="Oil on canvas: Museo Infinito n°318" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°327</p>
            <img src={img0327} alt="Oil on canvas: Museo Infinito n°327" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°331</p>
            <img src={img0331} alt="Oil on canvas: Museo Infinito n°331" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°337</p>
            <img src={img0337} alt="Oil on canvas: Museo Infinito n°337" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°342</p>
            <img src={img0342} alt="Oil on canvas: Museo Infinito n°342" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°382</p>
            <img src={img0382} alt="Oil on canvas: Museo Infinito n°382" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°385</p>
            <img src={img0385} alt="Oil on canvas: Museo Infinito n°385" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°389</p>
            <img src={img0389} alt="Oil on canvas: Museo Infinito n°389" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°390</p>
            <img src={img0390} alt="Oil on canvas: Museo Infinito n°390" />
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°394</p>
            <img src={img0394} alt="Oil on canvas: Museo Infinito n°394" />
          </div>
        </div>

        <ScrollToTop />
        <BackButton />
        <BeforeFooterMuseo />
      </div>
    </div>
  );
};

export default MuseoHoriz;
