<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  eventDateTime: {
    type: String,
    required: true
  },
  maxParticipants: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});
</script>

<template>

  <div class="flex flex-col items-center bg-light-50 border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl
    hover:bg-gray-100">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      src="../assets/img/card_globos.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="font-poppins font-bold mb-3 text-xl tracking-tight text-gray-900 ">50+ Best creative website
        themes & templates</h5>
      <p class="mb-4 mt-4 font-poppins text-gray-700 text-sm">Here are the biggest enterprise technology
        acquisitions of 2021 so far, in reverse chronological order.</p>
      <div class="flex justify-end mt-10">
        <button
          class="w-32 px-4 py-3 mr-9 text-m text-center text-light bg-primary rounded-full focus:outline-none hover:bg-secondary hover:text-dark">Register</button>
      </div>
    </div>
  </div>

</template>

<style scoped></style>