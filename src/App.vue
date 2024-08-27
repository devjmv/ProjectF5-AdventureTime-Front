<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { computed } from 'vue';

const route = useRoute();
const hiddenPaths = ["/dashboard", "/dashboard/forms", "/dashboard/dashboard"];

const showNavbar = computed(() => {
  return !hiddenPaths.includes(route.path);
});

console.log(showNavbar.value);

</script>

<template>
  <NavBar v-if="showNavbar" />
  <RouterView />
</template>
