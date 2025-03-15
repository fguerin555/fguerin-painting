import React from "react";

import "../../Global.css";
import styles from "./Paint.module.css";

import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import img201 from "../../assets/Paint-img/187x160/UniversalClubBand.jpg";
import img202 from "../../assets/Paint-img/126x184/Arca.jpg";
import img203 from "../../assets/Paint-img/126x184/DeiDellaGuerra.jpg";
import img204 from "../../assets/Paint-img/126x184/LaVitadiLoulou.jpg";
import img205 from "../../assets/Paint-img/126x184/NuoveStagione.jpg";
import img206 from "../../assets/Paint-img/126x184/LaBrace.jpg";
import img207 from "../../assets/Paint-img/126x184/LaCenere.jpg";
import img208 from "../../assets/Paint-img/126x184/IlSilenzio.jpg";
import img209 from "../../assets/Paint-img/126x184/BalladeSanLorenzo.jpg";
import img210 from "../../assets/Paint-img/126x184/FiumeDelleVanita.jpg";
import img211 from "../../assets/Paint-img/115x160/Vin.jpg";
import img212 from "../../assets/Paint-img/115x160/Jaune.jpg";
import img213 from "../../assets/Paint-img/115x160/Faces.jpg";
import img214 from "../../assets/Paint-img/115x160/LeTempsdesTambours.jpg";
import img215 from "../../assets/Paint-img/115x160/PrimaveraAnnoZero.jpg";
import img216 from "../../assets/Paint-img/115x160/LaNotteBianca.jpg";
import img217 from "../../assets/Paint-img/115x160/NozzeBarbariche.jpg";
import img218 from "../../assets/Paint-img/115x160/Cargo.jpg";
import img219 from "../../assets/Paint-img/115x160/SurleToitduMonde.jpg";

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
            <img src={img201} alt="Oil on canvas: Universal Club Band" />
          </div>

          <div className={styles.Section}>
            <p>Ark</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2005 - sold</p>
            </div>
            <img src={img202} alt="Oil on canvas: Ark" />
          </div>

          <div className={styles.Section}>
            <p>Gods of War</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2005 - sold</p>
            </div>
            <img src={img203} alt="Oil on canvas: Gods of Wars" />
          </div>

          <div className={styles.Section}>
            <p>Loulou's Life</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2006 - sold</p>
            </div>
            <img src={img204} alt="Oil on canvas: Loulou's Life" />
          </div>

          <div className={styles.Section}>
            <p>New Seasons</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2006 - sold</p>
            </div>
            <img src={img205} alt="Oil on canvas: New Seasons" />
          </div>

          <div className={styles.Section}>
            <p>Ember</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2006 - for sale</p>
            </div>
            <img src={img206} alt="Oil on canvas: Ember" />
          </div>

          <div className={styles.Section}>
            <p>Ash</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2006 - for sale</p>
            </div>
            <img src={img207} alt="Oil on canvas: Ash" />
          </div>

          <div className={styles.Section}>
            <p>The Silence</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2006 - for sale</p>
            </div>
            <img src={img208} alt="Oil on canvas: The Silence" />
          </div>

          <div className={styles.Section}>
            <p>Ballad of San Lorenzo</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2006 - for sale</p>
            </div>
            <img src={img209} alt="Oil on canvas: Ballde of San Lorenzo" />
          </div>

          <div className={styles.Section}>
            <p>River of Vanity</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 126x184 cm - 2006 - for sale</p>
            </div>
            <img src={img210} alt="Oil on canvas: River of Vanity" />
          </div>

          <div className={styles.Section}>
            <p>Wine</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 160x115 cm - 2005 - sold</p>
            </div>
            <img src={img211} alt="Oil on canvas: Wine" />
          </div>

          <div className={styles.Section}>
            <p>Faces</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 160x115 cm - 2005 - sold</p>
            </div>
            <img src={img213} alt="Oil on canvas: Faces" />
          </div>

          <div className={styles.Section}>
            <p>Yellow</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 115x160 cm - 2005 - sold</p>
            </div>
            <img src={img212} alt="Oil on canvas: Faces" />
          </div>

          <div className={styles.Section}>
            <p>The Time of the Drums</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 115x160 cm - 2005 - sold</p>
            </div>
            <img src={img214} alt="Oil on canvas: Faces" />
          </div>

          <div className={styles.Section}>
            <p>Spring Year Zero</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 115x160 cm - 2006 - for sale</p>
            </div>
            <img src={img215} alt="Oil on canvas: Spring Year Zero" />
          </div>

          <div className={styles.Section}>
            <p>Nuit Blanche</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 115x160 cm - 2006 - sold</p>
            </div>
            <img src={img216} alt="Oil on canvas: Nuit Blanche" />
          </div>

          <div className={styles.Section}>
            <p>Barbarous Wedding</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 115x160 cm - 2007 - for sale</p>
            </div>
            <img src={img217} alt="Oil on canvas: Barbarous Wedding" />
          </div>

          <div className={styles.Section}>
            <p>Cargo</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 115x160 cm - 2007 - for sale</p>
            </div>
            <img src={img218} alt="Oil on canvas: Cargo" />
          </div>

          <div className={styles.Section}>
            <p>On top of the World.</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 160x115 cm - 2007 - for sale</p>
            </div>
            <img src={img219} alt="Oil on canvas: On top of the World" />
          </div>
        </div>
      </div>

      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Paint;
