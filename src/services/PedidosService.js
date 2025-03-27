// src/services/pedidosService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  async obtenerPedidos() {
    try {
      const response = await axios.get(`${API_BASE_URL}/pedidos`);
      return response.data.pedidos;
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
      throw error;
    }
  }
}