<!-- layout -->
<template>
  <main>

    <h1>Home</h1>
    <p>this is the home page...</p>

    <ul v-if="page.posts">
      <li v-for="post in page.posts" :key="post.permalink">
        <saber-link :to="post.permalink">{{ post.title }}</saber-link>
        <h4>{{ post.date }}</h4>

        <img :src='post.assets.first_img'>
      </li>
    </ul>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>

</style>


<!-- logic -->
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
