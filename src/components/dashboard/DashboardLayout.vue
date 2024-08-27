<script setup>
import Sidebar from './Sidebar.vue'
import Navbar from '../NavBar.vue'
</script>


<template>
    <div class="flex h-screen bg-light font-nunito">
      <Sidebar />
  
      <div class="flex-1 flex flex-col overflow-hidden">
        <Navbar />
  
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-light">
          <div class="container mx-auto px-6 py-8">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </template>