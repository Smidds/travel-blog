<template>
  <div
    class="w-full overflow-hidden rounded-2xl shadow-md m-5 flex flex-row hover:shadow-xl focus-within:shadow-xl cursor-pointer h-40"
    @click="$emit('click')"
  >
    <img :src="coverPhoto" class="h-full w-48 object-cover" />
    <div class="p-3 w-full flex flex-col justify-between items-start">
      <div>
        <h3 class="text-2xl mt-2 text-black">{{ title }}</h3>
        <p class="mt-3">
          {{ description }}
        </p>
      </div>
      <button class="btn">See Journal Entries</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coverPhoto: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
  },
}
</script>

<style></style>
