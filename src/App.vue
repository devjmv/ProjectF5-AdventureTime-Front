<script setup>
import { RouterView, useRoute } from 'vue-router'
// import NavBar from './components/NavBar.vue';
import { computed } from "vue";

const route = useRoute();

const defaultLayout = 'default';

const layout = computed(() => `${route.meta.layout || defaultLayout}-layout`);
</script>

<template>
  <div id="app">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<!-- <template>
  <NavBar />
  <RouterView />
</template> -->
