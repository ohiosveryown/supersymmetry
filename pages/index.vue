<!-- layout -->
<template>
  <div class="index-wrapper">

    <HeaderIndex/>

    <main class="post-wrapper" v-if="page.posts">
      <ul>
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
    </main>


    <ButtonNext class="stagger-swift button--next"/>
    <div class="shadow"/>
    <div class="page-cover"/>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .index-wrapper {
    position: relative;
    height: calc( 100vh - 14rem );
    @include breakpoint(md) { height: calc( 100vh - 7.6rem ); }
    @include breakpoint(lg) { height: 100vh; }
  }

  .post-wrapper {
    display: flex;
    overflow: hidden;
    width: 100vw; height: 42vh;
    transform: translateY(8vh);

    @include breakpoint(md) {
      max-height: 52rem;
      height: 50vh;
      min-height: 34rem;
      transform: translateX(33.333vw) translateY(24vh);
    }

    @include breakpoint(mdl) {
      width: 66.666vw;
      transform: translateX(33.333vw) translateY(22vh);
    }

    &.is-draggable { cursor: move; cursor: grab; }
    &.is-dragging { cursor: grabbing; }
  }

  ul {
    display: flex;
    width: 100%;
  }

  li {
    position: relative;
    flex: 0 0 auto;
    padding-left: 2rem;
    width: 100%; height: 100%;

    @include breakpoint(md) {
      padding-left: 4rem;
      width: 72%; height: 100%;
    }
  }

  .button--next {
    position: fixed;
    right: 2.4rem; bottom: 2.4rem;
    transition: var(--ease);
    cursor: pointer;
    @include breakpoint(md) { right: 4rem; bottom: 3.2rem; }
  }

  .shadow {
    display: none;
    position: fixed;
    z-index: var(--z2);
    top: 0; left: 0;
    width: 33.333vw; height: 100vh;
    background: var(--stone);
    box-shadow: 20px 0 16px 0 var(--stone);
    @include breakpoint(md) { display: inherit; }
  }

  .page-cover {
    position: fixed;
    z-index: var(--z3);
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: var(--stone);
    background: #fff;
    transform: scaleX(0);
    transform-origin: left;
  }

</style>


<!-- logic -->
<script>
  import { leave_logic, to_colophon, static_logic } from '../logic/for-index.js'
  import EmblaCarousel from 'embla-carousel'
  import HeaderIndex from '../components/HeaderIndex'
  import Post from '../components/Post'
  import ButtonNext from '../components/ButtonNext'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    components: { HeaderIndex, Post, ButtonNext, },

    mounted() {
      const mq = window.matchMedia( '(min-width: 700px)' )
      if (mq.matches) { static_logic() }
      // carousel
      const emblaNode = document.querySelector('.post-wrapper')
      const embla = EmblaCarousel(emblaNode, {
        align: 'start',
        loop: true,
        speed: 10,
        startIndex: 0,
        selectedClass: 'is-selected',
        draggableClass: 'is-draggable',
        draggingClass: 'is-dragging',
      })
      // next button
      const buttonNext = document.querySelector('.button--next')
      buttonNext.addEventListener('click', embla.scrollNext, false)
    },

    beforeDestroy() {
      if ( this.$route.path === '/colophon.html' ) {
        leave_logic()
        to_colophon()
      } else {
        leave_logic()
      }
    },
  }
</script>