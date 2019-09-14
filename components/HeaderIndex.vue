<!-- layout -->
<template>


  <header class="stagger-swift">
    <section>
      <h3 class="header-date date f-prim fs-sm uc">2019—2020</h3>
      <h1 class="header-first-line f-prim fs-lg uc">Super—</h1>
      <h1 class="header-second-line title f-prim fs-lg uc">Symmetry</h1>
      <saber-link to='/colophon.html'><h2 class="header-link link f-sec fs-md uc">View Colophon</h2></saber-link>
    </section>
  </header>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header {
    position: relative;
    z-index: var(--z4);
    margin-left: 4vw;
  }

  .header-date, .header-first-line, .header-second-line, .header-link {
    position: absolute;
    top: 0;
  }

</style>


<!-- logic -->
<script>
  export default { }
</script>