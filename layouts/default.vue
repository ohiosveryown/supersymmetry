<!-- layout -->
<template>
  <div>
    <nav>
      <saber-link to="/">Home</saber-link>
      <saber-link to="/about.html">About</saber-link>
    </nav>

    <!-- magic -->
    <slot/>

    <!-- preve / next -->
    <!-- <ul>
      <li v-if="page.prevPost">
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
      <li v-if="page.nextPost">
        <router-link :to="page.nextPost.permalink">
          Next: {{ page.nextPost.title }}
        </router-link>
      </li>
    </ul> -->
  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .page-enter-active, .page-leave-active { transition: all 500ms ease; }
  .page-leave-active, .page-enter {
    opacity: 0;
  }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'page' ],
    transition: {
      name: 'page',
      mode: 'out-in'
    },
    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    }
  }
</script>
