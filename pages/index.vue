<!-- layout -->
<template>
  <div class="index-wrapper">

    <header class="debug">Header</header>

    <ul class="siema" v-if="page.posts">
        <li class="debug" v-for="post in page.posts" :key="post.permalink">

            <Posts
              :date = 'post.date'
              :title = 'post.title'
              :architect = 'post.architect'
              :img = 'post.assets.first_img'
              :earl = 'post.permalink'
            />

        </li>
    </ul>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .index-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    height: 100vh;
  }

  header {
    position: absolute;
    z-index: var(--z1);
    top: 0; left: 0;
    width: calc(100vw * .28); height: 100%;
  }

  ul {
    // width: calc(100vw * .6666);
    width: 100vw;
    transform: translateX(calc(100vw * .28));
  }

  li {
    margin-left: 4rem;
    height: 46vh;
  }

</style>


<!-- logic -->
<script>
  import Siema from 'siema'
  import Posts from '../components/Posts'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    components: { Posts },

    mounted() {
      const mySiema = new Siema({
        loop: true,
        duration: 800,
        threshold: 0,
        multipleDrag: true,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        perPage: {
          0: 1,
          800: 1,
          1000: 2,
          1400: 2,
        },
      })
    }
  }
</script>
