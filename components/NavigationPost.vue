<!-- layout -->
<template>
  <nav class="width">

    <ul>
      <li class="f-px fs-lg uc"><saber-link to="/">Super—<br>Symmetdry</saber-link></li>
      <li class="f-px fs-md">2018–2020</li>
    </ul>

    <saber-link to="/colophon.html"><button class="f-la fs-sm uc">Colophon</button></saber-link>
    <h5 @click="$router.go(-1)">Go Back</h5>

  </nav>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';

  button { background: transparent; }

  nav {
    position: relative;
    z-index: var(--zmax);
    margin: 1.2rem 0 2rem;
    @include breakpoint(md) { margin: 2.4rem 0 2rem; }
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    @include breakpoint(md) {
      align-items: flex-end;
      margin-bottom: 3.2rem;
    }
  }

  .open { transform: translateX(0); }

  .fs-lg { line-height: 1; }
</style>


<!-- logic -->
<script>
  // const mybody = document.body

  import ColophonPost from '../components/ColophonPost'
  export default {
    components: { ColophonPost },
    // data: () => ({
    //     isOpen: false,
    //     btnText: 'Colophon'
    // }),
  }
</script>