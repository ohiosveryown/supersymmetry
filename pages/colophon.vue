<!-- layout -->
<template>

  <div class="colophon-wrapper">

    <HeaderColophon/>

    <button class="prim">Click</button><span></span>

    <main class="width">
      <!-- left / img section -->
      <section class="section-left">
        <figure class="sticky">
          <img class="mb-1" src="./img/house-01.jpg" alt="">
          <figcaption class="f-sec fs-md uc">Childhood Homes—Ohio</figcaption>
        </figure>
      </section>

      <!-- right / content section -->
      <section class="section-right">

        <ul>
          <h1 class="mb-1 f-prim fs-md uc">credits</h1>
          <li class="mb-0 f-sec fs-md"><a target="_blank" href="https://twitter.com/cmykw_">@cmykw_</a></li>
          <li class="mb-0 f-sec fs-md"><a target="_blank" href="http://ohiosveryown.co">ohiosveryown</a></li>
          <li class="f-sec fs-md"><a target="_blank" href="https://github.com/ohiosveryown/supersymmetry">github (source)</a></li>
        </ul>

        <article>
          <h1 class="mb-2 f-prim fs-md uc">Purpose</h1>
          <p class="f-sec fs-md">Supersymmetry is a photo blog built on Vue and Saber showcasing architecture, interior design and structural engineering – basically spaces. The site is best viewed in Safari, Chrome or Firefox.</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">Design</h1>
          <p class="f-sec fs-md">Supersymmetry was designed and developed by me, Matt. It was designed in Sketch and developed in VS Code.</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">Thank You's</h1>
          <p class="f-sec fs-md">Mom, Mark, Nico, Gino, Jeremy, Andrew, Scott, Dan, Frank Lloyd Wright, Zaha Hadid and plenty of others.</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">Images</h1>
          <p class="f-sec fs-md">All images belong to their respective owners. For removal, please contact me at matt@ohiosveryown.co.</p>
        </article>
        <article>
          <h1 class="mb-2 f-prim fs-md uc">Typography</h1>
          <p class="f-sec fs-md">The majority of headlines are set in PX Grotesk by Optimo Type Foundry. Body and subtitle styles are set in BW Gradual by Branding With Type.</p>
        </article>

      </section>
    </main>


    <div class="page-cover colorshift"/>
  </div>

</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header {
    margin-bottom: 4.8rem;
  }

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

  .sticky {
    position: sticky;
    top: 3.2rem;
  }

  ul {
    @include breakpoint(md) {
      margin-bottom: 12.4rem;
    }
  }

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

  export default {
    components: { HeaderColophon },
    mounted() {
const posts = [
  '/zytkow-objects.html',
  '/temperature-of-a-black-hole.html',
  '/what-is-dark-energy',
]

const prim = document.querySelector('.prim')
const trigger = document.querySelector('button')
const span = document.querySelector('span')

let count = 0

trigger.addEventListener('click', () => {
  const post = posts[~~(Math.random() * posts.length)]
  const btn = document.createElement('button')
  span.appendChild(btn)
  btn.innerText = post

  count += 1
  if (count >= 3) { prim.disabled = true }

  // console.log(count)
})
    },

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
