---
layout: default
---

<template>
  <main>

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

    <article class="stagger mb-4">
      <p class="p f-la">{{ page.first_paragraph }}</p>

      <section class="stagger">
        <figure class="mb-2"><img :src='page.assets.second_img'></figure>
        <figure class="mb-4"><img :src='page.assets.third_img'></figure>
      </section>

      <p class="stagger copy-lg">{{ page.large_paragraph }}</p>
      <p class="stagger mb-8">{{ page.last_paragraph }}</p>
      <slot/>
    </article>

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
