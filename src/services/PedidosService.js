// src/services/pedidosService.js
import axios from 'axios';

const API_BASE_URL = 'https://tlaixrepo-production.up.railway.app'; // Cambia esto por tu URL de producción

export default {
  async obtenerPedidos() {
    try {
      const response = await axios.get(`${VITE_API_URL}/pedidos`);
      return response.data.pedidos;
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
      throw error;
    }
  }
}