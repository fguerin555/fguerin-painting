import React, { useState, useEffect } from "react";
import styles from "./StepByStepUp.module.css";

const StepByStepUp = ({
  stepRatio = 8.5,
  ariaLabel = "Défiler vers le haut",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Affiche le bouton dès qu'on a défilé de plus de 100px
      setIsVisible(window.scrollY > 100);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollUp = () => {
    const step = window.innerHeight * stepRatio;
    window.scrollBy({
      top: -step,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleScrollUp}
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
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default StepByStepUp;
