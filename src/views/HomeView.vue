<script setup>
import Carrusel from '@/components/Carrusel.vue';
import RegisterIn from '@/components/RegisterIn.vue';
</script>

<template>
  <h1>Home</h1>
  <RegisterIn :available="true" :issubscribe="true" :eventId="1" :userId="2"/>
  <RegisterIn :available="true" :issubscribe="false" :eventId="1" :userId="2"/>
</template>

<style>
</style>
