import React from "react";

import "../../Global.css";
import styles from "./Paint.module.css";

import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import img201 from "../../assets/Paint-img/187x160/UniversalClubBand.jpg";

const Paint = () => {
  return (
    <div>
      <div className={styles.PaintPage}>
        <p>ARTS WORKS</p>
        <div className={styles.ImagesContainer}>
          <div className={styles.Section}>
            <p>Universal Club Band</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 160x187 cm - 2006 - sold</p>
            </div>
            <img src={img201} alt="Olio su tela : Universal Club Band" />
          </div>
        </div>
      </div>

      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Paint;
