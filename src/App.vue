<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/event">Event</RouterLink>
        <RouterLink to="/dashboard">dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


