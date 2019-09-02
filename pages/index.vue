<!-- layout -->
<template>
  <main>

    <!-- header sm -->
    <header class="header--sm">

      <section class="width">
        <h1 class="f-px fs-lg uc">Super—<br>Symmetry</h1>
        <h3 class="f-px fs-md uc">2019-2020</h3>
      </section>
      <saber-link to='/colophon.html'><h2 class="width f-la fs-sm uc">Colophon</h2></saber-link>

    </header>

    <!-- header mdl -->
    <header class="debug header--mdl">
      <article>

        <h3 class="f-px fs-md uc">2019-2020</h3>
        <h1 class="f-px fs-lg uc">Super—<br>Symmetry</h1>
        <saber-link to='/colophon.html'><h2 class="f-la fs-sm uc">Colophon</h2></saber-link>

        <!-- hidden button / get offa' my lawn -->
        <button class="op-0 button-primary--white">
          <span class="f-px uc">View Entry</span>
        </button>

      </article>
    </header>

   <!-- list index -->
    <ul class="siema" v-if="page.posts">
      <li v-for="post in page.posts" :key="post.permalink">

        <!-- main content -->
        <article>
          <h3 class="f-px fs-md uc">{{ post.date }}</h3>
          <h1 class="f-px fs-lg uc">{{ post.first_line }}</h1>
          <h1 class="f-px fs-lg uc">{{ post.second_line }}</h1>
          <h2 class="f-la fs-sm uc">{{ post.architect }}</h2>

          <!-- button -->
          <saber-link :to="post.permalink">
            <button class="button-primary--white">
              <span class="f-px uc">View Entry</span>
            </button>
          </saber-link>
        </article>

        <!-- img -->
        <figure>
          <div class="cover">
            <img :src='post.assets.first_img'>
          </div>
        </figure>


      </li>
    </ul>

    <!-- prev / next buttons -->
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
    flex-direction: column;
    height: 100vh;
    overflow: hidden;

    @include breakpoint(mdl) { flex-direction: row; }
  }

  .header--sm {
    padding-bottom: 1.2rem;
    width: 100vw;

    section {
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 0 2rem;
    }
    @include breakpoint(mdl) { display: none; }
  }

  .header--mdl {
    display: none;

    @include breakpoint(mdl) {
      display: inherit;
      width: calc(100vw * .3333);
    }
  }

  ul {
    width: 100vw;
    @include breakpoint(mdl) { width: calc(100vw * .6666); }
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; height: 100vh;
    overflow: hidden;
    color: var(--cloud);
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    @include breakpoint(mdl) { transform: translateY(-2rem); padding-left: 2.4rem; }
    @include breakpoint(lg)  { padding: 0 4rem; }
  }

  figure {
    position: absolute;
    top: 0; left: 0;
    z-index: var(--zmin);
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
