import React, { useState, useEffect } from "react";
import styles from "./StepByStepDown.module.css";

const StepByStepDown = ({
  stepRatio = 8.5,
  ariaLabel = "Défiler vers le bas",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      // Vérifie si l'utilisateur a atteint le bas de la page (avec une marge de 20px)
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;
      setIsVisible(!isBottom);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  const handleScrollDown = () => {
    const step = window.innerHeight * stepRatio;
    window.scrollBy({
      top: step,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      className={styles.scrollBtn}
      aria-label={ariaLabel}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
};

export default StepByStepDown;
