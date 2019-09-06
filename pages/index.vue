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
    top: 50%;
    z-index: var(--zmax);
    transition: all 400ms ease;
  }

  .cover {
    position: absolute;
    z-index: var(--z0);
    top: 0; left: 0;
    width: 33vw; height: 100vh;
    background: lightgray;
    transition: all 400ms ease;
  }

  .cover-open {
    width: 100vw;
  }

  .open {
    top: 10%;
    transition: all 400ms ease;
  }

</style>


<!-- logic -->
<script>
  import Siema from 'siema'
  import Posts from '../components/Posts'

  import DeleteNav from '../components/DeleteNav'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    // transition: {
    //   name: 'home',
    //   mode: 'in-out'
    // },
    components: { Posts, DeleteNav },

    data: () => ({
      isOpen: false,
    }),

    beforeDestroy() {
      const target = this.$refs.myId
      target.classList.add('open')

      const cover = this.$refs.cover
      cover.classList.add('cover-open')
    },

    mounted() {

      // const target = this.$refs.myId
      // target.style.color = 'yellow'

    }
  }
</script>
