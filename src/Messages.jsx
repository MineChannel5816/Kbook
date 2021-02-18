import MessageItem from "./MessageItem";

import { DateTime } from "luxon";
import faker from "faker";
//faker.locale = "it";

let messages = [
  {
    direction: faker.random.arrayElement(["received", "sent"]),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
    body: faker.lorem.sentences(),
  },
  {
    direction: faker.random.arrayElement(["received", "sent"]),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
    body: faker.lorem.sentences(),
  },
  {
    direction: faker.random.arrayElement(["received", "sent"]),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
    body: faker.lorem.sentences(),
  },
  {
    direction: faker.random.arrayElement(["received", "sent"]),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
    body: faker.lorem.sentences(),
  },
  {
    direction: faker.random.arrayElement(["received", "sent"]),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
    body: faker.lorem.sentences(),
  },
  {
    direction: faker.random.arrayElement(["received", "sent"]),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
    body: faker.lorem.sentences(),
  },
  {
    direction: faker.random.arrayElement(["received", "sent"]),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
    body: faker.lorem.sentences(),
  },
];

function MessageDateReception(props) {
  let dataJs = props.receivedAt;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toLocaleString(DateTime.DATETIME_SHORT);
  return (
    <div className="text-gray-500 text-sm place-self-center">{stringDate}</div>
  );
}

function Messages(props) {
  return (
    <div className="h-full flex flex-col-reverse absolute ml-96 bg-gray-100 bottom-0 right-0 left-0">
      {messages.map((message, i) => {
        return (
          <div
            className={`flex flex-col  ${
              message.direction === "received" ? "items-start" : "items-end"
            }`}
          >
            <MessageDateReception {...message} />
            <MessageItem key={i} {...message} />
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
