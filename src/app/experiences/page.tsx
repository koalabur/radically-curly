// Next
import Image from "next/image";

// Custom Hooks
import { getData } from "@/hook/useContentful";

// Contentful rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Components
import Header from "@/components/header/StandardHeader";
import Services from "@/components/list/Services";
import Anchor from "@/components/ui/Anchor";
import PageTitle from "@/components/ui/PageTitle";
import ExperiencesWow from "@/components/special/ExperiencesWow";

// Types
import { ExperiencesPage } from "@/shared/interfaces";

// Styles
import styles from "@/styles/pages/experiences/page.module.scss";

export const metadata = {
  title: "Radically Curly | Experiences",
  generator: "Radically Curly",
  applicationName: "Radically Curly",
  description:
    "See the services we offer at Radically Curly. Consultations, Braids, Cuts, Colors, Deep Treatments, and more!",
  keywords: [
    "Radically Curly",
    "Curly Hair",
    "Salon",
    "Curly Hair Salon",
    "Hair Salon",
    "Las Vegas",
    "Braids",
    "Deep Treatments",
    "Cuts",
    "Colors",
    "Extensions",
    "Wedding",
    "React",
    "Next.js",
    "Contentful",
  ],
  author: { name: "Cameron Roberts" },
  openGraph: {
    title: "Radically Curly",
    description:
      "See the services we offer at Radically Curly. Consultations, Braids, Cuts, Colors, Deep Treatments, and more!",
    url: "https://radicallycurly.com/experiences",
    siteName: "Radically Curly",
    images: [
      {
        url: "https://images.ctfassets.net/3dr0slfxb86n/1PIdztTsZ21W2poy5abkIw/be4aa3f5d2c814f4376cf8c6d5b0fa38/rc-experiences-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://radicallycurly.com/experiences"),
  alternates: {
    canonical: "/experiences",
  },
};

export default async function Experiences() {
  const experiencesPageQuery = `
  query experiencesPageEntryQuery {
    experiencesPage(id: "4OrKIru3MurK1je7jfldRN") {
      header
      experiencesIcon {
        url
        title
        width
        height
      }
      experiencesTitle {
        json
      }
      regularExperiencesColumnOneCollection(limit: 15) {
        items {
          serviceCategory
          servicesCollection {
            items {
              serviceTitle {
                json
              }
              priceOfTheService
              time
              description
            }
          }
        }
      }
      regularExperiencesColumnTwoCollection(limit: 15) {
        items {
          serviceCategory
          servicesCollection {
            items {
              serviceTitle {
                json
              }
              priceOfTheService
              time
              description
            }
          }
        }
      }
      regularExperiencesColumnThreeCollection(limit: 15) {
        items {
          serviceCategory
          servicesCollection {
            items {
              serviceTitle {
                json
              }
              priceOfTheService
              time
              description
            }
          }
        }
      }
      braidedExperiencesColumnOneCollection(limit: 15) {
        items {
          serviceCategory
          servicesCollection {
            items {
              serviceTitle {
                json
              }
              priceOfTheService
              time
              description
            }
          }
        }
      }
      braidedExperiencesColumnTwoCollection(limit: 15) {
        items {
          serviceCategory
          servicesCollection {
            items {
              serviceTitle {
                json
              }
              priceOfTheService
              time
              description
            }
          }
        }
      }
      braidedExperiencesColumnThreeCollection(limit: 15) {
        items {
          serviceCategory
          servicesCollection {
            items {
              serviceTitle {
                json
              }
              priceOfTheService
              time
              description
            }
          }
        }
      }
      heroImage {
        title
        url
      }
      mission
      missionImage {
        title
        url
      }
      upperImageGalleryCollection(limit: 10) {
        items {
          title
          url
        }
      }
      lowerImageGalleryCollection(limit: 10) {
        items {
          title
          url
        }
      }
    }
  }   
  `;

  const { data } = await getData(experiencesPageQuery);
  const { experiencesPage }: { experiencesPage: ExperiencesPage } = data;

  return (
    <main>
      <PageTitle title="Experiences" />
      <Header text={experiencesPage.header} />
      <section className={styles.experiences}>
        <Image
          className={styles.experiences__icon}
          src={experiencesPage.experiencesIcon.url}
          alt={experiencesPage.experiencesIcon.title}
          width={experiencesPage.experiencesIcon.width}
          height={experiencesPage.experiencesIcon.height}
          loading="eager"
        />
        <div className={styles.experiences__title}>
          {documentToReactComponents(experiencesPage.experiencesTitle.json)}
        </div>
        <div className={styles.experiences__services}>
          <div className={styles["experiences__services-col"]}>
            <Services
              category={
                experiencesPage.regularExperiencesColumnOneCollection.items
              }
            />
          </div>
          <div className={styles["experiences__services-col"]}>
            <Services
              category={
                experiencesPage.regularExperiencesColumnTwoCollection.items
              }
            />
          </div>
          <div className={styles["experiences__services-col"]}>
            <Services
              category={
                experiencesPage.regularExperiencesColumnThreeCollection.items
              }
            />
          </div>
        </div>
        <h3 className={styles["experiences__service-title"]}>
          Braiding Experiences
        </h3>
        <div className={styles.experiences__services}>
          <div className={styles["experiences__services-col"]}>
            <Services
              category={
                experiencesPage.braidedExperiencesColumnOneCollection.items
              }
            />
          </div>
          <div className={styles["experiences__services-col"]}>
            <Services
              category={
                experiencesPage.braidedExperiencesColumnTwoCollection.items
              }
            />
          </div>
          <div className={styles["experiences__services-col"]}>
            <Services
              category={
                experiencesPage.braidedExperiencesColumnThreeCollection.items
              }
            />
          </div>
        </div>
        <div className={styles.experiences__cta}>
          <Anchor
            text="Schedule An Appointment"
            url="http://www.vagaro.com/cmlb9u"
            size="large"
            newTab={true}
          />
        </div>
        <div className={styles.experiences__scroll}>
          <p className={styles["experiences__scroll-text"]}>
            Scroll to learn more
          </p>
          <svg
            className={styles["experiences__scroll-icon"]}
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
      <ExperiencesWow data={experiencesPage} />
    </main>
  );
}
