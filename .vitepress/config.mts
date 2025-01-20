import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sovernly",
  description: "Working to build the next generation of sovereign systems",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/index' }
    ],

    sidebar: [
      {
        text: 'Security',
        items: [
          { text: 'Devices', link: '/security/devices' },
          { text: 'Networks', link: '/security/networks' },
          { text: 'Identities', link: '/security/identity' },
          { text: 'Applications', link: '/security/applications' }
        ]
      },
      {
        text: 'Innovation',
        items: [
          { text: 'Stewarding Change', link: '/innovation/index' },
          { text: 'Innovation Architecture', link: '/innovation/architecture' }
        ]
      },
      {
        text: 'Resilience',
        items: [
          { text: 'Durable', link: '/resiliency/index' },
          { text: 'Trustworthy', link: '/resiliency/trustworthy' }
        ]
      },
      {
        text: 'Live Sovernly',
        items: [
          { text: '@Home', link: '/live/home' },
          { text: 'Home Architecture', link: '/live/architecture' }
        ]
      },
      {
        text: 'Work Sovernly',
        items: [
          { text: 'Leadership', link: '/work/leadership' },
          { text: 'Employee', link: '/work/employee' },
          { text: 'Management', link: '/work/management' },
          { text: 'Ownership', link: '/work/ownership' }
        ]
      },
      {
        text: 'Socialize Sovernly',
        items: [
          { text: 'Social Groups', link: '/socialize/groups' },
          { text: 'Political Groups', link: '/socialize/political' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sovernly' }
    ]
  }
})
