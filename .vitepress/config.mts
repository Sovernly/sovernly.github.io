import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sovernly",
  description: "Working to build the next generation of sovereign systems",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Apps', link: '/Apps/index',
      },
      {
        text: 'Data', link: '/data/index',
      },
      {
        text: 'Endpoints', link: '/endpoints/index',
      },
      {
        text: 'Identity', link: '/identity/index',
      },
      {
        text: 'Infrastructure', link: '/infrastructure/index',
      },
      {
        text: 'Networks', link: '/networks/index',
      },
      { text: 'Blog', link: '/blog/index'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sovernly' }
    ]
  }
})
