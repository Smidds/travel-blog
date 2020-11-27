<template>
  <div class="w-full">
    <Header />
    <ColorModePicker />
    <nuxt class="container mx-auto mt-10" />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import ColorModePicker from '~/components/general/ColorModePicker.vue'

export default {
  components: {
    Header,
    ColorModePicker
  }
}
</script>
