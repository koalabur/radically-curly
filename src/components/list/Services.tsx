"use client";

// Documentation:
// Used to display the services on the experiences page.
// Also has cool GSAP stuff too.

// React
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

// Contentful rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Styles
import styles from "@/styles/components/list/Services.module.scss";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  category: CategoryDetails[];
};

interface CategoryDetails {
  serviceCategory: string;
  servicesCollection: {
    items: {
      serviceTitle: any;
      priceOfTheService: string;
      time?: string;
      description?: string;
    }[];
  };
}

export default function Services({ category }: Props) {
  const elRefs = useRef<HTMLElement[] | null[]>([]);

  useEffect(() => {
    elRefs.current = elRefs.current.slice(0, category.length);
  }, [category.length]);

  useLayoutEffect(() => {
    // Register inside of layoutEffect to avoid server/client mismatch
    gsap.registerPlugin(ScrollTrigger);
    // ctx will cleanup because of double rendering
    let ctx = gsap.context(() => {
      elRefs.current = elRefs.current.slice(0, category.length);

      gsap.set(elRefs.current, {
        opacity: 0,
        transform: "translateX(-100%)",
      });

      elRefs.current.forEach((ref, index) => {
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
            delay: index * 0.1, // Delay based on index
            ease: "power1.inOut",
          }
        );
      });
    });
    return () => ctx.revert(); // <- cleanup!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderTimeOrDescription(argA: string, argB: string) {
    if (argA || argB) {
      return (
        <div
          className={
            styles["Services__list-item-row Services__list-item-row--stack"]
          }
        >
          <p className={styles["Services__list-item-desc"]}>
            <strong>Time:</strong> {argA}
          </p>
          <p className={styles["Services__list-item-desc"]}>
            <strong>Description:</strong> {argB}
          </p>
        </div>
      );
    }
  }

  return (
    <>
      {category.map((item, categoryIndex) => (
        <div
          className={styles.Services}
          key={item.serviceCategory}
          ref={(el) => (elRefs.current[categoryIndex] = el)}
        >
          <h3 className={styles.Services__title}>{item.serviceCategory}</h3>
          <ul className={styles.Services__list}>
            {item.servicesCollection.items.map((service, index) => (
              <li className={styles["Services__list-item"]} key={index}>
                <div className={styles["Services__list-item-row"]}>
                  <div className={styles["Services__list-item-service"]}>
                    {documentToReactComponents(service.serviceTitle.json)}
                  </div>
                  <div className={styles["Services__list-item-line"]}></div>
                  <p className={styles["Services__list-item-price"]}>
                    {service.priceOfTheService}
                  </p>
                </div>
                {renderTimeOrDescription(service.time!, service.description!)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

Services.propTypes = {
  category: PropTypes.array.isRequired,
};
