import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Visitors.module.css";

import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";

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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum illo
        velit molestiae quod id, suscipit nesciunt iste ullam unde, praesentium
        distinctio non excepturi quo molestias. Blanditiis, sunt. Distinctio
        nisi asperiores adipisci repellat eum quisquam explicabo rem earum
        itaque, laborum enim sint dolorum illo temporibus esse hic voluptatibus
        cum inventore?
      </p>
      <div>
        <BeforeFooter />
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Visitors;
