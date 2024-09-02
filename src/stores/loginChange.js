import { reactive, ref } from 'vue';

export const loginChange = reactive({
    // Propiedades compartidas
    propiedad: ref(false),

    // Funciones para modificar las propiedades
    setPropiedad(nuevoValor) {
        this.propiedad = nuevoValor;
        return nuevoValor
    }
})