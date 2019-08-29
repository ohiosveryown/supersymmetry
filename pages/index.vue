<!-- layout -->
<template>
  <main class="debug">

    <ul class="siema" v-if="page.posts">
      <li class="debug" v-for="post in page.posts" :key="post.permalink">
        <saber-link :to="post.permalink">{{ post.title }}</saber-link>
        <h4>{{ post.date }}</h4>

        <figure>
          <img :src='post.assets.first_img'>
        </figure>
      </li>
    </ul>

    <button class="prev">Prev</button>
    <button class="next">Next</button>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  ul {
    width: 100vw;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 64vh;
    transition: all 600ms ease;
    transform-origin: center;
    will-change: transform;
    animation-fill-mode: forwards;
    @include breakpoint(md) { max-height: 76rem; height: 76vh; }
  }

</style>


<!-- logic -->
<script>
  import Siema from 'siema'
  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    mounted() {

      const mySiema = new Siema({
        // perPage: 1,
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

      document.querySelector('.prev').addEventListener('click', () => mySiema.prev())
      document.querySelector('.next').addEventListener('click', () => mySiema.next())

    }
  }
</script>
