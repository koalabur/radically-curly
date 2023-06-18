"use client";

// Next
import Link from "next/link";

// React
import PropTypes from "prop-types";

// Styles
import styles from "@/styles/components/ui/Anchor.module.scss";

type Props = {
  url: string;
  text: string;
  newTab?: boolean;
  size?: "large";
  type?: "secondary";
};

export default function Anchor({
  url,
  text,
  newTab = false,
  size,
  type,
}: Props) {
  return (
    <Link
      className={`${styles.Anchor} ${
        size === "large" ? styles["Anchor--large"] : ""
      } ${type === "secondary" ? styles["Anchor--seconday"] : ""}`}
      href={url}
      target={newTab ? "_blank" : "_self"}
    >
      {text}
    </Link>
  );
}

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  size: PropTypes.oneOf(["large"]),
  type: PropTypes.oneOf(["secondary"]),
};
