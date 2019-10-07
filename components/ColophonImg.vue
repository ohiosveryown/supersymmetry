<!-- layout -->
<template>
  <figure class="sticky">


    <div class="cover">
      <img src="" alt="Childhood Homes" class="first-img">
    </div>

    <figcaption class="stagger-swift mt-1 f-sec fs-md uc">
      Childhood Homes—Ohio
    </figcaption>


  </figure>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  .sticky {
    position: sticky;
    top: 3.2rem;
  }

  .cover {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .cover:before {
    content: '';
    display: block;
    position: absolute;
    z-index: var(--z1);
    top: 0; left: 0;
    width: 100%; height: 100%;
    transform-origin: left;
    background: var(--gravity);
    will-change: transform;
    animation: ScaleLeft 1800ms var(--inout) forwards;
  }

  figure {
    position: relative;
  }

  img {
    cursor: pointer;
    opacity: 0;
    will-change: opacity;
    animation:
      Scale 1600ms ease 1000ms forwards,
      In 300ms var(--inout) 850ms forwards;
  }

</style>


<!-- logic -->
<script>
  export default {
    mounted() {
      // images
      const images = [
        'https://raw.githubusercontent.com/ohiosveryown/supersymmetry/master/pages/img/house-01.jpg',
        'https://raw.githubusercontent.com/ohiosveryown/supersymmetry/master/pages/img/house-02.jpg',
        'https://raw.githubusercontent.com/ohiosveryown/supersymmetry/master/pages/img/house-03.jpg',
      ]

      // init logic
      let i = 1
      let img = document.querySelector('img')
      img.src = images[0]

      // img propagate function
      let placeImage = () => {
        const next = images[i]
        const img = document.createElement("img")

        // img styles
        img.setAttribute("src", next)
        img.setAttribute("draggable", "false")
        img.style.position = 'absolute'
        img.style.left = 0
        img.style.top = 0
        img.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)"
        document.querySelector('figure').appendChild(img)

        // cont logic
        i = i + 1
        i = (i >= images.length) ? 0 : i
      }

      // events
      document.querySelector('figure').addEventListener('click', () => { placeImage() })
    },
  }
</script>