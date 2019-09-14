<!-- layout -->
<template>

  <div class="colophon-wrapper">

    <HeaderColophon/>

    <main style="min-height: 300vh;" class="debug width">
      <!-- left / img section -->
      <section class="debug section-left">
        <figure class="sticky">
          <img class="" src="./img/house-01.jpg" alt="">
          <figcaption>Childhood Homes—Ohio</figcaption>
        </figure>
      </section>

      <!-- right / content section -->
      <section class="debug section-right">

        <ul>
          <h1>credits</h1>
          <li><a href="">@cmykw_</a></li>
          <li><a href="">ohiosveryown</a></li>
          <li><a href="">github (source)</a></li>
        </ul>

        <article>
          <h1>Purpose</h1>
          <p>Supersymmetry is a photo blog built on Vue and Saber showcasing architecture, interior design and structural engineering – basically spaces. The site is best viewed in Safari, Chrome or Firefox.</p>
        </article>
        <article>
          <h1>Design</h1>
          <p>Supersymmetry was designed and developed by me, Matt. It was designed in Sketch and developed in VS Code.</p>
        </article>
        <article>
          <h1>Thank You's</h1>
          <p>Mom, Mark, Nico, Gino, Jeremy, Andrew, Scott, Dan, Frank Lloyd Wright, Zaha Hadid and plenty of others.</p>
        </article>
        <article>
          <h1>Images</h1>
          <p>All images belong to their respective owners. For removal, please contact me at matt@ohiosveryown.co.</p>
        </article>
        <article>
          <h1>Typography</h1>
          <p>The majority of headlines are set in PX Grotesk by Optimo Type Foundry. Body and subtitle styles are set in BW Gradual by Branding With Type.</p>
        </article>

      </section>
    </main>
















    <div class="page-cover colorshift"/>
  </div>

</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  main {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
      margin-top: 4.6rem;
    }
  }

  .section-left {
    @include breakpoint(md) {
      width: grid-width(6);
    }
  }

  .section-right {
    @include breakpoint(md) {
      margin-left: grid-width(.5);
      width: grid-width(5.5);
    }
  }

  .sticky {
    position: sticky;
    top: 4.6rem;
  }

  .page-cover {
    position: fixed;
    z-index: var(--z0);
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: #fff;
  }

</style>


<!-- logic -->
<script>
  import HeaderColophon from '../components/HeaderColophon'

  export default {
    components: { HeaderColophon },
    beforeDestroy() {
      const header = document.querySelector('header')
      header.style.opacity = '0'
      header.style.transition = 'all 500ms ease 200ms'

      const colorshift = document.querySelector('.colorshift')
      colorshift.style.background = 'var(--stone)'
      colorshift.style.transition = 'all 500ms ease 200ms'
    }
  }
</script>
