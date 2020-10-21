<<template>
  <a :href="url">{{ query }}</a>
</template>
<script>
export default {
  props: {
    base: String,
    query: String,
  },
  computed: {
    url() {
      return `https://sru.aja.bs.no/${this.base}?version=1.1&operation=searchRetrieve&query=${encodeURIComponent(this.query)}`
    }
  },
}
</script>