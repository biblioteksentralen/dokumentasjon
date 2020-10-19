<template>
  <div>
    <img
      :src="$withBase(src)"
      :alt="alt"
    >  
  </div>
</template>
<script>
export default {
  props: {
    images: Array,
  },
  data () {
    return {
      src: '',
      alt: '...'
    }
  },
  /** 
   * Note: mounted() is only called client side
   * Ref: https://ssr.vuejs.org/guide/universal.html#data-reactivity-on-the-server
   */
  mounted () {
    const img = this.images[Math.floor(Math.random() * this.images.length)]
    this.src = img.src
    this.alt = img.alt
  },
}
</script>
<style>
  
</style>