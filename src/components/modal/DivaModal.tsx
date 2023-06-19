"use client";

// Documentation:
// Modal for the divaCards > StandardDivaCards.tsx

// Next
import Image from "next/image";

// React
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Styles
import styles from "@/styles/components/modal/DivaModal.module.scss";

type Props = {
  src?: string;
  name?: string;
  jobTitle?: string;
  description?: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DivaModal({
  src,
  name,
  jobTitle,
  description,
  isVisible,
  setIsVisible,
}: Props) {
  function toggleModal() {
    setIsVisible(!isVisible);
  }
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  return (
    <div
      className={`${styles.DivaModal} ${
        !isVisible ? styles["DivaModal--close"] : ""
      }`}
    >
      <div className={styles.DivaModal__content}>
        <svg
          role="button"
          className={styles["DivaModal__content-btn"]}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleModal}
        >
          <path
            d="M48.6236 41.9986L31.625 25L48.6236 8.00143C50.4588 6.16621 50.4588 3.21164 48.6236 1.37642C46.7884 -0.458805 43.8338 -0.458805 41.9986 1.37642L25 18.375L8.00143 1.37642C6.16621 -0.458805 3.21164 -0.458805 1.37642 1.37642C-0.458805 3.21164 -0.458805 6.16621 1.37642 8.00143L18.375 25L1.37642 41.9986C-0.458805 43.8338 -0.458805 46.7884 1.37642 48.6236C3.21164 50.4588 6.16621 50.4588 8.00143 48.6236L25 31.625L41.9986 48.6236C43.8338 50.4588 46.7884 50.4588 48.6236 48.6236C50.4458 46.7884 50.4458 43.8208 48.6236 41.9986Z"
            fill="#111111"
          />
        </svg>
        <Image
          className={styles["DivaModal__content-diva"]}
          src={
            src
              ? src
              : "https://images.ctfassets.net/3dr0slfxb86n/4cf4qMWmPEjMOdnSugTge1/a7674d4e52623f9eb3b9d0ad21fc7967/Group_14_1_.jpg"
          }
          alt={name ? name : "Placeholder"}
          width={329}
          height={419}
          loading="eager"
        />
        <div className={styles["DivaModal__content-info"]}>
          <p className={styles["DivaModal__content-info-name"]}>
            {name ? name : "Waiting for name..."}
          </p>
          <p className={styles["DivaModal__content-info-job"]}>
            {jobTitle ? jobTitle : "Waiting for Official Job Title..."}
          </p>
          <p className={styles["DivaModal__content-info-desc"]}>
            {description ? description : "Waiting for description..."}
          </p>
        </div>
      </div>
    </div>
  );
}

DivaModal.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  description: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
