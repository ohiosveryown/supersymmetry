<!-- layout -->
<template>
  <main class="debug">

    <DeleteNav/>
    <header ref="myId" class="uc">Super—<br>Symmetry</header>
    <div ref="cover" class="cover"/>


  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  main {
    position: relative;
    height: 100vh;
  }

  header {
    position: absolute;
    top: 10%;
    z-index: var(--zmax);
    transition: all 400ms ease;
  }

  .open {
    top: 50%;
    transition: all 400ms ease;
  }

  .cover {
    position: absolute;
    z-index: var(--z0);
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: lightgray;
    transition: all 400ms ease;
  }

  .cover-close {
    width: 33vw;
  }

</style>


<!-- logic -->
<script>
  import DeleteNav from '../components/DeleteNav'

  export default {
    components: { DeleteNav },
    beforeDestroy() {
      const target = this.$refs.myId
      target.classList.add('open')

      const cover = this.$refs.cover
      cover.classList.add('cover-close')
    },
  }
</script>
