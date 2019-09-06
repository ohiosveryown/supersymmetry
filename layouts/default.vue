<!-- layout -->
<template>
  <div>
    <!-- <nav>
      <saber-link to="/">Home</saber-link>
      <saber-link to="/about.html">About</saber-link>
    </nav> -->

    <!-- magic -->
    <slot/>

    <!-- preve / next -->
    <!-- <ul>
      <li v-if="page.prevPost">
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
      <li v-if="page.nextPost">
        <router-link :to="page.nextPost.permalink">
          Next: {{ page.nextPost.title }}
        </router-link>
      </li>
    </ul> -->
  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .page-enter-active,
  .page-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 1000ms;
  }

  .page-enter,
  .page-leave-to {
    // opacity: 0;
  }

  $t-duration: 800ms;
  $t-delay: 300ms;

  .intro-enter-active,
  .intro-leave-active {
    transition-duration: $t-duration * 2;

    &::before,
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      display: block;
      width: 100%;
      height: 50%;
      transition-property: opacity, transform;
      transition-timing-function: ease-in-out;
    }

    &::before {
      background-color: #2e2e2e;
    }

    &::after {
      top: 50%;
      background-color: #2e2e2e;
    }
  }

  .intro-leave {
    &::before,
    &::after {
      transform: scaleX(0);
    }
  }

  .intro-leave-active {
    &::before {
      transition-duration: $t-duration;
    }

    &::after {
      transition-duration: $t-duration - $t-delay;
      transition-delay: $t-delay;
    }
  }

  .intro-leave-to {
    &::before,
    &::after {
      transform: scale(1);
      transform-origin: left;
    }
  }

  .intro-enter {
    &::before,
    &::after {
      transform: scaleX(1);
    }
  }

  .intro-enter-active {
    &::before {
      transition-duration: $t-duration;
    }

    &::after {
      transition-duration: $t-duration - $t-delay;
      transition-delay: $t-delay;
    }
  }

  .intro-enter-to {
    &::before,
    &::after {
      transform: scaleX(0);
      transform-origin: right;
    }
  }

  // .page-enter-active, .page-leave-active { transition: all 500ms ease; }
  // .page-leave-to, .page-enter {
  //   opacity: 0;
  // }

  // .pagee-enter-active, .pagee-leave-active { transition: all 500ms ease 2s; }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'page' ],
    transition: {
      // name: 'intro',
    },
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
