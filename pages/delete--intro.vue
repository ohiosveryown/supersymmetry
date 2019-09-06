<!-- layout -->
<template>
  <div>

    <DeleteNav/>
    <h1>This is Intro</h1>


  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';


</style>


<!-- logic -->
<script>
  import DeleteNav from '../components/DeleteNav'

  export default {
    components: { DeleteNav },
  }
</script>
