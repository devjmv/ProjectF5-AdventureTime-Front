import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import AuthService from "../core/apis/spring/auth/AuthService";
import Credentials from "../core/models/Credentials";
import RegisterService from "@/core/apis/spring/auth/RegisterService";


export const useAuthStore = defineStore('auth', () => {

    const user = ref(
        {
            id:'',
            username: '',
            role: '',
            isAuthenticated: false
        }
    )

    function login(username, password) {

        const credentials = new Credentials(username, password)
        const service = new AuthService(credentials)
        return service.login()

    }

    function register(username, password) {

        const credentials = new Credentials(username, password)
        const service = new RegisterService(credentials)
        return service.register()

    }

    return { user, login, register }
})