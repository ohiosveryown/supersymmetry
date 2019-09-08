<!-- layout -->
<template>


  <header>
    <section>
      <h3 class="date f-prim fs-md uc">2019—2020</h3>
      <h1 class="f-prim fs-lg uc">Super—</h1>
      <h1 class="title f-prim fs-lg uc">Symmetry</h1>
      <h2 class="link f-sec fs-md uc">Colophon</h2>
      <button class="f-prim uc"><saber-link to='/'>View Entry</saber-link></button>
    </section>
  </header>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  // section {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   margin: 0 2.4rem 0 0;
  //   height: 42vh;

  //   @include breakpoint(md) {
  //     margin: 0 4rem 0 0;
  //     height: 36vh;
  //    }

  //   @include breakpoint(mdl) {
  //     margin: 0 0 0 4rem;
  //     height: 46vh;
  //   }
  // }

  button {
    align-self: flex-start;
    // background: var(--cloud);
    padding: 1rem 2rem .8rem;
    transition: var(--ease);
  }

  .date {
    margin-bottom: 2.4rem;
    @include breakpoint(md) { margin-bottom: 5.6rem; }
  }

  .title {
    margin-bottom: 6.4rem;
    @include breakpoint(md) { margin-bottom: 1.2rem; }
  }

  .link { margin-bottom: 2.8rem; }

  header {
    display: flex;
    position: fixed;
    z-index: var(--z1);
    top: 0; left: 0;
    width: 100vw;
    box-shadow: 20px 0 16px 0 #F0F0F0;
    background: var(--stone);
    // transition: all 500ms ease;

    @include breakpoint(mdl) {
      flex-direction: column;
      justify-content: center;
      width: calc(100vw * .28); height: 100vh;
    }

    @include breakpoint(md)  { height: calc( 100vh - 7rem ); }
    @include breakpoint(lg)  { height: 100vh; }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2.4rem 0 0;
    height: 42vh;

    @include breakpoint(md) {
      margin: 0 4rem 0 0;
      height: 36vh;
     }

    @include breakpoint(mdl) {
      margin: 0 0 0 4rem;
      height: 46vh;
    }
  }

</style>


<!-- logic -->
<script>
  export default { }
</script>
