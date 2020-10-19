<template>
  <span>
    <a v-if="link" :href="link">{{ display }}</a>
    <span v-else>(Missing parameter)</span>
  </span>
</template>

<script>
  /** 
   * This component is just there to make it a little bit harder for spam bots
   * to catch our address.
  */
  export default {
    props: {
      address: Array,
      subject: String,
    },
    data () {
      return {
        link: '',
        display: '...'
      }
    },
    /** 
     * Note: mounted() is only called client side
     * Ref: https://ssr.vuejs.org/guide/universal.html#data-reactivity-on-the-server
     */
    mounted () {
      this.display = this.address.join('@')
      this.link = `mailto:${this.display}?subject=${this.subject}`
    },
  }
</script>
