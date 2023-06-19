"use client";

// Documentation:
// Displays the divas/ employees on the experiences page.
// Modal is controlled by <DivaModal />.

// Next
import Image from "next/image";

// React
import { useState } from "react";
import PropTypes from "prop-types";

// Compobnents
import DivaModal from "@/components/modal/DivaModal";

// Styles
import styles from "@/styles/components/divaCards/StandardDivaCards.module.scss";

type Props = {
  data: Array<ParentData>;
};

interface ParentData {
  name: string;
  jobTitle: string;
  image: {
    title: string;
    url: string;
  };
  description: string;
}

export default function StandardDivaCard({ data }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState<ParentData | undefined>();

  function openModal(name: string) {
    // Filter the diva data to find the diva that matches the name
    // Returns array with one item, so we grab the first item
    setModalData(
      data.filter((diva: { name: string }) => diva.name === name)[0]
    );

    // Open the modal
    setIsVisible(true);
  }

  return (
    <>
      <DivaModal
        src={modalData?.image.url}
        description={modalData?.description}
        jobTitle={modalData?.jobTitle}
        name={modalData?.name}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      {data.map((item) => (
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
          <p className={styles.StandardDivaCard__job}>{item.jobTitle}</p>
          <p className={styles.StandardDivaCard__learn}>Learn More</p>
        </div>
      ))}
    </>
  );
}

StandardDivaCard.propTypes = {
  data: PropTypes.array.isRequired,
};
