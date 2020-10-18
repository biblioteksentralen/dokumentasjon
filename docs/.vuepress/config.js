const { description } = require('../../package')

module.exports = {

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  base: '/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  //title: 'Aja',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  //description: 'Datatjenester fra Biblioteksentralen',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'nb', // this will be set as the lang attribute on <html>
      title: 'Aja',
      description: 'Datatjenester fra Biblioteksentralen',
    },
  },

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#markdown
   */
  markdown: {
    extendMarkdown: md => {
      md.set({ linkify: true })
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    docsRepo: 'https://gitlab.com/bibsent/aja-doc',
    logo: '/logo.png',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Rediger',
    lastUpdated: 'Sist oppdatert',
    nav: [
      {
        text: 'Kontakt oss',
        link: '/kontakt/',
      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    // displayAllHeaders: true, // Default: false
    // sidebar: {
    //   '/hente/': [
    //     '',     /* /foo/ */
    //     'mlnb',  /* /foo/one.html */
    //   ],

    //   '/levere/': [
    //     '',      /* /bar/ */
    //     'three', /* /bar/three.html */
    //   ],

    //   // '/baz/': 'auto', /* automatically generate single-page sidebars */

    //   // fallback
    //   '/': [
    //     '',        /* / */
    //     'hente', /* /contact.html */
    //     'levere'    /* /about.html */
    //   ]
    // },

    sidebar: [
      {
        title: 'Hente data',
        path: '/hente/',
        children: [
          {
            path: '/hente/mlnb/',
            title: 'NBs metadataleveranse',
            collapsable: false,
            children: [
              '/hente/mlnb/oai-pmh',
              '/hente/mlnb/sru',
              // '/hente/mlnb/oai-pmh',
              '/hente/mlnb/omslagsbilder',
            ]
          },
          {
            path: '/hente/bibbi-abb/',
            title: 'Bibbi-abonnement',
            children: []
          }
        ],
      },
      {
        title: 'Levere data',
        path: '/levere/',
      },
    ],

    // sidebar: [
    //   {
    //     title: 'Hente data',   // required
    //     path: '/hente/',      // optional, link of the title, which should be an absolute path and must exist
    //     collapsable: false, // optional, defaults to true
    //     sidebarDepth: 1,    // optional, defaults to 1
    //     children: [
    //       'mlnb'
    //     ]
    //   },
    //   {
    //     title: 'Levere data',
    //     children: [ /* ... */ ],
    //     initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
    //   }
    // ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
