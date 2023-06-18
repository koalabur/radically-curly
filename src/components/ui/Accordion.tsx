"use client";
// React
import { useState } from "react";
import PropTypes from "prop-types";

// Styles
import styles from "@/styles/components/ui/Accordion.module.scss";

type Props = {
  question: string;
  answer: string;
};

export default function Accordion({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`${styles.Accordion} ${
        isOpen ? styles["Accordion--open"] : ""
      }`}
    >
      <div className={styles.Accordion__question} onClick={toggleAccordion}>
        <svg
          className={styles["Accordion__question-icon"]}
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.72 14.72H23.28V4.28C23.28 1.92 21.36 0 19 0C16.64 0 14.72 1.92 14.72 4.28V14.72H4.28C1.92 14.72 0 16.64 0 19C0 21.36 1.92 23.28 4.28 23.28H14.72V33.72C14.72 36.08 16.64 38 19 38C21.36 38 23.28 36.08 23.28 33.72V23.28H33.72C36.08 23.28 38 21.36 38 19C38 16.64 36.08 14.72 33.72 14.72Z"
            fill="#111111"
          />
        </svg>

        <p className={styles["Accordion__question-text"]}>{question}</p>
      </div>
      <p className={styles.Accordion__answer}>{answer}</p>
    </div>
  );
}

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
