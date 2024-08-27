<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useEventStore } from './../../stores/eventStore.js';

const props = defineProps({
  isVisible: Boolean,
  event: Object
});

const emit = defineEmits(['update:event', 'close']);

const eventStore = useEventStore();
const types = ref([]);
const categories = ref([]);
const isSubmitting = ref(false);

const isEditMode = computed(() => props.event !== null);
const event = ref({ 
  title: '',
  typeName: '',
  date: '',
  category: '',
  description: ''
});

watch(() => props.event, (newValue) => {
  if (newValue) {
    event.value = { ...newValue };
  } else {
    event.value = { 
      title: '',
      typeName: '',
      date: '',
      category: '',
      description: ''
    };
  }
}, { immediate: true });

const fetchData = async () => {
  if (eventStore.types.length === 0) {
    await eventStore.fetchTypes();
    types.value = eventStore.types;
  }
  if (eventStore.categories.length === 0) {
    await eventStore.fetchCategories();
    categories.value = eventStore.categories;
  }
};

const submitForm = async () => {
  isSubmitting.value = true;
  try {
    if (isEditMode.value) {
      await eventStore.updateEvent(event.value.id, event.value);
    } else {
      await eventStore.addEvent(event.value);
    }
    emit('update:event');
    closeModal();
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};

const closeModal = () => {
  emit('close');
};

onMounted(() => {
  fetchData();
});
</script>

<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <!-- Header -->
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-2xl font-bold text-gray-950">{{ isEditMode ? 'Edit Event' : 'Add Event' }}</h2>
          <button @click="closeModal" class="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
  
        <!-- Form -->
        <form @submit.prevent="submitForm" class="p-4">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-6">
            <!-- Title -->
            <div>
              <label for="title" class="text-gray-700 font-semibold">Title *</label>
              <input v-model="event.title" id="title" type="text" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-400 rounded-md focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
  
            <!-- Description -->
            <div class="sm:col-span-2">
              <label for="description" class="text-gray-700 font-semibold">Description *</label>
              <textarea v-model="event.description" id="description" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-400 rounded-md focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
            </div>
  
            <!-- Image URL -->
            <div class="sm:col-span-2">
              <label for="imageUrl" class="text-gray-700 font-semibold">Image URL *</label>
              <input v-model="event.imageUrl" id="imageUrl" type="text" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-400 rounded-md focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
  
            <!-- Event Date and Time -->
            <div class="sm:col-span-2">
              <label for="eventDateTime" class="text-gray-700 font-semibold">Event Date & Time *</label>
              <input v-model="event.eventDateTime" id="eventDateTime" type="datetime-local" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-400 rounded-md focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
  
            <!-- Max Participants -->
            <div>
              <label for="maxParticipants" class="text-gray-700 font-semibold">Max Participants *</label>
              <input v-model="event.maxParticipants" id="maxParticipants" type="number" required min="1" class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-400 rounded-md focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
  
            <!-- Is Available -->
            <div>
              <label for="isAvailable" class="text-gray-700 font-semibold">Is Available *</label>
              <select v-model="event.isAvailable" id="isAvailable" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-400 rounded-md focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
  
            <!-- Is Featured -->
            <div>
              <label for="isFeatured" class="text-gray-700 font-semibold">Is Featured *</label>
              <select v-model="event.isFeatured" id="isFeatured" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-400 rounded-md focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
  
          <!-- Footer -->
          <div class="flex justify-end mt-4 space-x-4">
            <button type="button" @click="closeModal" class="px-4 py-2 text-gray-700 bg-transparent border-2 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white">Cancel</button>
            <button type="submit" :disabled="isSubmitting" class="px-4 py-2 text-white bg-gray-700 border-2 border-gray-700 rounded-full hover:bg-transparent hover:text-gray-700">
              {{ isEditMode ? 'Save' : 'Save' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>