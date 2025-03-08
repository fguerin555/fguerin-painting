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
        <div>
          <p>Visitor n°1 - max. printable size : 134,62 x 76,02 cm</p>
          <img src={imag1} alt="Visitors numero 1" />
        </div>
        <div>
          <p>Visitor n°2 - max. printable size : 134,62 x 76,02 cm</p>
          <img src={imag2} alt="Visitors numero 2" />
        </div>
        <div>
          <p>Visitor n°3 - max. printable size : 134,62 x 76,02 cm</p>
          <img src={imag3} alt="Visitors numero 3" />
        </div>
        <div>
          <p>Visitor n°4 - max. printable size : 134,62 x 76,02 cm</p>
          <img src={imag4} alt="Visitors numero 4" />
        </div>
        <div>
          <p>Visitor n°5 - max. printable size : 134,62 x 76,02 cm</p>
          <img src={imag5} alt="Visitors numero 5" />
        </div>
        <div>
          <p>Visitor n°6 - max. printable size : 134,62 x 76,02 cm</p>
          <img src={imag6} alt="Visitors numero 6" />
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
