import RegisterEventService from "@/services/RegisterEventService";
import { defineStore } from "pinia";

export const registerEventStore = defineStore("event", () => {
  const registeredEvents = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  async function fetchRegisteredEvents(userId) {
    isLoading.value = true;
    error.value = null;
    try {
      const service = new RegisterEventService();
      registeredEvents.value = await service.getRegisteredEvents(userId);
    } catch (err) {
      error.value = "Error fetching registered events: " + err.message;
      console.error(error.value);
    } finally {
      isLoading.value = false;
    }
  }

  return { registeredEvents, isLoading, error, fetchRegisteredEvents };
});