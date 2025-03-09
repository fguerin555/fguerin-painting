import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Visitors.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";
import imag1 from "../../assets/Visitors-img/visitor 1.jpg";
import imag2 from "../../assets/Visitors-img/visitor 2.jpg";
import imag3 from "../../assets/Visitors-img/visitor 3.jpg";
import imag4 from "../../assets/Visitors-img/visitor 4.jpg";
import imag5 from "../../assets/Visitors-img/visitor 5.jpg";
import imag6 from "../../assets/Visitors-img/visitor 6.jpg";
import imag7 from "../../assets/Visitors-img/visitor 7.jpg";
import imag8 from "../../assets/Visitors-img/visitor 8.jpg";
import imag9 from "../../assets/Visitors-img/visitor 9.jpg";

import imag10 from "../../assets/Visitors-img/visitor 10.jpg";
import imag11 from "../../assets/Visitors-img/visitor 11.jpg";
import imag12 from "../../assets/Visitors-img/visitor 12.jpg";
import imag13 from "../../assets/Visitors-img/visitor 13.jpg";
import imag14 from "../../assets/Visitors-img/visitor 14.jpg";
import imag15 from "../../assets/Visitors-img/visitor 15.jpg";
import imag16 from "../../assets/Visitors-img/visitor 16.jpg";
import imag17 from "../../assets/Visitors-img/visitor 17.jpg";
import imag18 from "../../assets/Visitors-img/visitor 18.jpg";
import imag19 from "../../assets/Visitors-img/visitor 19.jpg";

import imag20 from "../../assets/Visitors-img/visitor 20.jpg";
import imag21 from "../../assets/Visitors-img/visitor 21.jpg";
import imag22 from "../../assets/Visitors-img/visitor 22.jpg";
import imag23 from "../../assets/Visitors-img/visitor 23.jpg";
import imag24 from "../../assets/Visitors-img/visitor 24.jpg";
import imag25 from "../../assets/Visitors-img/visitor 25.jpg";
import imag26 from "../../assets/Visitors-img/visitor 26.jpg";
import imag27 from "../../assets/Visitors-img/visitor 27.jpg";
import imag28 from "../../assets/Visitors-img/visitor 28.jpg";
import imag29 from "../../assets/Visitors-img/visitor 29.jpg";

import imag30 from "../../assets/Visitors-img/visitor 30.jpg";

const Visitors = () => {
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
          <p>Visitor n°1 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag1} alt="Visitors numero 1" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°2 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag2} alt="Visitors numero 2" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°3 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag3} alt="Visitors numero 3" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°4 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag4} alt="Visitors numero 4" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°5 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag5} alt="Visitors numero 5" />
          <p className={styles.transparentText}>©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°6 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag6} alt="Visitors numero 6" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°7 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag7} alt="Visitors numero 7" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°8 </p>
        </div>

        <div className={styles.Image}>
          <img src={imag8} alt="Visitors numero 8" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°9 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag9} alt="Visitors numero 9" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°10 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag10} alt="Visitors numero 10" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>

        <div className={styles.nom}>
          {" "}
          <p>Visitor n°11 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag11} alt="Visitors numero 11" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°12 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag12} alt="Visitors numero 12" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°13 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag13} alt="Visitors numero 13" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°14 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag14} alt="Visitors numero 14" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°15 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag15} alt="Visitors numero 15" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°16 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag16} alt="Visitors numero 16" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°17 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag17} alt="Visitors numero 17" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°18 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag18} alt="Visitors numero 18" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°19 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag19} alt="Visitors numero 19" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°20 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag20} alt="Visitors numero 20" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°21 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag21} alt="Visitors numero 21" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°22 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag22} alt="Visitors numero 22" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°23 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag23} alt="Visitors numero 23" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°24 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag24} alt="Visitors numero 24" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°25 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag25} alt="Visitors numero 25" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°26 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag26} alt="Visitors numero 26" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°27 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag27} alt="Visitors numero 27" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°28 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag28} alt="Visitors numero 28" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°29 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag29} alt="Visitors numero 29" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
        <div className={styles.nom}>
          {" "}
          <p>Visitor n°30 </p>
        </div>
        <div className={styles.Image}>
          <img src={imag30} alt="Visitors numero 30" />
          <p className={styles.transparentText}> ©Frédéric Guérin</p>
        </div>
      </div>

      <div>
        <BeforeFooter />
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Visitors;
