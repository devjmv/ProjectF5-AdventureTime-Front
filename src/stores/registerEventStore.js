import RegisterEventService from "@/services/RegisterEventService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const registerEventStore = defineStore("event", () => {
  const events = ref([]);
  const registeredUsers = ref({});
  const isLoading = ref(false);
  const error = ref(null);

  const service = new RegisterEventService();

  async function fetchAllEvents() {
    isLoading.value = true;
    error.value = null;
    try {
      events.value = await service.getAllEvents();
      for (const event of events.value) {
        registeredUsers.value[event.id] = await service.getRegisteredUsers(event.id);
      }
    } catch (err) {
      error.value = "Error fetching events: " + err.message;
      console.error(error.value);
    } finally {
      isLoading.value = false;
    }
  }

  return { events, registeredEvents, isLoading, error, fetchAllEvents };
});