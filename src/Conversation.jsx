import ConversationItem from "./ConversationItem";
import faker from "faker";
//faker.locale = "it";

function Conversation() {
  let comments = [
    {
      username: "Pino Peppino",
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: "Donni Mollin",
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: "Nadia Cicirell",
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },

    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
    {
      username: faker.name.findName(),
      imgProfile: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.sentences(),
      date: faker.date.past(),
      isRead: faker.random.boolean(),
    },
  ];

  return (
    <div className="h-full w-full max-w-sm flex flex-col absolute overflow-y-scroll overflow-x-hidden top-0 dark:bg-kbook-default ">
      <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-30" />
      {comments.map((comment, i) => {
        return <ConversationItem key={i} {...comment}></ConversationItem>;
      })}
      <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-30" />
    </div>
  );
}

export default Conversation;
