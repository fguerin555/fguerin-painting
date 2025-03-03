import React from "react";

import "../../Global.css";
import styles from "./Paint.module.css";

import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";

const Paint = () => {
  return (
    <div>
      <div className={styles.PaintPage}>
        <p>OIL ON CANVAS</p>
      </div>
      <BeforeFooter />
      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Paint;
