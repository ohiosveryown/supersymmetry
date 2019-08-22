<!-- layout -->
<template>
  <section>
    <div class="width">

      <!-- row one -->
      <div class="row">
        <article class="mb-6">
          <h2 class="mb-2 f-px fs-sm uc">Purpose</h2>
          <p class="f-la fs-p taj">Supersymmetry is a photo blog built on Vue/Saber showcasing architecture, interior design and structural engineering. The site is best viewed in Safari, Chrome or Firefox.</p>
        </article>

        <article class="mb-6">
          <h2 class="mb-2 f-px fs-sm uc">Design</h2>
          <p class="f-la fs-p taj">Supersymmetry was designed &amp; developed by <a target="_blank" href="https://twitter.com/cmykw_">me</a> . It was designed in Sketch &amp; developed in VS Code (<a target="_blank" href="https://github.com/ohiosveryown/supersymmetry">source</a> ).</p>
        </article>

        <article class="mb-6">
          <h2 class="mb-2 f-px fs-sm uc">Thank You's</h2>
          <p class="f-la fs-p taj">Mom, Mark, Nico, Gino, Jeremy, Andrew, Dan, Frank Lloyd Wright and Zaha Hadid.</p>
        </article>
      </div>

      <!-- row two -->
      <div class="row">
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
      </div>


    </div>
  </section>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';

  .width {
    position: relative;
    @include breakpoint(md) {
      margin-top: 20rem;
    }
  }

  section {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmin);
    width: 100vw; height: 100vh;
    background: papayawhip;
    overflow: scroll;
  }

  .row {
    display: flex;
    flex-direction: column;
    @include breakpoint(md) { flex-direction: row; }
  }

  article {
    @include breakpoint(md) {
      margin-right: grid-width(1);
      width: grid-width(3);
    }
  }

  a { text-decoration: underline; }
  .fs-p { font-size: 1.6rem; }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>