import axios from "axios";
import { defineStore } from "pinia";


const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export const useHomeEventStore = defineStore('homeEvent', {
    state: () => ({
        events: [],
        isLoading: false,
        error: null,
        currentPage: 0,
        pageSize: 5,
        totalPages: 0,
    }),

    actions: {
        async fetchEvents(page = 0, size = 5) {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await axios.get(`${BASE_URL}/event/allhome`, {
                    params: {
                        page: page,
                        size: size,
                    },
                });
                this.events = response.data.content;
                this.currentPage = response.data.number;
                this.pageSize = response.data.size;
                this.totalPages = response.data.totalPages;
            } catch (error) {
                this.error = 'Error fetching events: ' + error.message;
                console.error(this.error);
            } finally {
                this.isLoading = false;
            }
        },
    },
});
/* export const useHomeEventStore = defineStore('homeEvent', {
    state: () => ({
        event: [],
        isLoading: false,
        error: null,
    }),

    actions: {
        async fetchEvents() {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await axios.get(`${BASE_URL}/event/all`);
                this.events = response.data;
            } catch (error) {
                this.error = 'Error fetching events: ' + error.message;
                console.error(this.error);
            } finally {
                this.isLoading = false;
            }
        }
    }
}) */