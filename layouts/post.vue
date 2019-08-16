<!-- layout -->
<template>
  <main class="width">

    <div class="delete mb-9">
      <saber-link to="/">Home</saber-link>
    </div>

    <!-- hero / main info -->
    <header>
      <figure>
        <div class="cover">
          <img class="first-img" :src='page.assets.first_img'>
        </div>
        <figcaption>
          <h1 class=" f-px">{{ page.title }}</h1>
          <h2 class="f-la fs-sm uc">{{ page.architect }}</h2>
        </figcaption>
      </figure>
    </header>

    <article>
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
    <router-link :to="page.prevPost.permalink">
      <footer class="debug" v-if="page.prevPost">

          <article>
            <h3 class="f-px fs-md uc">{{ page.prevPost.date }}</h3>
            <h1 class="f-px fs-lg uc">{{ page.prevPost.title }}</h1>
            <H2 class="f-la fs-sm uc">{{ page.prevPost.architect }}</H2>
          </article>

          <button class="f-px uc">View Entry</button>

          <img class="fimg" :src='page.assets.second_img'>

          <!-- prev img not working -->
          <!-- <figure><img :src='page.prevPost.assets.second_img'></figure> -->

      </footer>
    </router-link>

    <!-- <ul v-if="page.prevPost">
      <li>
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
    </ul> -->

  </main>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';

  footer {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 24rem;
    overflow: hidden;
    // background: var(--primary);
    color: var(--cloud);

    @include breakpoint(md) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 6.6rem;
      height: 32rem;
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
    @include breakpoint(md) { margin: 6rem 0 1.2rem; }
  }

  footer button {
    padding: 1.4rem 3.2rem 1.2rem;
    background: transparent;
    color: var(--cloud);
    font-size: 1.4rem;
    transition: var(--ease);
  }

  footer img {
    position: absolute;
    z-index: var(--z0);
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }

  .fimg:before {
    content: '';
    position: absolute;
    z-index: var(--z2);
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: var(--primary);
  }

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
    margin-bottom: 2.4rem;
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
      margin: 0 0 2.4rem grid-width(6);
      width: grid-width(6);
    }
  }

  main { margin-bottom: 8rem; }
  figcaption { margin-bottom: 2.4rem; }

</style>


<!-- logic -->
<script>
  export const attributes = {
    // layout: 'default',
    injectAllPosts: true
  }

  export default {
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
