<!-- layout -->
<template>
  <div>

    <!-- navigation -->
    <!-- <nav>
      <saber-link to="/">Home</saber-link>
      <saber-link to="/about.html">About</saber-link>
    </nav> -->

    <!-- app magic / my main bae -->
    <slot/>

  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .page-enter-active { transition: all 700ms ease; }
  .page-leave-active { transition: all 700ms ease; }
  .page-leave-active, .page-enter {
    opacity: 0;
  }

  img {
    max-width: 200px;
  }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'page' ]
  }
</script>
