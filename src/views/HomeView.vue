<script setup>
import CardEvent from '@/components/CardEvent.vue';
import background from '@/assets/img/background.webp';
</script>

<template>
  <div class="h-screen w-screen hidden bg-cover lg:block flex justify-center items-center"
  :style="{ backgroundImage: `url(${background})` }">
    <CardEvent />
  </div>
</template>

<style scoped>
</style>
