/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "@/styles/app/app.scss";`,
  },
  images: {
    domains: ["images.ctfassets.net"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_CDP: process.env.CONTENTFUL_CDP,
    FORMSPREE_API: process.env.FORMSPREE_API,
  },
};

module.exports = nextConfig;
