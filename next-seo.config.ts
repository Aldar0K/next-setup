import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Next Setup (Aldar)',
  description: 'Next app setup with pages router (Aldar)',
  canonical: 'https://next-setup-seven.vercel.app',
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'next, setup, pages, router'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    },
    {
      rel: 'browserconfig',
      href: '/browserconfig.xml'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#000000'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'robots',
      href: '/robots.txt'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'ru',
    siteName: 'Next Setup (Aldar)',
    url: 'https://next-setup-seven.vercel.app',
    title: 'Next Setup (Aldar)',
    description: 'Next app setup with pages router',
    images: [
      {
        url: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
        alt: 'Next Setup (Aldar)',
        type: 'image/png',
        secureUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png'
      }
    ]
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  },
  facebook: {
    appId: 'your-app-id'
  },
  themeColor: '#ffffff'
};

export default config;
