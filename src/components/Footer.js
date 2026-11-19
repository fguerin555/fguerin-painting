import React from "react";

import "../Global.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.FooterBandeCouleur}>
          <div className={styles.FooterContactInfo}></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
