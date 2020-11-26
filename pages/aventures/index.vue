<template>
  <main
    v-if="adventures"
    class="main"
  >
    <h1 class="title text-left">Adventures</h1>
    <ul
      v-for="(adventure, index) in adventures"
      :key="index"
      class="articles"
    >
      <nuxt-link
        class="article article--clickable"
        :to="`projects/${adventure.slug}`"
      >
        <h3 class="article-title">{{ adventure.title }}</h3>
        <div class="mt-4 mb-2">
          <p class="inline">{{ adventure.description }}</p>
        </div>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    adventures() {
      return this.$store.state.adventures
    }
  }
}
</script>
