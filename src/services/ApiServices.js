// src/services/apiService.js
import axios from 'axios';

const API_URL = 'postgresql://postgres:aSIYCALxPBZMXoHwWmVmJTbtljqWXBjr@turntable.proxy.rlwy.net:59883/railway'; // URL base de tu API

class ApiService {
    // Método genérico para obtener datos
    async getDatos() {
        try {
            const response = await axios.get(`${API_URL}/datos`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }
    /*
      // Puedes agregar más métodos para POST, PUT, DELETE, etc.
      async crearDato(dato) {
        try {
          const response = await axios.post(`${API_URL}/datos`, dato);
          return response.data;
        } catch (error) {
          console.error('Error al crear dato:', error);
          throw error;
        }
      }*/
}

export default new ApiService();