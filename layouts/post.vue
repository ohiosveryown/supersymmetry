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
      <a :href="page.link">—{{ page.byline }}</a>
    </article>

    <!-- previous post -->
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

  .first-img {
    margin-bottom: 2.4rem;
    object-fit: cover;
    width: 100%; max-height: 64vh;
  }

  .second-img {
    margin-bottom: 1.6rem;
    @include breakpoint(mdl) { margin-bottom: 2.4rem; }
  }

  .third-img {
    margin-bottom: 3.2rem;
    @include breakpoint(mdl) { margin-bottom: 4rem; }
  }

  figcaption { margin-bottom: 2.4rem; }

  section {
    @include breakpoint(mdl) {
      margin-left: grid-width(6);
      width: grid-width(6);
    }
  }

</style>


<!-- logic -->
<script>
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