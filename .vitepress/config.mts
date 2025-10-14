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
        items: [
          { text: 'Sovernly Identity', link: '/identity/sovernly', items: [
            { text: 'Personal', link: '/identity/personal' },
            { text: 'Business', link: '/identity/business' },
            { text: 'Organizational', link: '/identity/organizational' }
          ] },
          { text: 'Identity Resilience', link: '/identity/resilience', items: [
            { text: 'Highly Available', link: '/identity/availability' },
            { text: 'Highly Fault Tolerant', link: '/identity/faulttolerant' }
          ]}
        ]
      },
      {
        text: 'Infrastructure', link: '/infrastructure/index',
        items: [
          { text: 'Sovernly Infrastructure', link: '/infrastructure/index' },
          { text: 'Innovation Architecture', link: '/infrastructure/innovation' }
        ]
      },
      {
        text: 'Apps', link: '/Apps/index',
        items: [
          { text: 'Sovernly Apps', link: '/apps/sovernly' },
          { text: 'Trustworthy Apps', link: '/apps/trustworthy' }
        ]
      },
      {
        text: 'Data',
        items: [
          { text: 'Sovernly Data', link: '/data/index' },
          { text: 'Home Architecture', link: '/live/architecture' }
        ]
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
        items: [
          { text: 'Sovernly Networks', link: '/networks/index' },
          { text: 'Network Security', link: '/networks/security' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sovernly' }
    ]
  }
})
