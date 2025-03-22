import React from "react";

import "../Global.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.FooterBandeCouleur}>
          {/* <img src={image5} alt="Logo Ciel in Città" /> */}

          <div className={styles.FooterContactInfo}>
            <span className={styles.FooterEmail}>
              For any informations please contact me at : &nbsp;{" "}
              <a href="mailto:fguerin555a@gmail.com">fguerin555@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer; //
