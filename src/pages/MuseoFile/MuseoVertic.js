import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./MuseoVertic.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import img0313 from "../../assets/Museo-img/Verticales/MI313.jpg";
import img0317 from "../../assets/Museo-img/Verticales/MI317.jpg";
import img0320 from "../../assets/Museo-img/Verticales/MI320.jpg";
import img0325 from "../../assets/Museo-img/Verticales/MI325.jpg";
import img0334 from "../../assets/Museo-img/Verticales/MI334.jpg";
import img0348 from "../../assets/Museo-img/Verticales/MI348.jpg";
import img0349 from "../../assets/Museo-img/Verticales/MI349.jpg";

import img0361 from "../../assets/Museo-img/Verticales/MI361.jpg";
import img0364 from "../../assets/Museo-img/Verticales/MI364.jpg";
import img0366 from "../../assets/Museo-img/Verticales/MI366.jpg";
import img0368 from "../../assets/Museo-img/Verticales/MI368.jpg";
import img0374 from "../../assets/Museo-img/Verticales/MI374.jpg";
import img0392 from "../../assets/Museo-img/Verticales/MI392.jpg";
import img0393 from "../../assets/Museo-img/Verticales/MI393.jpg";

const MuseoVertic = () => {
  return (
    <div>
      <div className={styles.MuseoVerticPage}>
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
              <p>14,5cm x 9cm - 3,54 x 5,71 inches</p>
            </div>
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>
        </div>

        <div className={styles.ImgContainer}>
          <div className={styles.Section}>
            <p>Museo infinito n°313</p>
            <img src={img0313} alt="Oil on canvas: Museo Infinito n°313" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°317</p>
            <img src={img0317} alt="Oil on canvas: Museo Infinito n°317" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°320</p>
            <img src={img0320} alt="Oil on canvas: Museo Infinito n°320" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°325</p>
            <img src={img0325} alt="Oil on canvas: Museo Infinito n°325" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°334</p>
            <img src={img0334} alt="Oil on canvas: Museo Infinito n°334" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°348</p>
            <img src={img0348} alt="Oil on canvas: Museo Infinito n°348" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°349</p>
            <img src={img0349} alt="Oil on canvas: Museo Infinito n°349" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°361</p>
            <img src={img0361} alt="Oil on canvas: Museo Infinito n°361" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°364</p>
            <img src={img0364} alt="Oil on canvas: Museo Infinito n°364" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°366</p>
            <img src={img0366} alt="Oil on canvas: Museo Infinito n°366" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°368</p>
            <img src={img0368} alt="Oil on canvas: Museo Infinito n°368" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°374</p>
            <img src={img0374} alt="Oil on canvas: Museo Infinito n°374" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°392</p>
            <img src={img0392} alt="Oil on canvas: Museo Infinito n°392" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>

          <div className={styles.Section}>
            <p>Museo infinito n°393</p>
            <img src={img0393} alt="Oil on canvas: Museo Infinito n°393" />
            <div className={styles.Prize}>
              <p>for sale - à vendre - vendesi - € 20</p>
            </div>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default MuseoVertic;
