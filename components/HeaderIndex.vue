<!-- layout -->
<template>


  <header class="stagger-swift">
    <section>
      <h3 class="header-date f-prim fs-sm uc">2019—2020</h3>
        <div>
          <h1 class="header-first-line f-prim fs-lg uc">Super—</h1>
          <h1 class="header-second-line title f-prim fs-lg uc">Symmetry</h1>
        </div>
    </section>
    <saber-link to='/colophon.html'><h2 class="header-link link f-sec fs-md uc">View Colophon</h2></saber-link>
  </header>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header {
    position: relative;
    z-index: var(--z4);
    margin: 2.4rem 4vw 0;
    width: 88vw;
    @include breakpoint(md) { margin: 0 0 0 4vw; }
  }

  section {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    @include breakpoint(md) {
      flex-direction: column;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .header-date, .header-first-line, .header-second-line, .header-link {
    @include breakpoint(md) {
      position: absolute;
      top: 0;
    }
  }

  .title {
    margin-bottom: 2rem;
    @include breakpoint(md) { margin-bottom: 0; }
  }

</style>


<!-- logic -->
<script>
  export default { }
</script>