import { defineStore } from "pinia";


export const useHomeEventStore = defineStore('homeEvent', {
    state: () => ({
        events: [],
        isLoading: false,
        error: null,
        currentPage: 1,
        pageSize: 10,
        totalEvents: 0,
    }),

    actions: {
        async fetchEvents(page = 1, size = 10) {
            this.isLoading = true;
            this.error = null;
            const eventService = new EventService();
            try {
                const data = await eventService.fetchEvents(page, size);
                this.events = data.events;
                this.totalEvents = data.totalEvents;
                this.currentPage = page;
                this.pageSize = size;
            } catch (error) {
                this.error = 'Error fetching events' + error.message;
                console.error(this.error);
            } finally {
                this.isLoading = false;
            }
        },

        async fetchEventById(id) {
            this.isLoading = true;
            this.error = null;
            const eventService = new EventService();
            try {
                return await eventService.fetchEventsById(id);
            } catch (error) {
                this.error = 'Error fetching event by id' + error.message;
                console.error(this.error);
            } finally {
                this.isLoading = false;
            }
        },

        async addEvent(event) {
            this.isLoading = true;
            this.error = null;
            const eventService = new EventService();
            try {
                const newEvent = await eventService.addEvent(event);
                this.fetchEvents(this.currentPage, this.pageSize);
                return newEvent;
            } catch (error) {
                this.error = 'Error adding event' + error.message;
                throw error;
            } finally {
                this.isLoading = false;
            }
        },

        async updateEvent(id, event) {
            this.isLoading = true;
            this.error = null;
            const eventService = new EventService();
            try {
                const updatedEvent = await eventService.updateEvent(id, event);
                this.fetchEvents(this.currentPage, this.pageSize);
                return updatedEvent;
            } catch (error) {
                this.error = 'Error updating event' + error.message;
                throw error;
            } finally {
                this.isLoading = false;
            }
        },

        async deleteEvent(id) {
            this.isLoading = true;
            this.error = null;
            const eventService = new EventService();
            try {
                await eventService.deleteEvent(id);
                this.fetchEvents(this.currentPage, this.pageSize);
            } catch (error) {
                this.error = 'Error deleting event' + error.message;
                throw error;
            } finally {
                this.isLoading = false;
            }
        }
    }
})