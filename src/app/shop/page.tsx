// Next
import Link from "next/link";
import Image from "next/image";

// Components
import PageTitle from "@/components/ui/PageTitle";

// Custom Hooks
import UseContentful from "@/hook/useContentful";

// Styles
import styles from "@/styles/pages/shop/page.module.scss";

export const metadata = {
  title: "Radically Curly | Shop",
  generator: "Radically Curly",
  applicationName: "Radically Curly",
  description:
    "Shop for official Radically Curly merchandise or take a look at one of the brands we are affiliated.",
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
      "Shop for official Radically Curly merchandise or take a look at one of the brands we are affiliated.",
    url: "https://radicallycurly.com/shop",
    siteName: "Radically Curly",
    images: [
      {
        url: "https://images.ctfassets.net/3dr0slfxb86n/3FdBfZvsP8KcuRmB1vVA8S/f79c668f16519f4faf3760b042bbfe1c/rc-shop-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://radicallycurly.com/shop"),
  alternates: {
    canonical: "/shop",
  },
};

export default async function Page() {
  const shopPageQuery = `
    query shopPageEntryQuery {
      shopPage(id: "6vlufO0tonXhFblGRXVByg") {
        productsCollection {
          items {
            image {
              title
              url
            }
            name
            affiliateProduct
            productLink
          }
        }
      }
    } 
  `;

  async function fetchShopPageData() {
    const result = await UseContentful(shopPageQuery);
    return result.data.shopPage.productsCollection;
  }

  const shopPage: ShopPage = await fetchShopPageData();

  return (
    <main>
      <PageTitle title="Shop" />
      <section className={styles.shop}>
        {shopPage.items.map((item) => (
          <Link
            className={styles.shop__item}
            href={item.productLink}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <Image
              className={styles["shop__item-img"]}
              src={item.image.url}
              alt={item.image.title}
              width={961}
              height={530}
              loading="eager"
            />
            <div className={styles["shop__item-info"]}>
              <p className={styles["shop__item-info-type"]}>
                {item.affiliateProduct ? "AFFILIATE" : "OFFICIAL"}
              </p>
              <p className={styles["shop__item-info-title"]}>{item.name}</p>
              <p className={styles["shop__item-info-btn"]}>
                {item.affiliateProduct ? `Visit ${item.name}` : "Shop Now"}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

interface ShopPage {
  items: {
    image: {
      title: string;
      url: string;
    };
    name: string;
    affiliateProduct: boolean;
    productLink: string;
  }[];
}
