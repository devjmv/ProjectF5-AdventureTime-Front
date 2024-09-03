import EventRepository from "./EventRepository";


export default class EventService {
    constructor() {
        this.repository = new EventRepository();
    }

    async fetchEvents(page, size) {
        return await this.repository.fetchEvents(page, size);
    }

    async fetchEventsById(id) {
        return await this.repository.fetchEventById(id);
    }

    async addEvent(event) {
        return await this.repository.addEvent(event);
    }

    async updateEvent(id, event) {
        return await this.repository.updateEvent(id, event);
    }

    async deleteEvent(id) {
        return await this.repository.deleteEvent(id);
    }
}