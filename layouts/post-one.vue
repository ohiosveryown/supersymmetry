---
layout: default
---

<!-- layout -->
<template>
  <main class="width">

    <header>
      <figure class="hero">
        <div class="img-cover">
          <img class="hero-img mb-2" :src='page.assets.first_img'>
        </div>
        <figcaption class="stagger uc">
          <h1 class="mb-1 f-lg f-px">{{ page.title }}</h1>
          <h2 class="mb-4 f-sm f-la">{{ page.architect }}</h2>
        </figcaption>
      </figure>
    </header>

    <!-- article -->
    <article class="stagger mb-4">
      <p class="p f-la">{{ page.first_paragraph }}</p>

      <section class="stagger">
        <figure class="mb-2"><img :src='page.assets.second_img'></figure>
        <figure class="mb-4"><img :src='page.assets.third_img'></figure>
      </section>

      <p class="f-la f-lg stagger copy-lg">{{ page.large_paragraph }}</p>
      <p class="p f-la stagger mb-8">{{ page.last_paragraph }}</p>
      <slot/>
    </article>

    <button :click='greet'>Go to Top</button>

    <ul v-if="page.prevPost">
      <li>
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
    </ul>

  </main>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';
  @import '../style/type.scss';

  header, figure { overflow: hidden; }

  .img-cover {
    position: relative;
    overflow: hidden;
   }

  .img-cover:before {
    content: '';
    display: block;
    position: absolute;
    z-index: var(--z1);
    top: 0; left: 0;
    width: 100%; height: 100%;
    transform-origin: left;
    background: var(--gravity);
    opacity: 0;
    will-change: transform;
    animation:
      In var(--animbase) cubic-bezier(.8,0,.16,1) forwards,
      CoverMove calc( var(--animbase) * 2 ) cubic-bezier(.8,0,.16,1) calc(var(--animbase) + 0ms) forwards;
  }

  .hero-img {
    opacity: 0;
    max-height: 76vh;
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
    will-change: opacity;
    animation:
      In 10ms cubic-bezier(.8,0,.16,1) var(--animbase) forwards,
      Scale calc(var(--animbase) * 2) cubic-bezier(.42,0,.6,1) calc(var(--animbase) * 1.1) forwards;
  }

  .stagger {
    opacity: 0;
    will-change: opacity;
    animation: In var(--animbase) cubic-bezier(.8,0,.16,1) calc(var(--animbase) * 2) forwards;
  }

  .copy-lg {
    padding: 0rem 0 3.2rem;
    @include breakpoint(mdl) { padding: 4rem 0 5.6rem; }
  }

  @keyframes In {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes Scale {
    0% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  @keyframes CoverMove {
    0% { transform: translateX(0); }
    100% { transform: translateX(104%); }
  }

</style>



<!-- logic -->
<script>
  // import Scrollbar from 'smooth-scrollbar'
  export default {

    methods: {
      greet: function(e) {
        alert('Hello')
      }
    },

    // mounted() {
    //   // window.onload = function(){
    //   //     window.scrollTo(0,0);
    //   // }
    //   let goTop = () => {
    //     window.scrollTo(0,0)
    //   }

    //   let trigger = document.querySelector('.trigger')

    //   trigger.addEventListener('click', () => {
    //     goTop()
    //   })
    // },

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
