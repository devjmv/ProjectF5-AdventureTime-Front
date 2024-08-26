<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IconLogo from './icons/IconLogo.vue'

const router = useRouter()
const name = ref('')
const password = ref('')

function register() {
    router.push('/login')
}
</script>
<template>
    <div class="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        <div aria-hidden="true" class="fixed inset-0 w-full h-full bg-black/50 cursor-pointer">
            <div class="flex items-center justify-center h-screen px-6">
                <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
                    <div class="flex items-center justify-center">
                        <IconLogo />
                        <span class="text-2xl font-semibold text-gray-700">Adventure Time</span>
                    </div>

                    <form class="mt-4" @submit.prevent="register">
                        <label class="block">
                            <input v-model="name" type="name" placeholder="Name"
                                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-tiffany rounded-md focus:ring-tiffany focus:outline-azulete focus:ring focus:ring-opacity-40">
                        </label>

                        <label class="block mt-3">
                            <input v-model="password" type="password" placeholder="Password"
                                class="block w-full mt-4 border-tiffany rounded-md focus:border-tiffany focus:ring focus:ring-opacity-40 focus:ring-tiffany">
                        </label>

                        <label class="block mt-3">
                            <input v-model="password" type="password" placeholder="Repeat Password"
                                class="block w-full mt-4 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
                        </label>

                        <div class="mt-6">
                            <button type="submit"
                                class="w-full px-4 py-2 text-sm text-center text-white bg-verdigris rounded-md focus:outline-none hover:bg-tiffany">
                                Sign Up
                            </button>
                        </div>
                        <div class="flex items-center justify-center mt-4">
                            <a class="block text-sm text-verdigris fontme hover:underline" href="#">You are member? Sing
                                in</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>