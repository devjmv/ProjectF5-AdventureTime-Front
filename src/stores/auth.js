import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import AuthService from "../core/apis/spring/auth/AuthService";
import Credentials from "../core/models/Credentials";


export const useAuthStore = defineStore('auth', () => {

    const user = ref(
        {
            username: '',
            role: '',
            isAuthenticated: false
        }
    )
    
    if (localStorage.getItem("app_user")) {
        user.username = localStorage.getItem("username");
        user.role = localStorage.getItem("role");
        user.isAuthenticated = localStorage.getItem("isAuthenticated");
    }

    function login(username, password) {

        const credentials = new Credentials(username, password)
        const service = new AuthService(credentials)
        return service.login()

    }

    return { user, login }
})