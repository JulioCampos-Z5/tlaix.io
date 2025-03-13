<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex bg-[#272727] min-h-screen">
    <header class="bg-[#272727] p-4 w-[20%] h-64">
      <nav class="flex flex-col space-y-4 bg-[#313133] p-4 rounded-md">
        <RouterLink to="/Reportes" class="text-[#ffff] no-underline bg-[#313133] p-2 rounded-md text-center m-2.5 h-80">Reportes</RouterLink>
        <RouterLink to="/Insumos" class="text-[#ffff] no-underline bg-[#313133] p-2 rounded-md text-center m-2.5">Insumos</RouterLink>
        <RouterLink to="/Estadisticas" class="text-[#ffff] no-underline bg-[#313133] p-2 rounded-md text-center m-2.5">Estadisticas</RouterLink>
        <RouterLink to="/Platillos" class="text-[#ffff] no-underline bg-[#313133] p-2 rounded-md text-center m-2.5">Platillos</RouterLink>
        <RouterLink to="/Promociones" class="text-[#ffff] no-underline bg-[#313133] p-2 rounded-md text-center m-2.5">Promociones</RouterLink>
      </nav>
    </header>

    <main class="flex-1 p-4 h-[%100] bg-[#272727]">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  background-color: #272727;
}
</style>