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
  data() {
    return {
      adventure: {},
      journalEntries: [],
    }
  },
  async asyncData({ params, store }) {
    // journalEntries: store.state.journalEntries[params.adventure],
    return {
      adventure: store.state.adventures.find((adventure) => adventure.slug === params.adventure),
      journalEntries: [
        {
          date: new Date('2020-11-27T17:19:09.647Z'),
          title: 'The Adventure Begins',
          description: "From O'Hare to Bangkok, traveling the world is a long process",
          body: '# Pre-Departure Preparations\n\n\n\n# First Stop, ORD\n\n# Bangkok Bound',
          cover: 'https://res.cloudinary.com/dfkk9455p/image/upload/v1606175283/sample.jpg',
        },
        {
          date: new Date('2020-11-27T17:19:09.647Z'),
          title: 'The Adventure Begins',
          description: "From O'Hare to Bangkok, traveling the world is a long process",
          body: '# Pre-Departure Preparations\n\n\n\n# First Stop, ORD\n\n# Bangkok Bound',
          cover: 'https://res.cloudinary.com/dfkk9455p/image/upload/v1606175283/sample.jpg',
        },
        {
          date: new Date('2020-11-27T17:19:09.647Z'),
          title: 'The Adventure Begins',
          description: "From O'Hare to Bangkok, traveling the world is a long process",
          body: '# Pre-Departure Preparations\n\n\n\n# First Stop, ORD\n\n# Bangkok Bound',
          cover: 'https://res.cloudinary.com/dfkk9455p/image/upload/v1606175283/sample.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
</style>