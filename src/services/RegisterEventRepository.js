import axios from "axios"

export default class AuthRepository {

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_ENDPOINT
    }

    async registerEvent(userid, eventid) {
        try {
            const response = await axios.post(this.baseUrl + '/rutaRegisterEvent', {
                userId: userid,
                eventId: eventid
            })
            /* axios.get(this.baseUrl + '/rutaRegisterEvent', {
                data: {
                    userId: userid,
                    eventId: eventid
                },
            }) */

            const data = await response.data

            return data;

        } catch (error) {
            return error.toJSON()
        }
    }

    async unRegisterEvent(userid, eventid) {
        try {
            const response = await axios.post(this.baseUrl + '/rutaUnRegisterEvent', {
                userId: userid,
                eventId: eventid
            })
            /* axios.get(this.baseUrl + '/rutaRegisterEvent', {
                data: {
                    userId: userid,
                    eventId: eventid
                },
            }) */

            const data = await response.data

            return data;

        } catch (error) {
            return error.toJSON()
        }
    }
}