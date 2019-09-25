<!-- layout -->
<template>
  <article>

    <section>
      <h3 class="date f-prim fs-md uc">{{ date }}</h3>
      <h1 class="f-prim fs-lg uc">{{ first_line }}</h1>
      <h1 class="title f-prim fs-lg uc">{{ second_line }}</h1>
      <h2 class="f-sec fs-sm uc">{{ architect }}</h2>
    </section>

    <button class="f-prim uc">View Entry</button>
    <img :src='img'/>
    <div class="cover"/>

  </article>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';

  // article styles
    article {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 8rem;
      padding: 0 1.6rem;
      height: 20rem;
      overflow: hidden;
      color: var(--cloud);
      transition: all 500ms ease;

      @include breakpoint(md) {
        justify-content: space-between;
        padding: 0 6.4rem;
        height: 24rem;
      }
    }

    article:hover {
      @include breakpoint(mdl) {
        button {
          background: var(--cloud);
          color: var(--gravity);
        }
        img {
          transform: scale(1.1);
          transition: transform 5600ms ease;
        }
      }
    }

    .date, .title {
      margin-bottom: 2rem;
      @include breakpoint(md) { margin-bottom: 3.2rem; }
    }

    button {
      display: none;
      position: relative;
      z-index: var(--z1);
      padding: 1.4rem 3.2rem 1.2rem;
      background: transparent;
      color: var(--cloud);
      font-size: 1.4rem;
      transition: var(--ease);
      @include breakpoint(md) { display: inherit; }
    }

    img {
      position: absolute;
      z-index: var(--zmin);
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      will-change: scale;
      transition: transform 600ms ease;
    }

    .cover {
      position: absolute;
      z-index: var(--zmin);
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: var(--primary);
      // mix-blend-mode: darken;
      mix-blend-mode: multiply;
    }

    section {
      position: relative;
      z-index: var(--z1);
      @include breakpoint(md) { flex-grow: 1; }
    }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'date', 'first_line', 'second_line', 'architect', 'img', 'earl' ],
  }
</script>