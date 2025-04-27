// Documentation:
// Standard footer. Currently an issue with Contentful so everything
// is hard coded. Will revisit to implmenet Contentful later.

// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Anchor from "../ui/Anchor";
import TransparentWavy from "../shapeDivider/WavyAnimated";

// Styles
import styles from "@/styles/components/footer/StandardFooter.module.scss";
import StandardBusinessInfo from "../businessInfo/StandardBusinessInfo";

export default async function StandardFooter() {
  return (
    <>
      <footer className={styles.StandardFooter}>
        <TransparentWavy />
        {/* Notice */}
        <div className={styles.StandardFooter__notice}>
          <p className={styles["StandardFooter__notice-text"]}>
            We are booked around the clock with appointments. We do not accept
            walk-ins. If you would like to reach us please send a text or email.
            Alternatively, you can use the form on our contact page.
          </p>
        </div>
        {/* Social Media */}
        <div className={styles.StandardFooter__socials}>
          <Link
            className={`${styles["StandardFooter__socials-link"]} ${styles["StandardFooter__socials-link--fb"]}`}
            href="https://www.facebook.com/radicallycurlysalon"
            target="_blank"
          >
            <Image
              alt="Radically Curly Facebook"
              width={22}
              height={48}
              loading="lazy"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCAyMyA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjQ0OCAxNS42NDNIMTQuODAzVjEwLjYyOUMxNC44MDMgOC43NDYgMTYuMDUxIDguMzA3IDE2LjkzIDguMzA3QzE3LjgwNyA4LjMwNyAyMi4zMjUgOC4zMDcgMjIuMzI1IDguMzA3VjAuMDI4OTk5OEwxNC44OTUgMEM2LjY0NyAwIDQuNzcgNi4xNzQgNC43NyAxMC4xMjVWMTUuNjQzSDBWMjQuMTczSDQuNzdDNC43NyAzNS4xMiA0Ljc3IDQ4LjMxIDQuNzcgNDguMzFIMTQuODAzQzE0LjgwMyA0OC4zMSAxNC44MDMgMzQuOTkgMTQuODAzIDI0LjE3M0gyMS41NzNMMjIuNDQ4IDE1LjY0M1oiIGZpbGw9IiNGMkYyRjIiLz4KPC9zdmc+Cg=="
            />
          </Link>
          <Link
            className={`${styles["StandardFooter__socials-link"]} ${styles["StandardFooter__socials-link--ig"]}`}
            href="https://www.instagram.com/radicallycurly/"
            target="_blank"
          >
            <Image
              alt="Radically Curly Instagram"
              width={48}
              height={48}
              loading="lazy"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjggMTEuOUMxNy44IDExLjkgMTIgMTcuNiAxMiAyNC43QzEyIDMxLjggMTcuNyAzNy41IDI0LjggMzcuNUMzMS45IDM3LjUgMzcuNiAzMS43IDM3LjYgMjQuN0MzNy42IDE3LjcgMzEuOCAxMS45IDI0LjggMTEuOVpNMjQuOCAzMi45QzIwLjMgMzIuOSAxNi42IDI5LjIgMTYuNiAyNC43QzE2LjYgMjAuMiAyMC4zIDE2LjUgMjQuOCAxNi41QzI5LjMgMTYuNSAzMyAyMC4yIDMzIDI0LjdDMzMgMjkuMiAyOS4zIDMyLjkgMjQuOCAzMi45WiIgZmlsbD0iI0YyRjJGMiIvPgo8cGF0aCBkPSJNMzguMSAxNC41QzM5LjcwMTYgMTQuNSA0MSAxMy4yMDE2IDQxIDExLjZDNDEgOS45OTgzMiAzOS43MDE2IDguNjk5OTUgMzguMSA4LjY5OTk1QzM2LjQ5ODQgOC42OTk5NSAzNS4yIDkuOTk4MzIgMzUuMiAxMS42QzM1LjIgMTMuMjAxNiAzNi40OTg0IDE0LjUgMzguMSAxNC41WiIgZmlsbD0iI0YyRjJGMiIvPgo8cGF0aCBkPSJNNDUuNiA0LjFDNDMgMS40IDM5LjMgMCAzNS4xIDBIMTQuNUM1LjggMCAwIDUuOCAwIDE0LjVWMzVDMCAzOS4zIDEuNCA0MyA0LjIgNDUuN0M2LjkgNDguMyAxMC41IDQ5LjYgMTQuNiA0OS42SDM1QzM5LjMgNDkuNiA0Mi45IDQ4LjIgNDUuNSA0NS43QzQ4LjIgNDMuMSA0OS42IDM5LjQgNDkuNiAzNS4xVjE0LjVDNDkuNiAxMC4zIDQ4LjIgNi43IDQ1LjYgNC4xWk00NS4yIDM1LjFDNDUuMiAzOC4yIDQ0LjEgNDAuNyA0Mi4zIDQyLjRDNDAuNSA0NC4xIDM4IDQ1IDM1IDQ1SDE0LjZDMTEuNiA0NSA5LjEgNDQuMSA3LjMgNDIuNEM1LjUgNDAuNiA0LjYgMzguMSA0LjYgMzVWMTQuNUM0LjYgMTEuNSA1LjUgOSA3LjMgNy4yQzkgNS41IDExLjYgNC42IDE0LjYgNC42SDM1LjJDMzguMiA0LjYgNDAuNyA1LjUgNDIuNSA3LjNDNDQuMiA5LjEgNDUuMiAxMS42IDQ1LjIgMTQuNVYzNS4xWiIgZmlsbD0iI0YyRjJGMiIvPgo8L3N2Zz4K"
            />
          </Link>
          <Link
            className={`${styles["StandardFooter__socials-link"]} ${styles["StandardFooter__socials-link--tw"]}`}
            href="https://twitter.com/RadicallyCurly"
            target="_blank"
          >
            <Image
              alt="Radically Curly Twitter / X"
              width={50}
              height={50}
              loading="lazy"
              src="data:image/png;base64,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"
            />
          </Link>
          <Link
            className={`${styles["StandardFooter__socials-link"]} ${styles["StandardFooter__socials-link--yt"]}`}
            href="https://www.youtube.com/c/radicallycurly"
            target="_blank"
          >
            <Image
              alt="Radically Curly Youtube"
              width={64}
              height={48}
              loading="lazy"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzk2XzE2NSkiPgo8cGF0aCBkPSJNMzM3MS43OCAxNTQyLjU5QzMzNzEuMzkgMTU0Mi41OSAzMzcxLjE0IDE1NDIuODUgMzM3MS4xNCAxNTQzLjIzQzMzNzEuMTQgMTU0My42MiAzMzcxLjM5IDE1NDMuODcgMzM3MS43OCAxNTQzLjg3SDMzNzQuNTNDMzM3NC45MSAxNTQzLjg3IDMzNzUuMTcgMTU0My42MiAzMzc1LjE3IDE1NDMuMjNDMzM3NS4xNyAxNTQyLjg1IDMzNzQuOTEgMTU0Mi41OSAzMzc0LjUzIDE1NDIuNTlIMzM3MS43OFpNMzM3NC41MyAxNTQ0Ljc3SDMzNzEuNzhDMzM3MS4zOSAxNTQ0Ljc3IDMzNzEuMTQgMTU0NS4wMiAzMzcxLjE0IDE1NDUuNDFDMzM3MS4xNCAxNTQ1Ljc5IDMzNzEuMzkgMTU0Ni4wNSAzMzcxLjc4IDE1NDYuMDVIMzM3NC41M0MzMzc0LjkxIDE1NDYuMDUgMzM3NS4xNyAxNTQ1Ljc5IDMzNzUuMTcgMTU0NS40MUMzMzc1LjE3IDE1NDUuMDIgMzM3NC45MSAxNTQ0Ljc3IDMzNzQuNTMgMTU0NC43N1pNMzM3NC41MyAxNTQ2Ljg4SDMzNzEuNzhDMzM3MS4zOSAxNTQ2Ljg4IDMzNzEuMTQgMTU0Ny4xNCAzMzcxLjE0IDE1NDcuNTJDMzM3MS4xNCAxNTQ3LjkgMzM3MS4zOSAxNTQ4LjE2IDMzNzEuNzggMTU0OC4xNkgzMzc0LjUzQzMzNzQuOTEgMTU0OC4xNiAzMzc1LjE3IDE1NDcuOSAzMzc1LjE3IDE1NDcuNTJDMzM3NS4xNyAxNTQ3LjIgMzM3NC45MSAxNTQ2Ljg4IDMzNzQuNTMgMTU0Ni44OFpNNTEuMzkyIDExLjY0NzlIMTIuNjA4QzYuNTI3OTggMTEuNjQ3OSAxLjU5OTk4IDE2LjU3NiAxLjU5OTk4IDIyLjY1NlY0MS4yOEMxLjU5OTk4IDQ3LjM2IDYuNTI3OTggNTIuMjg3OSAxMi42MDggNTIuMjg3OUg1MS4zOTJDNTcuNDcyIDUyLjI4NzkgNjIuNCA0Ny4zNiA2Mi40IDQxLjI4VjIyLjY1NkM2Mi40IDE2LjU3NiA1Ny40NzIgMTEuNjQ3OSA1MS4zOTIgMTEuNjQ3OVpNNDAuNDQ4IDMzLjQ3MTlMMjcuODQgNDEuMzQzOUMyNi42ODggNDIuMDQ3OSAyNS4yMTYgNDEuMjE2IDI1LjIxNiAzOS44NzJWMjQuMTI4QzI1LjIxNiAyMi43ODQgMjYuNjg4IDIxLjk1MiAyNy44NCAyMi42NTZMNDAuNDQ4IDMwLjUyOEM0MS40NzIgMzEuMjMyIDQxLjQ3MiAzMi43Njc5IDQwLjQ0OCAzMy40NzE5WiIgZmlsbD0iI0YyRjJGMiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzk2XzE2NSI+CjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
            />
          </Link>
          <Link
            className={`${styles["StandardFooter__socials-link"]} ${styles["StandardFooter__socials-link--tt"]}`}
            href="https://www.tiktok.com/@radicallycurlysalon"
            target="_blank"
          >
            <Image
              alt="Radically Curly TikTok"
              width={42}
              height={48}
              loading="lazy"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0NCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0IDIwLjUwNDJDMzkuNjc0OCAyMC41MTQ1IDM1LjQ1NTcgMTkuMTczNCAzMS45Mzg3IDE2LjY3MDJWMzQuMTI3OEMzMS45Mzc1IDM3LjM2MTEgMzAuOTQzNiA0MC41MTcgMjkuMDg5OCA0My4xNzM1QzI3LjIzNTkgNDUuODMgMjQuNjEwNiA0Ny44NjA1IDIxLjU2NDkgNDguOTkzNEMxOC41MTkxIDUwLjEyNjMgMTUuMTk4MSA1MC4zMDc3IDEyLjA0NTggNDkuNTEzM0M4Ljg5MzU4IDQ4LjcxODkgNi4wNjAzOCA0Ni45ODY2IDMuOTI1MDcgNDQuNTQ3OUMxLjc4OTc2IDQyLjEwOTMgMC40NTQxMjEgMzkuMDgwNyAwLjA5Njc0MTggMzUuODY2OUMtMC4yNjA2MzcgMzIuNjUzMiAwLjM3NzI4MSAyOS40MDc1IDEuOTI1MiAyNi41NjRDMy40NzMxMSAyMy43MjA1IDUuODU3MjUgMjEuNDE0NiA4Ljc1ODggMTkuOTU0NkMxMS42NjA0IDE4LjQ5NDcgMTQuOTQxIDE3Ljk1MDMgMTguMTYyMiAxOC4zOTQzVjI3LjE3NDlDMTYuNjg4MiAyNi43MTM5IDE1LjEwNTQgMjYuNzI3NyAxMy42Mzk4IDI3LjIxNDVDMTIuMTc0MiAyNy43MDEzIDEwLjkwMDggMjguNjM2MSAxMC4wMDE0IDI5Ljg4NTRDOS4xMDIwMiAzMS4xMzQ2IDguNjIyNjUgMzIuNjM0NiA4LjYzMTc1IDM0LjE3MDlDOC42NDA4NSAzNS43MDcyIDkuMTM3OTYgMzcuMjAxNCAxMC4wNTIxIDM4LjQ0MDFDMTAuOTY2MiAzOS42Nzg3IDEyLjI1MDYgNDAuNTk4NSAxMy43MjE4IDQxLjA2ODFDMTUuMTkzMSA0MS41Mzc3IDE2Ljc3NTkgNDEuNTMzIDE4LjI0NDQgNDEuMDU0OEMxOS43MTI4IDQwLjU3NjYgMjAuOTkxNyAzOS42NDkyIDIxLjg5ODUgMzguNDA1MkMyMi44MDUyIDM3LjE2MTIgMjMuMjkzNCAzNS42NjQxIDIzLjI5MzQgMzQuMTI3OFYwSDMxLjkzODdDMzEuOTMyNyAwLjcyNTkwNiAzMS45OTM5IDEuNDUwODIgMzIuMTIxNSAyLjE2NTU5QzMyLjQyMTkgMy43NjExOSAzMy4wNDY1IDUuMjc5MDggMzMuOTU3MiA2LjYyNjQyQzM0Ljg2NzggNy45NzM3NiAzNi4wNDU0IDkuMTIyMjIgMzcuNDE3NyAxMC4wMDE2QzM5LjM3MDIgMTEuMjg1MiA0MS42NTkzIDExLjk2OTMgNDQgMTEuOTY4OVYyMC41MDQyWiIgZmlsbD0iI0YyRjJGMiIvPgo8L3N2Zz4K"
            />
          </Link>
        </div>
        {/* Business Info */}
        <div className={styles.StandardFooter__info}>
          <div className={styles["StandardFooter__info-col"]}>
            <StandardBusinessInfo styling="footer" />
            <Anchor
              url="http://www.vagaro.com/cmlb9u"
              text="Schedule An Appointment"
              newTab={true}
            />
          </div>
          {/* Review us on... */}
          <div className={styles["StandardFooter__info-col"]}>
            <h3 className={styles["StandardFooter__info-col-title"]}>
              Review us on...
            </h3>
            <div className={styles["StandardFooter__info-col-item"]}>
              <Link
                className={styles["StandardFooter__info-col-item-yelp"]}
                href="https://www.yelp.com/biz/radically-curly-henderson-4"
                target="_blank"
              >
                <Image
                  className={styles["StandardFooter__info-col-item-yelp-icon"]}
                  alt="Yelp"
                  width={164}
                  height={75}
                  src="https://images.ctfassets.net/3dr0slfxb86n/6Yre5EDkN8lbKCaURECmaU/958255cb9a1e076d79affda11b8f35dc/yelp.svg"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.StandardFooter__copyright}>
          <div className={styles["StandardFooter__copyright-divider"]}></div>
          <p className={styles["StandardFooter__copyright-text"]}>
            © Radically Curly 2014 - {new Date().getFullYear()} | Radically
            Curly is a registered trademark of Radically Curly Inc. &quot;We
            Rock the Fabric of Your Hair <sup>®</sup>&quot; is a registered
            trademark of Radically Curly Inc.
          </p>
        </div>
      </footer>
    </>
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
