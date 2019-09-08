<!-- layout -->
<template>
  <div class="index-wrapper">

    <HeaderIndex/>

    <ul class="debug siema" v-if="page.posts">
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
    height: 100vh;
  }

  ul {
    width: 100vw;
    transform: translateX(4rem);

    @include breakpoint(mdl) {
      transform: translateX(calc(100vw * .28));
    }
  }

  li {
    height: 46vh;
    width: 94%;

    @include breakpoint(mdl) {
      margin-left: 4rem;
    }
  }

  .button--next {
    position: absolute;
    right: 4rem; bottom: 3.2rem;
    transition: var(--ease);
    cursor: pointer;
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
          800: 2,
          1000: 2,
          2000: 3,
        },
      })
    }
  }
</script>
