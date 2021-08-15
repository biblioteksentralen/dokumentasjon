<template>
  <div class="bd-status-line">
    <template v-for="(el, idx) in steg">
      <div :class="{'bd-status-el': true,  'bd-first': idx == 0,  'bd-last': idx == frontmatter.steg.length - 1, [el.statusCls]: true}">
        {{ el.status }}
        {{ el.dato }}
      </div>
    <!--
        <div class="bd-status-arrow-right" :class="[el.statusCls]" v-if="idx != steg.length - 1"></div>
      -->
    </template>
<!--

    <div :class="['bd-status-el', 'bd-first']">
      Annonsert {{ dato_annonsert }}
    </div>
    <div :class="['bd-status-el', 'bd-dato', 'bd-last']" v-if="dato_oppdatert">
      Oppdatert {{ dato_oppdatert }}
    </div>
    <div :class="['bd-status-el', `bd-status-${frontmatter.status}`, 'bd-last']">
      {{ status }} {{ dato_oppstart }}
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    page: Object,
  },
  data: () => {
    return {
      dato_annonsert: '',
      dato_oppdatert: '',
      dato_oppstart: '',
      status: '',
    }
  },
  methods: {
    formatDate: value => {
      if (!value) return '';
      return value.replace(/T00:00:00\.000Z$/, '')
    },
    ucfirst: value => {
      if (!value) return ''
      return value.substr(0,1).toUpperCase() + value.substr(1)
    }
  },
  computed: {
    frontmatter() {
      if (this.page) {
        return this.page.frontmatter
      }
      return this.$frontmatter
    },
    steg() {
      if (!this.frontmatter.steg) return []
      return this.frontmatter.steg.map((x, idx) => {
        return {
          status: x.status,
          dato: this.formatDate(x.dato),
          statusCls: `bd-status-${x.status.toLowerCase()}`,
        }
      })
    }
  },
  /** 
   * Note: mounted() is only called client side
   * Ref: https://ssr.vuejs.org/guide/universal.html#data-reactivity-on-the-server
   */
  mounted () {
    this.dato_annonsert = this.formatDate(this.frontmatter.dato_annonsert)
    this.dato_oppstart = this.formatDate(this.frontmatter.dato_oppstart)
    this.dato_oppdatert = this.formatDate(this.frontmatter.dato_oppdatert)
    this.status = this.ucfirst(this.frontmatter.status)
  },
}
</script>
<style lang="stylus">

.bd-status-line
  font-size: 85%
  padding: 3px
  display: flex
  height: 25px
  align-items: stretch

  .bd-first
    border-bottom-left-radius: 3px
    border-top-left-radius: 3px

  .bd-last
    border-bottom-right-radius: 3px
    border-top-right-radius: 3px

  .bd-status-el
    padding: 3px 16px
    background: #eee
    margin: 0
    display: flex
    justify-content: center
    align-items: center
    
    &.bd-status-right
      margin-left: auto

.bd-status-el:not(.bd-first)
  padding-left: 26px

.bd-status-el
  position: relative

.bd-status-el:not(:last-child):after
  content: ''
  position: absolute
  display: block
  right: -15px
  top: 0
  bottom: 0
  width: 15px
  height: 100%
  background: #eee
  clip-path: polygon(0 0, 0 100%, 100% 50%)
  z-index: 1

.bd-status-el.bd-status-planlagt, .bd-status-el.bd-status-planlagt:after
  background: #fff0c7

.bd-status-el.bd-status-iverksatt, .bd-status-el.bd-status-iverksatt:after
  background: #3eaf7c
  color: white

</style>