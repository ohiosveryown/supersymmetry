<!-- layout -->
<template>


  <article>
    <h3 class="f-prim fs-md uc">{{ date }}</h3>
    <h1 class="f-prim fs-lg uc">{{ title }}</h1>
    <h2 class="f-sec fs-sm uc">{{ architect }}</h2>
    <saber-link :to='earl'><button>VIEW POST</button></saber-link>
    <img :src='img'/>
  </article>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  article {
    position: relative;
    height: 100%;
  }

  img {
    position: absolute;
    z-index: var(--zmin);
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }

</style>


<!-- logic -->
<script>
  export const attributes = { layout: 'page' }
  export default {
    props: [ 'date', 'title', 'architect', 'img', 'earl' ],
  }
</script>
