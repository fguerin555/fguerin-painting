import React from "react";

import "../../Global.css";
import styles from "./Museo.module.css";

import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";

const Museo = () => {
  return (
    <div>
      <div className={styles.MuseoPage}>
        <p>Museo Infinito</p>
      </div>
      <BeforeFooter />
      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Museo;
