<!-- layout -->
<template>
  <main class="width">

    <!-- nav -->
    <Navigation/>

    <!-- hero / main info -->
    <header>
      <figure>
        <div class="cover">
          <img class="first-img" :src='page.assets.first_img'>
        </div>
        <figcaption class="stagger-three mt-3">
          <h1 class=" f-px">{{ page.title }}</h1>
          <h2 class="f-la fs-sm uc">{{ page.architect }}</h2>
        </figcaption>
      </figure>
    </header>

    <!-- main content -->
    <article class="stagger-three">
      <!-- intro p -->
      <p class="first-paragraph f-la fs-p taj">{{ page.first_paragraph }}</p>

      <!-- img group -->
      <section>
        <figure><img class="second-img" :src='page.assets.second_img'></figure>
        <figure><img class="third-img" :src='page.assets.third_img'></figure>
      </section>

      <!-- lg p -->
      <p class="second-paragraph f-la fs-p-lg taj">{{ page.large_paragraph }}</p>
      <!-- sm /final p -->
      <p class="third-paragraph f-la fs-p taj">{{ page.last_paragraph }}</p>
      <!-- credits / byline -->
      <a class="byline f-px fs-sm" :href="page.link">—{{ page.byline }}</a>
    </article>

    <!-- previous post -->
    <footer class="stagger-three" v-if='page.prevPost'>
      <router-link :to="page.prevPost.permalink">
        <NextPost
          :date = 'page.prevPost.date'
          :title = 'page.prevPost.title'
          :architect = 'page.prevPost.architect'
          :img = 'page.prevPost.img'
        />
      </router-link>
    </footer>

  </main>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';

  // main {
  //   position: absolute;
  //   top: 0; left: 0; right: 0;
  //   margin: 0 auto;
  // }

  .first-paragraph {
    margin-bottom: 3.2rem;
    @include breakpoint(md) { width: grid-width(6); }
  }

  .second-paragraph {
    margin-bottom: 1.6rem;
    @include breakpoint(md) { margin-bottom: 3.2rem; }
  }

  .third-paragraph {
    text-indent: 3ch;
    margin-bottom: 1.6rem;

    @include breakpoint(md) {
      margin: 0 0 3.2rem grid-width(6);
      width: grid-width(6);
    }
  }

  .byline {
    @include breakpoint(md) {
      margin: 0 0 3.2rem grid-width(6);
      width: grid-width(6);
    }
  }

  .first-img {
    object-fit: cover;
    width: 100%; max-height: 64vh;
    opacity: 0;
    animation:
      FadeScale calc( var(--animbase) * 3.5 ) var(--inout) calc(var(--animbase) + 400ms) forwards;
  }

  .second-img {
    margin-bottom: 1.6rem;
    @include breakpoint(md) {
      margin: 0 0 2.4rem grid-width(6);
      width: grid-width(6);
    }
  }

  .third-img {
    margin-bottom: 3.2rem;
    @include breakpoint(md) {
      margin: 0 0 4.8rem grid-width(6);
      width: grid-width(6);
    }
  }

  // const page styles
  main { margin-bottom: 8rem; }
  figcaption { margin-bottom: 2.4rem; }

  // cover styles
  .cover {
    position: relative;
    overflow: hidden;
   }

  .cover:before {
    content: '';
    display: block;
    position: absolute;
    z-index: var(--z1);
    top: 0; left: 0;
    width: 100%; height: 100%;
    transform-origin: left;
    background: var(--gravity);
    transform: scaleX(0);
    will-change: transform;
    animation:
      CoverMove calc( var(--animbase) * 3.5 ) var(--inout) calc(var(--animbase) + 0ms) forwards;
  }

  @keyframes CoverMove {
    0% { transform: scaleX(0); }
    50% { transform: scaleX(1); }
    100% { transform: translateX(104%); }
  }

</style>


<!-- logic -->
<script>
  import Navigation from '../components/Navigation'
  import NextPost from '../components/NextPost'
  export const attributes = {
    // layout: 'default',
    injectAllPosts: true
  }

  export default {
    // transition: {
    //   name: 'post',
    //   mode: 'in-out'
    // },
    components: { Navigation, NextPost },
    props: [ 'page' ],
    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    }
  }
</script>
