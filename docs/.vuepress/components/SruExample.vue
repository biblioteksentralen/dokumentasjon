<template>
  <a :href="url">{{ formattedQuery }}</a>
</template>
<script>
export default {
  props: {
    base: String,
    query: String,
    sortKeys: String,
  },
  computed: {
    url () {
      return `https://sru.aja.bs.no/${this.base}?version=1.1&operation=searchRetrieve&query=${encodeURIComponent(this.query)}`
    },
    formattedQuery () {
      if (this.sortKeys) {
        return `query=${this.query}&sortKeys=${this.sortKeys}`
      }
      return this.query
    }
  },
}
</script>