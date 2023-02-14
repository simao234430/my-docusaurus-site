// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Lerna",
        logo: {
          alt: "Lerna Logo",
          src: "images/lerna-logo-dark.svg",
          srcDark: "images/lerna-logo-light.svg",
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Blog",
                href: "https://blog.nrwl.io/?utm_source=lerna.js.org",
              },
              {
                label: "Youtube Channel",
                href: "https://youtube.com/@nxdevtools?utm_source=lerna.js.org",
              },
            ],
          },
          {
            title: "Help",
            items: [
              {
                label: "Troubleshooting",
                to: "/docs/troubleshooting",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/lerna",
              },
              {
                label: "Report Issues",
                href: "https://github.com/lerna/lerna/issues?q=is%3Aopen+is%3Aissue",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/lernajs",
              },
              {
                label: "GitHub",
                href: "https://github.com/lerna/lerna",
              },
              {
                label: "Newsletter",
                href: "https://go.nrwl.io/nx-newsletter?utm_source=lerna.js.org",
              },
              {
                label: "Slack",
                href: "https://go.nrwl.io/join-slack?utm_source=lerna.js.org",
              },
              {
                label: "Help Us",
                href: "https://github.com/lerna/lerna/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Acommunity",
              },
            ],
          },
          {
            title: "Solutions",
            items: [
              {
                label: "Nx",
                href: "https://nx.dev/?utm_source=lerna.js.org",
              },
              {
                label: "NxCloud",
                href: "https://nx.app/?utm_source=lerna.js.org",
              },
              {
                label: "Nrwl",
                href: "https://nrwl.io/?utm_source=lerna.js.org",
              },
            ],
          },
        ],
        copyright: `Released under the MIT License. <br /> &copy; ${new Date().getFullYear()} Copyright Nrwl.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
