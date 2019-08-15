<!-- layout -->
<template>
  <main>

    <h1>Home</h1>
    <p>this is the home page...</p>

    <div v-if="page.posts">
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <saber-link :to="post.permalink">{{ post.title }}</saber-link>
          <h4>{{ post.date }}</h4>

          <figure>
            <img :src='post.assets.cover'>
          </figure>
        </li>
      </ul>
    </div>

  </main>
</template>


<!-- style -->
<style styled='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  /* @import '../style/util.scss';
  @import '../style/type.scss'; */

  img { max-width: 300px; }
  h1 { transform: translateX(20px); }
</style>


<!-- logic -->
<script>
  export const attributes = {
    layout: 'default',
    injectAllPosts: true
  }
  export default {
    props: [ 'page' ]
  }
</script>