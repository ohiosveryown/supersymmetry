<!-- layout -->
<template>
  <nav>

    <saber-link to="/">Go to Home</saber-link>
    <saber-link to="/delete--intro.html">Go to Intro</saber-link>

  </nav>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

nav { margin-bottom: 4rem; }
 a { margin-right: 3.2rem; }

</style>


<!-- logic -->
<script>
  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    mounted() {



    }
  }
</script>
