<!-- layout -->
<template>
  <div class="index-wrapper">

    <HeaderIndex/>

    <ul class="siema" v-if="page.posts">
      <li class="" v-for="post in page.posts" :key="post.permalink">
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
    height: calc( 100vh - 12rem );

    @include breakpoint(md)  { height: calc( 100vh - 7rem ); }
    @include breakpoint(lg)  { height: 100vh; }
  }

  ul {
    width: 100vw;
    transform: translateX(calc(100vw * .08));

    @include breakpoint(md)  { transform: translateX(calc(100vw * .08)); }
    @include breakpoint(mdl) { transform: translateX(calc(100vw * .28)); }
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
      height: 46vh;
    }
  }

  .button--next {
    position: absolute;
    right: 2.4rem; bottom: 2.4rem;
    transition: var(--ease);
    cursor: pointer;

    @include breakpoint(md) { right: 4rem; bottom: 3.2rem; }
  }

  // .header-leave {
  //   width: 100vw;
  // }

</style>


<!-- logic -->
<script>
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
      const header = this.$refs.header
      header.classList.add('header-leave')
    },

    mounted() {
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
