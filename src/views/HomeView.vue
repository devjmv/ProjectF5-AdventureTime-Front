<script setup>
import Carrusel from '@/components/Carrusel.vue';
import RegisterIn from '@/components/RegisterIn.vue';
</script>

<template>
  <h1>Home</h1>
  <RegisterIn :available="true" :eventId="1" :userId="3"/>
  <RegisterIn :available="false" :eventId="2" :userId="1"/>
</template>

<style>
</style>
