"use client";
// Documentation:
// Displays the divas/ employees on the experiences page.
// Modal is controlled by <DivaModal />.
// Next
import Image from "next/image";
// React
import { useState } from "react";
import PropTypes from "prop-types";
// Contentful rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// Components
import DivaModal from "@/components/modal/DivaModal";
// Styles
import styles from "@/styles/components/divaCards/StandardDivaCards.module.scss";

type Props = {
  data: Array<ParentData | null>;
};

interface ParentData {
  name: string;
  jobTitle: any;
  image: {
    title: string;
    url: string;
  };
  description: any;
}

export default function StandardDivaCard({ data }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState<ParentData | undefined>();

  function openModal(name: string) {
    // Filter the diva data to find the diva that matches the name
    // Returns array with one item, so we grab the first item
    const foundDiva = data.find((diva) => diva && diva.name === name);
    
    // Only set modal data if a valid diva is found
    if (foundDiva) {
      setModalData(foundDiva);
      // Open the modal
      setIsVisible(true);
    }
  }

  return (
    <>
      <DivaModal
        src={modalData?.image?.url}
        description={modalData?.description}
        jobTitle={modalData?.jobTitle}
        name={modalData?.name}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      
      {data.map((item) => {
        // Skip rendering for null items
        if (!item) return null;
        
        return (
          <div
            className={styles.StandardDivaCard}
            key={item.name}
            onClick={() => openModal(item.name)}
          >
            <Image
              className={styles.StandardDivaCard__img}
              src={item.image.url}
              alt={item.image.title}
              width={364}
              height={469}
            />
            <h3 className={styles.StandardDivaCard__name}>{item.name}</h3>
            <div className={styles.StandardDivaCard__job}>
              {documentToReactComponents(item.jobTitle.json)}
            </div>
            <p className={styles.StandardDivaCard__learn}>Learn More</p>
          </div>
        );
      })}
    </>
  );
}

StandardDivaCard.propTypes = {
  data: PropTypes.array.isRequired,
};