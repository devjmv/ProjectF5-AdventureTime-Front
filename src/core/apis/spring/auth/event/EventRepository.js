import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default class EventRepository {
    async fetchEvents(page = 1, size = 10) {
        try {
            const response = await api.get('/event/all', { page, size });
            return response.data;
        } catch (error) {
            console.error('Error fetching events', error);
            throw error;
        }
    }

    async fetchEventById(id) {
        try {
            const response = await api.get(`/event/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching event by id', error);
            throw error;
        }
    }

    async addEvent(event) {
        try {
            const response = await api.post('/event/add', event);
            return response.data;
        } catch (error) {
            console.error('Error adding event', error);
            throw error;
        }
    }

    async updateEvent(id, event) {
        try {
            const response = await api.put(`/event/update/${id}`, event);
            return response.data;
        } catch (error) {
            console.error('Error updating event:', error);
            throw error;
        }
    }

    async deleteEvent(id) {
        try {
            const response = await api.delete(`/event/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting event', error);
            throw error;
        }
    }
}