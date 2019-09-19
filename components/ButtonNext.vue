<!-- layout -->
<template>


  <button>
    <h3 class="mt-0 mr-2 f-prim fs-xs uc">Swipe</h3>
    <svg class="" width="56" height="56">
      <g fill="#181819">
        <path class="halo" d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28zm0-2C13.64 54 2 42.36 2 28S13.64 2 28 2s26 11.64 26 26-11.64 26-26 26z"/>
        <path class="arrow" d="M30.343 20.929l6.364 6.364c.026.026.05.053.073.081l-.073-.081a1.01 1.01 0 0 1 .147.186l.006.01a.99.99 0 0 1 .002.004l.013.023c.011.02.022.04.031.06l.006.014.007.015.01.024A.988.988 0 0 1 37 28v.043l-.002.027-.002.015-.007.064a1.085 1.085 0 0 1-.06.222l-.01.024a.994.994 0 0 1-.007.015l-.006.013a1.018 1.018 0 0 1-.102.172l-.009.011-.008.011-.007.008-.073.082-6.364 6.364a1 1 0 0 1-1.414-1.414l4.656-4.658L19 29a1 1 0 0 1 0-2l14.584-.001-4.655-4.656a1 1 0 0 1 1.414-1.414z"/>
      </g>
    </svg>
  </button>


</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';

  button {
    display: flex;
    align-items: center;
    background: transparent;
  }

  .halo {
    opacity: .24;
    transition: var(--ease);
  }

  .arrow {
    transform: translateX(0);
    transform-origin: center;
    transition: var(--ease);
  }

  // next styles for touch / non-touch devices
  @media (pointer: fine) {
    .next:hover { transform: scale(1.1); }
    .next:hover .halo { opacity: 1; }
    .next:hover .arrow { transform: scale(.9); }
  }

</style>


<!-- logic -->
<script>
  export default { }
</script>
