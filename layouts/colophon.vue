<!-- layout -->
<template>
  <main class="width">

    <!-- nav -->
    <NavigationPost/>

    <!-- main content -->
    <section class="stagger-two">
      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">Purpose</h2>
        <p class="f-la fs-p taj">Supersymmetry is a photo blog built on Vue / Saber showcasing architecture, interior design and structural engineering. The site is best viewed in Safari, Chrome or Firefox.</p>
        <a class="stagger-two" @click="$router.go(-1)">Go Back ⏪</a>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">Design</h2>
        <p class="f-la fs-p taj">Supersymmetry was designed &amp; developed by <a target="_blank" href="https://twitter.com/cmykw_">me</a> . It was designed in Sketch &amp; developed in VS Code (<a target="_blank" href="https://github.com/ohiosveryown/supersymmetry">source</a>).</p>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">Thank You's</h2>
        <p class="f-la fs-p taj">Mom, Mark, Nico, Gino, Jeremy, Andrew, Dan, Frank Lloyd Wright and Zaha Hadid.</p>
      </article>
    </section>

    <!-- row two -->
    <section class="stagger-two">
      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">Images</h2>
        <p class="f-la fs-p taj">All images belong to their respective owners. For removal, please contact me at matt@ohiosveryown.co.</p>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">Twitter</h2>
        <p class="f-la fs-p taj"><a target="_blank" href="https://twitter.com/cmykw_">@cmykw_</a></p>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">Credits</h2>
        <p class="f-la fs-p taj"><a target="_blank" href="http://ohiosveryown.co">ohiosveryown</a></p>
      </article>
    </section>

    <!-- bg cover -->
    <div class="cover from-left"/>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  main {
    position: absolute;
    top: 0; left: 0; right: 0;
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: var(--z1);
    @include breakpoint(md) { flex-direction: row; }
  }

  section:first-of-type {
    margin-top: 5.6rem;
    @include breakpoint(md)  { margin-top: 8rem; }
    @include breakpoint(lg)  { margin-top: 8rem; }
  }

  article {
    @include breakpoint(md) {
      margin-right: grid-width(1);
      width: grid-width(3);
    }
  }

  a { text-decoration: underline; }
  .fs-p { font-size: 1.6rem; }

  .cover {
    position: fixed;
    top: 0; left: 0;
    // z-index: var(--z1);
    width: 100vw; height: 100vh;
    background: papayawhip;
  }

  .colophon-leave-active, .colophon-enter-active { transition: all 500ms ease 1s; }
  .colophon-leave-active {
    opacity: 0;
  }

  // .colophon-enter { opacity: 0; }
  // .colophon-enter-to { opacity: 1; }
  // .colophon-enter-active { transition: all 2s ease 2s; }

  .colophon-leave { opacity: 1; }
  .colophon-leave-to { opacity: 0; }
  .colophon-leave-active { transition: all 1s ease 1s; }

</style>


<!-- logic -->
<script>
  import NavigationPost from '../components/NavigationPost'
  export default {
    transition: {
      name: 'colophon',
      mode: 'in-out'
    },
    components: { NavigationPost },
    props: [ 'page' ],
    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    }
  }
</script>
