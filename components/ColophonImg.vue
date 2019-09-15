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
        'https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
      ]

      img.src = imgs[0]
      let myIndex = 1
      let count = 0

      figure.addEventListener('click', () => {
        let newImgSrc = imgs[myIndex++ % imgs.length]
        let newImg = document.createElement('img')

        figure.appendChild(newImg)
        newImg.src = newImgSrc

        count += 1
        if (count >= 3) { newImgSrc == null }
      })
    }
  }
</script>