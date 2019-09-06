<!-- layout -->
<template>
  <section>


    <article>
      <h3 class="f-px fs-md uc">{{ date }}</h3>
      <h1 class="f-px fs-lg uc">{{ title }}</h1>
      <h2 class="f-la fs-sm uc">{{ architect }}</h2>
      <saber-link :to='earl'><button>VIEW POST</button></saber-link>
      <img :src='img'/>
    </article>


  </section>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  button { margin: 2rem 0; padding: 1.2rem 2rem; }

</style>


<!-- logic -->
<script>
  export const attributes = {
    layout: 'page',
    // injectAllPosts: true
  }

  export default {
    // props: [ 'page' ],
    props: [ 'date', 'title', 'architect', 'img', 'earl' ],
    mounted() {

    }
  }
</script>
