<!-- layout -->
<template>
  <main class="width">

    <!-- nav -->
    <NavigationColo/>

    <!-- main content / row one -->
    <section class="stagger-zero">
      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">{{ page.first_header }}</h2>
        <p class="f-la fs-p taj">{{ page.first_paragraph }}</p>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">{{ page.second_header }}</h2>
        <p class="f-la fs-p taj">{{ page.second_paragraph }}</p>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">{{ page.third_header }}</h2>
        <p class="f-la fs-p taj">{{ page.third_paragraph }}</p>
      </article>
    </section>

    <!-- row two -->
    <section class="stagger-one">
      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">{{ page.fourth_header }}</h2>
        <p class="f-la fs-p taj">{{ page.fourth_paragraph }}</p>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">{{ page.fifth_header }}</h2>
        <a target="_blank" href="https://twitter.com/cmykw_">
          <p class="f-la fs-p taj">{{ page.fifth_paragraph }}</p>
        </a>
      </article>

      <article class="mb-6">
        <h2 class="mb-2 f-px fs-sm uc">{{ page.sixth_header }}</h2>
        <a target="_blank" href="https://github.com/ohiosveryown/supersymmetry">
          <p class="f-la fs-p taj">{{ page.sixth_paragraph }}</p>
        </a>
      </article>
    </section>

    <!-- bg cover -->
    <div class="cover from-left"/>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

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
    width: 100vw; height: 100vh;
    background: #F5F5F5;
  }

  // page transition timing (delay)
  .colophon-enter-active { transition: all 1000ms ease; }

</style>


<!-- logic -->
<script>
  import NavigationColo from '../components/NavigationColo'
  export default {
    transition: {
      name: 'colophon',
      mode: 'in-out'
    },
    components: { NavigationColo },
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
