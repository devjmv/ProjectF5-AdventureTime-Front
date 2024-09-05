import RegisterEventRepository from "./RegisterEventRepository"

export default class RegisterEventService {

    #repo

    userid
    eventid

    constructor(userid, eventid) {
        this.#repo = new RegisterEventRepository()
        this.userid = userid
        this.eventid = eventid
    }

    async getRegisteredEvents(userId) {
        const response = await this.#repo.getRegisteredEvents(userId);
        return response;
    }

    async registerEvent() {
        const response = await this.#repo.registerEvent(this.userid, this.eventid)
        return response
    }

    async unRegisterEvent() {
        const response = await this.#repo.unRegisterEvent(this.userid, this.eventid)
        return response
    }
}