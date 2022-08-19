const { description } = require('../../package')
const moment = require('moment')
const glob = require('glob')

const endringer = glob.sync('docs/bibliografiske-data/endringer/*.md')
  .map(f => f.replace(/^docs/, '').replace('.md', ''))
  .filter(f => f.split('/').pop().startsWith('bd'))
  .sort((a,b) => -a.localeCompare(b))
  //.map(f => ({path: f, children: []})) // skip TOC navigation
  ;

//'/hente/bibliografiske-data/endringer/bd1-ntsf',
//'/hente/bibliografiske-data/endringer/bd2-produksjonsland',


module.exports = {

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  base: '/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  //title: 'Ája',

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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'nb', // this will be set as the lang attribute on <html>
      title: 'Tjenestedokumentasjon fra Biblioteksentralen',
      description: 'Teknisk dokumentasjon for tjenester og programmeringsgrensesnitt (API-er) fra Biblioteksentralen',
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
    docsRepo: 'https://github.com/biblioteksentralen/dokumentasjon',
    logo: '/logo.png',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Rediger',
    lastUpdated: 'Sist oppdatert',
    nav: [
      {
        text: 'Kontakt oss',
        link: 'https://www.bibsent.no/kundesenter/',
      },
    ],
    sidebarDepth: 10,
    sidebar: [
      {
        path: '/bibliografiske-data/',
        title: 'Bibliografiske data',
        collapsable: false,
        children: [
          '/bibliografiske-data/mlnb',
          '/bibliografiske-data/oai-pmh',
          '/bibliografiske-data/sru',
          '/bibliografiske-data/rest',
          {
            path: '/bibliografiske-data/endringer/',
            title: 'Endringer',
            sidebarDepth: 0,
            children: endringer,
          },
        ]
      },
      {
        path: '/omslagsbilder',
        title: 'Omslagsbilder',
        children: []
      },
      {
        path: '/autoritetsdata/',
        title: 'Autoritetsdata',
        children: []
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    //'@vuepress/plugin-back-to-top',
    //'@vuepress/plugin-medium-zoom',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
  ],
}
