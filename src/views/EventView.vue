<script setup>

import { registerEventStore } from '@/stores/registerEventStore';
import { useAuthStore } from '@/stores/auth';
import { computed, onMounted } from 'vue';

const eventStore = registerEventStore(); 
const authStore = useAuthStore();
const isLoading = computed(() => eventStore.isLoading);
const error = computed(() => eventStore.error);
const registeredEvents = computed(() => eventStore.registeredEvents);

onMounted(() => {
  if (authStore.user.id) {
    eventStore.fetchRegisteredEvents(authStore.user.id);
  }
});

</script>

<template>

  <div class="pb-40">
    <h1>Registered Events</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!isLoading && !error">
      <li v-for="(event, index) in registeredEvents" :key="index">
        <Card :id="event.id" :title="event.title" :eventDateTime="event.eventDateTime"
          :maxParticipants="event.maxParticipants" :participantsCount="event.participantsCount"
          :description="event.description" :imageUrl="event.imageUrl" :registered="event.registered" />
      </li>
    </ul>
  </div>

</template>

<style></style>
