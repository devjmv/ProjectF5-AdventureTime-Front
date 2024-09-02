<script setup>
import Carrusel from '@/components/Carrusel.vue';
import RegisterUserInEventButtom from '@/components/RegisterUserInEventButtom.vue';
</script>

<template>
  <h1>Home</h1>
  <RegisterUserInEventButtom :eventId="1" :userId="1"/>
  <Carrusel />
</template>

<style>
</style>
