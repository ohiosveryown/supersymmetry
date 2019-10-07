<!-- layout -->
<template>
  <div class="slot-wrapper">
    <slot/>
  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .page-enter-active, .page-leave-active { transition: all calc(var(--animbase) * 2) ease; }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'page' ],

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },
  }
</script>
