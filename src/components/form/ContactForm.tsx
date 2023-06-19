"use client";

// Documentation:
// Standard contact form using https://formspree.io/

// FormSpree
import { useForm, ValidationError } from "@formspree/react";

// Components
import Success from "./Success";

// Styles
import styles from "@/styles/components/form/ContactForm.module.scss";

export default function Form() {
  const [state, handleSubmit] = useForm(process.env.FORMSPREE_API as string);
  if (state.succeeded) {
    return <Success />;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.ContactForm}>
      <div className={styles.ContactForm__row}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" aria-label="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className={styles.ContactForm__row}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          aria-label="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles.ContactForm__row}>
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" aria-label="subject" required>
          <option value="" disabled>
            Select a subject
          </option>
          <option value="General Inquiry" aria-label="General Inquiry">
            General Inquiry
          </option>
          <option value="Workshop" aria-label="Workshop">
            Workshop
          </option>
          <option
            value="Question About Appointments"
            aria-label="Question About Appointments"
          >
            Question About Appointments
          </option>
          <option value="Promotional Inquiry">Promotional Inquiry</option>
        </select>
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>
      <div className={styles.ContactForm__row}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-label="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <button type="submit" aria-label="submit" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}
