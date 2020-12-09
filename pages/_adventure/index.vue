<template>
  <div class="main flex flex-col items-start justify-center">
    <div class="w-full text-6xl font-bold text-primary-700 dark:text-primary-300 mb-5 text-center">
      {{ adventure.title }}
    </div>
    <div class="h-64 w-full relative shadow-2xl rounded-3xl overflow-hidden">
      <img :src="adventure.cover" class="h-full w-full object-cover" />
    </div>
    <div class="flex flex-col items-center mt-10 w-full">
      <topic-card
        v-for="(entry, index) in journalEntries"
        :key="index"
        :cover-photo="entry.cover"
        :title="entry.title"
        :description="entry.description"
        :slug="entry.title"
        button-text="Open the Entry"
        @click="openEntry(entry)"
      />
    </div>
  </div>
</template>

<script>
import TopicCard from '@/components/TopicCard'
export default {
  components: {
    TopicCard,
  },
  head() {
    return {
      title: this.adventure.title,
    }
  },
  data() {
    return {
      adventure: {},
      journalEntries: [],
    }
  },
  async asyncData({ params, store }) {
    return {
      adventure: store.state.adventures.find((adventure) => adventure.slug === params.adventure),
      journalEntries: store.state.journalEntries[params.adventure],
    }
  },
  methods: {
    openEntry({ slug }) {
      this.$router.push({
        name: 'adventure-entry',
        params: {
          entry: slug,
        },
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
</style>