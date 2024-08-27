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
        try {
            // Asegúrate de que la URL esté entre comillas
            const response = await axios.post(this.baseUrl + '/register', {
                "username": credentials.getUsername(),
                "password": btoa(credentials.getPassword())
            })

            return response.data;
    
        } catch (error) {
            console.log('Error during registration:', error);
            return error.toJSON();
        }
    }
}