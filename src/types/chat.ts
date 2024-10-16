// src/types/chat.ts

export interface User {
    id: string;             // Уникальный идентификатор пользователя
    username: string;      // Имя пользователя
    avatarUrl?: string;    // URL изображения аватара (необязательное поле)
  }
  
  export interface Message {
    id: string;             // Уникальный идентификатор сообщения
    content: string;        // Содержимое сообщения
    senderId: string;       // Идентификатор пользователя, который отправил сообщение
    timestamp: Date;        // Время отправки сообщения
  }
  
  export interface Chat {
    id: string;             // Уникальный идентификатор чата
    participants: User[];   // Участники чата
    messages: Message[];    // Список сообщений в чате
  }
  