<script setup lang="ts">
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

    await console.log(response);
    
    if (response.message == 'Logged') {
        store.user.isAuthenticated = true
        const redirectPath = route.query.redirect || '/private'
        router.push(redirectPath)
    }
}
</script>
<template>
    <div class="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        <div aria-hidden="true" class="fixed inset-0 w-full h-full bg-black/50 cursor-pointer">
            <div class="flex items-center justify-center h-screen px-6">
                <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
                    <div class="flex items-center justify-center">
                        <IconLogo/>
                        <span class="text-2xl font-semibold text-gray-700">Adventure Time</span>
                    </div>

                    <form class="mt-4" @submit.prevent="login">
                        <label class="block">
                            <input v-model="username" type="text" placeholder="User"
                                class="block w-full mt-4 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
                        </label>

                        <label class="block mt-3">
                            <input v-model="password" type="password" placeholder="Password"
                                class="block w-full mt-4 border-tiffany rounded-md focus:border-tiffany focus:ring focus:ring-opacity-40 focus:ring-tiffany">
                        </label>

                        <div class="mt-6">
                            <button type="submit"
                                class="w-full px-4 py-2 text-sm text-center text-white bg-verdigris rounded-md focus:outline-none hover:bg-tiffany">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div class="flex items-center justify-center mt-4">
                        <a class="block text-sm text-verdigris fontme hover:underline" href="#">You are not member? Sing Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>