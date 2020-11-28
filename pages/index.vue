<template>
  <div class="main flex flex-col items-center justify-center">
    <div class="h-64 w-full relative shadow-2xl rounded-3xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        class="h-full w-full object-cover"
      />
      <div
        class="title-text bg-white bg-opacity-50 border-t-2 border-b-2 border-solid border-gray-300 block w-full absolute text-7xl font-bold text-white stroke-1 shadow-2xl text-center"
      >
        All Adventures
      </div>
    </div>
    <div class="flex flex-col items-center mt-10 -mx-8 w-full">
      <topic-card
        v-for="(adventure, index) in adventures"
        :key="index"
        :cover-photo="adventure.cover"
        :title="adventure.title"
        :description="adventure.description"
        :slug="adventure.title"
        @click="openAdventure(adventure)"
      />
    </div>
  </div>
</template>

<script>
import TopicCard from '@/components/TopicCard'

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  components: {
    TopicCard,
  },
  async asyncData({ store }) {
    return {
      adventures: store.state.adventures,
    }
  },
  methods: {
    openAdventure({ slug }) {
      alert('Trying')
      this.$router.push({ name: 'adventure', params: { adventure: slug } })
    },
  },
}
</script>

<style lang="postcss" scoped>
.title-text {
  -webkit-text-stroke: 2px black;
  top: 35%;
}
</style>