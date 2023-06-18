import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://radicallycurly.com",
      lastModified: new Date(),
    },
    {
      url: "https://radicallycurly.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://radicallycurly.com/experiences",
      lastModified: new Date(),
    },
    {
      url: "https://radicallycurly.com/workshop",
      lastModified: new Date(),
    },
    {
      url: "https://radicallycurly.com/faq",
      lastModified: new Date(),
    },
    {
      url: "https://radicallycurly.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://radicallycurly.com/shop",
      lastModified: new Date(),
    },
  ];
}
