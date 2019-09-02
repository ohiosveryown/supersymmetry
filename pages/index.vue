<!-- layout -->
<template>
  <main>

    <!-- header sm -->
    <header class="header--sm">

      <section class="width">
        <h1 class="f-px fs-lg uc">Super—<br>Symmetry</h1>
        <span class="f-px fs-md uc">2019–2020</span>
      </section>
      <saber-link to='/colophon.html'><h2 class="width f-la fs-sm uc">Colophon</h2></saber-link>

    </header>

    <!-- header mdl -->
    <header class="header--mdl">
      <article>

        <h3 class="date f-px fs-md uc">2019-2020</h3>
        <h1 class="title f-px fs-lg uc">Super—<br>Symmetry</h1>
        <saber-link to='/colophon.html'><h2 class="architect f-la fs-sm uc">Colophon</h2></saber-link>

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
          <h3 class="date f-px fs-md uc">{{ post.date }}</h3>
          <h1 class="f-px fs-lg uc">{{ post.first_line }}</h1>
          <h1 class="title f-px fs-lg uc">{{ post.second_line }}</h1>
          <h2 class="architect f-la fs-sm uc">{{ post.architect }}</h2>

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
    <footer class="">
      <button class="prev">
        <svg width="56" height="56">
          <path d="M19.29 27.28a.996.996 0 0 0-.29.73v.004c0 .057.023.107.033.162.012.064.013.13.038.191.061.16.162.293.29.401l5.897 5.908a.992.992 0 0 0 .707.294 1.004 1.004 0 0 0 .707-1.71l-4.236-4.245H37a1.001 1.001 0 0 0 0-2.003H22.384l4.323-4.332a1.002 1.002 0 0 0 0-1.416.998.998 0 0 0-1.414 0l-6.004 6.015zM28 53.666C13.847 53.667 2.333 42.153 2.333 28 2.333 13.847 13.847 2.333 28 2.333c14.153 0 25.667 11.514 25.667 25.667 0 14.153-11.514 25.667-25.667 25.667zM28 0C12.536 0 0 12.536 0 28s12.536 28 28 28 28-12.536 28-28S43.464 0 28 0z" fill="#FFF"/>
        </svg>
      </button>


      <button class="next">
        <svg width="56" height="56">
          <path d="M36.71 27.28a.996.996 0 0 1 .29.73v.004c0 .057-.023.107-.033.162-.012.064-.013.13-.038.191a.984.984 0 0 1-.29.401l-5.897 5.908a.992.992 0 0 1-.707.294 1.004 1.004 0 0 1-.707-1.71l4.236-4.245H19a1.001 1.001 0 0 1 0-2.003h14.616l-4.323-4.332a1.002 1.002 0 0 1 0-1.416.998.998 0 0 1 1.414 0l6.004 6.015zM28 53.666c14.153 0 25.667-11.514 25.667-25.667C53.667 13.847 42.153 2.333 28 2.333 13.847 2.333 2.333 13.847 2.333 28c0 14.153 11.514 25.667 25.667 25.667zM28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0z" fill="#FFF" />
        </svg>
      </button>
    </footer>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0; bottom: 3.2rem;
    width: 100vw;
    @include breakpoint(mdl) {
      bottom: 2rem;
      width: calc(100vw * .6666);
    }
  }

  .prev, .next {
    opacity: .64;
    background: transparent;
    transform: scale(.75);
    transition: var(--ease);
    &:hover { @include breakpoint(mdl) { opacity: 1; }}
  }

  .prev {
    padding-left: 2.4rem;
    @include breakpoint(mdl) { padding-left: 2.4rem; }
  }

  .next {
    padding-right: 2.4rem;
    @include breakpoint(mdl) { padding-right: 2.4rem; }
  }


  .date {
    margin-bottom: 5.6rem;
  }

  .title {
    margin-bottom: 1.2rem;
  }

  .architect {
    margin-bottom: 4rem;
  }

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
    @include breakpoint(mdl) { display: none; }

    section {
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 0 2rem;
    }
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
    margin: 0 auto;
    max-width: var(--max-width);
    width: 88vw; height: 100vh;
    transform: translateY(-16rem);

    @include breakpoint(mdl) { transform: translateY(-3.2rem); padding-left: 2.4rem; }
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

  // footer {
  //   position: absolute;
  //   bottom: 2rem; right: 2rem;
  // }

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
