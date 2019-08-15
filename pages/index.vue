<template>
  <main>
    <h1 v-on:click='greet'>This is home</h1>
    <nuxt-link to="/posts/the-oculus">To Oculus</nuxt-link>
  </main>
</template>


<style>

</style>


<script>
  export default {
    methods: {
      greet: () => {
        alert('Hello 👍🏼')
      }
    }
  }
</script>
