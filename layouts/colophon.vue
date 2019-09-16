<!-- layout -->
<template>

  <div class="colophon-wrapper">

    <HeaderColophon/>

    <main class="width">
      <!-- left / img section -->
      <section class="section-left">
        <ColophonImg/>
      </section>

      <!-- right / content section -->
      <section class="stagger section-right">

        <ul>
          <h1 class="mb-1 f-prim fs-md uc">{{ page.credits_header }}</h1>
          <li class="mb-0 f-sec fs-md"><a target="_blank" href="https://twitter.com/cmykw_">{{ page.twitter }}</a></li>
          <li class="mb-0 f-sec fs-md"><a target="_blank" href="http://ohiosveryown.co">{{ page.site }}</a></li>
          <li class="f-sec fs-md"><a target="_blank" href="https://github.com/ohiosveryown/supersymmetry">{{ page.source }}</a></li>
        </ul>

        <article>
          <h1 class="mb-2 f-prim fs-md uc">{{ page.article_one_header }}</h1>
          <p class="f-sec fs-md">{{ page.article_one }}</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">{{ page.article_two_header }}</h1>
          <p class="f-sec fs-md">{{ page.article_two }}</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">{{ page.article_three_header }}</h1>
          <p class="f-sec fs-md">{{ page.article_three }}</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">{{ page.article_four_header }}</h1>
          <p class="f-sec fs-md">{{ page.article_four }}</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">{{ page.article_five_header }}</h1>
          <p class="f-sec fs-md">{{ page.article_five }}</p>
        </article>

      </section>
    </main>


    <div class="page-cover colorshift"/>
  </div>

</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header { margin-bottom: 4.8rem; }

  main {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
      margin-top: 4.6rem;
    }
  }

  .section-left {
    margin-bottom: 6.4rem;

    @include breakpoint(md) {
      margin-bottom: 0rem;
      width: grid-width(6);
    }
  }

  .section-right {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 9.6rem;

    @include breakpoint(md) {
      flex-direction: column;
      margin: 0 0 9.6rem grid-width(.5);
      width: grid-width(5.5);
    }
  }

  ul { @include breakpoint(md) { margin-bottom: 12.4rem; }}

  article {
    margin-bottom: 4.8rem;
    @include breakpoint(md) { margin-bottom: 6.4rem; }
  }

  .page-cover {
    position: fixed;
    z-index: var(--z0);
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: #fff;
  }

  a { text-decoration: underline; }

</style>


<!-- logic -->
<script>
  import HeaderColophon from '../components/HeaderColophon'
  import ColophonImg from '../components/ColophonImg'

  export default {
    components: { HeaderColophon, ColophonImg },
    props: [ 'page' ],

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },

    beforeDestroy() {
      const main = document.querySelector('main')
      main.style.opacity = '0'
      main.style.transition = 'all 500ms ease 200ms'

      const header = document.querySelector('header')
      header.style.opacity = '0'
      header.style.transition = 'all 500ms ease 200ms'

      const colorshift = document.querySelector('.colorshift')
      colorshift.style.background = 'var(--stone)'
      colorshift.style.transition = 'all 500ms ease 200ms'
    }
  }
</script>
