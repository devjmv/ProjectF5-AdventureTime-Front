<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IconLogo from './icons/IconLogo.vue'

const router = useRouter()
const name = ref('')
const password = ref('')
const passwordAgain = ref('')
const alertPass = ref(false)

function register() {
    if (password.value == passwordAgain.value) {
        alertPass.value = false;
        //aqui la funcionalidad de registrar, axios!!
    }
    else
        alertPass.value = true;
}
</script>
<template>
    <div class="w-full max-w-sm p-8 px-12 bg-white rounded-md shadow-md">
        <div class="flex items-center justify-center">
            <IconLogo />
            <span class="font-gloria text-2xl ml-3">Adventure Time</span>
        </div>

        <div class="flex items-center justify-center">
            <span class="text-2xl font-semibold text-gray-700">Register</span>
        </div>

        <form class="mt-4" @submit.prevent="register">
            <label class="block">
                <input v-model="name" type="name" placeholder="Name"
                    class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-tiffany rounded-md focus:ring-tiffany focus:outline-azulete focus:ring focus:ring-opacity-40">
            </label>

            <div v-if="alertPass" class="mt-4 font-regular relative block w-full rounded-lg bg-pink-500 p-4 text-base leading-5 text-white opacity-100"
                data-dismissible="alert">
                <div class="mr-12">Passwords do not match</div>
            </div>

            <label class="block mt-3">
                <input v-model="password" type="password" placeholder="Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-tiffany rounded-md focus:ring-tiffany focus:outline-azulete focus:ring focus:ring-opacity-40">
            </label>

            <label class="block mt-3">
                <input v-model="passwordAgain" type="password" placeholder="Repeat Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-tiffany rounded-md focus:ring-tiffany focus:outline-azulete focus:ring focus:ring-opacity-40">
            </label>

            <div class="mt-6">
                <button type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary">
                    Sign Up
                </button>
            </div>
            <div class="flex items-center justify-center mt-4">
                <a class="block text-sm text-verdigris fontme hover:underline" href="#">You are member? Sing
                    in</a>
            </div>
        </form>
    </div>
</template>