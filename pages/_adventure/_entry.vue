<template>
  <div>
    <h1>A Dummy Entry!</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    return {
      journalEntries: require(`assets/content/journal_entries/${params.entry}`),
    }
  },
}
</script>

<style>
</style>