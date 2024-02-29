// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Anchor from "@/components/ui/Anchor";
import Accolades from "@/components/accolades/StandardAccolades";
import HomeHero from "@/components/hero/HomeHero";

// Custom Hooks
import UseContentful from "@/hook/useContentful";

// Styles
import styles from "@/styles/pages/home/page.module.scss";

export const metadata = {
  title: "Radically Curly",
  generator: "Radically Curly",
  applicationName: "Radically Curly",
  description: "We rock the fabric of your hair®️",
  keywords: [
    "Radically Curly",
    "Curly Hair",
    "Salon",
    "Curly Hair Salon",
    "Hair Salon",
    "Las Vegas",
    "React",
    "Next.js",
    "Contentful",
  ],
  author: { name: "Cameron Roberts" },
  openGraph: {
    title: "Radically Curly",
    description: "We rock the fabric of your hair®️",
    url: "https://radicallycurly.com",
    siteName: "Radically Curly",
    images: [
      {
        url: "https://images.ctfassets.net/3dr0slfxb86n/4UjvWpxGmNGF6KjBP6Yvrr/8c87aece7215f9169e76aff81789c1c6/rc-home-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://radicallycurly.com"),
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const heroBannerQuery = `
    query heroBannerComponentEntryQuery {
      heroBannerComponent(id: "1qDHz9odVmiU8GODz4ptTA") {
        title
        subtitle
        image1 {
          title
          url
        }
        image2 {
          title
          url
        }
        image3 {
          title
          url
        }
        image4 {
          title
          url
        }
        image5 {
          title
          url
        }
      }
    }
  `;

  const accoladesQuery = `
    query accoladesEntryQuery {
      accolades(id: "4APpCDnu46hneXXWwP3Eby") {
        title
        mediaOutlets
      }
    }
  `;

  const experiencesQuery = `
    query servicesOfferedComponentEntryQuery {
      servicesOfferedComponent(id: "3eKGwUzOjOei7G5VYnUBx8") {
        title
        experiences
      }
    }
  `;

  async function fetchHeroBannerData() {
    const result = await UseContentful(heroBannerQuery);
    return result.data.heroBannerComponent;
  }

  const heroBanner: HeroBanner = await fetchHeroBannerData();

  async function fetchAccoladesQuerys() {
    const result = await UseContentful(accoladesQuery);
    return result.data.accolades;
  }

  const accoladesData: AccoladesData = await fetchAccoladesQuerys();

  async function fetchExperiencesQuery() {
    const result = await UseContentful(experiencesQuery);
    return result.data.servicesOfferedComponent;
  }

  const experiencesData: ExperiencesData = await fetchExperiencesQuery();

  return (
    <main className={styles.main}>
      {/* Intro */}
      <HomeHero content={heroBanner} />
      {/* You May Have Seen Us In... */}
      <section className={styles.accolades}>
        <h2 className={styles["accolades__title"]}>
          You May Have Seen Us In...
        </h2>
        <div className={styles["accolades__items"]}>
          <Accolades data={accoladesData.mediaOutlets} />
        </div>
      </section>
      {/* Services Offered */}
      <section className={styles.experiences}>
        <div className={styles.experiences__col}>
          <Image
            className={styles["experiences__col-img"]}
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAzIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgNDAzIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjRkYyNTI0Ii8+CjxyZWN0IHg9IjE2NyIgd2lkdGg9IjcwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjRkYyNTI0Ii8+CjxyZWN0IHg9IjI2NCIgd2lkdGg9IjM5IiBoZWlnaHQ9IjMwIiBmaWxsPSIjRkYyNTI0Ii8+CjxyZWN0IHg9IjMzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjRkYyNTI0Ii8+CjxyZWN0IHg9IjM4NyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjMwIiBmaWxsPSIjRkYyNTI0Ii8+Cjwvc3ZnPgo="
            alt="red squares"
            width={403}
            height={30}
          />

          <h2 className={styles["experiences__col-title"]}>
            {experiencesData.title}
          </h2>
          <ul className={styles["experiences__col-list"]}>
            {experiencesData.experiences.map((item, index) => (
              <li key={index} className={styles["experiences__col-list-item"]}>
                <Link
                  className={styles["experiences__col-list-item-link"]}
                  href="https://www.schedulicity.com/scheduling/CMLB9U/services"
                  target="_blank"
                >
                  <span>{item}</span>
                  <svg
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9952 1.2871L28.2585 10.1026C28.7528 10.5895 29 11.2528 29 11.9832C29 12.7136 28.7528 13.3685 28.2585 13.8638L19.9952 22.7129C19.0148 23.7624 17.4165 23.7624 16.4361 22.7129C15.4557 21.6634 15.4557 19.9675 16.4361 18.9181L20.3989 14.6866L2.52102 14.6866C1.12869 14.6866 1.33971e-06 13.486 1.40467e-06 12C1.46962e-06 10.514 1.12869 9.31338 2.52102 9.31338L20.3989 9.31338L16.4278 5.08195C15.4474 4.03249 15.4474 2.33656 16.4278 1.2871C17.4165 0.237634 19.0065 0.237634 19.9952 1.2871Z"
                      fill="#f4f4f4"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles["experiences__col-btns"]}>
            <Anchor
              text="Learn More About Experiences"
              url="/experiences"
              newTab={false}
              type="secondary"
            />
            <Anchor
              text="Schedule An Appointment Now"
              url="https://www.schedulicity.com/scheduling/CMLB9U/services"
              newTab={true}
            />
          </div>
        </div>
        <div className={styles.experiences__col}>
          <div className={styles["experiences__col-wrapper"]}>
            <div className={styles["experiences__col-wrapper-overlay"]}></div>
            <video
              className={styles["experiences__col-wrapper-video"]}
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://videos.ctfassets.net/3dr0slfxb86n/6lhJb1tXDc2UMZi0UBeDfI/5079357aa34a509afb74f7a066e3690d/Curly_Hair_Workshops_for_hair_stylists.mp4"
                type="video/mp4"
              />
              <source
                src="https://videos.ctfassets.net/3dr0slfxb86n/36fquIZYHATqqmbK1DZK8q/70ccc68dc76bcd6f64ab2e36863fc7bc/Curly_Hair_Workshops_for_hair_stylists.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section aria-hidden={true} className={styles.falseFooter}></section>
    </main>
  );
}

interface HeroBanner {
  title: string;
  subtitle: string;
  image1: {
    title: string;
    url: string;
  };
  image2: {
    title: string;
    url: string;
  };
  image3: {
    title: string;
    url: string;
  };
  image4: {
    title: string;
    url: string;
  };
  image5: {
    title: string;
    url: string;
  };
}

interface AccoladesData {
  title: string;
  mediaOutlets: {
    title: string;
    img: string;
    width: number;
    height: number;
    url: string;
  }[];
}

interface ExperiencesData {
  title: string;
  experiences: Array<String>;
}
