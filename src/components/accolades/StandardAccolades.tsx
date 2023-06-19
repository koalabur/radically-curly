"use client";

// Documentation:
// Your average "as seen in" section.

// Next
import Image from "next/image";
import Link from "next/link";

// React
import { useLayoutEffect, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  data: {
    img: string;
    title: string;
    url: string;
    width: number;
    height: number;
  }[];
};

export default function StandardAccolades({ data }: Props) {
  const itemRefs = useRef<HTMLAnchorElement[] | null[]>([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, data.length);
  }, [data.length]);

  useLayoutEffect(() => {
    // Register inside of layoutEffect to avoid server/client mismatch
    gsap.registerPlugin(ScrollTrigger);
    // ctx will cleanup because of double rendering
    let ctx = gsap.context(() => {
      itemRefs.current = itemRefs.current.slice(0, data.length);

      gsap.set(itemRefs.current, { opacity: 0 });

      itemRefs.current.forEach((itemRef, index) => {
        gsap.fromTo(
          itemRef,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: itemRef,
              start: "top 85%",
            },
            delay: index * 0.1, // Delay based on index
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
      {data.map((item, index) => (
        <Link
          href={item.url}
          target="_blank"
          key={item.title}
          ref={(el) => (itemRefs.current[index] = el)}
        >
          <Image
            src={item.img}
            alt={item.title}
            width={item.width}
            height={item.height}
            loading="eager"
          />
        </Link>
      ))}
    </>
  );
}

StandardAccolades.propTypes = {
  data: PropTypes.array.isRequired,
};
