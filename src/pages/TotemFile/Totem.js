import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Totem.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import imag1 from "../../assets/Visitors-img/visitor 1 Open.jpg";

const Totem = () => {
  return (
    <div>
      <div className={styles.TotemPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.ItalianoTotem}>
            <Link to="/ItalianoVisitors">
              <button>Italiano</button>
            </Link>
          </div>

          <div className={styles.FrancaisTotem}>
            <Link to="/FrancaisVisitors">
              <button>Français</button>
            </Link>
          </div>

          <div className={styles.EnglishTotem}>
            <Link to="/EnglishVisitors">
              <button>English</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.imgOpen}>
        <img src={imag1} alt="totem1" />
      </div>
      <div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Totem;
