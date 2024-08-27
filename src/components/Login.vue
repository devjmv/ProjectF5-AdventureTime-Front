<script setup>
import IconLogo from './icons/IconLogo.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'

const username = ref('')
const password = ref('')

const route = useRoute()
const router = useRouter()

const store = useAuthStore()

async function login() {
    const response = await store.login(username.value, password.value)

    if (response.message == 'Logged') {

        store.user.isAuthenticated = true
        store.user.username = response['username']
        store.user.role = response['roles']

        localStorage.setItem('username', response['username'])
        localStorage.setItem('role', response['roles'])
        localStorage.setItem('isAuthenticated', "true")

        const redirectPath = route.query.redirect || '/event'
        router.push(redirectPath)
    }
}

</script>
<template>
    <div class="w-full max-w-sm p-8 px-12 bg-white rounded-md shadow-md">
        <div class="flex items-center justify-center">
            <IconLogo />
            <span class="font-gloria text-2xl ml-3">Adventure Time</span>
        </div>

        <form class="mt-4" @submit.prevent="login">
            <label class="block">
                <input v-model="username" type="text" placeholder="User"
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-primary rounded-md focus:ring-primary focus:outline-secondary focus:ring focus:ring-opacity-20">
            </label>

            <label class="block mt-3">
                <input v-model="password" type="password" placeholder="Password"
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-primary rounded-md focus:ring-primary focus:outline-secondary focus:ring focus:ring-opacity-20">
            </label>

            <div class="mt-6">
                <button type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary hover:text-dark">
                    Sign In
                </button>
            </div>
        </form>
        <div class="flex items-center justify-center mt-4 hidden">
            <a class="block text-sm text-verdigris fontme hover:underline" href="#">You are not member? Sign Up</a>
        </div>
    </div>
</template>