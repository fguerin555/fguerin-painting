import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Ceramique.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";
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
        <div className={styles.nom}>
          {" "}
          <p>Totem n°1 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag1} alt="Visitors numero 1" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°2 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag2} alt="Visitors numero 2" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°3 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag3} alt="Visitors numero 3" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°4 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag4} alt="Visitors numero 4" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°5 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag5} alt="Visitors numero 5" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°6 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag6} alt="Visitors numero 6" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°7 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag7} alt="Visitors numero 7" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°8 </p>
        </div>

        <div className={styles.Image}>
          <img src={imag8} alt="Visitors numero 8" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°9 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag9} alt="Visitors numero 9" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°10 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag10} alt="Visitors numero 10" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°11 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag11} alt="Visitors numero 11" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°12 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag12} alt="Visitors numero 12" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°13 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag13} alt="Visitors numero 13" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°14 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag14} alt="Visitors numero 14" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°15 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag15} alt="Visitors numero 15" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°16 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag16} alt="Visitors numero 16" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°17 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag17} alt="Visitors numero 17" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°18 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag18} alt="Visitors numero 18" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°19 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag19} alt="Visitors numero 19" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°20 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag20} alt="Visitors numero 20" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°21 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag21} alt="Visitors numero 21" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°22 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag22} alt="Visitors numero 22" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°23 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag23} alt="Visitors numero 23" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°24 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag24} alt="Visitors numero 24" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°25 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag25} alt="Visitors numero 25" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°26 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag26} alt="Visitors numero 26" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°27 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag27} alt="Visitors numero 27" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°28 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag28} alt="Visitors numero 28" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°29 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag29} alt="Visitors numero 29" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°30 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag30} alt="Visitors numero 30" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°31 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag31} alt="Visitors numero 31" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Totem n°32 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag32} alt="Visitors numero 32" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°33 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag33} alt="Visitors numero 33" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°34 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag34} alt="Visitors numero 34" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°35 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag35} alt="Visitors numero 35" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Totem n°36 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag36} alt="Visitors numero 36" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
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
