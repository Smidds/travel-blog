<template>
  <button class="fixed bottom-0 left-0 m-3" @click="changeColorMode">
    <component
      :is="`icon-${color}`"
      class="icon"
      title="Toggle background color"
      v-tooltip
      position="right middle"
      :content="pickerTooltip"
    />
  </button>
</template>

<script>
import { COLOR_MODE_FALLBACK } from '~/utils/globals.js'
import IconSystem from '~/components/icons/system.svg?inline'
import IconLight from '~/components/icons/luke-skywalker.svg?inline'
import IconDark from '~/components/icons/darth-vader.svg?inline'

export default {
  name: 'ColorModePicker',
  components: {
    IconSystem,
    IconLight,
    IconDark,
  },
  data() {
    return {
      color: COLOR_MODE_FALLBACK,
    }
  },
  watch: {
    '$colorMode.value': {
      immediate: true,
      handler(val) {
        if (!this.$colorMode.unknown) {
          this.color =
            this.$colorMode && this.$colorMode.preference != null && this.$colorMode.preference !== 'null'
              ? this.$colorMode.preference
              : COLOR_MODE_FALLBACK
        } else {
          this.color = COLOR_MODE_FALLBACK
        }
      },
    },
  },
  computed: {
    pickerTooltip() {
      switch (this.color) {
        case 'light':
          return 'Change to dark mode'
        case 'dark':
          return 'Change to light mode'

        default:
          return 'Change to light mode'
      }
    },
  },
  methods: {
    changeColorMode() {
      if (this.$colorMode.unknown) return (this.$colorMode.preference = COLOR_MODE_FALLBACK)

      switch (this.$colorMode.preference) {
        case 'light':
          return (this.$colorMode.preference = 'dark')
        case 'dark':
          return (this.$colorMode.preference = 'light')
        case 'system':
          return (this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark')

        default:
          return (this.$colorMode.preference = COLOR_MODE_FALLBACK)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.icon {
  width: 44px;
  height: 44px;
}
</style>
