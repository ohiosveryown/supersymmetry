<!-- layout -->
<template>
  <main>

    <h1 class="f-la mb-1 tac">La Norde</h1>
    <h1 class="f-px mb-9 tac">PX Grotesk</h1>

    <ul v-if="page.posts">
      <li v-for="post in page.posts" :key="post.permalink">
        <saber-link :to="post.permalink">{{ post.title }}</saber-link>
        <h4>{{ post.date }}</h4>

        <figure>
          <img :src='post.assets.cover'>
        </figure>
      </li>
    </ul>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  img { max-width: 20rem; }
</style>


<!-- logic -->
<script>
  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
  }
</script>
