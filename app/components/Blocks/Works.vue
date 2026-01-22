<script setup>
import Heading from "../Elements/Heading.vue";
import WorkCard from "../Elements/WorkCard.vue";


const workData = await queryCollection('work').order('startDate', 'DESC').limit(2).all()
</script>

<template>
  <div class="relative bg-[#0a0a0a] py-12 md:py-3">
    
    <div
      class="hidden md:block absolute inset-0 z-0 opacity-20 pointer-events-none"
      style="background-image: radial-gradient(#3f3f46 1px, transparent 1px); background-size: 24px 24px;"
    ></div>

    <div class="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8">
      <Heading 
        heading="Work" 
        description="Things I have worked upon" 
        class="mb-10"
      />

      <div class="flex flex-col gap-8">
        <WorkCard
          v-for="(work, index) in workData"
          :key="index"
          v-bind="work"
          :isLast="index === workData.length - 1"
        />
      </div>
    </div>
  </div>
</template>