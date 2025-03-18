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
import img220 from "../../assets/Paint-img/100x100/TheFish.jpg";
import img221 from "../../assets/Paint-img/100x100/TheRosenstein.jpg";
import img222 from "../../assets/Paint-img/100x100/Grimoire.jpg";
import img223 from "../../assets/Paint-img/100x100/Our Lady of the Roses.jpg";
import img224 from "../../assets/Paint-img/100x100/TheFuturisFragile.jpg";
import img225 from "../../assets/Paint-img/100x100/TakehisHand.jpg";
import img226 from "../../assets/Paint-img/100x100/UndertheFertileMoon.jpg";
import img227 from "../../assets/Paint-img/100x100/RedPoster.jpg";

import img228 from "../../assets/Paint-img/100x100/OrangeZone.jpg";
import img229 from "../../assets/Paint-img/100x100/DeathofEuropa.jpg";
import img230 from "../../assets/Paint-img/100x100/JeanOuki.jpg";
import img231 from "../../assets/Paint-img/100x100/JeanOukiTwo.jpg";
import img232 from "../../assets/Paint-img/100x100/Roses.jpg";

import img233 from "../../assets/Paint-img/100x100/Iron.jpg";
import img234 from "../../assets/Paint-img/100x100/Gas.jpg";
import img235 from "../../assets/Paint-img/100x100/Water.jpg";
import img236 from "../../assets/Paint-img/100x100/Freeze.jpg";

import img237 from "../../assets/Paint-img/100x100/Poeta.jpg";
import img238 from "../../assets/Paint-img/100x100/PoetaTwo.jpg";
import img239 from "../../assets/Paint-img/100x100/Rosa.jpg";
import img240 from "../../assets/Paint-img/100x100/Opera.jpg";
import img241 from "../../assets/Paint-img/100x100/Open.jpg";
import img242 from "../../assets/Paint-img/100x100/Arte.jpg";

import img243 from "../../assets/Paint-img/100x100/FirstDay.jpg";
import img244 from "../../assets/Paint-img/100x100/Plus.jpg";
import img245 from "../../assets/Paint-img/100x100/Less.jpg";
import img246 from "../../assets/Paint-img/100x100/ArteTwo.jpg";
import img247 from "../../assets/Paint-img/100x100/GardenTwo.jpg";
import img254 from "../../assets/Paint-img/100x100/Garden2.jpg";

