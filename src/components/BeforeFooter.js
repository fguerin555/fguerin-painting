import React from "react";
import "../Global.css";
import styles from "./BeforeFooter.module.css";

const BeforeFooter = () => {
  return (
    <div>
      <div className={styles.BeforeFooter}>
        <p>Printable on ©Forex or aluminium</p>
        <p>Dim. Max. : 53,33 x 30 in. - 135,47 x 76,27 cm</p>
        <p>Contact me at :</p>{" "}
        <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
      </div>
    </div>
  );
};
export default BeforeFooter;
