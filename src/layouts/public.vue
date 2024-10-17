<template>
    <div>
      <header>
        <!-- Публичная навигация -->
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </header>
  
      <main>
        <!-- Здесь будут отображаться дочерние компоненты -->
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  // Компонент для публичного layout-а
  </script>
  
  <style scoped>
  /* Стили для публичного layout-а */
  </style>
  