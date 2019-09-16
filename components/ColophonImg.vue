<!-- layout -->
<template>


  <figure class="sticky">
    <!-- <img class="mb-1" src="../pages/img/house-01.jpg" alt=""> -->
    <img class="mb-1" src="" alt="">
    <figcaption class="f-sec fs-md uc">Childhood Homes—Ohio</figcaption>
  </figure>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  img {
    cursor: pointer;
    width: 100%; height: auto;
    object-fit: cover;
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
        'http://ohiosveryown.co/supersymmetry/house-02.jpg'
      ]

      // const imgs = [
      //   {
      //     source: 'http://ohiosveryown.co/supersymmetry/house-01.jpg',
      //     transform : 'rotate(0)'
      //   },
      //   {
      //     source: 'http://ohiosveryown.co/supersymmetry/house-02.jpg',
      //     transform : 'rotate(15deg)'
      //   }
      // ]

      const styles = [
        'rotate(3deg)',
        'rotate(-3deg)',
      ]

      img.src = imgs[0]
      let imgIndex = 1

      figure.addEventListener('click', () => {
        let newImgSrc = imgs[imgIndex++ % imgs.length]
        img.src = newImgSrc

        // const styl = styles[~~(Math.random() * styles.length)]
        // img.style.transform = styl
      })
    }
  }
</script>