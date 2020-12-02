<template>
  <div class="main flex flex-col items-start justify-center">
    <div class="w-full rounded-3xl bg-secondary">
      <div class="h-64 w-full relative shadow-lg rounded-3xl overflow-hidden">
        <img :src="entry.cover" class="h-full w-full object-cover" />
      </div>
      <div class="p-8">
        <div class="w-full text-6xl font-bold text-primary-700 dark:text-primary-300 mb-3 text-center">
          {{ entry.title }}
        </div>
        <div class="text-lg text-center mb-6">
          Posted: <em>{{ datePosted }}</em>
        </div>
        <div class="post-content mt-20" v-html="$md.render(entry.body)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { format as formatDate } from 'date-fns'

export default {
  data() {
    return {
      entry: {},
    }
  },
  computed: {
    datePosted() {
      return formatDate(new Date(this.entry.date), 'MMMM dd, yyyy')
    },
  },
  async asyncData({ params, store }) {
    const entry = require(`assets/content/journal_entries/${params.entry}`)
    return {
      entry,
    }
  },
}
</script>

<style lang="postcss" scoped>
</style>