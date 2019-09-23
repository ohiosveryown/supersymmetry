<!-- layout -->
<template>
  <div class="index-wrapper">


    <!-- <ul class="embla main-carousel" v-if="page.posts">
      <li v-for="post in page.posts" :key="post.permalink">
        <Post class="slide"
          :date = 'post.date'
          :first_line = 'post.first_line'
          :second_line = 'post.second_line'
          :architect = 'post.architect'
          :img = 'post.assets.first_img'
          :earl = 'post.permalink'
        />
      </li>
    </ul> -->


    <div class="embla">
      <div class="embla__container">
        <div class="embla__slide">
          Slide 1
        </div>
        <div class="embla__slide">
          Slide 2
        </div>
        <div class="embla__slide">
          Slide 3
        </div>
      </div>
    </div>


  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .embla {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    position: relative; /* Needed if loop: true */
    flex: 0 0 100%; /* Choose any width */
    background: papayawhip;
  }




</style>


<!-- logic -->
<script>
  import Siema from 'siema'
  import Post from '../components/Post'
  import EmblaCarousel from 'embla-carousel'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    components: { Post, },

    mounted() {
      const emblaNode = document.querySelector('.embla')
      const options = { loop: true }
      const embla = EmblaCarousel(emblaNode, options)
    }
  }
</script>