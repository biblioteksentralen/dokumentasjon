<template>
  <a :href="url">{{ formattedQuery }}</a>
</template>
<script>
export default {
  props: {
    entity: String,
    query: String,
    mode: String,
  },
  computed: {
    url() {
      let params = new URLSearchParams({ query: this.query });
      if (this.mode) {
        params.set("mode", this.mode);
      }
      return `https://bibliografisk.bs.no/v1/${
        this.entity
      }?${params.toString()}`;
    },
    formattedQuery() {
      return this.query;
    },
  },
};
</script>