"use client";

// Next
import Image from "next/image";

// React
import { useRef, useLayoutEffect } from "react";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Components
import MiniGallery from "../gallery/MiniGallery";

// Types
import { ExperiencesPage } from "@/shared/interfaces";

// Styles
import styles from "@/styles/components/special/ExperiencesWow.module.scss";

export default function ExperiencesWow({ data }: { data: ExperiencesPage }) {
  const section = useRef<HTMLElement>(null);
  const lina = useRef<HTMLImageElement>(null);
  const svgLine = useRef<SVGSVGElement>(null);
  const mission = useRef<HTMLParagraphElement>(null);
  const missionImg = useRef<HTMLImageElement>(null);
  const galTitle = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    // Register inside of layoutEffect to avoid server/client mismatch
    gsap.registerPlugin(ScrollTrigger);
    // ctx will cleanup because of double rendering
    let ctx = gsap.context(() => {
      gsap.fromTo(
        lina.current,
        { opacity: 0, transform: "translateY(100%)" },
        {
          opacity: 1,
          transform: "translateY(0%)",
          duration: 1,
          scrollTrigger: {
            trigger: section.current,
            start: "top 40%",
          },
          ease: "power1.inOut",
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgLine.current,
          start: "top 75%",
          end: "center 40%",
          scrub: true,
        },
      });

      tl.fromTo(
        svgLine.current,
        { strokeDashoffset: 0 },
        { strokeDashoffset: "-100%" }
      );

      tl.fromTo(
        missionImg.current,
        { opacity: 0, transform: "translateX(100%)" },
        { opacity: 1, transform: "translateX(0%)" }
      );

      tl.fromTo(
        mission.current,
        { opacity: 0, transform: "translateX(100%)" },
        { opacity: 1, transform: "translateX(0%)" }
      );

      gsap.fromTo(
        galTitle.current,
        { opacity: 0, transform: "translateY(100%)" },
        {
          opacity: 1,
          transform: "translateY(0%)",
          duration: 1,
          scrollTrigger: {
            trigger: section.current,
            start: "center center",
          },
          ease: "power1.inOut",
        }
      );
    });
    return () => ctx.revert(); // <- cleanup!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.ExperiencesWow} ref={section}>
      <div className={styles.ExperiencesWow__hero}>
        <Image
          className={styles["ExperiencesWow__hero-image"]}
          ref={lina}
          src={data.heroImage.url}
          alt={data.heroImage.title}
          width={426}
          height={638}
          loading="lazy"
        />
        <h2 className={styles["ExperiencesWow__hero-title"]}>
          <span>We</span> Rock The Fabric Of <span>Your</span> Hair ®
        </h2>
      </div>
      <div className={styles.ExperiencesWow__mission}>
        <div className={styles["ExperiencesWow__mission-col"]}>
          <svg
            ref={svgLine}
            className={styles["ExperiencesWow__mission-col-svg"]}
            width="960"
            height="287"
            viewBox="0 0 960 287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 0V285H960" stroke="#F2F2F2" strokeWidth="3" />
          </svg>
          <p
            className={styles["ExperiencesWow__mission-col-text"]}
            ref={mission}
          >
            {data.mission}
          </p>
        </div>
        <div className={styles["ExperiencesWow__mission-col"]}>
          <Image
            className={styles["ExperiencesWow__mission-col-image"]}
            ref={missionImg}
            src={data.missionImage.url}
            alt={data.missionImage.title}
            width={426}
            height={638}
            loading="eager"
          />
        </div>
      </div>
      <h3 className={styles.ExperiencesWow__title} ref={galTitle}>
        We Rocked The Fabric Of Their Hair!
      </h3>
      <div className={styles["ExperiencesWow__upperGallery"]}>
        <MiniGallery data={data.upperImageGalleryCollection} />
      </div>
      <div className={styles["ExperiencesWow__lowerGallery"]}>
        <MiniGallery data={data.lowerImageGalleryCollection} />
      </div>
    </section>
  );
}
