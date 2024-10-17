<template>
  <div>
    <header>
      <!-- Админская навигация -->
      <nav>
        <router-link to="/admin/dashboard">Dashboard</router-link>
        <router-link to="/admin/users">User Management</router-link>
      </nav>
    </header>

    <main>
      <!-- Здесь будут отображаться дочерние компоненты -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// Компонент для layout-а администратора
</script>

<style scoped>
/* Стили для админского layout-а */
</style>
