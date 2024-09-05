<script setup>
import { registerEventStore } from '@/stores/registerEventStore';
import { computed, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const eventStore = registerEventStore();
const numero = Number(authStore.user.id);

onMounted(() => {
  eventStore.fetchEvents();
});

const isLoading = computed(() => eventStore.isLoading);
const error = computed(() => eventStore.error);
const eventsToShow = computed(() => eventStore.events);

</script>

<template>
  <div class="pb-40 pt-10 w-full bg-background-eventuser bg-center bg-no-repeat bg-fixed bg-cover">
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!isLoading && !error">
      <li v-for="(event, index) in eventsToShow" :key="index">
        <Card v-if="event.registered.some(num => num == numero)" :id="event.id" :title="event.title"
          :eventDateTime="event.eventDateTime" :maxParticipants="event.maxParticipants"
          :participantsCount="event.participantsCount" :description="event.description" :imageUrl="event.imageUrl"
          :registered="event.registered" />
        <ul>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style></style>