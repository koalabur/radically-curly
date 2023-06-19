// Next
import Image from "next/image";
import Link from "next/link";

// Contentful rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, INLINES, BLOCKS } from "@contentful/rich-text-types";

// Custom Hooks
import UseContentful from "@/hook/useContentful";

// Components
import Anchor from "@/components/ui/Anchor";
import ConvertDate from "@/components/ui/ConvertDate";
import PageTitle from "@/components/ui/PageTitle";

// Styles
import styles from "@/styles/pages/workshop/page.module.scss";

export const metadata = {
  title: "Radically Curly | Workshop",
  generator: "Radically Curly",
  applicationName: "Radically Curly",
  description:
    "Interested in learning how to cut and style curly hair? Want to improve as a hair stylist? Join us for a workshop!",
  keywords: [
    "Radically Curly",
    "Curly Hair",
    "Salon",
    "Curly Hair Salon",
    "Hair Salon",
    "Las Vegas",
    "workshop",
    "licensed cosmetologist",
    "cosmetologist",
    "learn",
    "React",
    "Next.js",
    "Contentful",
  ],
  author: { name: "Danielle Green" },
  openGraph: {
    title: "Radically Curly",
    description:
      "Interested in learning how to cut and style curly hair? Want to improve as a hair stylist? Join us for a workshop!",
    url: "https://radicallycurly.com/workshop",
    siteName: "Radically Curly",
    images: [
      {
        url: "https://images.ctfassets.net/3dr0slfxb86n/2XglWlWsS7bNPML68AJqM3/25cdc9e07cdfb2235e3296222993ae6a/rc-workshop-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://radicallycurly.com/workshop"),
  alternates: {
    canonical: "/workshop",
  },
};

export default async function Workshop() {
  // This will get SUPER MESSY WITHOUT THE ANY TYPE
  // SO SO MESSY
  const options = {
    renderMark: {
      [MARKS.CODE]: (text: any) => {
        return <>{text}</>;
      },
      [MARKS.BOLD]: (text: any) => {
        return <strong>{text}</strong>;
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        if (
          node.content.find((item: any) =>
            item.marks.find((mark: any) => mark.type === "code")
          )
        ) {
          return (
            <div>
              <pre>
                <code>{children}</code>
              </pre>
            </div>
          );
        }
        return <p>{children}</p>;
      },
      [INLINES.HYPERLINK]: (node: any) => {
        const text = node.content.find(
          (item: any) => item.nodeType === "text"
        )?.value;
        return (
          <Link href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {text}
          </Link>
        );
      },
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: any) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
    },
  };

  const workshopPageQuery = `
    query workshopPageEntryQuery {
      workshopPage(id: "1XqQcIO0gJL2mCHH20S1v2") {
        workshopDetails {
          title
          location
          startDate
          startTime
          endTime
          createdFor
          hostedBy
          price
          richDetails {
            json
          }
          signUpLink
        }
      }
    }   
  `;

  async function fetchWorkshopPageData() {
    const result = await UseContentful(workshopPageQuery);
    return result.data.workshopPage.workshopDetails;
  }

  const workshopPage: WorkshopPage = await fetchWorkshopPageData();

  return (
    <main>
      <PageTitle title="Workshop" />
      <section className={styles.intro}>
        <video className={styles.intro__video} autoPlay muted loop playsInline>
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
        <div className={styles.intro__content}>
          {new Date() > new Date(workshopPage.startDate) ? (
            <>
              <h2 className={styles["intro__content-subtitle"]}>
                we are currently not hosting any workshops
              </h2>
              <h1 className={styles["intro__content-title"]}>
                check back later!
              </h1>
            </>
          ) : (
            <>
              <h2 className={styles["intro__content-subtitle"]}>
                featured workshop
              </h2>
              <h1 className={styles["intro__content-title"]}>
                {workshopPage.title}
              </h1>
              <div className={styles["intro__content-btns"]}>
                <Anchor
                  url={workshopPage.signUpLink}
                  text="Sign Up"
                  newTab={true}
                  size="large"
                />
                <a
                  className={styles["intro__content-btns-learn"]}
                  href="#details"
                >
                  Learn More
                </a>
              </div>
            </>
          )}
        </div>
      </section>
      {new Date() > new Date(workshopPage.startDate) ? null : (
        <>
          <section className={styles.date}>
            <Image
              className={styles.date__bg}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIyNjgiIHZpZXdCb3g9IjAgMCAxOTIwIDI2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5MjAgMzIuODY1NkMxMDE4LjggLTI2LjY1NzIgMjY0LjUgOC4wNjQ0NSAwIDMyLjg2NTZWMTI2SDE5MjBWMzIuODY1NloiIGZpbGw9IiNGMkYyRjIiLz4KPHBhdGggZD0iTTMuNDg4ODllLTA2IDIyOC4wOTJDOTAxLjIgMzAwLjM3IDE2NTUuNSAyNTguMjA4IDE5MjAgMjI4LjA5MkwxOTIwIDExNUwxLjMzNzU3ZS0wNSAxMTVMMy40ODg4OWUtMDYgMjI4LjA5MloiIGZpbGw9IiNGMkYyRjIiLz4KPC9zdmc+Cg=="
              alt="Background"
              width={1920}
              height={268}
              loading="eager"
            />
            <div className={styles.date__content}>
              <h2 className={styles["date__content-title"]}>
                Workshop Begins On
              </h2>
              <p className={styles["date__content-day"]}>
                <ConvertDate date={"2023-08-28T00:00:00.000Z"} />
              </p>
            </div>
          </section>
          <section id="details" className={styles.details}>
            <div className={styles.details__sidebar}>
              {/* Location */}
              <div className={styles["details__sidebar-item"]}>
                <svg
                  className={styles["details__sidebar-item-icon"]}
                  width="30"
                  height="39"
                  viewBox="0 0 30 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 15C30 6.69118 23.3088 0 15 0C6.69118 0 0 6.69118 0 15C0 23.3088 15 38.8235 15 38.8235C15 38.8235 30 23.3088 30 15ZM8.0147 14.7059C8.0147 10.8824 11.1765 7.72059 15 7.72059C18.8235 7.72059 21.9853 10.8088 21.9853 14.7059C21.9853 18.5294 18.8971 21.6912 15 21.6912C11.1765 21.6912 8.0147 18.5294 8.0147 14.7059Z"
                    fill="#FF2524"
                  />
                </svg>
                <div className={styles["details__sidebar-item-content"]}>
                  <p className={styles["details__sidebar-item-content-title"]}>
                    Las Vegas, Nevada
                  </p>
                  <p
                    className={styles["details__sidebar-item-content-subtitle"]}
                  >
                    {workshopPage.location}
                  </p>
                </div>
              </div>
              {/* Date */}
              <div className={styles["details__sidebar-item"]}>
                <svg
                  className={styles["details__sidebar-item-icon"]}
                  width="30"
                  height="32"
                  viewBox="0 0 30 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00028 6.85714C7.69717 6.85714 7.40648 6.73674 7.19216 6.52241C6.97783 6.30808 6.85742 6.01739 6.85742 5.71429V1.14286C6.85742 0.839753 6.97783 0.549062 7.19216 0.334735C7.40648 0.120408 7.69717 0 8.00028 0C8.30338 0 8.59407 0.120408 8.8084 0.334735C9.02273 0.549062 9.14314 0.839753 9.14314 1.14286V5.71429C9.14314 6.01739 9.02273 6.30808 8.8084 6.52241C8.59407 6.73674 8.30338 6.85714 8.00028 6.85714Z"
                    fill="#FF2524"
                  />
                  <path
                    d="M21.7141 6.85714C21.411 6.85714 21.1204 6.73674 20.906 6.52241C20.6917 6.30808 20.5713 6.01739 20.5713 5.71429V1.14286C20.5713 0.839753 20.6917 0.549062 20.906 0.334735C21.1204 0.120408 21.411 0 21.7141 0C22.0173 0 22.3079 0.120408 22.5223 0.334735C22.7366 0.549062 22.857 0.839753 22.857 1.14286V5.71429C22.857 6.01739 22.7366 6.30808 22.5223 6.52241C22.3079 6.73674 22.0173 6.85714 21.7141 6.85714Z"
                    fill="#FF2524"
                  />
                  <path
                    d="M14.8567 6.85714C14.5536 6.85714 14.2629 6.73674 14.0486 6.52241C13.8343 6.30808 13.7139 6.01739 13.7139 5.71429V1.14286C13.7139 0.839753 13.8343 0.549062 14.0486 0.334735C14.2629 0.120408 14.5536 0 14.8567 0C15.1598 0 15.4505 0.120408 15.6648 0.334735C15.8792 0.549062 15.9996 0.839753 15.9996 1.14286V5.71429C15.9996 6.01739 15.8792 6.30808 15.6648 6.52241C15.4505 6.73674 15.1598 6.85714 14.8567 6.85714Z"
                    fill="#FF2524"
                  />
                  <path
                    d="M28.5714 2.28571H24V5.71428C24 6.32049 23.7592 6.90187 23.3305 7.33052C22.9019 7.75917 22.3205 7.99999 21.7143 7.99999C21.1081 7.99999 20.5267 7.75917 20.098 7.33052C19.6694 6.90187 19.4286 6.32049 19.4286 5.71428V2.28571H17.1429V5.71428C17.1429 6.32049 16.902 6.90187 16.4734 7.33052C16.0447 7.75917 15.4634 7.99999 14.8571 7.99999C14.2509 7.99999 13.6696 7.75917 13.2409 7.33052C12.8122 6.90187 12.5714 6.32049 12.5714 5.71428V2.28571H10.2857V5.71428C10.2857 6.32049 10.0449 6.90187 9.61624 7.33052C9.18759 7.75917 8.60621 7.99999 8 7.99999C7.39379 7.99999 6.81241 7.75917 6.38376 7.33052C5.9551 6.90187 5.71429 6.32049 5.71429 5.71428V2.28571H1.14286C0.839753 2.28571 0.549062 2.40611 0.334735 2.62044C0.120408 2.83477 0 3.12546 0 3.42856V30.8571C0 31.1602 0.120408 31.4509 0.334735 31.6653C0.549062 31.8796 0.839753 32 1.14286 32H28.5714C28.8745 32 29.1652 31.8796 29.3795 31.6653C29.5939 31.4509 29.7143 31.1602 29.7143 30.8571V3.42856C29.7143 3.12546 29.5939 2.83477 29.3795 2.62044C29.1652 2.40611 28.8745 2.28571 28.5714 2.28571ZM14.4114 21.6457C14.1738 22.144 13.8307 22.5847 13.4057 22.9371C12.9728 23.2908 12.4762 23.5584 11.9429 23.7257C11.3741 23.9086 10.7803 24.0011 10.1829 24C9.58811 24.0113 8.99498 23.9343 8.42286 23.7714C7.94438 23.6304 7.49797 23.3975 7.10857 23.0857C6.72639 22.7647 6.40507 22.3776 6.16 21.9428C5.87982 21.4626 5.65368 20.9529 5.48571 20.4228L6.50286 20.0114C6.66854 19.9381 6.8474 19.8992 7.02857 19.8971C7.17966 19.8945 7.32898 19.9299 7.46286 20C7.59056 20.0655 7.69449 20.1694 7.76 20.2971C7.87429 20.5181 7.99619 20.7314 8.12571 20.9371C8.25896 21.1452 8.42051 21.3336 8.60571 21.4971C8.79886 21.6661 9.01909 21.8013 9.25714 21.8971C9.54183 22.004 9.8446 22.0545 10.1486 22.0457C10.4974 22.0519 10.8437 21.9857 11.1657 21.8514C11.4399 21.7382 11.6887 21.5711 11.8971 21.36C12.0867 21.1631 12.2345 20.9298 12.3314 20.6743C12.4271 20.4342 12.4775 20.1784 12.48 19.92C12.4832 19.6235 12.4486 19.3278 12.3771 19.04C12.31 18.7766 12.1621 18.5409 11.9543 18.3657C11.6791 18.1513 11.3586 18.0028 11.0171 17.9314C10.4847 17.8122 9.93974 17.7584 9.39429 17.7714V16.16C9.86779 16.1674 10.3403 16.1137 10.8 16C11.1226 15.9267 11.4263 15.7865 11.6914 15.5886C11.9021 15.4235 12.0608 15.2013 12.1486 14.9486C12.2361 14.6872 12.2786 14.4128 12.2743 14.1371C12.2939 13.8745 12.2582 13.6107 12.1696 13.3627C12.0811 13.1147 11.9415 12.8879 11.76 12.6971C11.5589 12.5225 11.3248 12.39 11.0716 12.3075C10.8183 12.2251 10.5511 12.1943 10.2857 12.2171C9.79561 12.1989 9.31453 12.3525 8.92571 12.6514C8.5634 12.9463 8.30016 13.3452 8.17143 13.7943C8.12051 13.9887 8.01314 14.1637 7.86286 14.2971C7.71317 14.4034 7.53187 14.4558 7.34857 14.4457H7.02857L5.89714 14.1714C5.97329 13.58 6.15524 13.007 6.43429 12.48C6.68359 12.0152 7.02135 11.6037 7.42857 11.2686C7.8354 10.9403 8.30075 10.6921 8.8 10.5371C9.33998 10.3681 9.90277 10.2833 10.4686 10.2857C11.0395 10.2764 11.6078 10.3653 12.1486 10.5486C12.619 10.7063 13.0538 10.9548 13.4286 11.28C13.7799 11.5966 14.057 11.9868 14.24 12.4228C14.4177 12.8304 14.511 13.2697 14.5143 13.7143C14.5199 14.1004 14.4698 14.4853 14.3657 14.8571C14.2768 15.1622 14.1336 15.4487 13.9429 15.7028C13.7611 15.947 13.5365 16.1561 13.28 16.32C13.0012 16.4968 12.7019 16.6388 12.3886 16.7428C13.0947 16.9268 13.7259 17.3263 14.1943 17.8857C14.6045 18.4528 14.8136 19.1406 14.7886 19.84C14.804 20.4629 14.6749 21.081 14.4114 21.6457ZM24.2057 23.8514H16.7886V22.1371H19.5086V14.3086C19.5086 14.0038 19.5086 13.6838 19.5086 13.3486L17.6 14.9714C17.5268 15.0343 17.4411 15.0811 17.3486 15.1086C17.2652 15.1213 17.1805 15.1213 17.0971 15.1086C16.978 15.1107 16.8602 15.0832 16.7543 15.0286C16.665 14.9861 16.5868 14.9235 16.5257 14.8457L15.8057 13.8514L19.8971 10.4228H21.7829V22.1371H24.1943L24.2057 23.8514Z"
                    fill="#FF2524"
                  />
                </svg>
                <div className={styles["details__sidebar-item-content"]}>
                  <p className={styles["details__sidebar-item-content-title"]}>
                    <ConvertDate date={workshopPage.startDate} />
                  </p>
                  <p
                    className={styles["details__sidebar-item-content-subtitle"]}
                  >
                    {workshopPage.startTime} - {workshopPage.endTime}
                  </p>
                </div>
              </div>
              {/* Created For */}
              <div className={styles["details__sidebar-item"]}>
                <svg
                  className={styles["details__sidebar-item-icon"]}
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.17769 0 0 7.17769 0 16C0 24.8223 7.17769 32 16 32C24.8223 32 32 24.8223 32 16C32 7.17769 24.8223 0 16 0ZM12.1369 8.98615C13.1115 7.95308 14.4831 7.38462 16 7.38462C17.5169 7.38462 18.8762 7.95692 19.8546 8.99539C20.8462 10.0477 21.3285 11.4615 21.2146 12.9815C20.9869 16 18.6485 18.4615 16 18.4615C13.3515 18.4615 11.0085 16 10.7854 12.9808C10.6723 11.4485 11.1538 10.03 12.1369 8.98615ZM16 29.5385C14.1927 29.5397 12.4035 29.1779 10.7386 28.4747C9.07367 27.7715 7.56693 26.7411 6.30769 25.4446C7.02889 24.4161 7.94781 23.5417 9.01077 22.8723C10.9715 21.6154 13.4531 20.9231 16 20.9231C18.5469 20.9231 21.0285 21.6154 22.9869 22.8723C24.0508 23.5414 24.9705 24.4158 25.6923 25.4446C24.4332 26.7412 22.9265 27.7717 21.2615 28.4749C19.5966 29.1782 17.8074 29.5398 16 29.5385Z"
                    fill="#FF2524"
                  />
                </svg>
                <div className={styles["details__sidebar-item-content"]}>
                  <p className={styles["details__sidebar-item-content-title"]}>
                    This is for...
                  </p>
                  <p
                    className={styles["details__sidebar-item-content-subtitle"]}
                  >
                    {workshopPage.createdFor}
                  </p>
                </div>
              </div>
              {/* Hosted By */}
              <div className={styles["details__sidebar-item"]}>
                <svg
                  className={styles["details__sidebar-item-icon"]}
                  width="23"
                  height="32"
                  viewBox="0 0 23 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 22C14.965 22 17.7727 19.3144 17.7727 16H12.5455C11.9705 16 11.5 15.55 11.5 15C11.5 14.45 11.9705 14 12.5455 14H17.7727V12H12.5455C11.9705 12 11.5 11.55 11.5 11C11.5 10.45 11.9705 10 12.5455 10H17.7727V7.94375H12.5455C11.9681 7.94375 11.5 7.496 11.5 6.94375C11.5 6.3915 11.9681 5.94375 12.5455 5.94375L17.7727 6C17.7727 2.68563 14.965 0 11.5 0C8.03497 0 5.22727 2.68563 5.22727 6V16C5.22727 19.3125 7.97812 22 11.5 22ZM21.4318 12C20.5628 12 19.8636 12.6688 19.8636 13.4438V16C19.8636 20.5831 15.8145 24.275 10.9577 23.9813C6.63994 23.7207 3.13636 19.8194 3.13636 15.6812V13.4438C3.13636 12.6688 2.43395 12 1.56818 12C0.702415 12 0 12.6688 0 13.4438V15.4531C0 21.0569 4.17986 26.0531 9.93182 26.8094V29H7.31818C6.12963 29 5.17239 29.9487 5.22989 31.0981C5.25537 31.6125 5.73693 32 6.27273 32H16.7273C17.2645 32 17.7446 31.6115 17.7701 31.0981C17.825 29.95 16.871 29 15.6818 29H13.0682V26.8894C18.6679 26.1562 23 21.5562 23 16V13.4438C23 12.6688 22.3009 12 21.4318 12Z"
                    fill="#FF2524"
                  />
                </svg>

                <div className={styles["details__sidebar-item-content"]}>
                  <p className={styles["details__sidebar-item-content-title"]}>
                    Hosted By...
                  </p>
                  <p
                    className={styles["details__sidebar-item-content-subtitle"]}
                  >
                    {workshopPage.hostedBy}
                  </p>
                </div>
              </div>
              {/* Price */}
              <div className={styles["details__sidebar-item"]}>
                <svg
                  className={styles["details__sidebar-item-icon"]}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.72903 0 0 6.72903 0 15C0 23.271 6.72903 30 15 30C23.271 30 30 23.271 30 15C30 6.72903 23.271 0 15 0ZM19.1092 21.3266C18.3666 22.1701 17.4023 22.6909 16.2157 22.8891V24.8927C16.2157 25.0002 16.1818 25.0872 16.1148 25.1561C16.0477 25.225 15.9613 25.2594 15.8574 25.2594H14.3462C14.249 25.2594 14.1644 25.2232 14.0937 25.1506C14.023 25.0781 13.988 24.9917 13.988 24.8927V22.8891C13.4955 22.8208 13.0188 22.7024 12.5602 22.5344C12.101 22.3665 11.7228 22.1961 11.4237 22.0245C11.1258 21.8529 10.8497 21.6698 10.5959 21.4753C10.3416 21.2807 10.1688 21.1369 10.0751 21.0457C9.98208 20.9544 9.91682 20.885 9.87996 20.839C9.75308 20.6789 9.74523 20.523 9.85701 20.3708L11.0104 18.824C11.0624 18.7479 11.1488 18.7026 11.2678 18.6869C11.3796 18.6718 11.469 18.7056 11.5367 18.7896L11.5584 18.8125C12.4019 19.5684 13.3082 20.0457 14.2792 20.2439C14.5553 20.3049 14.8308 20.3345 15.1069 20.3345C15.7118 20.3345 16.2435 20.1708 16.7027 19.8427C17.1618 19.5146 17.3914 19.0494 17.3914 18.4464C17.3914 18.2325 17.3353 18.0301 17.2235 17.8392C17.1117 17.6488 16.9866 17.4881 16.8489 17.3582C16.7105 17.2283 16.4924 17.0857 16.1939 16.9286C15.8954 16.7721 15.6489 16.6501 15.4544 16.5625C15.261 16.4743 14.9625 16.3504 14.5589 16.1903C14.2683 16.0688 14.0381 15.9734 13.8701 15.9039C13.7028 15.8356 13.4726 15.7347 13.1813 15.6006C12.8907 15.4671 12.6575 15.3486 12.4817 15.2459C12.3065 15.1426 12.0956 15.0066 11.8497 14.8387C11.6032 14.6713 11.4038 14.5088 11.2503 14.3523C11.098 14.1958 10.9355 14.0091 10.7633 13.7916C10.5923 13.5741 10.4594 13.3523 10.3663 13.127C10.2733 12.9016 10.1948 12.6478 10.1307 12.3657C10.0679 12.0829 10.0358 11.785 10.0358 11.472C10.0358 10.4183 10.4014 9.49509 11.1325 8.70116C11.8642 7.90663 12.8152 7.39608 13.988 7.16708V5.10614C13.988 5.00644 14.023 4.92065 14.0937 4.84814C14.1644 4.77564 14.249 4.73939 14.3462 4.73939H15.8574C15.9613 4.73939 16.0477 4.77383 16.1148 4.8421C16.1818 4.91098 16.2157 4.99919 16.2157 5.10614V7.12116C16.641 7.16708 17.0531 7.25469 17.4525 7.3846C17.8512 7.5151 18.1763 7.64259 18.4258 7.76827C18.676 7.89455 18.9134 8.03714 19.137 8.19786C19.3612 8.35858 19.5062 8.46854 19.5738 8.53017C19.6409 8.59119 19.6971 8.64436 19.7418 8.69028C19.8687 8.82865 19.8874 8.97305 19.798 9.12592L18.8911 10.7978C18.8313 10.9113 18.7461 10.973 18.6331 10.9814C18.5292 11.0038 18.4277 10.9766 18.3316 10.9011C18.3086 10.8781 18.2549 10.8322 18.1691 10.7633C18.0827 10.695 17.937 10.5935 17.7316 10.46C17.5268 10.3265 17.3087 10.205 17.0767 10.0939C16.8452 9.98268 16.5673 9.88298 16.2428 9.79598C15.9184 9.70777 15.5994 9.66426 15.2858 9.66426C14.5765 9.66426 13.9982 9.828 13.5511 10.1561C13.1034 10.4842 12.8792 10.9077 12.8792 11.4273C12.8792 11.6255 12.9113 11.8092 12.9741 11.9772C13.0369 12.1451 13.1481 12.3028 13.3046 12.4515C13.4617 12.6007 13.6085 12.727 13.7469 12.8297C13.8852 12.933 14.0937 13.0508 14.374 13.185C14.6538 13.3191 14.8792 13.4218 15.0514 13.4943C15.223 13.5662 15.484 13.6714 15.835 13.8091C16.2302 13.962 16.5323 14.0822 16.7413 14.1704C16.9504 14.258 17.2344 14.391 17.592 14.571C17.9509 14.7505 18.2319 14.9124 18.4367 15.0574C18.6421 15.203 18.8736 15.3939 19.131 15.6302C19.3883 15.867 19.5859 16.1093 19.7237 16.357C19.862 16.6048 19.9799 16.8966 20.0765 17.2325C20.1738 17.5691 20.2215 17.9268 20.2215 18.3086C20.2227 19.4772 19.8512 20.4826 19.1092 21.3266Z"
                    fill="#FF2524"
                  />
                </svg>
                <div className={styles["details__sidebar-item-content"]}>
                  <p className={styles["details__sidebar-item-content-title"]}>
                    The Price Is...
                  </p>
                  <p
                    className={styles["details__sidebar-item-content-subtitle"]}
                  >
                    &#36;{workshopPage.price}
                  </p>
                </div>
              </div>
            </div>
            {/* Details of workshop */}
            <div className={styles.details__content}>
              <h2 className={styles["details__content-title"]}>
                About {workshopPage.title} Workshop
              </h2>
              <div className={styles["details__content-body"]}>
                {documentToReactComponents(
                  workshopPage.richDetails.json,
                  options
                )}
                <Anchor
                  url={workshopPage.signUpLink}
                  text="Sign Up"
                  newTab={true}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

interface WorkshopPage {
  title: string;
  location: string;
  startDate: string;
  startTime: string;
  endTime: string;
  createdFor: string;
  hostedBy: string;
  price: number;
  richDetails: any;
  signUpLink: string;
}
