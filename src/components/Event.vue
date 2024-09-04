<script setup>
import { useHomeEventStore } from '@/stores/homeEventStore';
import { computed, onMounted } from 'vue';
import Card from './Card.vue';

const eventStore = useHomeEventStore();

onMounted(() => {
    eventStore.fetchEvents();
});

const isLoading = computed(() => eventStore.isLoading);
const error = computed(() => eventStore.error);
const eventsToShow = computed(() => eventStore.events);
const currentPage = computed(() => eventStore.currentPage);
const totalPages = computed(() => eventStore.totalPages);

const goToPage = (page) => {
    if (page >= 0 && page < totalPages.value) {
        eventStore.fetchEvents(page, eventStore.pageSize);
    }
};
</script>

<template>
    <div class="pb-40">
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <ul v-if="!isLoading && !error">
            <li v-for="(event, index) in eventsToShow" :key="index">
                <Card :id="event.id" :title="event.title" :eventDateTime="event.eventDateTime"
                    :maxParticipants="event.maxParticipants" :participantsCount="event.participantsCount"
                    :description="event.description" :imageUrl="event.imageUrl" :registered="event.registered" />
            </li>
        </ul>

        <div v-if="!isLoading && !error" class="pagination-controls">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 0">
                Previous
            </button>
            <span>Page {{ currentPage + 1 }} of {{ totalPages }}</span>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages - 1">
                Next
            </button>
        </div>
    </div>
</template>

<style scoped>
.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.pagination-controls button {
    margin: 0 10px;
}
</style>
<!-- <script setup>
import { useHomeEventStore } from '@/stores/homeEventStore';
import { computed, onMounted } from 'vue';
import Card from './Card.vue';

const eventStore = useHomeEventStore();

onMounted(() => {
    eventStore.fetchEvents();
});

const isLoading = computed(() => eventStore.isLoading);
const error = computed(() => eventStore.error);
const eventsToShow = computed(() => eventStore.events);

</script>

<template>

    <div class="pb-40">
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <ul v-if="!isLoading && !error">
            <li v-for="(event, index) in eventsToShow" :key="index">
                <Card :id="event.id" :title="event.title" :eventDateTime="event.eventDateTime"
                    :maxParticipants="event.maxParticipants" :participantsCount="event.participantsCount"
                    :description="event.description" :imageUrl="event.imageUrl" :registered="event.registered" />
            </li>
        </ul>
    </div>

</template>

<style scoped></style> -->