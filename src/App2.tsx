import React, { useState } from "react";

import Conversations from "./Conversations";
import Messages from "./Messages";

import faker from "faker";

export interface Message {
  direction: string;
  sentAt: Date;
  receivedAt: Date;
  readAt: Date;
  body: string;
}

export interface Conversation {
  username: string;
  imgProfile: string;
  lastMessage: string;
  date: Date;
  isRead: boolean;
  messages: Message[];
}

function generateConversations() {
  const conversations: Conversation[] = new Array(60).fill({}).map(() => ({
    username: faker.name.findName(),
    imgProfile: faker.image.imageUrl(200, 200, undefined, true),
    lastMessage: faker.lorem.sentences(),
    date: faker.date.past(),
    isRead: faker.random.boolean(),
    messages: new Array(faker.random.number(50)).fill({}).map(() => ({
      direction: faker.random.arrayElement(["received", "sent"]),
      sentAt: faker.date.past(),
      receivedAt: faker.date.past(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    })),
  }));
  return conversations;
}

const data = generateConversations();

function App() {
  const [
    selectedConversation,
    setSelectedConversation,
  ] = useState<Conversation>(data[0]);
  return (
    <div className="App h-full w-full bg-gray-100 dark:bg-kbook-default flex">
      <Conversations
        data={data}
        onClick={(chat) => setSelectedConversation(chat)}
      />
      <Messages data={selectedConversation.messages} />
    </div>
  );
}

export default App;
