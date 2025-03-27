// src/services/pedidosService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  async obtenerPedidos() {
    try {
      const response = await apiClient.get('/api/pedidos');
      return response.data.pedidos;
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
      throw error;
    }
  },
  
  // Puedes agregar más métodos según necesites
  async obtenerPedidoPorId(id) {
    try {
      const response = await apiClient.get(`/api/pedidos/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener pedido ${id}:`, error);
      throw error;
    }
  },

  async crearPedido(pedidoData) {
    try {
      const response = await apiClient.post('/api/pedidos', pedidoData);
      return response.data;
    } catch (error) {
      console.error('Error al crear pedido:', error);
      throw error;
    }
  }
}