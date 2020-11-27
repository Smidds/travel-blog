<template>
  <article
    v-if="adventure"
    class="main article"
  >
    <h1 class="article-title">{{ adventure.title }}</h1>
    <p class="mt-4">{{ adventure.description }}</p>
    <img
      class="cover-image"
      :src="adventure.cover"
    >
    <!-- <div
      class="block mt-8 mb-4"
      v-html="$md.render(adventure.body)"
    /> -->
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { adventure: payload }
    else
      return {
        adventure: await require(`~/assets/content/adventures/${params.adventure}.json`)
      }
  }
}
</script>
