<!-- layout -->
<template>
  <div class="index-wrapper">

    <!-- <HeaderIndex/> -->
    <header class="stagger-swift">
      <section>
        <h3 class="header-date date f-prim fs-sm uc">2019—2020</h3>
        <h1 class="header-first-line f-prim fs-lg uc">Super—</h1>
        <h1 class="header-second-line title f-prim fs-lg uc">Symmetry</h1>
        <saber-link to='/colophon.html'><h2 class="header-link link f-sec fs-md uc">Colophon</h2></saber-link>
      </section>
    </header>

    <ul class="stagger-swift siema" v-if="page.posts">
      <li v-for="post in page.posts" :key="post.permalink">
        <Post
          :date = 'post.date'
          :first_line = 'post.first_line'
          :second_line = 'post.second_line'
          :architect = 'post.architect'
          :img = 'post.assets.first_img'
          :earl = 'post.permalink'
        />
      </li>
    </ul>

    <ButtonNext class="button--next"/>

    <div class="shadow"/>
    <div class="changeit"/>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .changeit {
    position: fixed;
    z-index: var(--z3);
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: var(--stone);
    background: #fff;
    transform: scaleX(0);
    transform-origin: left;
  }

  .shadow {
    position: fixed;
    z-index: var(--z2);
    top: 0; left: 0;
    width: 32vw; height: 100vh;
    background: var(--stone);
    box-shadow: 20px 0 16px 0 var(--stone);
  }


  .index-wrapper {
    overflow: hidden;
    position: relative;
    height: calc( 100vh - 12rem );

    @include breakpoint(md) { height: calc( 100vh - 7rem ); }
    @include breakpoint(lg) { height: 100vh; }
  }

  header {
    position: relative;
    z-index: var(--z4);
    margin-left: 4vw;
  }

  ul {
    position: relative;
    z-index: var(--z1);
    width: 100vw;
    transform: translateX(calc(100vw * .08));

    @include breakpoint(md)  { transform: translateX(calc(100vw * .08)); }
    @include breakpoint(mdl) { transform: translateX(calc(100vw * .32)) translateY(22vh); }
  }

  li {
    margin: 0 2.4rem 0 0;
    height: 42vh;

    @include breakpoint(md) {
      margin: 0 4rem 0 0;
      height: 36vh;
     }

    @include breakpoint(mdl) {
      margin: 0 0 0 4rem;
      height: 52vh;
    }
  }

  .button--next {
    position: fixed;
    right: 2.4rem; bottom: 2.4rem;
    transition: var(--ease);
    cursor: pointer;
    @include breakpoint(md) { right: 4rem; bottom: 3.2rem; }
  }

  .header-date, .header-first-line, .header-second-line, .header-link {
    position: absolute;
    top: 0;
  }

</style>


<!-- logic -->
<script>
  import { leave_logic, static_logic } from '../logic/for-index.js'

  import Siema from 'siema'
  import HeaderIndex from '../components/HeaderIndex'
  import Post from '../components/Post'
  import ButtonNext from '../components/ButtonNext'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    components: { Post, ButtonNext, HeaderIndex },

    beforeDestroy() {
      leave_logic()
    },

    mounted() {

      static_logic()
      // next arrow
      const next = document.querySelector('.next')
      next.addEventListener('click', () => mySiema.next())
      // siema  slide option
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
          2000: 3,
        },
      })
    }
  }
</script>