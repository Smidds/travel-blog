<template>
  <nav class="sticky shadow-lg border-b-2 border-gray-200 border-solid bg-secondary z-10 top-0 dark:border-black">
    <div class="container relative flex w-full top-0 inset-x-0 p-3 mx-auto justify-center items-center h-16">
      <button
        class="text-lg text-primary-700 absolute top-o left-0 font-semibold ml-4 dark:text-primary-100 dark-hover:text-white"
        @click="goHome"
        v-show="!isHomePage"
      >
        &lt; All Adventures
      </button>
      <nuxt-link class="text-2xl h-8 mt-3 text-black dark:text-white left-to-right-underline flex items-start" to="/"
        ><span class="text-base mt-1 mr-1">✈</span> Isaac's Travel Blog</nuxt-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isHomePage() {
      return this.$route.name === 'index'
    },
  },
  methods: {
    goHome() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style lang="postcss">
.left-to-right-underline {
  color: #081c6e;
  overflow: hidden;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    width: 0;
    bottom: 0px;
    background: #000;
    height: 4px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover:after,
  &:focus:after,
  &:active:after {
    left: 0;
    right: auto;
    width: 100%;
  }
}
</style>
