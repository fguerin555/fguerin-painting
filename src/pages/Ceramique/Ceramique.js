import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Ceramique.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

import imag1 from "../../assets/Ceramique/ceramique1.png";
import imag2 from "../../assets/Ceramique/ceramique2.png";
import imag3 from "../../assets/Ceramique/ceramique3.png";
import imag4 from "../../assets/Ceramique/ceramique4.png";
import imag5 from "../../assets/Ceramique/ceramique5.png";
import imag6 from "../../assets/Ceramique/ceramique6.png";
import imag7 from "../../assets/Ceramique/ceramique7.png";
import imag8 from "../../assets/Ceramique/ceramique8.png";
import imag9 from "../../assets/Ceramique/ceramique9.png";
import imag10 from "../../assets/Ceramique/ceramique10.png";
import imag11 from "../../assets/Ceramique/ceramique11.png";
import imag12 from "../../assets/Ceramique/ceramique12.png";
import imag13 from "../../assets/Ceramique/ceramique13.png";
import imag14 from "../../assets/Ceramique/ceramique14.png";
import imag15 from "../../assets/Ceramique/ceramique15.png";
import imag16 from "../../assets/Ceramique/ceramique16.png";
import imag17 from "../../assets/Ceramique/ceramique17.png";
import imag18 from "../../assets/Ceramique/ceramique18.png";
import imag19 from "../../assets/Ceramique/ceramique19.png";
import imag20 from "../../assets/Ceramique/ceramique20.png";
import imag21 from "../../assets/Ceramique/ceramique21.png";
import imag22 from "../../assets/Ceramique/ceramique22.png";
import imag23 from "../../assets/Ceramique/ceramique23.png";
import imag24 from "../../assets/Ceramique/ceramique24.png";
import imag25 from "../../assets/Ceramique/ceramique25.png";
import imag26 from "../../assets/Ceramique/ceramique26.png";
import imag27 from "../../assets/Ceramique/ceramique27.png";
import imag28 from "../../assets/Ceramique/ceramique28.png";
import imag29 from "../../assets/Ceramique/ceramique29.png";
import imag30 from "../../assets/Ceramique/ceramique30.png";
import imag31 from "../../assets/Ceramique/ceramique31.png";
import imag32 from "../../assets/Ceramique/ceramique32.png";
import imag33 from "../../assets/Ceramique/ceramique33.png";
import imag34 from "../../assets/Ceramique/ceramique34.png";
import imag35 from "../../assets/Ceramique/ceramique35.png";
import imag36 from "../../assets/Ceramique/ceramique36.png";
import imag37 from "../../assets/Ceramique/ceramique37.png";
import imag38 from "../../assets/Ceramique/ceramique38.png";
import imag39 from "../../assets/Ceramique/ceramique39.png";
import imag40 from "../../assets/Ceramique/ceramique40.png";
import imag41 from "../../assets/Ceramique/ceramique41.png";
import imag42 from "../../assets/Ceramique/ceramique42.png";
const Ceramique = () => {
  return (
    <div>
      <div className={styles.VisitorsPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.FrancaisVisitors}>
            <Link to="/FrancaisVisitors">
              <button>Français</button>
            </Link>
          </div>

          <div className={styles.EnglishVisitors}>
            <Link to="/EnglishVisitors">
              <button>English</button>
            </Link>
          </div>

          <div className={styles.ItalianoVisitors}>
            <Link to="/ItalianoVisitors">
              <button>Italiano</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.ImagesContainer}>
        <div className={styles.Image}>
          <img src={imag1} alt="Visitors numero 1" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°1 - Ancestral</p>
        </div>

        <div className={styles.Image}>
          <img src={imag2} alt="Visitors numero 2" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°2 - C'est comme ça</p>
        </div>

        <div className={styles.Image}>
          <img src={imag3} alt="Visitors numero 3" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°3 -Alive</p>
        </div>

        <div className={styles.Image}>
          <img src={imag4} alt="Visitors numero 4" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°4 - Magari</p>
        </div>

        <div className={styles.Image}>
          <img src={imag5} alt="Visitors numero 5" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°5 - Stand</p>
        </div>

        <div className={styles.Image}>
          <img src={imag6} alt="Visitors numero 6" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°6 - Ready for the manna</p>
        </div>

        <div className={styles.Image}>
          <img src={imag7} alt="Visitors numero 7" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°7 - Pick up a signal</p>
        </div>

        <div className={styles.Image}>
          <img src={imag8} alt="Visitors numero 8" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°8 - Awake</p>
        </div>

        <div className={styles.Image}>
          <img src={imag9} alt="Visitors numero 9" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°9 - Grandmaster</p>
        </div>

        <div className={styles.Image}>
          <img src={imag10} alt="Visitors numero 10" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°10 - NPS Shamana</p>
        </div>

        <div className={styles.Image}>
          <img src={imag11} alt="Visitors numero 11" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°11 - Funky</p>
        </div>

        <div className={styles.Image}>
          <img src={imag12} alt="Visitors numero 12" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°12 - Desou Dance</p>
        </div>

        <div className={styles.Image}>
          <img src={imag13} alt="Visitors numero 13" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°13 - Ambra</p>
        </div>

        <div className={styles.Image}>
          <img src={imag14} alt="Visitors numero 14" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°14 - Bip!</p>
        </div>

        <div className={styles.Image}>
          <img src={imag15} alt="Visitors numero 15" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°15 - Shakkra</p>
        </div>

        <div className={styles.Image}>
          <img src={imag16} alt="Visitors numero 16" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°16 - Don't shoot!</p>
        </div>

        <div className={styles.Image}>
          <img src={imag17} alt="Visitors numero 17" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°17 - Mask</p>
        </div>

        <div className={styles.Image}>
          <img src={imag18} alt="Visitors numero 18" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°18 - Shooted</p>
        </div>

        <div className={styles.Image}>
          <img src={imag19} alt="Visitors numero 19" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°19 - Choice</p>
        </div>

        <div className={styles.Image}>
          <img src={imag20} alt="Visitors numero 20" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°20 - Futur</p>
        </div>

        <div className={styles.Image}>
          <img src={imag21} alt="Visitors numero 21" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°21 - OK</p>
        </div>

        <div className={styles.Image}>
          <img src={imag22} alt="Visitors numero 22" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°22 - Master Kamae</p>
        </div>

        <div className={styles.Image}>
          <img src={imag23} alt="Visitors numero 23" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°23 - Buzz</p>
        </div>

        <div className={styles.Image}>
          <img src={imag24} alt="Visitors numero 24" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°24 - Green kamae</p>
        </div>

        <div className={styles.Image}>
          <img src={imag25} alt="Visitors numero 25" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°25 - Vegan</p>
        </div>

        <div className={styles.Image}>
          <img src={imag26} alt="Visitors numero 26" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°26 - Ten</p>
        </div>

        <div className={styles.Image}>
          <img src={imag27} alt="Visitors numero 27" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°27 - FeeKat</p>
        </div>

        <div className={styles.Image}>
          <img src={imag28} alt="Visitors numero 28" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°28 - La Source</p>
        </div>

        <div className={styles.Image}>
          <img src={imag29} alt="Visitors numero 29" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°29 - Chocolat</p>
        </div>

        <div className={styles.Image}>
          <img src={imag30} alt="Visitors numero 30" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°30 - Seven</p>
        </div>

        <div className={styles.Image}>
          <img src={imag31} alt="Visitors numero 31" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°31 - Five</p>
        </div>

        <div className={styles.Image}>
          <img src={imag32} alt="Visitors numero 32" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°32 - Atlas</p>
        </div>

        <div className={styles.Image}>
          <img src={imag33} alt="Visitors numero 33" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°33 - Otto</p>
        </div>

        <div className={styles.Image}>
          <img src={imag34} alt="Visitors numero 34" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°34 - Void</p>
        </div>

        <div className={styles.Image}>
          <img src={imag35} alt="Visitors numero 35" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°35 - You know</p>
        </div>

        <div className={styles.Image}>
          <img src={imag36} alt="Visitors numero 36" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°36 - Déchiré</p>
        </div>

        <div className={styles.Image}>
          <img src={imag37} alt="Visitors numero 37" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°37 - Gaming</p>
        </div>

        <div className={styles.Image}>
          <img src={imag38} alt="Visitors numero 38" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°38 - Visitor</p>
        </div>

        <div className={styles.Image}>
          <img src={imag39} alt="Visitors numero 39" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°39 - Speaking</p>
        </div>

        <div className={styles.Image}>
          <img src={imag40} alt="Visitors numero 40" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°40 - Baby One</p>
        </div>

        <div className={styles.Image}>
          <img src={imag41} alt="Visitors numero 41" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°41 - Baby two</p>
        </div>

        <div className={styles.Image}>
          <img src={imag42} alt="Visitors numero 42" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°42 - Pet</p>
        </div>
      </div>

      <div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Ceramique;
