import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Web App | Korean Simple',
    short_name: 'Korean Simple',
    description: 'Largest korean language studying web app',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'favicon.ico',
        type: 'image/x-icon',
        sizes: '64x64 32x32 24x24 16x16'
      },
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
