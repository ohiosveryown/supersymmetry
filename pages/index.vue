<!-- layout -->
<template>
  <main class="debug">

    <ul class="siema" v-if="page.posts">
      <li v-for="post in page.posts" :key="post.permalink">
        <saber-link :to="post.permalink">{{ post.title }}</saber-link>
        <h4>{{ post.date }}</h4>

        <figure>
          <img :src='post.assets.first_img'>
        </figure>
      </li>
    </ul>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  ul {
    display: flex;
    @include breakpoint(mdl) {
      flex-direction: row;
    }
  }

  li {
    @include breakpoint(mdl) {
      width: 33vw;
    }
  }

  // main { min-height: 300vh; }
  img { max-width: 20rem; }
</style>


<!-- logic -->
<script>
  import Siema from 'siema'
  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    mounted() {
      new Siema({

      })
    }
  }
</script>