import img248 from "../../assets/Paint-img/100x70/Landscape01.jpg";
import img249 from "../../assets/Paint-img/100x70/Landscape02.jpg";
import img250 from "../../assets/Paint-img/100x70/Landscape03.jpg";
import img251 from "../../assets/Paint-img/100x70/Landscape04.jpg";
import img252 from "../../assets/Paint-img/100x70/Landscape05.jpg";
import img253 from "../../assets/Paint-img/100x70/Landscape06.jpg";

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
            <p>On top of the World</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 160x115 cm - 2007 - for sale</p>
            </div>
            <img src={img219} alt="Oil on canvas: On top of the World" />
          </div>

          <div className={styles.Section}>
            <p>The Fish</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 110x100 cm - 2004 - sold</p>
            </div>
            <img src={img220} alt="Oil on canvas: The Fish" />
          </div>

          <div className={styles.Section}>
            <p>The Rosenstein</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2004 - sold</p>
            </div>
            <img src={img221} alt="Oil on canvas: The Rosenstein" />
          </div>

          <div className={styles.Section}>
            <p>Grimoire</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2004 - sold</p>
            </div>
            <img src={img222} alt="Oil on canvas: Grimoire" />
          </div>

          <div className={styles.Section}>
            <p>Our Lady of the Roses</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2004 - sold</p>
            </div>
            <img src={img223} alt="Oil on canvas: Our Lady of the Roses" />
          </div>

          <div className={styles.Section}>
            <p>The Futur is Fragile</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2004 - sold</p>
            </div>
            <img src={img224} alt="Oil on canvas: The Futur is Fragile" />
          </div>

          <div className={styles.Section}>
            <p>Take his Hand</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2004 - sold</p>
            </div>
            <img src={img225} alt="Oil on canvas: Take his Hand" />
          </div>

          <div className={styles.Section}>
            <p>Under the Fertile Moon</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2004 - sold</p>
            </div>
            <img src={img226} alt="Oil on canvas: Under the Fertile Moon" />
          </div>

          <div className={styles.Section}>
            <p>Red Poster</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2005 - sold</p>
            </div>
            <img src={img227} alt="Oil on canvas: Red Poster" />
          </div>

          <div className={styles.Section}>
            <p>OrangeZone</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2005 - sold</p>
            </div>
            <img src={img228} alt="Oil on canvas: Orange Zone" />
          </div>

          <div className={styles.Section}>
            <p>Death of Europa</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2005 - sold</p>
            </div>
            <img src={img229} alt="Oil on canvas: Death ot Europa" />
          </div>

          <div className={styles.Section}>
            <p>Jean Ouki</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2006 - for sale</p>
            </div>
            <img src={img230} alt="Oil on canvas: Jean Ouki" />
          </div>

          <div className={styles.Section}>
            <p>Jean Ouki Two</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2006 - for sale</p>
            </div>
            <img src={img231} alt="Oil on canvas: Jean Ouki Two" />
          </div>

          <div className={styles.Section}>
            <p>Roses</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2006 - for sale</p>
            </div>
            <img src={img232} alt="Oil on canvas: Roses" />
          </div>

          <div className={styles.Section}>
            <p>Iron</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2007 - sold</p>
            </div>
            <img src={img233} alt="Oil on canvas: Iron" />
          </div>

          <div className={styles.Section}>
            <p>Gas</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2007 - sold</p>
            </div>
            <img src={img234} alt="Oil on canvas: Gas" />
          </div>

          <div className={styles.Section}>
            <p>Water</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2007 - sold</p>
            </div>
            <img src={img235} alt="Oil on canvas: Water" />
          </div>

          <div className={styles.Section}>
            <p>Freeze</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2007 - sold</p>
            </div>
            <img src={img236} alt="Oil on canvas: Freeze" />
          </div>

          <div className={styles.Section}>
            <p>Poeta</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2008 - for sale</p>
            </div>
            <img src={img237} alt="Oil on canvas: Poeta" />
          </div>

          <div className={styles.Section}>
            <p>Poeta Two</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2008 - for sale</p>
            </div>
            <img src={img238} alt="Oil on canvas: Poeta Two" />
          </div>

          <div className={styles.Section}>
            <p>Rosa</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2008 - for sale</p>
            </div>
            <img src={img239} alt="Oil on canvas: Rosa" />
          </div>

          <div className={styles.Section}>
            <p>Opera</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2008 - for sale</p>
            </div>
            <img src={img240} alt="Oil on canvas: Opera" />
          </div>

          <div className={styles.Section}>
            <p>Open</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2008 - sold</p>
            </div>
            <img src={img241} alt="Oil on canvas: Open" />
          </div>

          <div className={styles.Section}>
            <p>Arte</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2008 - for sale</p>
            </div>
            <img src={img242} alt="Oil on canvas: Arte" />
          </div>

          <div className={styles.Section}>
            <p>First Day</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2009 - for sale</p>
            </div>
            <img src={img243} alt="Oil on canvas: First Day" />
          </div>

          <div className={styles.Section}>
            <p>Plus</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2009 - for sale</p>
            </div>
            <img src={img244} alt="Oil on canvas: Plus" />
          </div>

          <div className={styles.Section}>
            <p>Less</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2009 - for sale</p>
            </div>
            <img src={img245} alt="Oil on canvas: Less" />
          </div>

          <div className={styles.Section}>
            <p>Arte Two</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2009 - for sale</p>
            </div>
            <img src={img246} alt="Oil on canvas: Arte Two" />
          </div>

          <div className={styles.Section}>
            <p>Garden</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2009 - for sale</p>
            </div>
            <img src={img247} alt="Oil on canvas: Garden" />
          </div>

          <div className={styles.Section}>
            <p>Garden Two</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x100 cm - 2009 - for sale</p>
            </div>
            <img src={img254} alt="Oil on canvas: Garden Two" />
          </div>

          <div className={styles.Section}>
            <p>Landscape One</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x70 cm - 2012 - for sale</p>
            </div>
            <img src={img248} alt="Oil on canvas: Landscape One" />
          </div>

          <div className={styles.Section}>
            <p>Landscape Two</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x70 cm - 2012 - for sale</p>
            </div>
            <img src={img249} alt="Oil on canvas: Landscape Two" />
          </div>

          <div className={styles.Section}>
            <p>Landscape Three</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x70 cm - 2012 - sold</p>
            </div>
            <img src={img250} alt="Oil on canvas: Landscape Three" />
          </div>

          <div className={styles.Section}>
            <p>Landscape Four</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x70 cm - 2012 - sold</p>
            </div>
            <img src={img251} alt="Oil on canvas: Landscape Four" />
          </div>

          <div className={styles.Section}>
            <p>Landscape Five</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x70 cm - 2012 - for sale</p>
            </div>
            <img src={img252} alt="Oil on canvas: Landscape Five" />
          </div>

          <div className={styles.Section}>
            <p>Landscape Six</p>
            <div className={styles.Mesure}>
              <p>Oil on canvas - 100x70 cm - 2012 - sold</p>
            </div>
            <img src={img253} alt="Oil on canvas: Landscape Six" />
          </div>
        </div>
      </div>

      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Paint;
