<!-- layout -->
<template>


  <figure>
    <div class="cover"><img class="mb-1" src="" alt=""></div>
    <figcaption class="stagger-swift f-sec fs-md uc">Childhood Homes—Ohio</figcaption>
  </figure>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

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

  img {
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
      const figure = document.querySelector('figure')
      const img = document.querySelector('img')

      const imgs = [
        'http://ohiosveryown.co/supersymmetry/house-01.jpg',
        'http://ohiosveryown.co/supersymmetry/house-02.jpg',
        'http://ohiosveryown.co/supersymmetry/house-03.jpg',
      ]

      const styles = [
        'rotate(3deg)',
        'rotate(-3deg)',
      ]

      img.src = imgs[0]
      let imgIndex = 1

      figure.addEventListener('click', () => {
        let newImgSrc = imgs[imgIndex++ % imgs.length]
        img.src = newImgSrc
      })
    }
  }
</script>