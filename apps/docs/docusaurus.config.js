/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Typebot docs',
  tagline: 'Get to Typebot next level with its documentation',
  url: 'https://docs.typebot.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'baptisteArno', // Usually your GitHub org/user name.
  themeConfig: {
    navbar: {
      title: 'Typebot',
      logo: {
        alt: 'Typebot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/baptisteArno/typebot.io/tree/main/apps/docs',
          label: 'Contribute',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '978429d40094dc0fd2dd02db741b3dbe',
      indexName: 'typebot',
      appId: '6GBQ91COKA',
      contextualSearch: false,
    },
    footer: {
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Homepage',
              to: 'https://www.typebot.io',
            },
            {
              label: 'Roadmap',
              to: 'https://app.typebot.io/feedback',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook Group',
              href: 'https://www.facebook.com/groups/typebot',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Typebot_io',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Terms of Service',
              href: 'https://www.typebot.io/terms-of-service',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.typebot.io/privacy-policies',
            },
          ],
        },
      ],
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
