export default function manifest() {
  return {
    name: 'PHAKAMA',
    short_name: 'PHAKAMA',
    description: 'Citizen-powered pothole reporting platform for South Africa.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f5f1',
    theme_color: '#f97316',
    icons: [
      {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Crect width="128" height="128" rx="24" fill="%23f97316"/%3E%3Ctext x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-size="72" font-family="Arial" fill="white"%3EP%3C/text%3E%3C/svg%3E',
        sizes: '128x128',
        type: 'image/svg+xml',
      },
    ],
  };
}
