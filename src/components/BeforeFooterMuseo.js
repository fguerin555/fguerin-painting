import React from "react";
import "../Global.css";
import styles from "./BeforeFooterMuseo.module.css";

const BeforeFooterMuseo = () => {
  return (
    <div>
      <div className={styles.BeforeFooterMuseo}>
        <p>oil on canvas</p> 57.08 x 3.54 in. - 14,5 x 9 cm
        <p>
          <a href="mailto:museo.infinito@gmail.com">museo.infinito@gmail.com</a>
        </p>
      </div>
    </div>
  );
};
export default BeforeFooterMuseo;
