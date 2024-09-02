<script setup>
import { registerUserInEvent } from '@/stores/registerUserInEvent';
import { ref } from 'vue';

defineProps({
  eventId: {
    type: Number,
    required: true
  },
  userId: {
    type: Number,
    required: true
  }
})

const textAlert = ref("")

const store = registerUserInEvent()

async function subscribe() {
    try {
        const response = await store.register(userId, eventId)
        console.log(response);
        
        if (response.message == "Register") {
            
        }
        else
            textAlert.value = "There was a problem with the registration!";

    } catch (error) {
        textAlert.value = "Error trying to register, please try again.";
    }
}
</script>

<template>
    <button @click="subscribe"
        class="px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary">
        Subscribe
    </button>
</template>