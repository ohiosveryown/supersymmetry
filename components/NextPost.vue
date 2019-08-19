<!-- layout -->
<template>
  <article>
    <h5>{{ date }}</h5>
    <h1>{{ title }}</h1>
    <h2>{{ architect }}</h2>
    <img :src='imglink'/>
  </article>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';


</style>


<!-- logic -->
<script>
  export default {
    props: [ 'date', 'title', 'architect', 'imglink' ],
  }
</script>