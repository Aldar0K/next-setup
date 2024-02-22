import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Next Setup (Aldar)',
  description: 'Next app setup with pages router (Aldar)',
  canonical: 'https://next-setup-seven.vercel.app',
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/meta/site.webmanifest'
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
  }
};

export default config;
