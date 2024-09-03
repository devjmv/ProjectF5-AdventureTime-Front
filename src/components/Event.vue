<script setup>

</script>

<template>

    <div>
        <h1>Events</h1>
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <ul v-if="!isLoading && !error">
            <li v-for="(event, index) in eventsToShow" :key="index">
                <Card :id="event.id" :title="event.title" :eventDateTime="event.eventDateTime"
                    :maxParticipants="event.maxParticipants" :description="event.description"
                    :imageUrl="event.imageUrl" />
            </li>
        </ul>
    </div>

</template>

<style scoped></style>