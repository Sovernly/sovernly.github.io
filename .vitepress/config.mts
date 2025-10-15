import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sovernly",
  description: "Working to build the next generation of sovereign systems",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Identity', link: '/identity/index',
      },
      {
        text: 'Infrastructure', link: '/infrastructure/index',
      },
      {
        text: 'Apps', link: '/Apps/index',
      },
      {
        text: 'Data',

      },
      {
        text: 'Endpoints',
        items: [
          { text: 'Device Endpoints', link: '/endpoints/device' },
          { text: 'Service Endpoints', link: '/endpoints/service' }
        ]
      },
      {
        text: 'Networks',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sovernly' }
    ]
  }
})
