import axios from 'axios';


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


// Interceptor simple para manejar estructura ApiResponse
api.interceptors.response.use(
    (response) => {
// Si la API envuelve todo en ApiResponse, devolvemos response.data
        return response.data;
    },
    (error) => {
// Pasamos el error hacia arriba, normalizando si viene en ApiResponse
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    }
);


export default api;