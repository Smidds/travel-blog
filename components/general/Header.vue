<template>
  <nav class="sticky shadow-lg border-b-2 border-gray-200 border-solid bg-secondary z-10 top-0 dark:border-black">
    <div class="container relative flex w-full top-0 inset-x-0 p-3 mx-auto justify-center items-center h-16">
      <button
        class="text-lg text-primary-700 absolute top-o left-0 font-semibold ml-4 dark:text-primary-100 dark-hover:text-white flex items-center"
        @click="goBack"
        v-if="!isHomePage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="hidden sm:block">Back</span>
      </button>
      <nuxt-link class="text-2xl h-8 text-black dark:text-white left-to-right-underline flex items-center pb-2 mt-2" to="/">
        <passport-icon />
        Isaac's Travel Blog
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import PassportIcon from "@/components/icons/passport.svg?inline";

export default {
  name: 'Header',
  components: {
    PassportIcon
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'index'
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
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
