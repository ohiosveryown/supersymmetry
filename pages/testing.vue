<!-- layout -->
<template>
  <div class="debug">


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



      <div class="">
        <div class="index-wrapper recent-posts" v-if="page.posts">
          <ul class="container">
            <li class="debug slide" v-for="post in page.posts" :key="post.permalink">
              <Post
              :first_line = 'post.second_line'
              :earl = 'post.permalink'
              />
            </li>
          </ul>
        </div>
      </div>



  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .index-wrapper {
    overflow: hidden;
    height: 50vh;

    &.is-draggable {
      cursor: move;
      cursor: grab;
    }

    &.is-dragging {
      cursor: grabbing;
    }
  }

  .container {
    display: flex;
    height: 100%;
  }

  .slide {
    position: relative;
    flex: 0 0 auto;
    // padding-left: 2rem;
    width: 80%; height: 50%;
    // background: papayawhip;
  }




</style>


<!-- logic -->
<script>
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
      const emblaNode = document.querySelector('.index-wrapper')
      const embla = EmblaCarousel(emblaNode, {
        align: 'start',
        loop: true,
        speed: 10,
        startIndex: 0,
        selectedClass: 'is-selected',
        draggableClass: 'is-draggable',
        draggingClass: 'is-dragging',
      })
    }
  }
</script>