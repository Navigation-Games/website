import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Pages that still live on the Wix site are linked by full URL.
const wix = 'https://www.navigationgames.org';

const config: Config = {
  title: 'Navigation Games',
  tagline: 'Orienteering for every kid',
  favicon: 'img/favicon.ico',

  // Change to url 'https://info.navigationgames.org' and baseUrl '/'
  // once the info subdomain points at GitHub Pages.
  url: 'https://navigation-games.github.io',
  baseUrl: '/website/',
  trailingSlash: true,

  organizationName: 'Navigation-Games',
  projectName: 'website',
  onBrokenLinks: 'throw',

  i18n: {defaultLocale: 'en', locales: ['en']},

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;700&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
    // The menu. Keep it in sync with the Wix site menu.
    navbar: {
      title: 'Navigation Games',
      logo: {alt: 'Navigation Games logo', src: 'img/logo.png', href: wix, target: '_self'},
      items: [
        {
          type: 'dropdown', label: 'Teach', position: 'left',
          items: [
            {label: 'Curriculum', href: 'https://navigation-games.github.io/curriculum/'},
            {label: 'NG services', href: `${wix}/services`},
            {label: 'Workshops', href: 'https://sites.google.com/navigationgames.org/orienteeringlessons/workshops'},
            {label: 'Talk to us', href: `${wix}/contact`},
          ],
        },
        {
          type: 'dropdown', label: 'Events', position: 'left',
          items: [
            {label: 'Orienteering events', href: `${wix}/orienteering-events`},
            {label: 'Educator training', href: `${wix}/educator-training`},
            {label: 'Conference workshops', href: `${wix}/copy-of-orienteering-events`},
            {label: 'NEOC calendar', href: 'https://neoc.org/events-schedule'},
          ],
        },
        {
          type: 'dropdown', label: 'Get Involved', position: 'left',
          items: [
            {label: 'Volunteer', href: `${wix}/get-involved`},
            {label: 'Orienteers in residence', href: `${wix}/orienteers-in-residence`},
            {label: 'Jobs', href: `${wix}/job-opportunities`},
            {label: 'Donate', href: `${wix}/donate`},
          ],
        },
        {
          type: 'dropdown', label: 'About', position: 'left',
          items: [
            {label: 'Our story', href: `${wix}/about`},
            {label: 'Meet the team', to: '/meet-the-team/'},
            {label: 'Board of directors', href: `${wix}/board-of-directors`},
            {label: 'Partners', href: `${wix}/partners`},
            {label: 'What is orienteering?', href: `${wix}/orienteering-101`},
            {label: 'News', href: `${wix}/blog`},
            {label: 'Latest newsletter', href: `${wix}/latest-end-year-news`},
            {label: 'In the press', href: 'https://sites.google.com/navigationgames.org/orienteeringlessons/in-the-press'},
          ],
        },
        {label: 'Shop', href: `${wix}/shop`, position: 'right'},
        {label: 'Donate', href: `${wix}/donate`, position: 'right', className: 'donate'},
      ],
    },
    footer: {
      links: [
        {
          title: 'Navigation Games',
          items: [
            {label: 'Cambridge, MA', href: `${wix}/contact`},
            {label: '617-335-4847', href: 'tel:+16173354847'},
            {label: 'admin@navigationgames.org', href: 'mailto:admin@navigationgames.org'},
            {label: 'Contact us', href: `${wix}/contact`},
          ],
        },
        {
          title: 'Follow us',
          items: [
            {label: 'Facebook', href: 'https://www.facebook.com/NavigationGames'},
            {label: 'Instagram', href: 'https://www.instagram.com/navigationgames_/'},
          ],
        },
        {
          title: 'Orienteering organizations',
          items: [
            {label: 'Orienteering USA', href: 'https://orienteeringusa.org/'},
            {label: 'International Orienteering Federation', href: 'https://orienteering.sport/'},
            {label: 'New England Orienteering Club', href: 'https://neoc.org/'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Navigation Games. All rights reserved.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
