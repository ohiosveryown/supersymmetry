<!-- layout -->
<template>
  <div class="post-wrapper">


    <!-- nav -->
    <HeaderPost/>

    <!-- hero / main info -->
    <main class="width">
      <section>
        <figure>
          <div class="cover">
            <img class="first-img" :src='page.assets.first_img'>
          </div>
          <figcaption class="stagger-three mt-3">
            <h1 class="mb-1 f-prim fs-xl">{{ page.title }}</h1>
            <h2 class="f-sec fs-sm uc">{{ page.architect }}</h2>
            <h2 class="f-sec fs-sm uc">Entry: {{ page.date }}</h2>
          </figcaption>
        </figure>
      </section>

      <!-- main content -->
      <article class="stagger-three">
        <!-- intro p -->
        <p class="first-paragraph f-sec fs-p taj">{{ page.first_paragraph }}</p>

        <!-- img group -->
        <section>
          <figure><img class="second-img" :src='page.assets.second_img'></figure>
          <figure><img class="third-img" :src='page.assets.third_img'></figure>
        </section>

        <!-- lg p -->
        <p class="second-paragraph f-sec fs-p-lg taj">{{ page.large_paragraph }}</p>
        <!-- sm /final p -->
        <p class="third-paragraph f-sec fs-p taj">{{ page.last_paragraph }}</p>
        <!-- credits / byline -->
        <a class="byline f-prim fs-sm" :href="page.link">—{{ page.byline }}</a>
      </article>

      <!-- previous post -->
      <footer class="stagger-three" v-if='page.prevPost'>
        <router-link :to="page.prevPost.permalink">
          <NextPost
            :date = 'page.prevPost.date'
            :first_line = 'page.prevPost.first_line'
            :second_line = 'page.prevPost.second_line'
            :architect = 'page.prevPost.architect'
            :img = 'page.prevPost.img'
          />
        </router-link>
      </footer>


    </main>


    <div class="page-cover colorshift"/>


  </div>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';

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
      FadeScale calc( var(--animbase) * 3.5 ) var(--inout) 400ms forwards;
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
  main { margin: 4.6rem 4vw 8rem; }
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
    width: 100vw; height: 100%;
    transform-origin: left;
    background: var(--gravity);
    transform: scaleX(0);
    will-change: transform;
    animation:
      CoverMove calc( var(--animbase) * 3.5 ) var(--inout) 10ms forwards;
  }

  @keyframes CoverMove {
    0% { transform: scaleX(0); }
    50% { transform: scaleX(1); }
    100% { transform: translateX(104%); }
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
  import { enter, to_index, to_detail, to_colophon, } from '../logic/for-post.js'
  import HeaderPost from '../components/HeaderPost'
  import NextPost from '../components/NextPost'
  export const attributes = {
    // layout: 'default',
    injectAllPosts: true
  }

  export default {
    components: { HeaderPost, NextPost },
    props: [ 'page' ],
    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },

    mounted() {
      enter()
    },

    beforeDestroy() {

      if ( this.$route.path === '/' ) {
        to_index()

      } else if (this.$route.path === '/colophon.html') {
        to_colophon()

      } else {
        to_detail()
      }

    },
  }
</script>