<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { computed } from 'vue';

const route = useRoute();
const showNavbar = computed(() => route.path !== "/dashboard", "/forms");

console.log(showNavbar);

</script>

<template>
  <NavBar v-if="showNavbar" />
  <RouterView />
</template>