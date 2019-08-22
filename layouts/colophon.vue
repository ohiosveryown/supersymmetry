<!-- layout -->
<template>
  <main class="width">

    <!-- nav -->
    <NavigationPost class="stagger-two"/>
    <a @click="$router.go(-1)">Go Back</a>

    <article class="debug">
      <h1 class="f-la mb-1 tac">{{ page.title }}</h1>
    </article>

    <div class="cover"/>

  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  a {
    position: absolute;
    z-index: var(--zmax);
  }

  main {
    position: absolute;
    top: 0; left: 0; right: 0;
    margin: 0 auto;
  }

  article {
    position: relative;
    z-index: var(--z1);
  }

  .cover {
    position: fixed;
    top: 0; left: 0;
    // z-index: var(--z1);
    width: 100vw; height: 100vh;
    background: papayawhip;
  }

  .colophon-enter-active, .colophon-leave-active { transition: all 500ms ease 1s; }

</style>


<!-- logic -->
<script>
  import NavigationPost from '../components/NavigationPost'
  export default {
    transition: {
      name: 'colophon',
      mode: 'in-out'
    },
    components: { NavigationPost },
    props: [ 'page' ],
    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    }
  }
</script>
