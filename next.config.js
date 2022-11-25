/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en",
    domains: [
      {
        domain: exemple.com,
        defaultLocale: en - US,
      },
      {
        domain: exemple.fr,
        defaultLocale: fr,
      },
    ],
  },
};
