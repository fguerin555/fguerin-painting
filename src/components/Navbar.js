import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";
import styles from "./navbar.module.css"; // Décommentez cette ligne

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Paint">Paint</Link>
        </li>
        <li>
          <Link to="/Museo">Museo Infinito</Link>
        </li>
        <li>
          <Link to="/Visitors">Visitors</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
