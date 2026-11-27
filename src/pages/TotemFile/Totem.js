import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Totem.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import imag1 from "../../assets/Visitors-img/visitor 1 Open.jpg";
import StepByStepUp from "../../components/StepByStepUp";
import StepByStepDown from "../../components/StepByStepDown";
import ScrollToEnd from "../../components/ScrollToEnd";

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
      <div className={styles.WorksButtonAlum}>
        <Link to="/Visitors">
          <button>Aluminiums</button>
        </Link>
      </div>
      <div className={styles.WorksButtonCera}>
        <Link to="/Ceramique">
          <button>Ceramics</button>
        </Link>
      </div>
      <div className={styles.BeforeFooterCeramic}></div>

      <div>
        <StepByStepUp />
        <StepByStepDown />
        <ScrollToEnd />
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Totem;
