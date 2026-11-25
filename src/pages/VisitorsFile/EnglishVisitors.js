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

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
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
            <p>The 111-piece project is divided into several phases</p>
            <p>
              The first phase, now complete, consists of the creation of flat,
              virtual digital graphic designs for the 111 pieces. Printable on
              alumium.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Visitors">
                <button>First Phase - Art Works</button>
              </Link>
            </div>
            <p>
              The second phase, currently underway, involves printing the totems
              as *trompe-l'œil* ceramic bas-reliefs (printed on Forex®; 33 x 33
              cm). Each piece will be produced in a limited edition of five,
              numbered and signed.
            </p>
            <div className={styles.WorksButton}>
              <Link to="/Ceramique">
                <button>Second Phase - Art Works</button>
              </Link>
            </div>
            <p>
              The third phase, scheduled to begin with the first ten pieces in
              2027—and available by commission for any piece in the
              collection—will involve the physical creation of the bas-reliefs
              in colored ceramic. Dimensions: 30 x 30 cm. Each piece will be
              produced in a limited edition of five, all numbered and signed.
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
