<!-- layout -->
<template>


  <article>
    <h3 class="f-prim fs-md uc">{{ date }}</h3>
    <h1 class="f-prim fs-lg uc">{{ first_line }}</h1>
    <h1 class="f-prim fs-lg uc">{{ second_line }}</h1>
    <h2 class="f-sec fs-sm uc">{{ architect }}</h2>
    <saber-link :to='earl'><button>VIEW POST</button></saber-link>
    <img :src='img'/>
    <div class="cover"/>
  </article>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 4rem;
    height: 100%;
    color: var(--cloud);
  }

  img {
    position: absolute;
    z-index: var(--zmin);
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }

  .cover {
    position: absolute;
    z-index: var(--zmin);
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: var(--primary);
    mix-blend-mode: darken;
  }

</style>


<!-- logic -->
<script>
  export const attributes = { layout: 'page' }
  export default {
    props: [ 'date', 'first_line', 'second_line', 'architect', 'img', 'earl' ],
  }
</script>
