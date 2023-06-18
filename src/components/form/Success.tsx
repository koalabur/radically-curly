"use client";

// Styles
import styles from "@/styles/components/form/Success.module.scss";

export default function Success() {
  return (
    <div className={styles.Success}>
      <p className={styles.Success__title}>Message Sent Successfully!</p>
      <p className={styles.Success__subtitle}>
        We received your message and will get back to you shortly.
      </p>
    </div>
  );
}
