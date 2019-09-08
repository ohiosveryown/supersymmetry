<!-- layout -->
<template>


  <article>
    <h3 class="date f-prim fs-md uc">{{ date }}</h3>
    <h1 class="f-prim fs-lg uc">{{ first_line }}</h1>
    <h1 class="title f-prim fs-lg uc">{{ second_line }}</h1>
    <h2 class="architect f-sec fs-md uc">{{ architect }}</h2>
    <button class="f-prim uc"><saber-link :to='earl'>View Entry</saber-link></button>
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
    &:hover { button {@include breakpoint(mdl) { opacity: 1; }}}
  }

  .date {
    margin-bottom: 2.4rem;
    @include breakpoint(md) { margin-bottom: 5.6rem; }
  }

  .title {
    margin-bottom: 6.4rem;
    @include breakpoint(md) { margin-bottom: 1.2rem; }
  }

  .architect { margin-bottom: 2.8rem; }

  button {
    align-self: flex-start;
    background: var(--cloud);
    padding: 1rem 2rem .8rem;
    transition: var(--ease);
  }

  // button styles for touch / non-touch devices
  @media (pointer: coarse) { button { opacity: 1; }}
  @media (pointer: fine) { button { opacity: 0; }}

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
