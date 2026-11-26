import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "./ScrollToEnd.module.css";

const ScrollToEnd = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      // Masque le bouton si l'utilisateur est déjà proche du bas de la page (marge de 100px)
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      setIsVisible(!isNearBottom);
    };

    toggleVisibility(); // Vérifie l'état initial au chargement
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  const scrollToEnd = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Défiler jusqu'en bas de la page"
      className={`${styles["scroll-to-end"]} ${isVisible ? styles.show : ""}`}
      onClick={scrollToEnd}
    >
      <FaArrowDown />
    </button>
  );
};

export default ScrollToEnd;
