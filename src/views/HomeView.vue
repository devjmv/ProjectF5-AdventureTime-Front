<script setup>
import { useAuthStore } from "@/stores/auth";
import Login from "../components/Login.vue"

const store = useAuthStore()

</script>

<template>
  <h1>Home</h1>
  <Login v-if="!store.user.isAuthenticated" />
</template>

<style>
</style>
