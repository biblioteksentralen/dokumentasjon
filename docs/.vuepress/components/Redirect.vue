<template>
  <div>
    Redirecting...
  </div>
</template>
<script>
export default {
  props: {
    to: String,
  },
  mounted () {
    console.log("[Redirecting]", this.to);
    document.location = this.to;
  },
}
</script>
