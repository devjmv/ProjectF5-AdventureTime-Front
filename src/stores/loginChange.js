import { reactive, ref } from 'vue';

export const loginChange = reactive({
    // Propiedades compartidas
    login: ref(false),
    register: ref(false),

    setLogin(nuevoValor) {
        this.login = nuevoValor;
        return nuevoValor
    },

    setRegister(nuevoValor) {
        this.register = nuevoValor;
        return nuevoValor
    }
})