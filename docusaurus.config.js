import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI Model's Termonologies",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: "https://az900.shahtech.info",
  baseUrl: "/",

  organizationName: "busycaesar",
  projectName: "AZ_900",
  deploymentBranch: "Deployment",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  staticDirectories: ["static"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "AZ 900 Notes",
      logo: {
        alt: "company Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sections",
          position: "left",
          label: "Learn",
        },
        {
          href: "https://github.com/busycaesar/AZ_900",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://x.com/busycaesar",
            },
            {
              label: "GitHub",
              href: "https://github.com/busycaesar",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/busycaesar",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blogs",
              href: "https://dev.to/busycaesar",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/@busycaesar",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/busycaesar",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Buy Me a Coffee",
              href: "https://buymeacoffee.com/busycaesar",
            },
            {
              label: "Topmate",
              href: "https://topmate.io/busycaesar",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} shahtech.info. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
