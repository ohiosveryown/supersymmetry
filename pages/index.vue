<template>
  <main>

    <h1 class="debug">Home</h1>
    <p>this is the home page...</p>

    <div v-if="page.posts">
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <saber-link :to="post.permalink">{{ post.title }}</saber-link>
          <h4>{{ post.date }}</h4>

          <img :src='post.assets.cover'>
        </li>
      </ul>
    </div>

  </main>
</template>

<style lang='scss'>
  h1 { color: purple; }

  .page-enter-active { transition: all 700ms ease; }
  .page-leave-active { transition: all 700ms ease; }
  .page-leave-active, .page-enter {
    opacity: 0;
  }
</style>

<script>
  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    transition: {
      name: 'page',
      mode: 'out-in'
    },
  }
</script>
