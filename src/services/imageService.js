import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

const ImageService = {
  async uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${BASE_URL}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data; 
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      throw error;
    }
  },
};

export default ImageService;
