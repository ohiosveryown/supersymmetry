<!-- layout -->
<template>


  <figure class="sticky">
    <img class="mb-1" src="../pages/img/house-01.jpg" alt="">
    <!-- <img class="mb-1" src="" alt=""> -->
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
    // mounted() {
    //   const figure = document.querySelector('figure')
    //   const img = document.querySelector('img')

    //   const imgs = [
    //     '/_saber/images/pages/img/house-01.jpg',
    //     'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    //     'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    //   ]

    //   img.src = imgs[0]
    //   let imgIndex = 1

    //   figure.addEventListener('click', () => {
    //     let newImgSrc = imgs[imgIndex++ % imgs.length]
    //     img.src = newImgSrc
    //   })
    // }
  }
</script>