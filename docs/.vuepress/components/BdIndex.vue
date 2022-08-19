<template>
  <div>
    <div v-for="page in pages" :key="page.path">
      <h2>
        <router-link :to="page.path">{{page.title}}</router-link>
      </h2>
      <BdStatus :page="page" style="margin: -10px -3px; font-size: 70%; height: 22px" />
      <p>{{ page.frontmatter.sammendrag }}</p>
      <div>
        <router-link :to="page.path">Les mer…</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    pages() {
      return this.$site.pages
        .filter(page => page.path.startsWith('/bibliografiske-data/endringer/bd'))
        .sort((a, b) => b.frontmatter.id - a.frontmatter.id)
        .map(page => {
          page.dato_oppstart_short = page.frontmatter.dato_oppstart ? page.frontmatter.dato_oppstart.substr(0, 10) : '(mangler dato)'
          return page
        })
    }
  }
}
</script>
<style>
  
</style>