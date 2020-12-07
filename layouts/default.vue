<template>
  <div class="w-full min-h-full bg bg-theme">
    <Header />
    <nuxt class="container mx-auto p-4 md:p-8 lg:p-10" />
    <ColorModePicker />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import ColorModePicker from '~/components/general/ColorModePicker.vue'

export default {
  components: {
    Header,
    ColorModePicker,
  },
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/backgrounds/_dark.pcss';
@import '../assets/css/backgrounds/_light.pcss';

.bg-theme {
  color: #3c4d91;
}
</style>
