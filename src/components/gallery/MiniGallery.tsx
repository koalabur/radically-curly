"use client";

// Next
import Image from "next/image";

// React
import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Styles
import styles from "@/styles/components/gallery/MiniGallery.module.scss";

type Props = {
  data: {
    items: {
      url: string;
      title: string;
    }[];
  };
};

export default function MiniGallery({ data }: Props) {
  const galItems = useRef<HTMLElement[] | null[]>([]);

  useLayoutEffect(() => {
    // Register inside of layoutEffect to avoid server/client mismatch
    gsap.registerPlugin(ScrollTrigger);
    // ctx will cleanup because of double rendering
    let ctx = gsap.context(() => {
      galItems.current = galItems.current.slice(0, data.items.length);

      gsap.set(galItems.current, {
        opacity: 0,
        transform: "translateX(-100%)",
      });

      galItems.current.forEach((ref, index) => {
        gsap.fromTo(
          ref,
          { opacity: 0, transform: "translateX(-100%)" },
          {
            opacity: 1,
            transform: "translateX(0%)",
            duration: 1,
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
            },
            delay: index * 0.15, // Delay based on index
            ease: "power1.inOut",
          }
        );
      });
    });
    return () => ctx.revert(); // <- cleanup!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data.items.map((item, index) => (
        <Image
          className={styles.MiniGallery}
          ref={(el) => (galItems.current[index] = el)}
          key={item.title}
          src={item.url}
          alt={item.title}
          width={320}
          height={320}
          loading="lazy"
        />
      ))}
    </>
  );
}

MiniGallery.propTypes = {
  data: PropTypes.object.isRequired,
};
