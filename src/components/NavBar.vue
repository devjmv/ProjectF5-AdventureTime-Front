<script setup>
import { ref } from 'vue'
import IconLogo from './icons/IconLogo.vue';
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth';
import Login from './Login.vue';

const store = useAuthStore()
const mobileMenuOpen = ref(false)
const login = ref(false)
</script>

<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <RouterLink to="/home">
                    <span class="sr-only">Adventure Time</span>
                    <IconLogo />
                </RouterLink>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <IconLogo class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <RouterLink v-if="store.user.isAuthenticated" to="/home"
                    class="text-sm font-semibold leading-6 text-gray-900">
                    Home</RouterLink>
                <RouterLink v-if="store.user.isAuthenticated" to="/event"
                    class="text-sm font-semibold leading-6 text-gray-900">
                    Event</RouterLink>
                <RouterLink v-if="store.user.isAuthenticated && store.user.role == 'ROLE_ADMIN'" to="/dashboard"
                    class="text-sm font-semibold leading-6 text-gray-900">
                    dashboard
                </RouterLink>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <RouterLink v-if="store.user.isAuthenticated" to="/logout"
                    class="text-sm font-semibold leading-6 text-gray-900">
                    Logout <span aria-hidden="true">&rarr;</span></RouterLink>
                <RouterLink v-if="!store.user.isAuthenticated" to="/logout" @click="login = true"
                    class="text-sm font-semibold leading-6 text-gray-900">
                    Log in</RouterLink>
            </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <RouterLink to="/home">
                        <span class="sr-only">Adventure Time</span>
                        <IconLogo />
                    </RouterLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <IconLogo class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <RouterLink v-if="store.user.isAuthenticated" to="/home"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Home</RouterLink>
                            <RouterLink v-if="store.user.isAuthenticated" to="/event"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Event</RouterLink>
                            <RouterLink v-if="store.user.isAuthenticated && store.user.role == 'ROLE_ADMIN'"
                                to="/dashboard"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                dashboard
                            </RouterLink>
                        </div>
                        <div class="py-6">
                            <RouterLink v-if="store.user.isAuthenticated" to="/logout"
                                class="text-sm font-semibold leading-6 text-gray-900">
                                Logout <span aria-hidden="true">&rarr;</span></RouterLink>
                            <RouterLink v-if="!store.user.isAuthenticated" to="/logout" @click="login = true"
                                class="text-sm font-semibold leading-6 text-gray-900">
                                Log in</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    </header>
    <Login v-if="!store.user.isAuthenticated && login == true" />
</template>
