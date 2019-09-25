<!-- layout -->
<template>


  <article>
    <div class="article-content stagger-long">
      <h3 class="ref-date date f-prim fs-sm uc">{{ date }}</h3>
      <h1 class="ref-first-line f-prim fs-lg uc">{{ first_line }}</h1>
      <h1 class="ref-second-line title f-prim fs-lg uc">{{ second_line }}</h1>
      <h2 class="ref-link architect f-sec fs-md uc">{{ architect }}</h2>
      <saber-link :to='earl'><button class="f-prim uc">View Entry</button></saber-link>
    </div>

    <img class="scale-md" :src='img'/>
    <div class="cover"/>
    <div class="enter from-top"/>
  </article>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .enter {
    position: absolute;
    z-index: var(--zmax);
    top: 0; left: -4%;
    width: 108%; height: 100%;
    background: var(--stone);
    will-change: transform;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 4rem;
    height: 100%;
    color: var(--cloud);
    overflow: hidden;
    &:hover { button {@include breakpoint(mdl) { opacity: 1; }}}
  }

  .article-content {
    position: relative;
    z-index: var(--z2);
  }

  .date {
    margin-bottom: 2.4rem;
    @include breakpoint(md) { margin-bottom: 5.6rem; }
  }

  .title {
    margin-bottom: 6.4rem;
    @include breakpoint(md) { margin-bottom: 1.4rem; }
  }

  .architect { margin-bottom: 2.8rem; }

  a { align-self: flex-start; }

  button {
    position: relative;
    align-self: flex-start;
    background: var(--cloud);
    padding: 1.2rem 2.4rem 1rem;
    transition: var(--ease);
  }

  // button styles for non-touch / touch devices
  @media (pointer: fine) { button { opacity: 0; }}
  @media (pointer: coarse) { button { opacity: 1; }}

  img {
    position: absolute;
    z-index: var(--zmin);
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    will-change: scale;
  }

  .cover {
    position: absolute;
    z-index: var(--z1);
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: var(--primary);
    mix-blend-mode: darken;
    // mix-blend-mode: multiply;
  }
</style>


<!-- logic -->
<script>
  export const attributes = { layout: 'page' }
  export default {
    props: [ 'date', 'first_line', 'second_line', 'architect', 'img', 'earl' ],
  }
</script>