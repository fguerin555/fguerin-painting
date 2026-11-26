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
            <p>111 Totems</p>{" "}
          </div>

          {/* <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div> */}

          <div>
            <p>
              Phase 1: completed, digital flat graphic of 111 totems. Printable
              on aluminum; Limited edition of 6 copies.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Visitors">
                <button>Aluminiums</button>
              </Link>
            </div>
            <p>. . . . . . . . . . . . . . . . . </p>
            <p>
              Phase 2: Printing of the *trompe-l'œil* bas-relief ceramic-style
              totems. (Printed on ®Forex, 33x33 cm; limited edition of 6 copies
              maximum.)
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Ceramique">
                <button>Ceramics</button>
              </Link>
            </div>
            <p>. . . . . . . . . . . . . . . </p>

            <p>
              Phase 3: Production of the colored ceramic bas-reliefs.
              Dimensions: 30x30 cm. Maximum edition of 6 pieces.
            </p>
            <p>. . . . . . . . . . . . . . . .............................</p>
            <p>
              Striving for a singular, spontaneous gesture to capture the
              fleeting state of the mind—to swiftly fix a vision—I opted for a
              simple language, utilizing a basic application (®SketchBook) and a
              computer mouse, which allowed me to focus solely on the
              essentials. During a period of prolific creativity, I produced the
              entire digital collection over the course of two months
              (March–April 2024).
            </p>
            <p>
              While maintaining consistent graphic conventions—rooted in
              symmetry, a clear demarcation between surfaces and lines, and a
              unique mode of representation for each piece—there is a distinct
              evolution from the first work to the last. By giving free rein to
              form and raw expression, the totemic signifier and the iconic
              signified followed, at every stage, the natural evolution of the
              body of work as a whole—a collection conceived with both frenzy
              and steadfastness.
            </p>
            <p> Frédéric Guérin</p>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default EnglishVisitors;
