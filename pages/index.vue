<!-- layout -->
<template>
  <div class="index-wrapper">

    <header ref='header' class="">Header</header>

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

    <svg class="next" width="56" height="56">
      <g fill="#181819">
        <path class="halo" d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28zm0-2C13.64 54 2 42.36 2 28S13.64 2 28 2s26 11.64 26 26-11.64 26-26 26z"/>
        <path class="arrow" d="M30.343 20.929l6.364 6.364c.026.026.05.053.073.081l-.073-.081a1.01 1.01 0 0 1 .147.186l.006.01a.99.99 0 0 1 .002.004l.013.023c.011.02.022.04.031.06l.006.014.007.015.01.024A.988.988 0 0 1 37 28v.043l-.002.027-.002.015-.007.064a1.085 1.085 0 0 1-.06.222l-.01.024a.994.994 0 0 1-.007.015l-.006.013a1.018 1.018 0 0 1-.102.172l-.009.011-.008.011-.007.008-.073.082-6.364 6.364a1 1 0 0 1-1.414-1.414l4.656-4.658L19 29a1 1 0 0 1 0-2l14.584-.001-4.655-4.656a1 1 0 0 1 1.414-1.414z"/>
      </g>
    </svg>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .next {
    position: absolute;
    right: 4rem; bottom: 3.2rem;
    transition: var(--ease);
    cursor: pointer;
  }

  .halo {
    opacity: .24;
    transition: var(--ease);
  }

  .arrow {
    transform: translateX(0);
    transform-origin: center;
    transition: var(--ease);
  }

  // next styles for touch / non-touch devices
  @media (pointer: fine) {
    .next:hover { transform: scale(1.1); }
    .next:hover .halo { opacity: 1; }
    .next:hover .arrow { transform: scale(.9); }
  }

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
    box-shadow: 20px 0 16px 0 #F0F0F0;
    background: var(--stone);
    background: pink;
    transition: all 500ms ease;
  }

  .header-leave {
    width: 100vw;
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
  import Post from '../components/Post'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    components: { Post },

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
          1400: 2,
        },
      })
    }
  }
</script>
