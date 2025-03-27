<template>
    <div class="pedidos-container">
      <h1 class="text-2xl font-bold mb-4">Lista de Pedidos</h1>
      
      <div v-if="loading" class="text-center">
        Cargando pedidos...
      </div>
      
      <div v-else-if="error" class="text-red-500">
        {{ error }}
      </div>
      
      <table v-else class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="border p-2">ID</th>
            <th class="border p-2">Nombre</th>
            <th class="border p-2">Fecha</th>
            <th class="border p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="pedido in pedidos" 
            :key="pedido.id" 
            class="hover:bg-gray-100"
          >
            <td class="border p-2">{{ pedido.id }}</td>
            <td class="border p-2">{{ pedido.nombre }}</td>
            <td class="border p-2">{{ pedido.fecha }}</td>
            <td class="border p-2">${{ pedido.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import pedidosService from '@/services/PedidosService'

export default {
  data() {
    return {
      pedidos: []
    }
  },
  methods: {
    async fetchPedidos() {
      try {
        this.pedidos = await pedidosService.obtenerPedidos()
      } catch (error) {
        // Manejo de errores
        console.error('No se pudieron cargar los pedidos', error)
      }
    }
  },
  mounted() {
    this.fetchPedidos()
  }
}
  </script>