<template>
  <div class="w-full bg">
    <Header />
    <nuxt class="container mx-auto mt-10" />
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
