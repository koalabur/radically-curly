// Documentation:
// Header for any page that needs it. Can be server-side since there
// is no functionality behind it.

// Next
import Image from "next/image";

// React
import PropTypes from "prop-types";

// Styles
import styles from "@/styles/components/header/StandardHeader.module.scss";

type Props = {
  text: string;
};

export default function StandardHeader({ text }: Props) {
  return (
    <header className={styles.StandardHeader}>
      <Image
        className={styles.StandardHeader__bg}
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIzNjQiIHZpZXdCb3g9IjAgMCAxOTIwIDM2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEzMV8zIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIzNjQiPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIzNjQiIGZpbGw9IiNEOUQ5RDkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzEzMV8zKSI+CjxyZWN0IHg9Ii03NCIgeT0iLTMxIiB3aWR0aD0iMjAyNy40MiIgaGVpZ2h0PSIzOTYuMDA2IiB0cmFuc2Zvcm09InJvdGF0ZSgtNC4yNDIxNiAtNzQgLTMxKSIgZmlsbD0iI0YyRjJGMiIvPgo8L2c+Cjwvc3ZnPgo="
        alt="Slanted Background"
        width={1920}
        height={364}
        loading="eager"
      />

      <h1 className={styles.StandardHeader__title}>{text}</h1>
    </header>
  );
}

StandardHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
