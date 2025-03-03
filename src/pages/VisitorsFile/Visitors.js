import React from "react";

import "../../Global.css";
import styles from "./Visitors.module.css";

import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";

const Visitors = () => {
  return (
    <div>
      <div className={styles.VisitorsPage}>
        <p>Visitors</p>
      </div>
      <BeforeFooter />
      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Visitors;
