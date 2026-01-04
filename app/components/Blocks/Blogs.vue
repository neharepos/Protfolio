<script setup>
import Cards from '../Elements/Cards.vue';
import Heading from '../Elements/Heading.vue';

const blogData = [
  {
    title: "Understanding Vue 3",
    date: "Jan 2025",
    description: "A beginner-friendly guide to Vue 3 and Composition API."
  },
  {
    title: "Tailwind CSS Tips",
    date: "Feb 2025",
    description: "Useful Tailwind tricks to build responsive UIs faster."
  }
]
</script>

<template>
  <div class="bg-[#0a0a0a] min-h-screen">
    <div class="text-white ml-4">
      <Heading
        heading="Blogs"
        description="Things I have written recently"
      />
    </div>
    <div class="ml-4 mt-4">
      <Cards
        v-for="(blog, index) in blogData"
        :key="index"
        :title="blog.title"
        :date="blog.date"
        :description="blog.description"
      />
    </div>
    <h3
      class="flex ml-6 mt-4 text-blue-500 cursor-pointer hover:underline"
    >
      View all →
    </h3>

  </div>
</template>
