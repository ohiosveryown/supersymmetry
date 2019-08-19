<!-- layout -->
<template>
  <article>

    <h3 class="f-px fs-md uc">{{ date }}</h3>
    <h1 class="f-px fs-lg uc">{{ title }}</h1>
    <h2 class="f-la fs-sm uc">{{ architect }}</h2>
    <figure><img :src='img'/></figure>
    <button class="f-px uc">View Entry</button>

  </article>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';


</style>


<!-- logic -->
<script>
  export default {
    props: [ 'date', 'title', 'architect', 'img' ],
  }
</script>