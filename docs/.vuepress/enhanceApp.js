/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

router.addRoutes([
  { path: '/hente/mlnb/sru.html', redirect: '/hente/katalogdata/sru.html' },
  { path: '/hente/mlnb/oai-pmh.html', redirect: '/hente/katalogdata/oai-pmh.html' },
  { path: '/hente/mlnb/', redirect: '/hente/katalogdata/mlnb.html' },
])

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
}
