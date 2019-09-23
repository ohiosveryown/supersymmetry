<!-- layout -->
<template>
  <div class="index-wrapper">


    <ul class="main-carousel" v-if="page.posts">
      <li v-for="post in page.posts" :key="post.permalink">
        <Post
          :date = 'post.date'
          :first_line = 'post.first_line'
          :second_line = 'post.second_line'
          :architect = 'post.architect'
          :img = 'post.assets.first_img'
          :earl = 'post.permalink'
        />
      </li>
    </ul>


  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .main-carousel { display: block; }
  .flickity { display: block; }

  .index-wrapper {
    overflow: hidden;
    position: relative;
    // height: calc( 100vh - 12rem );

    // @include breakpoint(md) { height: calc( 100vh - 7rem ); }
    // @include breakpoint(lg) { height: 100vh; }
  }


  ul {
    width: 100%;
  }

  li {
    margin-right: 12px;
    width: 64%;
    // width: 100%;
  }


</style>


<!-- logic -->
<script>
  import Siema from 'siema'
  import Post from '../components/Post'
  import Flickity from 'flickity'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    components: { Post, },

    mounted() {
      require( ['flickity'], function(Flickity) {
        const elem = document.querySelector('.main-carousel');
        const flkty = new Flickity( elem, {
          // options
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          pageDots: false,
          resize: true,
          accessibility: true
        })
        console.log('Flickity')
      })


    }
  }
</script>