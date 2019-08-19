<!-- layout -->
<template>
  <main class="width">

    <!-- nav -->
    <NavigationPost class="stagger-two"/>

    <!-- hero / main info -->
    <header>
      <figure>
        <div class="cover">
          <img class="stagger first-img" :src='page.assets.first_img'>
        </div>
        <figcaption class="stagger-three mt-3">
          <h1 class=" f-px">{{ page.title }}</h1>
          <h2 class="f-la fs-sm uc">{{ page.architect }}</h2>
        </figcaption>
      </figure>
    </header>

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

    <footer class="debug" v-if='page.prevPost'>
      <router-link :to="page.prevPost.permalink">

        <NextPost
          :date = 'page.prevPost.date'
          :title = 'page.prevPost.title'
          :architect = 'page.prevPost.architect'
          :imglink = 'page.prevPost.assets'
        />

      </router-link>
    </footer>

    <!-- <img :src='page.prevPost.assets'> -->

    <!-- previous post -->
    <footer v-if="page.prevPost">
      <router-link :to="page.prevPost.permalink">

        <article>
          <h3 class="f-px fs-md uc">{{ page.prevPost.date }}</h3>
          <h1 class="f-px fs-lg uc">{{ page.prevPost.title }}</h1>
          <H2 class="f-la fs-sm uc">{{ page.prevPost.architect }}</H2>
        </article>

        <button class="f-px uc">View Entry</button>

        <!-- prev img not working -->
        <!-- <figure><img :src='page.prevPost.assets.second_img'></figure> -->
      </router-link>
    </footer>

  </main>
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
    // opacity: 0;
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

  // footer styles
  footer a {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8rem;
    padding: 0 1.6rem;
    height: 20rem;
    overflow: hidden;
    background: var(--primary);
    background:
      linear-gradient(-45deg, rgb(197, 6, 29) 50%, rgb(105, 5, 5) 100%),
      url('../pages/_posts/img/next.jpg')no-repeat center center;
    background-blend-mode: hard-light;
    background-size: cover;
    color: var(--cloud);
    transition: all 500ms ease;

    @include breakpoint(md) {
      align-items: center;
      justify-content: space-between;
      padding: 0 6.6rem;
      height: 24rem;
    }
  }

  footer:hover {
    @include breakpoint(mdl) {
      button {
        background: var(--cloud);
        color: var(--gravity);
      }
    }
  }

  footer h1 {
    margin: 3.2rem 0 .4rem;
    @include breakpoint(md) { margin: 4rem 0 .4rem; }
  }

  footer button {
    display: none;
    padding: 1.4rem 3.2rem 1.2rem;
    background: transparent;
    color: var(--cloud);
    font-size: 1.4rem;
    transition: var(--ease);
    @include breakpoint(md) { display: inherit; }
  }

  footer img {
    position: absolute;
    z-index: var(--z0);
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }

</style>


<!-- logic -->
<script>
  import NavigationPost from '../components/NavigationPost'
  import NextPost from '../components/NextPost'
  export const attributes = {
    // layout: 'default',
    injectAllPosts: true
  }

  export default {
    components: { NavigationPost, NextPost },
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
