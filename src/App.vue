<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { computed } from 'vue';

const route = useRoute();
const hiddenPaths = ["/admin", "/admin/forms", "/admin/dashboard"];

const showNavbar = computed(() => {
  return !hiddenPaths.includes(route.path);
});

</script>

<template>
  <NavBar v-if="showNavbar" />
  <RouterView />
</template>
