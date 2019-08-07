---
layout: default
---

<template>
  <main class="debug posting">

    <header>
      <figure>
        <div class="img-cover">
          <img :src='page.assets.first_img'>
        </div>
        <figcaption>
          <h1>{{ page.title }}</h1>
          <h2>{{ page.architect }}</h2>
        </figcaption>
      </figure>
    </header>

    <article>
      <p>{{ page.first_paragraph }}</p>

      <section>
        <figure><img :src='page.assets.second_img'></figure>
        <figure><img :src='page.assets.third_img'></figure>
      </section>

      <p>{{ page.large_paragraph }}</p>
      <p>{{ page.last_paragraph }}</p>
    </article>

    <slot/>
    <!-- <h1>{{ page.title }}</h1> -->

    <!-- previous post (for detail views) -->
    <ul v-if="page.prevPost">
      <li>
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
    </ul>

  </main>
</template>


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
