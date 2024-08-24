<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'

const router = useRouter()

const store = useAuthStore()

function logout() {

    store.user.isAuthenticated = false;
    store.user.username = "";
    store.user.role = "";

    localStorage.clear();
    //clear cookie

    const redirectPath = '/home';
    router.push(redirectPath);
}

logout()

</script>
<template>
    <main>
    </main>
</template>