<template>
  <article v-if="adventure" class="main article"></article>
</template>
<script>
export default {
  async asyncData({ params, store }) {
    return {
      journalEntries: store.state.journalEntries[params.adventure],
    }
  },
}
</script>
