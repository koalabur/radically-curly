// Next
import Image from "next/image";

// Custom Hooks
import UseContentful from "@/hook/useContentful";

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
  author: { name: "Danielle Green" },
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
        experiencesTitle
        columnOneCollection(limit: 20) {
          items {
            serviceCategory
            servicesCollection {
              items {
                service
                priceOfTheService
              }
            }
          }
        }
        columnTwoCollection(limit: 20) {
          items {
            serviceCategory
            servicesCollection {
              items {
                service
                priceOfTheService
              }
            }
          }
        }
        columnThreeCollection(limit: 20) {
          items {
            serviceCategory
            servicesCollection {
              items {
                service
                priceOfTheService
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

  async function fetchExperiencesPageData() {
    const result = await UseContentful(experiencesPageQuery);
    return result.data.experiencesPage;
  }

  const experiencesPage: ExperiencesPage = await fetchExperiencesPageData();

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
        <h2 className={styles.experiences__title}>
          {/* give me the first word */}
          <span>
            {experiencesPage.experiencesTitle.split(" ").shift()}
          </span>{" "}
          {/* cut out the first word, keep the rest */}
          {experiencesPage.experiencesTitle.split(" ").slice(1)}
        </h2>
        <div className={styles.experiences__services}>
          <div className={styles["experiences__services-col"]}>
            <Services category={experiencesPage.columnOneCollection.items} />
          </div>
          <div className={styles["experiences__services-col"]}>
            <Services category={experiencesPage.columnTwoCollection.items} />
          </div>
          <div className={styles["experiences__services-col"]}>
            <Services category={experiencesPage.columnThreeCollection.items} />
          </div>
        </div>
        <div className={styles.experiences__cta}>
          <Anchor
            text="Schedule An Appointment"
            url="https://schedulicity.com/scheduling/CMLB9U/services"
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
