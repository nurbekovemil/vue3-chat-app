<script setup lang="ts">
import Chat from '../../components/chat/Chat.vue';
import { accounts, mails } from '../../components/chat/data';  
</script>

<template>
    <div>
      <Chat
        :accounts="accounts"
        :mails="mails"
        :nav-collapsed-size="4"
      />
    </div>
  </template>
  
  <style scoped>
  /* Ваши стили */
  </style>