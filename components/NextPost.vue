<!-- layout -->
<template>
  <article>

    <section>
      <h3 class="f-px fs-md uc">{{ date }}</h3>
      <h1 class="f-px fs-lg uc">{{ title }}</h1>
      <h2 class="f-la fs-sm uc">{{ architect }}</h2>
    </section>

    <button class="f-px uc">View Entry</button>
    <figure><img :src='img'/></figure>

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
        // img {
        //   transform: scale(1.1);
        //   transition: transform 5600ms ease;
        // }
      }
    }

    article h1 {
      margin: 3.2rem 0 .4rem;
      @include breakpoint(md) { margin: 4rem 0 .4rem; }
    }

    article button {
      display: none;
      padding: 1.4rem 3.2rem 1.2rem;
      background: transparent;
      color: var(--cloud);
      font-size: 1.4rem;
      transition: var(--ease);
      @include breakpoint(md) { display: inherit; }
    }

    figure:before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: red;
      mix-blend-mode: multiply;
    }

    img {
      position: absolute;
      z-index: var(--z0);
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 600ms ease;
      will-change: transform;
    }

    button { position: relative; z-index: var(--z1); }

    section {
      position: relative;
      z-index: var(--z1);
      @include breakpoint(md) { flex-grow: 1; }
    }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'date', 'title', 'architect', 'img' ],
  }
</script>