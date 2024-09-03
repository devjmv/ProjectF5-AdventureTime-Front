<template>
  <div class="relative w-full h-[400px] overflow-hidden flex justify-center items-center">
    <div class="relative w-full h-full flex justify-center items-center">
      <button @click="prevSlide" class="absolute top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 cursor-pointer z-10 left-64">
        Prev
      </button>
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="absolute inset-0 flex justify-center items-center transition-opacity duration-500"
        :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
      >
        <img :src="image.imageUrl" :alt="image.title" class="max-h-full max-w-full object-contain rounded-[20px]" />
        <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white bg-black bg-opacity-50 p-2 rounded-[10px]">
          <h3>{{ image.title }}</h3>
          <p>{{ image.description }}</p>
        </div>
      </div>
      <button @click="nextSlide" class="absolute top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 cursor-pointer z-10 right-64">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const images = ref([]);
const currentIndex = ref(0);

const fetchImages = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/event/featured');
    images.value = response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

onMounted(async () => {
  await fetchImages();
  setInterval(nextSlide, 3000);
});
</script>