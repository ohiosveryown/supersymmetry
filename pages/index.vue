<!-- layout -->
<template>
  <main>

    <header>
      <article>
        <h3>2019-2020</h3>
        <h1>Super—</h1>
        <h1>Symmetry</h1>
        <saber-link to='/colophon.html'>
          <button>
            <h2>Colophon</h2>
          </button>
        </saber-link>
      </article>
    </header>

    <ul class="siema" v-if="page.posts">
      <li
       v-for="post in page.posts" :key="post.permalink"
       @mouseover = "hover = true"
       @mouseleave = "hover = false"
      >
        <h3 class="f-px fs-md uc">{{ post.date }}</h3>
        <h1 class="f-px fs-lg uc">{{ post.title }}</h1>
        <h2 class="f-la fs-sm uc">{{ post.architect }}</h2>

        <!-- button -->
        <saber-link :to="post.permalink">
          <button v-if="hover" class="button-primary--white">
            <span class="f-px uc">View Entry</span>
          </button>
        </saber-link>

        <!-- img -->
        <figure>
          <div class="cover">
            <img :src='post.assets.first_img'>
          </div>
        </figure>
      </li>
    </ul>

    <footer>
      <button class="prev">Prev</button>
      <button class="next">Next</button>
    </footer>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  main {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  header {
    width: calc(100vw * .3333);
  }

  ul {
    width: calc(100vw * .6666);
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; height: 64vh;
    overflow: hidden;
    color: var(--cloud);

    @include breakpoint(md) {
      height: 100vh;
    }
  }

  figure {
    width: 100%; height: 100%;
  }

  .cover {
    position: absolute;
    top: 0; left: 0;
    z-index: var(--z0);
    background-color: red;
    width: 100%; height: 100%;
  }


  img {
    width: 100%; height: 100%;
    z-index: var(--z0);
    mix-blend-mode: darken;
    object-fit: cover;
  }

  footer {
    position: absolute;
    bottom: 2rem; right: 2rem;
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
    data() {
      return {
        hover: false
      }
    },
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

      document.querySelector('.prev').addEventListener('click', () => mySiema.prev())
      document.querySelector('.next').addEventListener('click', () => mySiema.next())

    }
  }
</script>
