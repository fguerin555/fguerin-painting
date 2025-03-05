import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./EnglishVisitors.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const EnglishVisitors = () => {
  return (
    <div>
      <div className={styles.EnglishVisitorsPage}>
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
        <div className={styles.Text}>
          <div>
            {" "}
            <p>Visitors Collection</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              I chose a simple language, using a basic application and the mouse
              wich allowed me to stick to the essentials. Striving towards a
              unique and spontaneous gesture to keep track of the fleeting state
              of mind, I produced the entire collection in two months. The
              evolution is cleary visible, between the first and the last work a
              lot of things happen, affecting form, expression and meaning.
              While keeping the codes of the graphic concept based on symmetry,
              separation and a unique representation between the totem and the
              icon. I naturally followed the natural evolution of the work
              designed with frenzy and consistency.
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.WorksButton}>
            <Link to="/Visitors">
              <button>Art Works</button>
            </Link>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default EnglishVisitors;
