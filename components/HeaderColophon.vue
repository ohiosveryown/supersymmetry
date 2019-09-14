<!-- layout -->
<template>


  <header>
    <h1 class="f-prim fs-lg uc">
      <saber-link to='/'>Super—</saber-link>
    </h1>
    <h1 class="title f-prim fs-lg uc">
      <saber-link to='/'>Symmetry</saber-link>
    </h1>

    <h2 class="stagger-swift f-sec fs-md uc">
      <a @click="$router.go(-1)">Close Colophon</a>
    </h2>
  </header>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header {
    position: relative;
    z-index: var(--z4);
    margin: 2.4rem 4vw 0;
  }

  .title {
    margin-bottom: 2rem;
  }

  h1, h2 { width: max-content; }


</style>


<!-- logic -->
<script>
  export default { }
</script>