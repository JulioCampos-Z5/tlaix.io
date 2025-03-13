<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-[#272727]">
    <header>
      <nav class=" bg-[#313133] rounded-[10px] p-[5px] w-[10%]   float-left ">
        <RouterLink to="/Reportes" class="bg-[#313133] block text-[#ffff] no-underline text-center  p-[25px] rounded-[10px] m-[10px] ">Reportes</RouterLink>
        <RouterLink to="/Insumos" class="bg-[#313133] block text-[#ffff] no-underline text-center p-[25px] rounded-[10px]  m-[10px]">Insumos</RouterLink>
        <RouterLink to="/Estadisticas" class="bg-[#313133] block text-[#ffff] no-underline text-center p-[25px] rounded-[10px]  m-[10px]">Estadisticas</RouterLink>
        <RouterLink to="/Platillos" class="bg-[#313133] block text-[#ffff] no-underline text-center p-[25px] rounded-[10px]  m-[10px]">Platillos</RouterLink>
        <RouterLink to="/Promociones" class="bg-[#313133] block text-[#ffff] no-underline text-center p-[25px] rounded-[10px]  m-[10px]">Promociones</RouterLink>
      </nav>
    </header>

    <main class="h-[90vh] bg-[#313133] rounded-[10px] ml-[12%]">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  background-color: #272727;
}
</style>