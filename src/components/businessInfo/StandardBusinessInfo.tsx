// Next
import Image from "next/image";
import Link from "next/link";

// Contentful rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, INLINES, BLOCKS } from "@contentful/rich-text-types";

// Custom Hooks
import UseContentful from "@/hook/useContentful";

// Styles
import styles from "@/styles/components/businessInfo/StandardBusinessInfo.module.scss";

type Props = {
  styling: "footer" | "page";
};

export default async function StandardBusinessInfo({ styling }: Props) {
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

  const businessInfoQuery = `
    query businessInformationEntryQuery {
      businessInformation(id: "6HdVpQhxVZ8Rd08sSfnC9F") {
        title
        detailsCollection {
          items {
            icon {
              url
              title
              width
              height
            }
            details {
              json
            }
          }
        }
      }
    }
  `;

  async function fetchBusinessInfoData() {
    const result = await UseContentful(businessInfoQuery);
    return result.data.businessInformation;
  }

  const businessInfo: BusinessInfo = await fetchBusinessInfoData();

  interface BusinessInfo {
    title: string;
    detailsCollection: {
      items: {
        icon: {
          url: string;
          title: string;
          width: number;
          height: number;
        };
        details: {
          json: any;
        };
      }[];
    };
  }

  return (
    <>
      <h3
        className={
          styling === "footer" ? styles["title--footer"] : styles["title--page"]
        }
      >
        {businessInfo.title}
      </h3>
      {businessInfo.detailsCollection.items.map((item, index) => {
        return (
          <div
            key={index}
            className={
              styling === "footer"
                ? styles["StandardBusinessInfo--footer"]
                : styles["StandardBusinessInfo--page"]
            }
          >
            <Image
              src={item.icon.url}
              alt={item.icon.title}
              width={item.icon.width}
              height={item.icon.height}
            />
            <div className={styles.StandardBusinessInfo__item__details}>
              {documentToReactComponents(item.details.json, options)}
            </div>
          </div>
        );
      })}
    </>
  );
}
