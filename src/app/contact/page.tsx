// Custom Hooks
import { getData } from "@/hook/useContentful";

// Contentful rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Components
import Form from "@/components/form/ContactForm";
import PageTitle from "@/components/ui/PageTitle";
import StandardBusinessInfo from "@/components/businessInfo/StandardBusinessInfo";

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
  author: { name: "Cameron Roberts" },
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
        header {
          json
        }
      }
    }
  `;

  const { data } = await getData(contactPageQuery);
  const { contactPage }: { contactPage: ContactPage } = data;

  return (
    <main>
      <PageTitle title="Contact Us" />
      <section className={styles.contact}>
        <div className={styles.contact__info}>
          <StandardBusinessInfo styling="page" />
        </div>
        <div className={styles.contact__form}>
          <div className={styles["contact__form-header"]}>
            {documentToReactComponents(contactPage.header.json)}
          </div>
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
  header: any;
}
