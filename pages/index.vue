<!-- layout -->
<template>
  <main>

    <DeleteNav @click.native="isOpen = !isOpen"/>
    <h1>Home</h1>
    <!-- <header ref="myId" class="uc">Super—<br>Symmetry</header> -->
    <header  ref="myId" class="uc">Super—<br>Symmetry</header>

    <div v-if="page.posts">
        <div v-for="post in page.posts" :key="post.permalink">

            <Posts
              :date = 'post.date'
              :title = 'post.title'
              :architect = 'post.architect'
              :img = 'post.assets.first_img'
              :earl = 'post.permalink'
            />

        </div>
    </div>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header {
    position: relative;
    z-index: var(--zmax);
    transition: all 400ms ease;
    // color: red;
  }

  .open {
    transform: translateX(40vw);
    transition: all 400ms ease;
  }

</style>


<!-- logic -->
<script>
  import Siema from 'siema'
  import Posts from '../components/Posts'

  import DeleteNav from '../components/DeleteNav'

  export const attributes = {
    layout: 'page',
    injectAllPosts: true
  }

  export default {
    props: [ 'page' ],
    // transition: {
    //   name: 'home',
    //   mode: 'in-out'
    // },
    components: { Posts, DeleteNav },

    data: () => ({
      isOpen: false,
    }),

    beforeDestroy() {
      const target = this.$refs.myId
      target.classList.add('open')
    },

    mounted() {

      // const target = this.$refs.myId
      // target.style.color = 'yellow'

    }
  }
</script>
