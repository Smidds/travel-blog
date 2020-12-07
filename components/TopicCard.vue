<template>
  <article
    class="bg-white dark:bg-secondary w-full overflow-hidden rounded-2xl shadow-md m-5 flex flex-col md:flex-row hover:shadow-xl focus-within:shadow-xl cursor-pointer md:h-40 border-primary-100 dark:border-primary-400 border-2 border-solid"
    @click="$emit('click')"
  >
    <img :src="coverPhoto" class="md:h-full md:w-48 object-cover" />
    <div class="p-3 pl-5 w-full flex flex-col justify-between items-start">
      <div>
        <h3 class="text-2xl mt-2 text-black dark:text-gray-200">{{ title }}</h3>
        <p class="mt-3 dark:text-gray-200">
          {{ description }}
        </p>
      </div>
      <button class="btn mt-10 md:mt-0">{{ buttonText }}</button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    coverPhoto: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    buttonText: { type: String, required: true },
  },
}
</script>

<style></style>
