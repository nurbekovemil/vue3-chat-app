import { defineStore } from 'pinia';
import { User, Message, Chat } from '../types/chat';

export const useChatStore = defineStore('chat', {
  state: () => ({
    chats: [] as Chat[], // Хранилище для чатов
    currentChatId: null as string | null, // ID текущего чата
  }),
  actions: {
    addChat(chat: Chat) {
      this.chats.push(chat);
    },
    sendMessage(chatId: string, message: Message) {
      const chat = this.chats.find((chat: Chat) => chat.id === chatId);
      if (chat) {
        chat.messages.push(message);
      }
    },
    setCurrentChat(chatId: string) {
      this.currentChatId = chatId;
    },
  },
});
