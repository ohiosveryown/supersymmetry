<template>
  <main>

    <h1>Home</h1>
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

<style lang='scss' scoped>
  h1 { color: purple; }
</style>

<script>
  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ]
  }
</script>
