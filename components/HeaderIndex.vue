<!-- layout -->
<template>


  <header ref='header' class="">Header</header>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header {
    position: fixed;
    z-index: var(--z1);
    top: 0; left: 0;
    width: 100vw;
    box-shadow: 20px 0 16px 0 #F0F0F0;
    background: var(--stone);
    background: pink;
    transition: all 500ms ease;

    @include breakpoint(mdl) {
      width: calc(100vw * .28); height: 100vh;
    }
  }

</style>


<!-- logic -->
<script>
  export default { }
</script>
