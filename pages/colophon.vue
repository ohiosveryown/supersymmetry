<!-- layout -->
<template>

  <div class="">
    <header class="">
      <saber-link class="left" to='/'>
        <h1 class="ref-first f-prim fs-lg uc">Super—</h1>
        <h1 class="ref-second title f-prim fs-lg uc">Symmetry</h1>
      </saber-link>
      <saber-link to='/'><h2 class="stagger-swift f-sec fs-md uc">Close Colophon</h2></saber-link>
    </header>

    <div class="changeit colorshift"/>
  </div>

</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  header {
    position: relative;
    z-index: var(--z1);
    margin: 2.4rem 4vw 0;
  }

 .title {
    margin-bottom: 6.4rem;
    @include breakpoint(md) { margin-bottom: 1.2rem; }
  }

  .changeit {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: var(--stone);
    background: #fff;
  }

</style>


<!-- logic -->
<script>
  export default {
    mounted() {
      const ref_first = document.querySelector('.ref-first')
      let ref_first_dim = ref_first.getBoundingClientRect()
      let ref_first_y = 'first: ' + ref_first_dim.top + 'px'
      console.log(ref_first_y)

      const ref_second = document.querySelector('.ref-second')
      let ref_second_dim = ref_second.getBoundingClientRect()
      let ref_second_y = 'second: ' + ref_second_dim.top + 'px'
      console.log(ref_second_y)
    },

    beforeDestroy() {
      const header = document.querySelector('header')
      header.style.opacity = '0'
      header.style.transition = 'all 500ms ease 200ms'

      const colorshift = document.querySelector('.colorshift')
      colorshift.style.background = '#f0f0f0'
      colorshift.style.transition = 'all 500ms ease 200ms'
    }
  }
</script>
