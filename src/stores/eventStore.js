import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/event";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic " + btoa("pepa:password"),
  },
});

export const useEventStore = defineStore("event", {
  state: () => ({
    events: [],
    filteredEvents: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchEvents() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.get("/all");
        this.event = response.data;
        this.filteredEvents = response.data;
      } catch (error) {
        this.error = "Error fetching events: " + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchFeatured() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.get("/featured");
        this.event = response.data;
      } catch (error) {
        this.error = "Error fetching types: " + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    async addEvent(newEvent) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.post("/add", newEvent);
        this.fetchEvents();
        return response.data;
      } catch (error) {
        this.error = "Error adding event: " + error.message;
        console.error(this.error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async updateEvent(id, updatedEvent) {
      this.isLoading = true;
      this.error = null;
      try {
        await api.put(`/update/${id}`, updatedEvent);
        this.fetchEvents();
      } catch (error) {
        this.error = "Error updating event: " + error.message;
        console.error(this.error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async deleteEvent(id) {
      this.isLoading = true;
      try {
        await api.delete(`/delete/${id}`);
        this.fetchEvents();
      } catch (error) {
        this.error = "Error deleting event: " + error.message;
        console.error(this.error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    applyFilters(events) {
        if (this.selectedFilters.length === 0) {
        return events; 
      } else {
        return events.filter(event =>
          this.selectedFilters.includes(event.featured) 
        );
      }
    },
  },
});