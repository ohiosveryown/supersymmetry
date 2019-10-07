<!-- layout -->
<template>
  <div class="post-wrapper">


    <!-- nav -->
    <HeaderPost/>

    <!-- hero / main info -->
    <main class="width stagger-swift">
      <section class="intro">
        <h1 class="tar uc f-prim fs-xl">{{ page.first_line }}</h1>
        <h1 class="mb-1 uc tar f-prim fs-xl">{{ page.second_line }}</h1>
        <h2 class="tar f-sec fs-sm uc">{{ page.architect }}</h2>
        <h2 class="tar f-sec fs-sm uc">Entry: {{ page.date }}</h2>
      </section>

      <article>
        <!-- intro p -->
        <p class="first-paragraph f-sec fs-p taj">{{ page.first_paragraph }}</p>
      </article>

      <!-- img group -->
      <section class="img-group">
        <figure class="second-img"><img :src='page.assets.second_img'></figure>
        <figure class="first-img"><img :src='page.assets.first_img'></figure>
      </section>


      <article>
        <!-- lg p -->
        <p class="second-paragraph f-sec fs-p-lg taj">{{ page.large_paragraph }}</p>
      </article>

      <article class="last">
        <p class="third-paragraph f-sec fs-p taj">{{ page.last_paragraph }}</p>
        <!-- credits / byline -->
        <a class="byline f-prim fs-sm" :href="page.link">—{{ page.byline }}</a>
        <figure class="third-img"><img :src='page.assets.third_img'></figure>
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
    margin: 4rem 0;

    @include breakpoint(md) {
      width: grid-width(7);
    }

    @include breakpoint(mdl) {
      width: grid-width(4);
    }
  }

  .second-paragraph {
    @include breakpoint(md) { margin-bottom: 5.6rem; }

    @include breakpoint(mdl) {
      margin-left: grid-width(1.5);
      width: grid-width(10.5);
    }
  }

  .third-paragraph {
    text-indent: 8ch;
    @include breakpoint(md) {
      margin-bottom: 3.2rem;
    }
  }

  .last {
    @include breakpoint(md) {
      margin: 0 auto;
      width: grid-width(8);
    }

    @include breakpoint(mdl) {
      width: grid-width(5);
    }
  }

  .first-img {
    margin-bottom: 1.6rem;

    @include breakpoint(md) {
      margin-bottom: 6.4rem;
      width: grid-width(8);
    }
  }

  .second-img {
    margin-bottom: 4rem;

    @include breakpoint(md) {
      margin-bottom: 0;
      width: grid-width(3);
    }
  }

  .third-img {
    margin-top: 4rem;
    @include breakpoint(md) {
      margin: 6.4rem 0 14rem;
    }
  }

  .img-group {
    display: flex;
    flex-direction: column-reverse;

    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .fs-xl {
    @include breakpoint(mdl) {
      font-size: 8rem;
    }
  }

  // const page styles
  main { margin: 4.6rem 4vw 8rem; @include breakpoint(md) { margin-top: 2rem; } }
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