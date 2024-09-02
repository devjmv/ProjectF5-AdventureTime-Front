<script setup>
import { useAuthStore } from '@/stores/auth';
import { registerUserInEvent } from '@/stores/registerUserInEvent.js';
import { loginChange } from '../stores/loginChange';
import { ref } from 'vue';

const props = defineProps({
  available: Boolean,
  eventId: Number,
  userId: Number
})
const store = registerUserInEvent()
const authStore = useAuthStore();
const issubscribe = ref(false)

const modificarPropiedad = () => {
    if (loginChange.propiedad == false)
        loginChange.setPropiedad(true);
    else
        loginChange.setPropiedad(false);
};

async function subscribe() {
  try {
    const response = await store.subscribe(props.userId, props.eventId)
    if (response) {
      issubscribe.value = true
    }
    else
      console.log("There was a problem with the subscription on Event!");
  } catch (error) {
    console.log("Error trying to subscribe in Event, please try again.");
  }
}

async function unSubscribe() {
  try {
    const response = await store.unsubscribe(props.userId, props.eventId)
    if (response) {
      issubscribe.value = false
    }
    else
      console.log("There was a problem with the unsubscription in the Event!");
  } catch (error) {
    console.log("Error trying to unsubscribe of the Event, please try again.");
  }
}
</script>

<template>
  <button v-if="!available"
    class="px-4 py-2 text-sm text-center text-dark bg-gray-200 rounded-md disabled">
    full seats
  </button>
  <button v-if="available && !authStore.user.isAuthenticated" @click="modificarPropiedad"
    class="px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary">
    Log to subscribe
  </button>
  <button v-if="available && authStore.user.isAuthenticated && !issubscribe " @click="subscribe"
    class="px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary">
    Subscribe {{ eventId }}
  </button>
  <button v-if="available && authStore.user.isAuthenticated && issubscribe " @click="unSubscribe"
    class="px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary">
    Unsubscribe {{ eventId }}
  </button>
</template>