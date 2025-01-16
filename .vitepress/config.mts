import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sovernly",
  description: "Working to build the next generation of sovereign systems",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stories', link: '/stories/index' }
    ],

    sidebar: [
      {
        text: 'Live Sovernly',
        items: [
          { text: 'Home == Castle', link: '/live/home' },
          { text: 'Home Architecture', link: '/live/architecture' }
        ]
      },
      {
        text: 'Work Sovernly',
        items: [
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
