import { createRouter, createWebHistory } from 'vue-router'
// Importaciones de Administracion
import Reportes from '../components/Administracion/Reportes.vue'
import Insumos from '../components/Administracion/Insumos.vue'
import Estadisticas from '../components/Administracion/Estadisticas.vue'
import Platillos from '../components/Administracion/Platillos.vue'
import Promociones from '../components/Administracion/Promociones.vue'
import Registros from '../components/Administracion/Registros.vue'
import Pedido from '@/components/Cocina/Pedido.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rutas de Administracion
    {
      path: '/Reportes',
      name: 'Reportes',
      component: Reportes,
    },
    {
      path: '/Insumos',
      name: 'Insumos',
      component: Insumos,
    },
    {
      path: '/Estadisticas',
      name: 'Estadisticas',
      component: Estadisticas,
    },
    {
      path: '/Platillos',
      name: 'Platillos',
      component: Platillos,
    },
    {
      path: '/Promociones',
      name: 'Promociones',
      component: Promociones,
    },
    {
      path: '/Registros',
      name: 'Registros',
      component: Registros,
    },
    {
      path: '/Pedido',
      name: 'Pedido',
      component: Pedido,
    },
  ],
})

export default router
