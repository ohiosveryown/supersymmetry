<template>
  <div>
    <nav>
      <saber-link to="/">Home</saber-link>
      <saber-link to="/about.html">About</saber-link>
    </nav>
    <!-- <slot name='default'/> -->
    <img :src='page.assets.cover'>
    <slot/>
    <ul>
      <li v-if="page.prevPost">
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
      <!-- <li v-if="page.nextPost">
        <router-link :to="page.nextPost.permalink">
          Next: {{ page.nextPost.title }}
        </router-link>
      </li> -->
    </ul>
  </div>
</template>


<style>
  img {
    max-width: 300px;
  }
</style>


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
