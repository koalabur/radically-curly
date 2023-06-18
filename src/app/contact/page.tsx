// Next
import Link from "next/link";
import Image from "next/image";

// React
import { Fragment } from "react";

// Custom Hooks
import UseContentful from "@/hook/useContentful";

// Components
import Form from "@/components/form/ContactForm";
import PageTitle from "@/components/ui/PageTitle";

// Styles
import styles from "@/styles/pages/contact/page.module.scss";

export const metadata = {
  title: "Radically Curly | Contact",
  generator: "Radically Curly",
  applicationName: "Radically Curly",
  description:
    "Reach out to us with any questions you may have related to Radically Curly. We are here to help!",
  keywords: [
    "Radically Curly",
    "Curly Hair",
    "Salon",
    "Curly Hair Salon",
    "Hair Salon",
    "Las Vegas",
    "contact",
    "appointment",
    "schedule an appointment",
    "React",
    "Next.js",
    "Contentful",
  ],
  author: { name: "Danielle Green" },
  openGraph: {
    title: "Radically Curly",
    description:
      "Reach out to us with any questions you may have related to Radically Curly. We are here to help!",
    url: "https://radicallycurly.com/contact",
    siteName: "Radically Curly",
    images: [
      {
        url: "https://images.ctfassets.net/3dr0slfxb86n/UzaV02WmlkOfKuLWovFqH/690c0b8c7c6c0afffc2820c7949eb74d/rc-contact-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://radicallycurly.com/contact"),
  alternates: {
    canonical: "/contact",
  },
};

export default async function Contact() {
  const contactPageQuery = `
    query contactPageEntryQuery {
      contactPage(id: "7tqTq8uzW1tCoyHETpdfEK") {
        formHeader
      }
    }
  `;

  const businessInfoQuery = `
  query businessInformationEntryQuery {
    businessInformation(id: "6HdVpQhxVZ8Rd08sSfnC9F") {
      title
      information
    }
  }
`;

  async function fetchBusinessInfoData() {
    const result = await UseContentful(businessInfoQuery);
    return result.data.businessInformation;
  }

  const businessInfo: BusinessInfo = await fetchBusinessInfoData();

  async function fetchContactPageData() {
    const result = await UseContentful(contactPageQuery);
    return result.data.contactPage;
  }

  const contactPage: ContactPage = await fetchContactPageData();

  return (
    <main>
      <PageTitle title="Contact Us" />
      <section className={styles.contact}>
        <div className={styles.contact__info}>
          <h2 className={styles["contact__info-title"]}>
            {businessInfo.title}
          </h2>
          {businessInfo.information.map((item, index) => (
            <Fragment key={index}>
              <div className={styles["contact__info-item"]}>
                <Image
                  className={styles["contact__info-item-icon"]}
                  alt={item.iconTitle}
                  width={item.iconWidth}
                  height={item.iconHeight}
                  src={item.icon}
                />
                {item.link ? (
                  <>
                    {item.content2 && (
                      <p className={styles["contact__info-item-text"]}>
                        <Link href={item.link}>{item.content}</Link>
                        <br />
                        <i>{item.content2}</i>
                      </p>
                    )}
                    {!item.content2 && (
                      <Link
                        className={styles["contact__info-item-text"]}
                        href={item.link}
                        target={item.newTab ? "_blank" : "_self"}
                      >
                        {item.content}
                      </Link>
                    )}
                  </>
                ) : (
                  <p className={styles["contact__info-item-text"]}>
                    {item.content}
                  </p>
                )}
              </div>
            </Fragment>
          ))}
        </div>
        <div className={styles.contact__form}>
          <p className={styles["contact__form-header"]}>
            {contactPage.formHeader}
          </p>
          <Form />
        </div>
      </section>
    </main>
  );
}

interface BusinessInfo {
  title: string;
  information: Array<InformationDetails>;
}

interface InformationDetails {
  icon: string;
  iconTitle: string;
  iconWidth: number;
  iconHeight: number;
  link?: string;
  newTab?: boolean;
  content: string;
  content2?: string;
}

interface ContactPage {
  formHeader: string;
}
