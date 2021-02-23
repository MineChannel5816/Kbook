import Conversation from "./Conversation";
//import Messages from "./Messages";

import faker from "faker";

function generateConversations() {
  const conversations = new Array(60).fill({}).map(() => ({
    username: faker.name.findName(),
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    lastMessage: faker.lorem.sentences(),
    date: faker.date.past(),
    isRead: faker.random.boolean(),
    message: new Array(faker.random.number(50)).fill({}).map(() => ({
      direction: faker.random.arrayElement(["received", "sent"]),
      sentAt: faker.date.past(),
      receivedAt: faker.date.past(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    })),
  }));
  return conversations;
}

function App() {
  return (
    <div className="App h-full w-full bg-gray-100 dark:bg-kbook-default flex">
      <Conversation data={generateConversations()} />
    </div>
  );
}

export default App;
