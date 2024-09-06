<script setup>
import { useAuthStore } from "@/stores/auth";
import Register from "../components/Register.vue"

const store = useAuthStore()

</script>

<template>
  <!-- <Login v-if="!store.user.isAuthenticated" /> -->
   <Register />
</template>

<style>
</style>
