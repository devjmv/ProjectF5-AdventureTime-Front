<script setup>

import { registerEventStore } from '@/stores/registerEventStore';
import { computed, onMounted } from 'vue';

const eventStore = registerEventStore(); 
const isLoading = computed(() => eventStore.isLoading);
const error = computed(() => eventStore.error);
const events = computed(() => eventStore.events);
const registeredUsers = computed(() => eventStore.registeredUsers);

onMounted(() => {
  eventStore.fetchAllEvents();
});

</script>

<template>

  <div class="pb-40">
    <h1>Registered Events</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!isLoading && !error">
      <li v-for="(event, index) in events" :key="index">
        <Card :id="event.id" :title="event.title" :eventDateTime="event.eventDateTime"
          :maxParticipants="event.maxParticipants" :participantsCount="event.participantsCount"
          :description="event.description" :imageUrl="event.imageUrl" :registered="event.registered" />
          <ul>
          <li v-for="(user, userIndex) in registeredUsers[event.id]" :key="userIndex">
            {{ user.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<style></style>


 