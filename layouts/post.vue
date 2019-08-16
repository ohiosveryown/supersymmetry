<!-- layout -->
<template>
  <main class="width">

    <!-- hero / main info -->
    <header>
      <figure>
        <div class="cover">
          <img :src='page.assets.first_img'>
        </div>
        <figcaption class="mt-3">
          <h1 class=" f-px">{{ page.title }}</h1>
          <h2 class="mb-4 f-la fs-sm uc">{{ page.architect }}</h2>
        </figcaption>
      </figure>
    </header>

    <article>
      <!-- intro p -->
      <p class="f-la fs-p taj">{{ page.first_paragraph }}</p>

      <!-- img group -->
      <section>
        <figure><img :src='page.assets.second_img'></figure>
        <figure><img :src='page.assets.third_img'></figure>
      </section>

      <!-- lg p -->
      <p class="f-la fs-p taj">{{ page.large_paragraph }}</p>
      <!-- sm /final p -->
      <p class="f-la fs-p taj">{{ page.last_paragraph }}</p>
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

  header img {
    object-fit: cover;
    width: 100%; max-height: 64vh;
  }

  article p:first-of-type {
    @include breakpoint(md) { width: grid-width(6); }
  }

  section {
    margin-top: 4rem;
    @include breakpoint(mdl) {
      margin: 11.2rem 0 0 grid-width(6);
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