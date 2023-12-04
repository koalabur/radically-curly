// Custom Hooks
import { getData } from "@/hook/useContentful";

// Components
import Header from "@/components/header/StandardHeader";
import DivaCards from "@/components/divaCards/StandardDivaCards";
import PageTitle from "@/components/ui/PageTitle";

// Styles
import styles from "@/styles/pages/about/page.module.scss";

export const metadata = {
  title: "Radically Curly | About",
  generator: "Radically Curly",
  applicationName: "Radically Curly",
  description: "Learn more about the Radically Curly divas!",
  keywords: [
    "Radically Curly",
    "Curly Hair",
    "Salon",
    "Curly Hair Salon",
    "Hair Salon",
    "Las Vegas",
    "Danielle Green",
    "Hair Stylist",
    "React",
    "Next.js",
    "Contentful",
  ],
  author: { name: "Cameron Roberts" },
  openGraph: {
    title: "Radically Curly",
    description: "Learn more about the Radically Curly divas!",
    url: "https://radicallycurly.com/about",
    siteName: "Radically Curly",
    images: [
      {
        url: "https://images.ctfassets.net/3dr0slfxb86n/3Thm0F6LeYT24lgk6MYwjK/91c2e9fbda31843701347dd33d7c2662/rc-about-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://radicallycurly.com/about"),
  alternates: {
    canonical: "/about",
  },
};

export default async function About() {
  const aboutPageQuery = `
    query aboutPageEntryQuery {
      aboutPage(id: "6YLXcQ2HtCypvNjOJQPqH1") {
        header
        divasCollection {
          items {
            name
            jobTitle {
              json
            }
            image {
              title
              url
            }
            description {
              json
            }
          }
        }
      }
    }
  `;

  const { data } = await getData(aboutPageQuery);
  const { aboutPage }: { aboutPage: AboutPage } = data;

  return (
    <main>
      <PageTitle title="About Us" />
      <Header text={aboutPage.header} />
      <section className={styles.divas}>
        <DivaCards data={aboutPage.divasCollection.items} />
      </section>
    </main>
  );
}

interface AboutPage {
  header: string;
  divasCollection: {
    items: Array<ModalData>;
  };
}

interface ModalData {
  name: string;
  jobTitle: string;
  image: {
    title: string;
    url: string;
  };
  description: string;
}
