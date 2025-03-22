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
import img0342 from "../../assets/Museo-img/Horizontales/MI342.jpg";

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
            <p>Museo Infinito</p>{" "}
            <div className={styles.SubTitle}>
              <p>Oil on canvas - Huile sur toile - Olio su tela</p>
              <p>9 x 14,5cm - </p>
            </div>
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>
        </div>

        <div className={styles.ImgContainer}>
          <div className={styles.Section}>
            <p>Museo infinito n°302 - 2014 </p>
            <img src={img0302} alt="Oil on canvas: Museo Infinito n°302" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20.</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°316 - 2014 </p>
            <img src={img0316} alt="Oil on canvas: Museo Infinito n°316" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20.</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°318 - 2014 </p>
            <img src={img0318} alt="Oil on canvas: Museo Infinito n°318" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20.</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°327 - 2014 </p>
            <img src={img0327} alt="Oil on canvas: Museo Infinito n°327" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20.</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°331 - 2014 </p>
            <img src={img0331} alt="Oil on canvas: Museo Infinito n°331" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20.</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°337 - 2014 </p>
            <img src={img0337} alt="Oil on canvas: Museo Infinito n°337" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20.</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°342 - 2014 </p>
            <img src={img0342} alt="Oil on canvas: Museo Infinito n°422" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20.</p>
            </div>
          </div>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default MuseoHoriz;
