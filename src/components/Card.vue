<script setup>

import { defineProps } from 'vue';
import RegisterIn from './RegisterIn.vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

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
  participantsCount: {
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

  <div
    class="flex flex-col md:flex-row items-center justify-center bg-light-50 border-gray-200 rounded-lg shadow md:max-w-4xl hover:bg-gray-100 mx-auto">
    <img class="object-cover w-full h-96 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-s-lg"
      src="../assets/img/card_globos.jpg" alt="">
    <div class="flex flex-col justify-center items-center p-4 leading-normal text-center">
      <h5 class="font-poppins font-bold mb-3 text-xl tracking-tight text-gray-900">
        50+ Best creative website themes & templates
      </h5>
      <p class="mb-4 mt-4 font-poppins text-gray-700 text-sm">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <div class="flex justify-center mt-10 w-full">
        <RegisterIn :available="maxParticipants == participantsCount ? false : true" :issubscribe="false" :eventId="props.id" :userId="authStore.user.id" />
      </div>
    </div>
  </div>

</template>

<style scoped></style>