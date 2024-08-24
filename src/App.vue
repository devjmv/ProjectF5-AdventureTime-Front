<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const store = useAuthStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/home">Home</RouterLink>--
        <RouterLink v-if="store.user.isAuthenticated" to="/event">Event</RouterLink>--
        <RouterLink v-if="store.user.isAuthenticated" to="/dashboard">dashboard</RouterLink>--
        <RouterLink v-if="store.user.isAuthenticated" to="/logout">Logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


