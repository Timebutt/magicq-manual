import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

export default {
    title: 'Chamsys MagicQ',
    tagline: 'Online Manual',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
        ],
    ],
    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Exo',
            },
        },
    ],
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'MagicQ',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Manual',
                },
                {
                    href: 'https://chamsyslighting.com/',
                    label: 'Chamsys Lighting',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Support',
                            href: 'https://chamsyslighting.com/pages/uk-support',
                        },
                        {
                            label: 'Forum',
                            href: 'https://secure.chamsys.co.uk/forum',
                        },
                        {
                            label: 'Chamsys Bugtracker',
                            href: 'https://secure.chamsys.co.uk/bugtracker',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Chamsys Lighting',
                            href: 'https://chamsyslighting.com/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ChamSys Ltd. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
} satisfies Config;
