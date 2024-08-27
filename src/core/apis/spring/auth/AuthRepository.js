import axios from "axios"

export default class AuthRepository {

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_ENDPOINT
    }

    async login(credentials) {
        try {
            const response = await axios.get(this.baseUrl + '/login', {
                auth: {
                    "username": credentials.getUsername(),
                    "password": credentials.getPassword()
                },
                withCredentials: true
            })

            const data = await response.data

            return data;

        } catch (error) {
            return error.toJSON()
        }
    }

    async register(credentials) {
        const data = JSON.stringify({
            "username": credentials.getUsername(),
            "password": credentials.getPassword()
        });
        
        try {
            const response = await axios.post(this.baseUrl + '/register', data)

            const data = await response.data

            return data;

        } catch (error) {
            return error.toJSON()
        }
    }
}