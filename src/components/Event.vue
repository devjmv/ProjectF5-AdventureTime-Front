<script setup>
import axios from 'axios';
import { ref } from 'vue';

const images = ref([]);

const fetchImages = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/home/allevent');
        images.value = response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};
</script>