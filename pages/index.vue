<!-- layout -->
<template>
  <main class="debug">

    <!-- <ul class="" v-if="page.posts">
      <li class="debug" v-for="post in page.posts" :key="post.permalink">
        <saber-link :to="post.permalink">{{ post.title }}</saber-link>
        <h4>{{ post.date }}</h4>

        <figure>
          <img :src='post.assets.first_img'>
        </figure>
      </li>
    </ul>  -->


      <div>
          <siema
              ref="siema"
              @init="init"
              @change="change"
              :loop="true"
          >
              <!-- The Slides -->
              <div v-for="n in 5">
                  <img src="http://via.placeholder.com/1920x1080" :alt="'Slide ' + n">
              </div>
          </siema>

          <!-- Example using prev/next buttons -->
          <div>
              <a @click="prev">Prev</a>
              <a @click="next">Next</a>
          </div>
      </div>


  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  // ul {
  //   display: flex;
  //   @include breakpoint(mdl) {
  //     flex-direction: row;
  //     width: 100vw;
  //   }
  // }

  // li {
  //   @include breakpoint(mdl) {
  //     position: relative;
  //     display: flex;
  //     flex-direction: column;
  //     width: 100%; height: 400px;
  //     transition: all 400ms ease;
  //     transform-origin: center;
  //     will-change: transform;
  //   }
  // }

  // main { min-height: 300vh; }
  // img { max-width: 20rem; }
</style>


<!-- logic -->
<script>
  import Vue from 'vue';
  import { Siema } from 'v-siema';

  Vue.component('siema', Siema);
  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    methods: {
        init() {
            console.log('Initialized!');
        },

        change() {
            console.log('Changed!');
        },

        prev() {
            this.$refs.siema.prev();
        },

        next() {
            this.$refs.siema.next();
        },
    },
  }
</script>
