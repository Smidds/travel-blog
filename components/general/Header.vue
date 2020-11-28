<template>
  <nav
    class="flex sticky w-full top-0 inset-x-0 p-3 justify-center shadow-lg h-16 items-center border-b-2 border-gray-200 border-solid bg-white z-10"
  >
    <div>
      <nuxt-link class="text-2xl text-black dark:text-white left-to-right-underline" to="/"
        >✈ Isaac's Travel Blog</nuxt-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss">
.left-to-right-underline {
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
