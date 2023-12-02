// React
import { Fragment } from "react";

// Custom Hooks
import { getData } from "@/hook/useContentful";

// Components
import Accordion from "@/components/ui/Accordion";
import PageTitle from "@/components/ui/PageTitle";

// Styles
import styles from "@/styles/pages/faq/page.module.scss";

export const metadata = {
  title: "Radically Curly | FAQ",
  generator: "Radically Curly",
  applicationName: "Radically Curly",
  description:
    "Have a question and need an answer? Check out our faq page to see if we have an answer for you!",
  keywords: [
    "Radically Curly",
    "Curly Hair",
    "Salon",
    "Curly Hair Salon",
    "Hair Salon",
    "Las Vegas",
    "faq",
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
      "Have a question and need an answer? Check out our faq page to see if we have an answer for you!",
    url: "https://radicallycurly.com/faq",
    siteName: "Radically Curly",
    images: [
      {
        url: "https://images.ctfassets.net/3dr0slfxb86n/6GrlPWlhUU5w55vkRSELJ8/cd747c0800a7785f40ef2220ccda9eb9/rc-faq-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://radicallycurly.com/faq"),
  alternates: {
    canonical: "/faq",
  },
};

export default async function FAQ() {
  const faqPageQuery = `
    query faqPageEntryQuery {
      faqPage(id: "Xfc5V2Ey0fxZZ7seAOBGa") {
        questionsAndAnswersCollection {
          items {
            question
            answer
          }
        }
      }
    }   
  `;

  const { data } = await getData(faqPageQuery);
  const faqPage: FaqPage = data.faqPage.questionsAndAnswersCollection;

  return (
    <main>
      <PageTitle title="FAQ" />
      <section className={styles.FAQ}>
        {faqPage.items.map((item) => (
          <Fragment key={item.question}>
            <Accordion question={item.question} answer={item.answer} />
          </Fragment>
        ))}
      </section>
    </main>
  );
}

interface FaqPage {
  items: {
    question: string;
    answer: string;
  }[];
}
