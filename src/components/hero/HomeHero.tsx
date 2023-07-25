"use client";

// Documentation:
// Hero section for home page.

// Next
import Image from "next/image";

// React
import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

// GSAP
import { gsap } from "gsap";

// Components
import Anchor from "../ui/Anchor";

// Styles
import styles from "@/styles/components/hero/HomeHero.module.scss";

type Props = {
  content: {
    title: string;
    subtitle: string;
    image1: {
      title: string;
      url: string;
    };
    image2: {
      title: string;
      url: string;
    };
    image3: {
      title: string;
      url: string;
    };
    image4: {
      title: string;
      url: string;
    };
    image5: {
      title: string;
      url: string;
    };
  };
};

export default function HomeHero({ content }: Props) {
  const title = useRef<HTMLHeadingElement | null>(null);
  const subtitle = useRef<HTMLHeadingElement | null>(null);
  const btn = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // ctx will cleanup because of double rendering
    let ctx = gsap.context(() => {
      gsap.to(title.current, {
        opacity: 1,
        transform: "translateX(0%)",
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.to(subtitle.current, {
        opacity: 1,
        transform: "translateX(0%)",
        duration: 1,
        delay: 0.15,
        ease: "power1.inOut",
      });

      gsap.to(btn.current, {
        opacity: 1,
        transform: "translateX(0%)",
        duration: 1,
        delay: 0.25,
        ease: "power1.inOut",
      });
    });
    return () => ctx.revert(); // <- cleanup!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.HomeHero}>
      <div className={styles["HomeHero__blob"]}></div>

      <div className={styles.HomeHero__col}>
        <h1 className={styles["HomeHero__col-title"]} ref={title}>
          {content.title}
        </h1>
        <h2 className={styles["HomeHero__col-subtitle"]} ref={subtitle}>
          {content.subtitle}
        </h2>
        <div ref={btn} style={{ opacity: 0, transform: "translateX(-100%)" }}>
          <Anchor
            text="Schedule An Appointment Now"
            url="https://schedulicity.com/scheduling/CMLB9U/services"
            size="large"
            newTab={true}
          />
        </div>
      </div>
      <div className={styles.HomeHero__col}>
        <div className={styles["HomeHero__col-gallery-top"]}>
          <div className={styles["HomeHero__col-gallery-top-col"]}>
            <Image
              className={`${styles["HomeHero__col-gallery-top-col-img"]} ${styles["HomeHero__col-gallery-top-col-img--1"]}`}
              alt={content.image1.title}
              src={content.image1.url}
              width={606}
              height={395}
              loading="eager"
            />
          </div>
          <div className={styles["HomeHero__col-gallery-top-col"]}>
            <Image
              className={`${styles["HomeHero__col-gallery-top-col-img"]} ${styles["HomeHero__col-gallery-top-col-img--2"]}`}
              alt={content.image2.title}
              src={content.image2.url}
              width={219}
              height={143}
              loading="eager"
            />
            <Image
              className={`${styles["HomeHero__col-gallery-top-col-img"]} ${styles["HomeHero__col-gallery-top-col-img--3"]}`}
              alt={content.image3.title}
              src={content.image3.url}
              width={349}
              height={228}
              loading="eager"
            />
          </div>
        </div>
        <div className={styles["HomeHero__col-gallery-bottom"]}>
          <Image
            className={`${styles["HomeHero__col-gallery-bottom-img"]} ${styles["HomeHero__col-gallery-bottom-img--4"]}`}
            alt={content.image4.title}
            src={content.image4.url}
            width={349}
            height={227}
            loading="eager"
          />
          <Image
            className={`${styles["HomeHero__col-gallery-bottom-img"]} ${styles["HomeHero__col-gallery-bottom-img--5"]}`}
            alt={content.image5.title}
            src={content.image5.url}
            width={481}
            height={300}
            loading="eager"
          />
        </div>
      </div>
      <div className={styles.HomeHero__scroll}>
        <p className={styles["HomeHero__scroll-text"]}>Scroll to learn more</p>
        <svg
          className={styles["HomeHero__scroll-icon"]}
          width="19"
          height="30"
          viewBox="0 0 19 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 0C4.25334 0 0 4.19737 0 9.375V20.625C0 25.8026 4.25334 30 9.5 30C14.7467 30 19 25.8026 19 20.625V9.375C19 4.19737 14.7467 0 9.5 0ZM11.4 9.375C11.4 10.4104 10.5492 11.25 9.5 11.25C8.45082 11.25 7.6 10.4104 7.6 9.375V5.625C7.6 4.58962 8.45082 3.75 9.5 3.75C10.5492 3.75 11.4 4.58962 11.4 5.625V9.375Z"
            fill="#111111"
          />
        </svg>
      </div>
    </section>
  );
}

HomeHero.propTypes = {
  content: PropTypes.object.isRequired,
};
