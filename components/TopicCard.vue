<template>
  <article
    class="bg-white dark:bg-secondary w-full overflow-hidden rounded-2xl shadow-md m-5 flex flex-col md:flex-row hover:shadow-xl focus-within:shadow-xl cursor-pointer md:h-48 border-primary-100 dark:border-primary-400 border-2 border-solid"
    @click="$emit('click')"
  >
    <img :src="coverPhoto" class="md:h-full md:w-48 object-cover" />
    <div class="p-3 pl-5 w-full flex flex-col justify-between items-start">
      <div>
        <div class="mb-5">
          <h3 class="text-2xl mt-2 text-black dark:text-gray-200 flex-grow">{{ title }}</h3>
          <div v-if="datePosted" class="mt-2 text-gray-600 dark:text-primary-100">Posted: {{ datePosted }}</div>
        </div>
        <p class="mt-5 dark:text-gray-200">
          {{ description }}
        </p>
      </div>
      <button class="btn mt-10 md:mt-0">{{ buttonText }}</button>
    </div>
  </article>
</template>

<script>
import { format as formatDate } from 'date-fns'

export default {
  props: {
    coverPhoto: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    buttonText: { type: String, required: true },
    date: { type: Date, required: false }
  },
  computed: {
    datePosted() {
      return this.date ? formatDate(this.date, 'MMMM dd, yyyy') : null
    },
  }
}
</script>

<style></style>
