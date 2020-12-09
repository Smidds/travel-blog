<template>
  <div class="main flex flex-col items-start justify-center post-content">
    <div class="w-full rounded-3xl bg-secondary border-primary-100 dark:border-primary-400 border-2 border-solid">
      <div class="h-72 sm:h-88 md:h-100 w-full relative shadow-lg rounded-2xl overflow-hidden">
        <img :src="entry.cover" class="h-full w-full object-cover" />
      </div>
      <div class="p-3 sm:p-6 md:p-8 flex flex-col">
        <div class="w-full text-5xl sm:text-6xl font-bold text-primary-700 mb-3 text-center">
          {{ entry.title }}
        </div>
        <div class="date-posted">
          Posted: <em>{{ datePosted }}</em>
        </div>
        <button class="btn photo-album" v-if="entry.album" @click="openAlbum">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            /></svg
          >View Photo Album
        </button>
        <div class="inner-content" v-html="$md.render(entry.body)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { format as formatDate } from 'date-fns'

export default {
  head() {
    return {
      title: this.entry.title,
      meta: [
        { hid: 'og:image', name: 'og:image', content: this.entry.cover },
        { hid: 'og:image:type', name: 'og:image:type', content: this.entry.cover.match(/([^.]+)$/)[1] },
        { hid: 'description', name: 'description', content: this.entry.description },
        { hid: 'og:description', name: 'og:description', content: this.entry.description },
        { hid: 'og:url', name: 'og:url', content: this.$route.fullPath }
      ]
    }
  },
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
  methods: {
    openAlbum() {
      window.open(this.entry.album, '_blank')
    },
  },
}
</script>
