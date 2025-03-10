import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./Museo.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import BeforeFooter from "../../components/BeforeFooter";

const Museo = () => {
  return (
    <div>
      <div className={styles.MuseoPage}>
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
            <p>Museo Infinito</p>{" "}
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
          {/* <div className={styles.WorksButton}>
            <Link to="/Museo">
              <button>Opere</button>
            </Link>
          </div> */}

          <p>2012 Video "MUSEO INFINITO ONE".</p>
          <div className={styles.MusinfOne}>
            <iframe
              width="560"
              height="315"
              src="https://youtube.com/embed/9_Jr4r_rG5w?si=RKMlrIqicQPMxfN-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Video Museo infinito Uno"
            ></iframe>
          </div>
          <p>2012 Video "MUSEO INFINITO TWO".</p>
          <div className={styles.MusinfTwo}>
            <iframe
              width="560"
              height="315"
              src="https://youtube.com/embed/siOe6He9bME?si=jErQf_iXbhNNIFj-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Video Museo infinito Due"
            ></iframe>
          </div>
        </div>
        <BeforeFooter />
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Museo;
