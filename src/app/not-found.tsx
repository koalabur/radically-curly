import Link from "next/link";

// Styles
import styles from "@/styles/pages/404/not-found.module.scss";

export const metadata = {
  title: "404: Page Not Found",
};

export default function NotFound() {
  return (
    <main>
      <div className={styles.NotFound}>
        <svg
          className={styles.NotFound__bunny}
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            fill="#ffd1d3"
            height="939.25"
            rx="469.62"
            width="939.25"
            x="30.38"
            y="30.03"
            className="fill-ffd3b3"
          ></rect>
          <path
            d="M620.52 565.36c-18.64.14-33.24 16-51.06 21.44-17.53 5.33-36.65 0-53-8.33s-31-19.72-47.46-27.7c-3.93-1.9-8.21-3.64-12.53-3-3.38.48-6.4 2.36-9 4.54a40.69 40.69 0 0 0-13.12 20.16 15.4 15.4 0 0 0-12.23 25.71c-6.14 1.86-9.32 9.19-8.41 15.54s5 11.79 9.34 16.49c15.05 16.12 35.1 26.51 54.72 36.57 30 15.38 61.61 31.16 95.31 30.3 23.2-.59 45.4-9.09 66.88-17.89"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="M620.52 561.14c-13.53.17-25 7.66-36.35 14.17-2.79 1.6-5.61 3.16-8.52 4.54-.69.33-1.38.65-2.09 1l-.56.15c.06 0 .58-.23.13-.06l-1.24.5q-2.28.88-4.64 1.55a50.21 50.21 0 0 1-5.28 1.16c-.18 0-1.22.18-.58.1l-1.28.14c-.92.1-1.85.17-2.78.22-1.79.09-3.59.09-5.38 0-.86 0-1.72-.09-2.59-.16l-1.29-.13-.64-.07-.52-.06h-.3l-.64-.1-1.29-.21q-1.4-.24-2.79-.54a81.06 81.06 0 0 1-5.32-1.33 98 98 0 0 1-10.41-3.65c-.45-.19-.1 0 0 0l-.61-.26-1.41-.63c-.87-.39-1.73-.79-2.59-1.2q-2.51-1.2-5-2.51c-3.35-1.78-6.62-3.67-9.87-5.63-6.49-3.91-12.83-8-19.3-12s-13.4-8-20.61-10.94a21.23 21.23 0 0 0-12.26-1.4c-3.87.81-7.27 3.13-10.25 5.62A44.43 44.43 0 0 0 432 566.27a45.1 45.1 0 0 0-1.8 5l4.08-3.11c-7.43-.29-15.14 4.08-18.37 10.86a20.23 20.23 0 0 0 3.16 22.07l1.86-7.07c-8.09 2.61-12.54 11.43-11.51 19.62 1.19 9.5 7.8 17 14.46 23.41 13.14 12.62 29.17 21.64 45.22 30 17 8.82 34.08 17.68 52.05 24.37 17.77 6.63 36.76 10.87 55.82 9.66 20.03-1.24 39.03-7.75 57.4-15.08q3.38-1.35 6.73-2.73c2-.83 3.71-2.84 2.95-5.19-.64-2-3-3.85-5.2-3-17.41 7.13-35.18 14.07-53.91 16.77l-.94.15h-.26l-1.61.19c-1.23.13-2.47.25-3.71.35q-3.45.26-6.93.3a110.68 110.68 0 0 1-13.62-.73l-1.55-.19c-.74-.09.54.08-.2 0l-.66-.1c-1.18-.17-2.35-.36-3.53-.56q-3.29-.57-6.56-1.32c-4.44-1-8.84-2.22-13.18-3.61-17.38-5.56-33.23-13.47-49.68-21.88-7.74-4-15.49-7.91-23-12.2-3.78-2.15-7.52-4.39-11.16-6.76q-2.69-1.74-5.29-3.59c-.87-.61-1.73-1.24-2.58-1.87l-1.19-.9-.41-.31-.58-.45a110.75 110.75 0 0 1-9.55-8.42c-1.49-1.48-3-3-4.33-4.59-.36-.41-.72-.84-1.07-1.26l-.39-.49c-.43-.54.32.44-.1-.12-.66-.88-1.29-1.78-1.87-2.71s-1-1.64-1.41-2.49c-.21-.42-.42-.85-.6-1.29.27.64 0 0 0-.11-.11-.32-.23-.64-.33-1-.32-1-.5-2-.73-2.95.17.75 0-.1 0-.44v-1.34c0-.44 0-.79.06-1.18.06-.79 0 0 0 .12 0-.22.07-.44.11-.66a19.16 19.16 0 0 1 .74-2.59c0-.08.25-.59 0-.11s.07-.13.13-.25c.18-.34.35-.69.55-1s.48-.73.72-1.09c-.49.73.13-.13.38-.39a10.06 10.06 0 0 0 .82-.77c.32-.44-.58.33-.1.06.14-.08.27-.19.4-.27a12.43 12.43 0 0 1 1.12-.64c.09 0 .58-.24.09 0s.39-.12.42-.13a4.28 4.28 0 0 0 1.86-7.06c-.07-.08-.78-1-.27-.29-.21-.3-.42-.6-.62-.92s-.32-.53-.46-.8c-.06-.11-.57-1.11-.35-.66s-.16-.42-.2-.52c-.12-.35-.23-.7-.33-1.06s-.19-.72-.27-1.08c0-.11-.18-1.11-.1-.53s0-.43 0-.55v-2.21c0-.37.21-1.29 0-.35.11-.6.24-1.2.41-1.79.11-.36.25-.7.36-1-.27.83.1-.21.17-.34a14.83 14.83 0 0 1 1-1.71c.21-.29.5-.59.11-.15.24-.27.47-.55.72-.81a18.81 18.81 0 0 1 1.47-1.35l-.14.11c.15-.11.29-.21.45-.31s.5-.34.76-.49.63-.36 1-.53c.11 0 1.19-.51.32-.17a17.14 17.14 0 0 1 1.71-.57c.35-.1.7-.18 1.06-.25.2 0 1.26-.09.31-.06.73 0 1.44-.08 2.17-.05a4.28 4.28 0 0 0 4.07-3.11c.23-.77.46-1.53.73-2.29.13-.38.27-.75.41-1.12 0-.06.51-1.28.18-.48a40.4 40.4 0 0 1 5-8.62c-.52.67.3-.36.33-.4l.78-.92q.92-1.05 1.92-2a36.84 36.84 0 0 1 3.3-2.94c-.64.5.45-.31.47-.32.34-.24.68-.47 1-.69s.7-.42 1.06-.62c.13-.07 1.55-.75.84-.45a17.42 17.42 0 0 1 2.33-.72c1.13-.3-.68 0 .58-.08h1.33s1.45.11.65 0c.44 0 .89.15 1.32.24a26.46 26.46 0 0 1 3 .92 44.14 44.14 0 0 1 4.39 2q2.44 1.22 4.83 2.51c3.33 1.8 6.6 3.72 9.83 5.68 6.35 3.86 12.57 7.91 18.92 11.76 12.55 7.61 25.95 14.45 40.54 17a64.94 64.94 0 0 0 22.42.27 63.78 63.78 0 0 0 18.85-6.94c6.26-3.31 12.2-7.19 18.5-10.41 1.57-.81 3.16-1.57 4.78-2.26-.88.37.27-.1.37-.14.46-.19.92-.36 1.39-.53.81-.3 1.63-.58 2.46-.83a40.81 40.81 0 0 1 5-1.22l1.1-.17c-1 .14.55 0 .73-.06q1.32-.11 2.64-.12a4.23 4.23 0 0 0 0-8.45z"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="M602.88 635.16c-22.4 17.94-45 36.13-63.94 57.55a120.93 120.93 0 0 0 34.15 4.35c16.3-.42 32.1-4.74 47.51-10.32z"
            fill="#000000"
            className="fill-000000"
          ></path>
          <path
            d="M599.89 632.17c-17.5 14-35 28.1-51 43.89q-6.69 6.63-12.94 13.66c-2.05 2.32-1.36 6.21 1.87 7.06a127 127 0 0 0 33.58 4.53 130.36 130.36 0 0 0 32.82-4.89c5.91-1.6 11.74-3.52 17.5-5.61 2-.73 3.74-2.9 2.95-5.19l-6-17.44-9.54-27.78L607 634a4.32 4.32 0 0 0-5.2-3c-2.07.67-3.72 3-3 5.2l6 17.44 9.54 27.78 2.19 6.36 3-5.2a185.66 185.66 0 0 1-30.75 8.6 104.53 104.53 0 0 1-15.16 1.56 109.07 109.07 0 0 1-16.06-.74c-1.27-.14-2.27-.28-3.85-.54s-3-.51-4.48-.8c-3.06-.6-6.09-1.31-9.11-2.11l1.87 7.06c14.87-16.79 31.86-31.52 49.22-45.68q7.32-6 14.72-11.86c1.73-1.39 1.55-4.55 0-6a4.35 4.35 0 0 0-6.04.1zM860.9 732c14.06-21.22 29.94-43.85 54.18-51.63 6.11-2 12.77-2.86 18.95-1.09 11.85 3.39 19.19 16.22 19.39 28.54s-5.41 24-12.3 34.26a135.83 135.83 0 0 1-82.48 56.1c-5.34 1.18-11.4 1.89-15.84-1.3"
            fill="#000000"
            className="fill-000000"
          ></path>
          <path
            d="M864.55 734.16c2.5-3.77 5-7.53 7.62-11.24q2-2.88 4.12-5.7l1.89-2.5c-.43.56.38-.48.54-.69.4-.51.8-1 1.21-1.52a132.75 132.75 0 0 1 9-10.14c1.57-1.59 3.18-3.13 4.84-4.6.8-.71 1.62-1.41 2.45-2.09l1.17-.95.59-.47c-.67.53.2-.15.35-.25a67.71 67.71 0 0 1 11.18-6.86l1.36-.64.87-.38c.6-.28-.58.23 0 0 1.06-.42 2.12-.84 3.2-1.21a46.59 46.59 0 0 1 7.53-2l.91-.15c-.58.08.18 0 .24 0 .69-.06 1.37-.12 2.06-.15a31.15 31.15 0 0 1 4.1.11c.76.07-.51-.09.23 0 .38 0 .75.12 1.13.2.59.12 1.19.26 1.77.43s.9.27 1.34.43l.65.24c1.07.41-.76-.38.26.12a27.75 27.75 0 0 1 2.57 1.4c.39.25.77.5 1.14.77.19.13.81.61.11.06l.67.54a27.16 27.16 0 0 1 2.13 2c.32.34.63.68.93 1l.45.54c.74.88-.49-.69.19.24a32.25 32.25 0 0 1 3.16 5.3c.09.18.72 1.69.36.78.17.44.35.88.51 1.33.36 1 .67 2 .93 3.07s.46 2 .62 3c0 .13.13.88.05.31s0 .19 0 .32q.11.89.15 1.77c.06 1.13.06 2.27 0 3.4 0 .57-.06 1.15-.11 1.72 0 .29 0 .58-.07.86 0 0-.17 1.37-.06.59a47.72 47.72 0 0 1-1.65 7.36c-.36 1.17-.76 2.34-1.2 3.49q-.3.81-.63 1.62c-.33.79-.16.37-.08.19l-.54 1.2a90 90 0 0 1-7.58 13.25c-1.27 1.88-2.6 3.73-4 5.54l-.48.62c-.41.54.36-.46 0 .07l-1.09 1.38c-.74.91-1.48 1.81-2.24 2.7a132.9 132.9 0 0 1-9.34 9.94 134.6 134.6 0 0 1-10.3 8.94c-.2.17-.41.33-.61.48l-.08.06-1.24.94c-.94.69-1.89 1.38-2.84 2-1.92 1.35-3.86 2.65-5.84 3.9q-5.77 3.65-11.89 6.71-3 1.47-6 2.81l-.9.39-.36.26c.46-.19-.29.13-.39.17l-.91.37c-1.08.44-2.17.86-3.26 1.27a129.14 129.14 0 0 1-13 4.14c-2.14.56-4.3 1.09-6.47 1.51l-1.77.31c-.67.12.62-.06-.06 0l-.8.08a23.34 23.34 0 0 1-3.74.08l-.77-.07c.18 0 .8.15 0 0-.5-.1-1-.21-1.48-.35l-.72-.24c.68.19.15.07 0 0a14.34 14.34 0 0 1-1.65-1 4.25 4.25 0 0 0-5.79 1.52 4.35 4.35 0 0 0 1.52 5.78c4.7 3.25 10.57 3.18 16 2.33a99.6 99.6 0 0 0 14-3.51 140.22 140.22 0 0 0 70.48-50c6.34-8.49 12-17.89 14.74-28.2 2.7-10 2.28-20.45-2.33-29.81-4.22-8.55-12.17-15.4-21.77-16.79-10.85-1.57-22 2.35-31.23 7.8-16.75 9.87-28.74 26-39.46 41.79-1.3 1.92-2.58 3.84-3.86 5.78a4.25 4.25 0 0 0 1.51 5.78 4.34 4.34 0 0 0 5.79-1.52z"
            fill="#000000"
            className="fill-000000"
          ></path>
          <path
            d="M618.66 567.45a933.84 933.84 0 0 0-30.21 94.89c-6.89 26.44-12.64 53.41-12.89 80.72-.13 14.27 1.57 29.41 10.25 40.73 5.2 6.79 12.5 11.64 19.8 16.1 12.59 7.71 25.71 14.71 39.75 19.28 14.76 4.8 30.29 6.84 45.77 7.94 49.74 3.55 100.33-2.43 147.29-19.2 13.9-5 28.12-11.36 36.88-23.22 9-12.17 10.79-28.51 8-43.38s-9.79-28.57-17.1-41.81c-22.89-41.38-50.2-80.81-85.2-112.57-13.12-11.89-27.64-22.86-44.52-28.22"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="M614.58 566.33q-15.5 41-27.12 83.36c-7.73 28.18-14.68 56.95-15.94 86.26-.54 12.73-.34 26.19 4.29 38.24a47.73 47.73 0 0 0 10.26 16.33 81.63 81.63 0 0 0 15.62 11.92c11.83 7.38 24.17 14.07 37.26 18.95 13.41 5 27.54 7.56 41.73 9a370.28 370.28 0 0 0 84.57-1c27.59-3.47 55.3-9.67 81.17-20 11.38-4.56 22.82-10.49 30.68-20.19 8.11-10 11.69-22.66 11.62-35.43-.08-13.8-4.43-27-10.16-39.44-5.58-12.08-12.33-23.68-19.14-35.1a465.47 465.47 0 0 0-45.76-64.59 339.41 339.41 0 0 0-27.33-28.54c-9.53-8.82-19.66-17.24-31-23.65a94.53 94.53 0 0 0-17.75-7.82 4.23 4.23 0 1 0-2.25 8.15c11.56 3.71 22.31 10.33 31.82 17.88a274.23 274.23 0 0 1 28 26.07 405.54 405.54 0 0 1 46.49 59.91c7 10.8 13.55 21.87 19.81 33.11 6.42 11.55 12.71 23.33 16.2 36.15 3.11 11.4 3.76 23.36.11 34.7-3.47 10.76-11.18 18.82-20.93 24.51-10.64 6.21-22.39 10-34.3 13.59a344.56 344.56 0 0 1-39.95 9.61 368.47 368.47 0 0 1-81.71 5.14c-13.73-.63-27.5-1.81-40.95-4.74a147 147 0 0 1-37.37-14c-5.89-3.11-11.65-6.48-17.29-10-5.15-3.23-10-6.62-14.14-11.12-7.81-8.51-10.48-20.3-11.15-31.51-.8-13.43.34-27.09 2.28-40.39a421 421 0 0 1 8.55-41.61q10.44-41.51 24.74-81.9 3.46-9.86 7.16-19.62c.81-2.13-.89-4.63-3-5.19a4.31 4.31 0 0 0-5.2 3z"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="m827.34 638.56-32.64 14.7c9.61 11.7 21.13 22 34.62 28.88a75.62 75.62 0 0 0 31.78 8.37 515.94 515.94 0 0 0-33.76-51.95z"
            fill="#000000"
            className="fill-000000"
          ></path>
          <path
            d="m825.21 634.91-28.64 12.9-4 1.81a4 4 0 0 0-2 3.08 4.35 4.35 0 0 0 1.16 3.55C805 672.35 822 686 842.34 691.79a77.42 77.42 0 0 0 18.76 3c3.26.11 5.2-3.65 3.65-6.36-8-14-16.52-27.63-25.74-40.83q-3.93-5.62-8-11.12c-1.31-1.77-3.72-2.85-5.78-1.52-1.75 1.13-2.93 3.89-1.52 5.79 9.61 12.91 18.5 26.33 26.81 40.11q3.54 5.88 7 11.84l3.65-6.36a72.24 72.24 0 0 1-29-7.49 92.19 92.19 0 0 1-12.43-7.5l-1.36-1-.67-.5c.09.07-1-.77-.58-.43s-.33-.26-.4-.32l-.65-.52-1.63-1.33c-1.89-1.57-3.72-3.21-5.5-4.9a135 135 0 0 1-11.16-12l-.85 6.63L825.48 644l4-1.8c2-.91 2.67-4 1.52-5.78a4.35 4.35 0 0 0-5.79-1.51z"
            fill="#000000"
            className="fill-000000"
          ></path>
          <path
            d="M734.41 577c12.85-12.44 32.43-13.73 50.25-15.36 26.73-2.46 56.49-9.37 70.49-32.27 12.05-19.71 8.79-46 21-65.6 2.61-4.17 6.12-8.1 10.81-9.55s10.65.43 12.39 5a16.3 16.3 0 0 1 30 6.59c1.73-7.16 13.08-7.35 17.73-1.63s4.38 13.87 3.65 21.21c-5 50.79-23.35 99.36-57.3 137.91-32.83 37.28-78.43 57.56-126.9 37.8"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="M737.39 580c.69-.66 1.4-1.29 2.13-1.9.18-.15 1.09-.87.47-.4.39-.3.8-.59 1.21-.88a42.89 42.89 0 0 1 4.78-2.91c.82-.43 1.66-.83 2.51-1.22.23-.1 1.29-.55.54-.24.47-.19.93-.38 1.4-.55 1.77-.68 3.57-1.26 5.4-1.78a96.06 96.06 0 0 1 11.54-2.4l1.35-.2.78-.11c-.07 0-.65.09-.15 0l3.11-.38q2.91-.33 5.84-.6c14.93-1.42 29.89-3 44.14-8 13.93-4.85 26.86-12.77 35.21-25.2 9.14-13.59 10.57-30.28 14.11-45.83a99.43 99.43 0 0 1 3.28-11.6c.3-.86.64-1.71 1-2.56 0-.13.31-.75 0-.08.07-.18.15-.36.23-.54.24-.53.48-1.07.73-1.6a50.84 50.84 0 0 1 2.82-5.18c.49-.77 1-1.52 1.54-2.26.07-.11.49-.63 0-.08l.37-.46c.38-.45.77-.89 1.17-1.31a20.47 20.47 0 0 1 2-1.84c-.61.49.55-.37.7-.46.43-.27.87-.53 1.33-.76.22-.11.46-.23.69-.32-.09 0-.56.17-.12.07s.78-.26 1.17-.36 1.49-.09.47-.11c.43 0 .86-.05 1.3-.05.21 0 1.29.1.73 0s.54.12.71.17c.42.1.82.26 1.23.38 0 0-.67-.35-.28-.12.23.13.48.23.71.36s1 .67.61.36.38.35.5.49.28.3.42.45c-.11-.12-.47-.73-.11-.1.13.23.69 1.4.28.39a4.34 4.34 0 0 0 3.51 3 4.3 4.3 0 0 0 4.22-2c.06-.11.77-1.16.48-.75s.49-.58.58-.67a19.66 19.66 0 0 1 1.55-1.48c.73-.63-.46.26.28-.21.36-.22.7-.46 1.06-.68s.72-.41 1.1-.6c.18-.09 1.17-.5.29-.16a18.18 18.18 0 0 1 2-.67c.4-.11.81-.2 1.22-.27 1.1-.21-.39 0 .47-.07s1.42-.07 2.14 0c.36 0 .71.05 1.07.1-1-.13.25.07.46.12a15.47 15.47 0 0 1 2.22.7c-.69-.27 0 0 .29.17s.63.33.94.52.61.37.9.57l.58.42c-.34-.26-.39-.29-.15-.1.55.54 1.15 1 1.68 1.61.24.27.47.54.69.82-.57-.71.08.13.19.3a23.33 23.33 0 0 1 1.24 2.17c.42.79-.18-.61.13.31.12.34.24.67.34 1a15.92 15.92 0 0 1 .51 2.45c.24 1.74 2.41 3.18 4.08 3.11a4.34 4.34 0 0 0 4.07-3.11 5.36 5.36 0 0 0 .23-.76c.14.18-.42.82-.12.3.13-.22.26-.44.38-.66.36-.65-.23.27-.22.26a2.65 2.65 0 0 1 .86-.87l-.47.36.4-.28.65-.38c1-.54-.72.21.39-.16.42-.13.84-.21 1.27-.32.91-.22-1 .06-.07 0h.53a12.8 12.8 0 0 1 1.64 0c.18 0 .94-.07.26 0s0 0 .26.07a12.57 12.57 0 0 1 1.34.35c.21.07.43.18.65.23.57.13-.92-.47-.11-.05a15.46 15.46 0 0 1 1.43.81 3.48 3.48 0 0 1 .45.32c0-.07-.73-.63 0 0a10.89 10.89 0 0 1 .93 1c-.46-.54 0-.06 0 .07.21.32.43.63.62 1s.25.44.37.66.7 1.56.36.7a21 21 0 0 1 1.05 3.64c0 .26.09.51.14.76.23 1.24-.06-.85.06.41.06.72.12 1.43.16 2.15a60.73 60.73 0 0 1-.3 8.09c-.27 2.89-.6 5.77-1 8.65 0 .41-.1.82-.16 1.24 0 .12-.11.83 0 .11-.1.69-.19 1.37-.29 2.06-.22 1.51-.45 3-.69 4.52a268.52 268.52 0 0 1-7.55 33.5q-2.46 8.3-5.46 16.41-1.5 4-3.15 8l-.32.75s-.54 1.28-.21.51l-.81 1.89c-.6 1.38-1.21 2.76-1.84 4.13a227 227 0 0 1-16.47 29.91A196.11 196.11 0 0 1 888.06 623a162.26 162.26 0 0 1-12 11.79c-2.06 1.82-4.16 3.6-6.32 5.31l-.61.48c-.06 0-1.08.83-.38.3l-1.55 1.17c-1.09.81-2.19 1.6-3.3 2.38a126.18 126.18 0 0 1-13.5 8.29c-2.33 1.24-4.7 2.39-7.11 3.47l-1.72.74c.76-.32 0 0-.2.08l-.86.36c-1.27.51-2.55 1-3.84 1.45a101.25 101.25 0 0 1-14.84 4.1c-1.21.24-2.43.45-3.66.64l-.91.14-.55.08-.54.07-1.11.13q-3.92.43-7.85.54t-8-.12c-1.28-.07-2.55-.17-3.82-.29l-1.92-.21-1-.11h.16l-.78-.11a100.89 100.89 0 0 1-16.17-3.76c-2.74-.87-5.43-1.86-8.1-2.94-2.05-.83-4.73.91-5.19 3-.56 2.45.75 4.31 3 5.2a102.94 102.94 0 0 0 67.61 3.75c21.92-6.39 41.33-19.67 57.21-35.86a218.85 218.85 0 0 0 40.75-59 259.14 259.14 0 0 0 21.5-69q1.51-9.18 2.48-18.45c.61-5.91 1.06-12.12-.71-17.89-1.71-5.56-5.28-10.05-10.86-12-4.33-1.49-9.9-1.18-13.65 1.63a11.32 11.32 0 0 0-4.34 6.28h8.15a20.8 20.8 0 0 0-15.81-16.93 21.14 21.14 0 0 0-21.95 9.33l7.72 1a13.26 13.26 0 0 0-9.26-8.12 16.45 16.45 0 0 0-12.47 2c-7.46 4.48-11.73 13.19-14.62 21.07-5.66 15.4-5.92 32.24-12.13 47.47-.32.77-.1.23 0 .07l-.32.72c-.19.41-.38.83-.58 1.24-.45 1-.93 1.88-1.44 2.8a49.38 49.38 0 0 1-3 4.82c-.27.38-.55.75-.83 1.13.48-.65-.12.15-.3.38q-.87 1.08-1.8 2.1a51.57 51.57 0 0 1-3.77 3.77c-.64.58-1.29 1.14-2 1.69l-.97.82c-.14.11-.65.47 0 0-.23.17-.45.35-.69.52-1.43 1.06-2.92 2-4.44 3a83 83 0 0 1-9.52 4.89c-.58.26.62-.25 0 0l-.66.27-1.16.46c-.89.35-1.78.69-2.68 1q-2.64.93-5.32 1.73c-3.62 1.08-7.28 2-11 2.73s-7.31 1.35-11 1.86c-.82.12-.12 0 0 0l-.72.09-1.44.18c-1 .12-1.91.23-2.87.33-1.82.2-3.64.37-5.45.53-15.84 1.44-33.33 2.63-46.66 12.29a48 48 0 0 0-5.05 4.17 4.22 4.22 0 0 0 6 6z"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="M619.48 540.36c2.78 5.07-.53 11.94 2.36 16.95a14.27 14.27 0 0 0 4.11 4.08c13.26 9.67 29.3 15.14 45.58 17.2s32.85.84 49-2c9.18-1.58 18.44-3.73 26.49-8.42a11 11 0 0 0 4.45-4c1.21-2.27.92-5 .6-7.55l-4.55-36"
            fill="#000000"
            className="fill-000000"
          ></path>
          <path
            d="M615.83 542.49c.54 1-.15-.76.17.35.1.36.21.7.29 1.07s.1.48.14.73c-.16-1 0 .23 0 .37.08 1.47 0 3-.06 4.43-.12 3.33.08 6.66 1.64 9.67s4.74 5.22 7.57 7.17a83.55 83.55 0 0 0 8.09 4.93 108.53 108.53 0 0 0 37.44 11.55c14.58 1.89 29.3 1.09 43.82-1a147.53 147.53 0 0 0 19.78-3.92 73.89 73.89 0 0 0 9.75-3.57 30.12 30.12 0 0 0 8.54-5.17c3.22-3.06 3.9-7.33 3.42-11.57-.46-4.07-1-8.13-1.54-12.19l-3.11-24.64c-.28-2.18-1.75-4.34-4.23-4.22-2 .09-4.52 1.87-4.22 4.22l2.68 21.19 1.31 10.35c.21 1.62.42 3.24.62 4.86.08.72.16 1.44.2 2.16v1.08c0 .2-.2 1.53 0 .78a8.89 8.89 0 0 1-.28 1c-.19.52.45-.44-.19.31-.84 1 .34-.31-.19.25-.24.25-.48.47-.72.7-.87.81.57-.3-.44.32l-.69.45c-.73.45-1.48.87-2.24 1.28-1.3.69-2.63 1.33-4 1.91.69-.29-.65.25-.62.24l-.83.32c-.83.31-1.66.6-2.5.88a120.25 120.25 0 0 1-18.64 4.22 184.86 184.86 0 0 1-20 2.16 146.77 146.77 0 0 1-20.44-.29c-1.62-.14-3.23-.32-4.85-.52a2.89 2.89 0 0 1-.58-.08l-.86-.12c-.86-.13-1.71-.26-2.56-.41-3.06-.53-6.1-1.18-9.1-2a94.7 94.7 0 0 1-16.64-5.93 87.78 87.78 0 0 1-8.88-4.86c-1.4-.88-2.78-1.8-4.12-2.76l-1-.75c-1.06-.79.53.5-.46-.38-.32-.27-.63-.54-.93-.84 0 0-.85-1-.41-.4a10.87 10.87 0 0 1-.64-1c-.42-.71.06.5-.13-.36-.08-.35-.18-.72-.27-1.07-.23-.87 0 .64-.06-.35-.07-1.54-.05-3.06 0-4.6.13-3.56-.06-7-1.73-10.25a4.25 4.25 0 0 0-5.79-1.51 4.32 4.32 0 0 0-1.51 5.78z"
            fill="#000000"
            className="fill-000000"
          ></path>
          <path
            d="M775.72 396.59c-.16-5.75 1.43-11.39 3-16.94 29.88-108.52 53.39-231.59 5.52-333.46-8-17-36.2-33-55.11-24.59a27.12 27.12 0 0 0-9.91 7.73c-25.92 31.93-23.63 75.89-20.41 116.07q7.9 98.26 15.79 196.53c.8 10 1.18 21.28-5.66 28.61-4.11 4.4-9.57 6.19-15.5 6.45a22.09 22.09 0 0 1-22.9-22.61c2-95.71.14-195.16-46.81-277.95-7.33-12.92-16-25.55-28.13-34.07s-28.6-12.3-42.22-6.46c-19.58 8.36-26.94 32.29-28.56 53.52-3.83 50.18 11.27 100 30.79 146.34 18.52 44 41.18 86.38 56.91 131.43a14.85 14.85 0 0 1-1.9 13.43c-22.59 32.06-52.74 82-40 116.18 13.31 35.52 53.71 52.44 91 59.58 36.56 7 97.29-1.44 121.33-29.86s12.62-74.4-1.26-108.87c-2.69-6.81-5.76-13.72-5.97-21.06z"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="M780 396.59c-.1-9.51 3.72-19.07 6.15-28.16q3.52-13.15 6.79-26.37c4.44-18 8.47-36.07 11.88-54.27 6.82-36.39 11.3-73.39 11-110.46-.28-35.83-5.11-71.91-16.81-105.88q-4.44-12.9-10.15-25.33A47.85 47.85 0 0 0 776.4 29.7C765.25 20.1 750 13.28 735 15.52c-16.69 2.48-26.43 19.32-32.45 33.56-6.5 15.38-9.07 32.06-9.74 48.66-.68 17.15.66 34.29 2 51.38l5.07 63.21q5.08 63.21 10.15 126.42c.63 7.82 1.89 16.68-1.22 24.15-3 7.3-10.81 10.59-18.39 9.8a18 18 0 0 1-14.34-10.82c-1.47-3.51-1.4-7-1.32-10.76q.13-7 .24-14c.53-37 .15-74.11-3.57-111C667.81 190 661 153.91 648.31 119.7a302.48 302.48 0 0 0-23.21-49.26c-9-15.15-20.6-30-37.21-37.15-15.63-6.72-33.61-5.93-46.83 5.47-11.25 9.69-16.67 24.9-19.06 39.15-3.06 18.2-2.48 37.15-.27 55.41a321.73 321.73 0 0 0 12.79 57.75c12 38.26 29.63 74.4 46.31 110.77 8.32 18.15 16.44 36.41 23.48 55.11.83 2.2 1.65 4.4 2.45 6.62s2 4.73 2.3 7.17c.52 4-1.58 7-3.75 10.12-4.39 6.3-8.65 12.7-12.7 19.23-8.72 14.05-16.62 28.75-22.3 44.32-5.11 14-8.44 29.21-6.13 44.11 4.71 30.35 32.88 50.58 59.39 61.31A176 176 0 0 0 707.64 562a170.34 170.34 0 0 0 42.76-9.56c12.3-4.64 24.42-11 33.56-20.68 22.41-23.65 19.11-59.47 11-88.42-2.06-7.36-4.51-14.6-7.23-21.74-3.08-8.06-7.42-16.2-7.81-25-.25-5.42-8.7-5.45-8.45 0 .41 9.17 4.28 17.35 7.54 25.77 2.86 7.35 5.42 14.82 7.57 22.4 4.23 14.91 7 30.5 5.79 46-1.11 13.82-6.21 27.16-16.33 36.86-9.14 8.77-21.05 14.41-33 18.37a169.59 169.59 0 0 1-41.31 8c-12.88.92-26 .73-38.76-1.65-28-5.25-58.37-15.65-77.33-38.11-8.8-10.42-14.14-23.14-13.86-36.86.31-14.77 5.42-29.34 11.51-42.64a302.32 302.32 0 0 1 23.9-41.81c4.29-6.41 10.28-12.7 10.3-20.86 0-4.58-2-8.9-3.53-13.13-1.67-4.57-3.42-9.12-5.21-13.65-14.55-36.62-32.54-71.73-48-108-14.98-35.29-27.75-72.42-31.3-110.85-1.6-17.18-2-35.3 1.88-52.23 3-13.23 9.23-27.06 21.88-33.58 14.91-7.68 33.11-1.27 44.93 9.11 13 11.43 21.62 27.33 29.24 42.64 15.88 31.87 25.6 66.48 31.39 101.52 5.89 35.73 7.68 72 8 108.19q.12 13.56-.05 27.13c0 4.51-.11 9-.18 13.53s-.46 9-.18 13.48a26.6 26.6 0 0 0 30.15 24.7c8.3-1.07 15.85-5.63 19.5-13.36 3.42-7.25 3.52-15.41 3-23.25-1.38-20.46-3.27-40.9-4.91-61.35l-10-124.29c-2.65-32.93-7.05-68 3.79-100a88.88 88.88 0 0 1 10.67-21.49c4.32-6.34 9.3-11.67 17.08-13.28 13.07-2.71 27.75 4.84 36.94 13.64 5.21 5 8.14 10.79 11 17.34a257 257 0 0 1 9.24 24.73 299.82 299.82 0 0 1 11.37 51c4.73 35.38 3.81 71.3-.19 106.61-4.08 36.14-11.52 71.84-20.36 107.08q-3.14 12.51-6.5 25c-2.4 8.9-5.73 18-5.62 27.31.03 5.38 8.48 5.38 8.48-.03z"
            fill="#ff9498"
            className="fill-f96632"
          ></path>
          <path
            d="M642.11 439.42a1 1 0 0 1 0-.17l-.15 1.12a1.29 1.29 0 0 1 .08-.31l-.43 1a2.54 2.54 0 0 1 .16-.28l-.66.86a2.06 2.06 0 0 1 .29-.3l-.86.66a2.38 2.38 0 0 1 .44-.25l-1 .43a3.17 3.17 0 0 1 .41-.12l-1.12.15a3 3 0 0 1 .42 0l-1.12-.15a2.09 2.09 0 0 1 .43.11l-1-.42a2.2 2.2 0 0 1 .49.28l-.86-.66a2.52 2.52 0 0 1 .4.4l-.66-.86a3.49 3.49 0 0 1 .4.67l-.43-1a3.24 3.24 0 0 1 .24.86l-.15-1.12a5.71 5.71 0 0 1 0 1.49l.15-1.12a9 9 0 0 1-.48 2.11l.42-1a2.82 2.82 0 0 1-.21.38l.66-.86a2.73 2.73 0 0 1-.23.25l.85-.66-.21.13 1-.43a1 1 0 0 1-.21.07l1.12-.15h-.13l1.12.15-.19-.05 1 .42-.18-.1.86.66a.72.72 0 0 1-.2-.19l.66.86a1.26 1.26 0 0 1-.13-.23l.43 1a.2.2 0 0 1 0-.11l.15 1.12a.49.49 0 0 1 0-.17l-.15 1.13V445l-.43 1s0-.07.06-.09l-.66.85a.3.3 0 0 1 .08-.08l-.85.66a4.42 4.42 0 0 0 2-2.52 4.32 4.32 0 0 0-.43-3.26 4.25 4.25 0 0 0-2.53-1.94 4.34 4.34 0 0 0-3.25.42 4.74 4.74 0 0 0-2.14 2.75 4.57 4.57 0 0 0 .23 3.09c.1.23.18.45.3.67a7.84 7.84 0 0 0 .7.91l.09.1a5.08 5.08 0 0 0 2.25 1.31 4.87 4.87 0 0 0 2.65 0 5.21 5.21 0 0 0 1.23-.55 5.79 5.79 0 0 0 1.06-.86 6.78 6.78 0 0 0 1.58-3 21.32 21.32 0 0 0 .46-3 4.92 4.92 0 0 0 0-.94 8 8 0 0 0-.32-1.88 7.31 7.31 0 0 0-1.83-3 9.65 9.65 0 0 0-1.07-.84 1.64 1.64 0 0 0-.29-.16 6.53 6.53 0 0 0-2.69-.75 5.55 5.55 0 0 0-3.4 1 5.53 5.53 0 0 0-2.63 4.7 4.35 4.35 0 0 0 1.23 3 4.31 4.31 0 0 0 3 1.23 4.21 4.21 0 0 0 3-1.23 4.41 4.41 0 0 0 1.24-3zM709 446.18a1 1 0 0 1 0-.17l-.15 1.12a2.12 2.12 0 0 1 .09-.31l-.43 1a1.56 1.56 0 0 1 .16-.28l-.66.86a1.64 1.64 0 0 1 .29-.3l-.86.66a2.38 2.38 0 0 1 .44-.25l-1 .43a2.77 2.77 0 0 1 .41-.12l-1.13.15a3.12 3.12 0 0 1 .43 0l-1.13-.15a2.09 2.09 0 0 1 .43.11l-1-.42a1.83 1.83 0 0 1 .49.28l-.85-.66a2.52 2.52 0 0 1 .4.4l-.66-.86a3 3 0 0 1 .39.67l-.42-1a4.22 4.22 0 0 1 .24.86l-.15-1.12a6.18 6.18 0 0 1 0 1.49l.15-1.12a9 9 0 0 1-.49 2.11l.43-1a2.08 2.08 0 0 1-.22.38l.66-.86a1.79 1.79 0 0 1-.23.25l.86-.66-.22.13 1-.43a.74.74 0 0 1-.21.07l1.13-.15H707l1.13.15-.2-.05 1 .42a1 1 0 0 1-.17-.1l.85.66a1.14 1.14 0 0 1-.19-.19l.66.86a.65.65 0 0 1-.13-.23l.42 1v-.11l.15 1.12a1 1 0 0 1 0-.17l-.15 1.12v-.05l-.43 1a.47.47 0 0 1 0-.1l-.66.86.09-.08-.86.66h.06a4.41 4.41 0 0 0 1.94-2.52 4.21 4.21 0 0 0-3-5.2 4.36 4.36 0 0 0-3.26.42 4.78 4.78 0 0 0-2.14 2.75 4.66 4.66 0 0 0 .23 3.08 7 7 0 0 0 .31.68 6.12 6.12 0 0 0 .7.91l.09.1a5.19 5.19 0 0 0 2.24 1.31 4.93 4.93 0 0 0 3.88-.58 5.53 5.53 0 0 0 1.07-.86 6.77 6.77 0 0 0 1.57-3 20 20 0 0 0 .47-3 5.91 5.91 0 0 0 0-.94 7.94 7.94 0 0 0-.31-1.88 7.31 7.31 0 0 0-1.83-3 9.76 9.76 0 0 0-1.08-.84 1.56 1.56 0 0 0-.28-.16 6.53 6.53 0 0 0-2.69-.75 5.66 5.66 0 0 0-3.41 1 6 6 0 0 0-1.91 2 5.61 5.61 0 0 0-.72 2.72 4.36 4.36 0 0 0 1.24 3 4.29 4.29 0 0 0 3 1.23 4.23 4.23 0 0 0 3-1.23 4.5 4.5 0 0 0 1.24-3zM676.24 464.15a47.29 47.29 0 0 0-10.35-.84 48.72 48.72 0 0 0-5.65.58 5.4 5.4 0 0 0-4.77 5.14c-.11 4 4.26 6.4 7.38 7.87a16.65 16.65 0 0 0 10.15 1.67 11 11 0 0 0 8-5.82 4.56 4.56 0 0 0 .43-3.26 4.3 4.3 0 0 0-1.94-2.52c-1.86-1-4.81-.64-5.79 1.51-.13.29-.29.56-.44.84-.38.7.62-.64.09-.12a6 6 0 0 0-.68.65c.55-.42.65-.5.29-.25l-.2.13a6.13 6.13 0 0 0-.84.45c.64-.26.76-.31.34-.15l-.23.08c-.31.1-.62.18-.94.25l-.48.08.65-.09a10.61 10.61 0 0 0-1.69 0c-.48-.05-.4 0 .23 0a5.6 5.6 0 0 1-.59-.12c-.29-.06-.58-.14-.87-.22a3.62 3.62 0 0 1-1.13-.4l.18.08-.27-.13c-.69-.32-1.36-.69-2-1.07s-1.18-.78-1.8-1.13q-.42-.28.33.27a4.4 4.4 0 0 1-.38-.37 1.93 1.93 0 0 1 .57 1 2.18 2.18 0 0 1-1.09 2.74c-1.44 1.51-1.3 1.14-.26 1 .49-.07.45-.07-.12 0l.5-.06c.79-.09 1.57-.15 2.36-.19a39.13 39.13 0 0 1 4.72 0c.78.05 1.56.14 2.35.21h-.29l.67.09 1.33.24c2.16.4 4.66-.6 5.2-3 .47-2.07-.63-4.76-3-5.2zM668.93 504.37a15.51 15.51 0 0 1 1.57-1.57c.38-.34-.81.56-.21.16l.48-.32c.29-.19.6-.37.9-.54l.52-.26c.63-.3 0 0-.26.09.37-.09.74-.28 1.11-.4s.67-.19 1-.27.39-.09.58-.12.89-.14.13 0 .4 0 .61 0a11.42 11.42 0 0 1 1.17 0c.35 0 .7 0 1.05.07.53 0-1-.19-.31 0l.57.12c.35.07.69.16 1 .26l.55.18c.65.24 0 0-.25-.12.67.4 1.39.69 2 1.14a4.26 4.26 0 0 0 5.79-1.52 4.34 4.34 0 0 0-1.52-5.78c-6.8-4.67-17.21-3.3-22.53 3-1.42 1.69-1.78 4.35 0 6 1.57 1.44 4.46 1.81 6 0zM632.94 421.67a29.4 29.4 0 0 0 14.38 1.83 4.63 4.63 0 0 0 3-1.23 4.31 4.31 0 0 0 1.23-3 4.23 4.23 0 0 0-1.23-3 4.11 4.11 0 0 0-3-1.24 27.64 27.64 0 0 1-7 0l1.13.15a27.7 27.7 0 0 1-6.28-1.66 4.27 4.27 0 0 0-3.26.42 4.32 4.32 0 0 0-1.94 2.53 4.27 4.27 0 0 0 .42 3.26 4.94 4.94 0 0 0 2.53 1.94zM719.42 415.62l-.66.29c.46-.19.46-.2 0 0s-.67.26-1 .38c-.79.27-1.6.51-2.42.71s-1.64.36-2.47.51c-.49.07-.47.08 0 0a4.78 4.78 0 0 1-.53.06c-.42.05-.84.08-1.26.11a32.74 32.74 0 0 1-5-.11c-1.19-.11.87.16-.3 0-.48-.08-.95-.16-1.42-.26-.83-.17-1.64-.39-2.45-.63a4.27 4.27 0 0 0-5.2 2.95 4.32 4.32 0 0 0 3 5.2 34.27 34.27 0 0 0 24-1.86c2-.91 2.66-4 1.51-5.78a4.34 4.34 0 0 0-5.78-1.51z"
            fill="#000000"
            className="fill-000000"
          ></path>
          <g fill="#ff9498" className="fill-f96632">
            <path d="M579.29 704.67c-12.9 67.84-16.07 155.22-11.35 224.13.27 3.81.53 7.81-1 11.31-2.43 5.5-9.12 9.63-8.14 15.55.91 5.49 7.65 7.49 13.16 8.27q29 4.08 58.28 5.29c3.75.15 7.86.16 10.79-2.19 3.43-2.74 4-7.66 4.3-12 3.77-55.13 21.05-114.32 24.82-169.44"></path>
            <path d="M575.22 703.54c-3.1 16.35-5.48 32.83-7.39 49.36-2 17.29-3.44 34.64-4.45 52q-1.53 26.36-1.71 52.76-.18 25.43.91 50.84.27 6.08.62 12.15c.24 4.08.69 8.19.72 12.29a11.8 11.8 0 0 1-.9 5.61c.27-.64-.21.35-.31.52-.2.37-.42.73-.65 1.08s-.48.71-.73 1.06c-.14.19-.82 1.07-.34.47-2.36 3-5.09 5.93-6.11 9.69a11.57 11.57 0 0 0 3.12 11.34 20.69 20.69 0 0 0 10 4.78c4.53 1 9.24 1.4 13.85 2q7.26.9 14.54 1.62 14.82 1.45 29.71 2.18c4.37.21 9.19.78 13.41-.69a14 14 0 0 0 8.9-9.64c1.22-4.06 1.2-8.48 1.54-12.68q.55-6.81 1.34-13.59c.54-4.64 1.07-8.76 1.68-13.08q1-6.8 2.07-13.58c3-18.64 6.61-37.17 9.95-55.75 3.3-18.37 6.36-36.82 8.28-55.4q.69-6.63 1.15-13.3a4.26 4.26 0 0 0-4.23-4.23 4.32 4.32 0 0 0-4.22 4.23 527.94 527.94 0 0 1-6.74 52.78c-3.08 18.13-6.6 36.19-9.79 54.31s-6 36.08-7.66 54.29q-.3 3.32-.54 6.64c-.07.93-.12 1.86-.2 2.78 0 .47-.09.93-.14 1.39 0 0-.1.69 0 .23s-.11.64-.11.61a19.1 19.1 0 0 1-.61 2.48c-.08.22-.57 1.28-.21.58a12.93 12.93 0 0 1-.64 1.15 4.93 4.93 0 0 1-2.82 1.87c-.47.12-.94.22-1.42.3.68-.11-.34 0-.54 0-1.07.07-2.13.07-3.19 0-2.27-.06-4.53-.19-6.8-.3q-7.31-.37-14.6-.93-14.46-1.08-28.86-2.89a96 96 0 0 1-11.69-1.77c-.79-.2-1.58-.43-2.36-.71-.31-.11-1-.39-.27-.08-.41-.18-.82-.38-1.22-.59s-.66-.39-1-.6a3.6 3.6 0 0 1-.4-.28c.13.1.64.58.11.07l-.66-.66c-.21-.2-.32-.58.08.13-.1-.18-.23-.34-.33-.51s-.14-.29-.22-.41c-.32-.43.12.67.06.14a5.19 5.19 0 0 0-.24-.94c-.17-.51-.08.63 0 .1a2.1 2.1 0 0 0 0-.5v-.1c0 .58.06-.25.1-.4.08-.32.19-.63.29-.94-.26.8 0-.05.2-.36a19.94 19.94 0 0 1 1.31-2.06c.15-.2.81-1.06.33-.45.26-.34.53-.67.8-1 .69-.86 1.37-1.72 2.05-2.6a21.11 21.11 0 0 0 2.81-4.64c1.81-4.28 1.67-8.81 1.36-13.36q-.39-5.86-.71-11.73c-.88-16.35-1.29-32.74-1.33-49.12q-.06-25.72 1.15-51.43t3.68-51.23q1.26-12.42 2.88-24.8c0-.23.16-1.16.13-1-.06.46.06-.44.08-.53s0-.44.08-.66c.14-1 .29-2 .43-3 .28-2 .58-4 .88-6.05q.9-5.94 1.9-11.87.95-5.56 2-11.13c.41-2.16-.6-4.66-3-5.2-2.08-.47-4.76.63-5.2 2.95zM775.34 806.67a271.61 271.61 0 0 0-38.91 107.23c-1.7 12.48-2.85 25.89-10.79 35.67-2.2 2.72-5 5.4-5.16 8.89-.25 6.11 7.32 9.09 13.39 9.84a132.45 132.45 0 0 0 65.71-8.71c2.14-.88 4.36-1.88 5.79-3.7a14.74 14.74 0 0 0 2.26-5.87c14.56-61.78 65.66-110.37 78.65-172.5 4.13-19.74-5.56-55.82-19.95-69.95"></path>
            <path d="M771.69 804.53A275.47 275.47 0 0 0 732 915.36l-.42 3.15c0 .12-.11.83 0 .14l-.12.85c-.08.56-.15 1.12-.24 1.69-.32 2.24-.68 4.49-1.11 6.72s-.94 4.39-1.57 6.55q-.43 1.5-1 3c-.16.46-.33.91-.5 1.36l-.31.76c.27-.63-.1.21-.15.32a36 36 0 0 1-3.25 5.73c-.09.14-.82 1.13-.45.65-.34.44-.69.85-1 1.27-.85 1-1.7 2-2.5 3.08-3 3.93-4.22 9-1.72 13.5 2.05 3.68 6.05 5.84 9.91 7.12 4.27 1.42 8.94 1.68 13.4 2a136.86 136.86 0 0 0 30.73-1.48 131 131 0 0 0 29-8.06 22.25 22.25 0 0 0 6.68-3.76 13.94 13.94 0 0 0 3.87-6.9c1.13-4.18 2.09-8.39 3.36-12.54s2.72-8.28 4.29-12.35q1.14-3 2.36-5.88v-.12l.33-.75c.18-.44.37-.88.56-1.32.47-1.06.94-2.12 1.42-3.18 3.59-7.93 7.58-15.69 11.77-23.32 8.4-15.34 17.6-30.23 26.19-45.46s16.63-30.92 22.52-47.44a134.83 134.83 0 0 0 6.61-23.9 74.18 74.18 0 0 0-.13-21.56 115.92 115.92 0 0 0-5.45-22.87 88.41 88.41 0 0 0-9.64-20.11 49.68 49.68 0 0 0-6.17-7.62 4.23 4.23 0 1 0-6 6 40.71 40.71 0 0 1 2.92 3.23c.28.36.63.85.16.2l.71 1c.49.67 1 1.35 1.4 2a73.61 73.61 0 0 1 5 9c.34.74.68 1.48 1 2.23.07.17.63 1.51.27.62l.54 1.32q1 2.61 1.94 5.27a113.13 113.13 0 0 1 3.14 11c.43 1.83.82 3.68 1.16 5.53q.23 1.25.42 2.49c.08.47.15.94.22 1.41 0 .24.06.47.1.7 0-.36-.07-.54 0-.07a87.07 87.07 0 0 1 .71 10.45c0 1.61 0 3.22-.16 4.83-.05.73-.14 1.47-.21 2.2s.13-.83 0 .16c-.07.41-.13.83-.2 1.24-.7 3.91-1.73 7.79-2.8 11.61-1.15 4.06-2.45 8.07-3.87 12-.72 2-1.46 3.95-2.24 5.91-.35.88-.7 1.76-1.06 2.64l-.63 1.51c.07-.17.28-.66-.05.12l-.4.94c-3.33 7.72-7.06 15.27-11 22.69-8 15-16.87 29.5-25.35 44.22-8.57 14.89-16.72 30-23.13 46A182.24 182.24 0 0 0 804 946.9c-.25 1-.48 2-.73 3-.12.48-.24 1-.39 1.44-.08.27-.17.54-.26.81-.42 1.19.18-.29-.16.33-.13.25-.27.49-.42.73-.26.4 0 0 0 0-.11.13-1.22 1.1-.65.68a15 15 0 0 1-2.89 1.57c.65-.29-.61.25-.79.32l-1.77.69c-1.18.46-2.37.89-3.57 1.31q-3.47 1.22-7 2.24a125.62 125.62 0 0 1-28.1 4.82 132 132 0 0 1-14.48 0q-3.68-.2-7.34-.6l-.94-.1c-.16 0-1.15-.16-.48-.06s-.55-.09-.76-.13c-.91-.17-1.81-.38-2.7-.64-.45-.13-.89-.28-1.33-.43a4.09 4.09 0 0 0-.49-.18c-.59-.15.6.3.06 0-.81-.4-1.59-.8-2.36-1.27s.24.28-.29-.2c-.31-.28-.59-.57-.89-.86s-.39-.6.09.16c-.08-.12-.17-.24-.25-.37a2.62 2.62 0 0 0-.3-.51c-.28-.32.25.87 0 .07-.06-.2-.36-1.2-.2-.61s0-.47 0-.7v-.05c.06-.25.13-.5.2-.75s.32-.71 0-.08c.12-.24.24-.47.37-.7.27-.47.58-.91.88-1.35.06-.09.49-.63.09-.13l.52-.64c.7-.84 1.43-1.67 2.11-2.53 5.69-7.17 8.36-15.88 9.86-24.79.37-2.18.68-4.36 1-6.54.16-1.22.32-2.43.49-3.65.07-.56.14-1.12.22-1.68 0-.12.11-.83 0-.13l.12-.87q1-7.12 2.35-14.17a273.62 273.62 0 0 1 6.87-27.65 262.51 262.51 0 0 1 22.12-52q3.38-6.07 7.08-12a4.23 4.23 0 0 0-7.3-4.27z"></path>
          </g>
          <path
            d="M143.52 608.26c-38.94-56-80.91-133.08-104.91-196.87-4.47-11.87-8.72-24.21-8.19-36.88 1.42-33.89 34.58-56.33 64.08-73.08 55.47-31.5 111.43-63.22 172.18-82.69 19.26-6.17 40.86-10.94 59.17-2.33 13.49 6.35 22.81 18.9 31.55 31 33 45.52 66.37 91.75 86 144.41 7.88 21.1 13.48 44.37 7.16 66-7 23.76-26.88 41.14-46.51 56.22A838.41 838.41 0 0 1 230.5 616.71c-14.75 6.47-30.15 12.61-46.25 12.76s-33.25-6.94-40.73-21.21"
            fill="#000000"
            className="fill-6c77c1"
          ></path>
          <path
            d="M147.16 606.13a977.09 977.09 0 0 1-62.22-103.36c-9.61-18.29-18.7-36.85-27.1-55.72Q52 434 46.74 420.74C42.87 411 38.87 401.18 36.43 391c-2.21-9.26-2.54-18.74.13-27.93a59.43 59.43 0 0 1 10.78-20.17C58 329.5 72.4 319.53 86.92 310.75c17.91-10.83 36.37-20.88 54.73-30.94 19.42-10.64 39-20.91 59.11-30.31a578.07 578.07 0 0 1 60.37-24.5c18.7-6.3 40.14-13.19 59.62-6.17 8.78 3.17 15.89 9.51 21.95 16.42 6.45 7.36 12 15.52 17.71 23.45 12.58 17.41 25 34.92 36.69 53a493.16 493.16 0 0 1 31.19 55.17 317 317 0 0 1 12.27 29.31c3.63 10.16 6.74 20.71 7.95 31.46 1.17 10.4.68 20.93-2.58 30.93a73.36 73.36 0 0 1-13.12 23.28c-12.4 15.21-28.57 27-44.26 38.59a839 839 0 0 1-109.29 68.21c-18.87 9.85-38.11 19.26-57.8 27.37-17.81 7.35-38.37 13.45-57 5.38a34.87 34.87 0 0 1-17.27-15.26c-2.57-4.8-9.87-.53-7.29 4.26 8.88 16.57 28.68 24 46.71 23.25 11.57-.51 22.77-3.8 33.49-8 10.38-4.07 20.54-8.74 30.63-13.46A838.37 838.37 0 0 0 366 546.67c17.85-12.1 35.59-24.69 52.14-38.52 15-12.52 28.95-27.32 35.5-46.08 7.42-21.27 3.16-44.5-3.93-65.23s-16.64-40.61-27.34-59.67-22.8-37.52-35.33-55.54c-6.36-9.13-12.84-18.17-19.35-27.19-6-8.32-11.86-16.87-18.59-24.65-6.56-7.58-14.29-14.22-23.62-18.11-9.77-4.08-20.59-4.83-31-3.65-10.66 1.2-21 4-31.14 7.36-10.87 3.54-21.61 7.48-32.23 11.74-42.19 16.94-82.19 38.68-121.72 61-16.82 9.5-33.88 18.7-49.15 30.6-13.54 10.56-25.89 23.8-31.3 40.42-6.77 20.76.86 41.36 8.44 60.72 7.44 19.13 15.77 37.8 24.67 56.23a1027.32 1027.32 0 0 0 62.08 110.79q7.67 11.88 15.74 23.5a4.32 4.32 0 0 0 5.78 1.52c1.85-1.08 2.82-3.9 1.51-5.78z"
            fill="#000000"
            className="fill-6c77c1"
          ></path>
          <path
            d="M209.43 378.41c0-.49.1-1 .16-1.45l-.3 2.25a43.27 43.27 0 0 1 2.94-10.82l-.85 2a46.15 46.15 0 0 1 5.84-10l-1.32 1.71a46.07 46.07 0 0 1 8.19-8.2l-1.71 1.32a43.72 43.72 0 0 1 9.36-5.48l-2 .85a41.79 41.79 0 0 1 10.3-2.79l-2.25.3a45.05 45.05 0 0 1 11.83 0l-2.25-.3a46.74 46.74 0 0 1 11.42 3.2l-2-.85a45 45 0 0 1 9.9 5.78l-1.69-1.35a41.13 41.13 0 0 1 7.07 7.07l-1.33-1.71a31 31 0 0 1 3.84 6.43l-.85-2a24.55 24.55 0 0 1 1.6 5.64l-.31-2.25a25.4 25.4 0 0 1 0 6.69l.3-2.25a36.91 36.91 0 0 1-2.62 9.1l.85-2c-4.9 11.32-13.64 20.31-19.77 30.9-5.94 10.29-9 22.49-6.13 34.25a28.22 28.22 0 0 0 11.7 17.09A8.45 8.45 0 0 0 271.7 452a9.62 9.62 0 0 0-3.88-5.05l-.53-.39 1.71 1.32a19.78 19.78 0 0 1-3.41-3.37l1.32 1.71a21.78 21.78 0 0 1-2.69-4.62l.86 2a26 26 0 0 1-1.72-6.54l.3 2.25a34.94 34.94 0 0 1 0-8.73l-.3 2.25a40.31 40.31 0 0 1 2.75-10.17l-.86 2c5-11.78 14.39-21 20.49-32.15 3.72-6.82 6.63-14.64 6.3-22.53-.34-8.37-4-15.65-9.43-21.9-8.69-10.07-21.49-15.65-34.53-17a49.12 49.12 0 0 0-18.41 1.66 51.4 51.4 0 0 0-17.53 9.26A52.09 52.09 0 0 0 199 357.32a53 53 0 0 0-6.49 21.09 8.45 8.45 0 0 0 2.48 6 8.44 8.44 0 0 0 11.95 0 9.6 9.6 0 0 0 2.48-6zM282.75 494.2c4.42 0 8.66-3.89 8.45-8.45a8.6 8.6 0 0 0-8.45-8.46c-4.42 0-8.66 3.89-8.45 8.46a8.59 8.59 0 0 0 8.45 8.45z"
            fill="#ffffff"
            className="fill-ffffff"
          ></path>
          <g fill="#d1232a" className="fill-ff983b">
            <path d="M208 241.54c-29.32 13.22-57.77 28.51-85.92 44.28l31.08 53.07a6.39 6.39 0 0 0 2.62 2.88c1.76.77 3.76-.17 5.45-1.09q40.44-22.14 80-45.82A540.09 540.09 0 0 1 208 241.54z"></path>
            <path d="M205.89 237.89c-22.91 10.34-45.24 21.9-67.28 34Q129.26 277 120 282.17a4.28 4.28 0 0 0-1.52 5.78q8.4 14.34 16.79 28.68l8.4 14.34q2.07 3.52 4.13 7.06c1.27 2.16 2.43 4.78 4.42 6.38 5.37 4.3 11.41-.2 16.35-2.91s9.73-5.38 14.58-8.1q14.24-8 28.35-16.12 16-9.27 31.93-18.77c1.83-1.1 2.85-3.9 1.51-5.78q-14.11-20-26.41-41.17-3.49-6-6.83-12.15a4.23 4.23 0 1 0-7.3 4.26q11.73 21.48 25.34 41.84 3.89 5.79 7.91 11.49l1.51-5.79Q212 307.46 184.42 323q-6.94 3.91-13.91 7.78l-6.87 3.79-3.44 1.89-1.44.79-.76.38c.63-.29-.53.16-.56.17s-.69.11-.24.07-.56-.24-.06 0 1.12.57.38 0c-.45-.35.28.51 0 0-.12-.21-.27-.41-.39-.62a25.4 25.4 0 0 1-1-1.75q-2-3.42-4-6.85-4-6.84-8-13.69l-18.3-31.24-1.51 5.78c21.94-12.29 44.05-24.29 66.68-35.27q9.56-4.63 19.23-9c2-.91 2.66-4 1.52-5.78a4.35 4.35 0 0 0-5.86-1.56zM472.77 372.78l.54.61s.42.54.17.21.14.2.15.22c.16.22.31.44.46.67a24.36 24.36 0 0 1 1.51 2.62q.31.64.6 1.29c-.27-.62.21.51.27.69q.55 1.44 1 2.91a114.42 114.42 0 0 1 2.82 12.42c.42 2.28.8 4.58 1.13 6.88.19 1.28.2 1.42.36 2.7s.29 2.39.41 3.59c.47 4.54.78 9.11.91 13.68q.23 8-.22 15.88a4.24 4.24 0 0 0 4.22 4.23 4.32 4.32 0 0 0 4.23-4.23 186.55 186.55 0 0 0-.61-28.85c-.94-9.41-2.3-19.05-5-28.15a34.24 34.24 0 0 0-7-13.35 4.26 4.26 0 0 0-6 0 4.33 4.33 0 0 0 0 6zM509.12 373.29a80.73 80.73 0 0 1 3.11 9.95c.41 1.69.76 3.4 1.06 5.11a69.666 69.666 0 0 1 .47 3.14l.15 1.35a82.44 82.44 0 0 1 .39 10.42q-.07 2.5-.3 5c-.08.91-.18 1.81-.29 2.71a4 4 0 0 1-.09.68l-.21 1.34c-.36 2.17.56 4.66 3 5.2 2 .46 4.82-.62 5.2-2.95a85.27 85.27 0 0 0-4.34-44.24c-.78-2.06-2.88-3.7-5.19-3-2 .65-3.8 3-3 5.2zM359 613.48a243.52 243.52 0 0 0 35 60.15q6.06 7.65 12.74 14.78a4.22 4.22 0 1 0 6-6q-5.78-6.18-11.11-12.75c-3.44-4.24-6.43-8.23-9.76-13A238.09 238.09 0 0 1 374.72 628q-2.14-4.26-4.12-8.6-1-2.17-1.93-4.37c-.11-.26-.22-.53-.34-.8.27.63-.25-.59-.24-.59q-.51-1.2-1-2.4c-.83-2-2.85-3.71-5.2-3-2 .64-3.84 3-2.95 5.2zM336.08 652.19a70 70 0 0 0 21.14 30.09c1.71 1.4 4.33 1.8 6 0 1.42-1.55 1.82-4.48 0-6a66.36 66.36 0 0 1-6.26-5.83q-1.45-1.56-2.82-3.21a24.5 24.5 0 0 1-.64-.79c-.06-.07-.69-.89-.42-.53l-.41-.55-.72-1a65.48 65.48 0 0 1-4.39-7.1q-1-1.89-1.89-3.84l-.5-1.11c.18.41.06.13 0-.12-.31-.76-.6-1.52-.88-2.28-.76-2.07-2.9-3.7-5.2-3-2 .66-3.77 3-2.95 5.2zM846.76 389l6.13 16.84c.75 2.07 2.9 3.69 5.2 3 2-.66 3.76-3 2.95-5.2l-6.13-16.84c-.75-2.07-2.9-3.69-5.2-2.95-2 .66-3.76 3-3 5.2zM889.6 373.2v26.21a4.23 4.23 0 0 0 8.46 0V373.2a4.23 4.23 0 1 0-8.46 0zM933.74 372.06c-1.39 4.58-2.92 9.13-4.6 13.61s-3.32 8.45-5.25 12.72c-.9 2-.64 4.65 1.52 5.79 1.85 1 4.81.63 5.78-1.52a237.39 237.39 0 0 0 10.71-28.35 4.27 4.27 0 0 0-3-5.2 4.31 4.31 0 0 0-5.2 2.95zM620.05 723.65a421 421 0 0 0 51.82 2.28 428.71 428.71 0 0 0 52.35-4.23q14.58-2.06 29-5.15L748 713.6a75.4 75.4 0 0 1 2.33 8.64 56.49 56.49 0 0 1 1.13 8.21c.17 2.2 1.83 4.33 4.23 4.22a4.34 4.34 0 0 0 4.23-4.22c0-.25.07-.63 0-.17l.15-.85c.13-.63.29-1.26.47-1.89s.35-1.09.57-1.63-.23.46.09-.18l.48-1c.78-1.49.84-4-.66-5.13l-6.94-5.36c-1.74-1.35-4.3-1.83-6 0-1.38 1.51-1.86 4.53 0 6l6.95 5.37-.67-5.12a26.91 26.91 0 0 0-2.92 10h8.46a79.15 79.15 0 0 0-3.77-19.1 4.34 4.34 0 0 0-5.2-3q-12.63 2.7-25.41 4.63c-4.34.65-7.66 1.1-12 1.61s-8.64 1-13 1.33a419.41 419.41 0 0 1-51.37 1.3q-14.59-.53-29.13-2.07c-2.21-.24-4.33 2.11-4.23 4.22a4.35 4.35 0 0 0 4.23 4.23z"></path>
          </g>
        </svg>
        <h1 className={styles.NotFound__title}>
          Bunny is upset you got here...
        </h1>
        <Link href="/" className={styles.NotFound__link}>
          Go Home
        </Link>
      </div>
    </main>
  );
}
