<template>
  <div class="carousel-container">
    <div class="carousel">
      <button @click="prevSlide" class="carousel-button prev">Prev</button>
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="carousel-slide"
        :class="{ active: index === currentIndex }"
      >
        <img :src="image.imageUrl" :alt="image.title" />
        <div class="description">
          <h3>{{ image.title }}</h3>
          <p>{{ image.description }}</p>
        </div>
      </div>
      <button @click="nextSlide" class="carousel-button next">Next</button>
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
    const response = await axios.get('http://localhost:8080/api/v1/home/eventfeatured');
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
  setInterval(nextSlide, 2000);
});
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  display: flex;
}

img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 20px;
}

.description {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 1;
}

.carousel-button.prev {
  left: 250px;
}

.carousel-button.next {
  right: 250px;
}
</style>
