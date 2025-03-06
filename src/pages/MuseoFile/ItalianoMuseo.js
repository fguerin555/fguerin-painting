import React from "react";
import "../../Global.css";
import { Link } from "react-router-dom";
import styles from "./ItalianoMuseo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const ItalianoMuseo = () => {
  return (
    <div>
      <div className={styles.ItalianoMuseoPage}>
        <div className={styles.LangageChoice}>
          <div className={styles.EnglishMuseo}>
            <Link to="/EnglishMuseo">
              <button>English</button>
            </Link>
          </div>
          <div className={styles.ItalianoMuseo}>
            <Link to="/ItalianoMuseo">
              <button>Italiano</button>
            </Link>
          </div>
          <div className={styles.FrancaisMuseo}>
            <Link to="/FrancaisMuseo">
              <button>Français</button>
            </Link>
          </div>
        </div>
        <div className={styles.Text}>
          <div>
            {" "}
            <p>Collezione Museo Infinito</p>{" "}
          </div>

          <div className={styles.MailLink}>
            <a href="mailto:fguerin555@gmail.com">fguerin555@gmail.com</a>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              minus nam est natus atque assumenda aspernatur tenetur mollitia
              recusandae incidunt aperiam similique cupiditate, ex tempora
              quibusdam ducimus rem corporis illum libero sit molestiae? Illo,
              voluptate officia facere praesentium rem voluptatum quibusdam odit
              vel nihil sequi ipsa sunt a at ab saepe dolorem et accusantium ea
              ipsam libero consequuntur voluptatem. Corporis ea minima
              consectetur corrupti! Molestiae saepe doloremque odio voluptatem
              atque voluptatum, dicta, itaque odit ea quaerat dolore iure sequi
              fugit unde error animi, rerum explicabo ex vitae expedita sed.
              Nostrum, libero. Odio ea exercitationem vero voluptatibus iusto.
              Atque, possimus modi!
            </p>
            <p> Frédéric Guérin</p>
          </div>
          <div className={styles.WorksButton}>
            <Link to="/Museo">
              <button>Opere</button>
            </Link>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default ItalianoMuseo;
