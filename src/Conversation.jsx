import ConversationItem from "./ConversationItem";
import faker from "faker";
//faker.locale = "it";

let comments = new Array(60).fill({}).map(() => ({
  username: faker.name.findName(),
  imgProfile: faker.image.imageUrl(200, 200, null, true),
  lastMessage: faker.lorem.sentences(),
  date: faker.date.past(),
  isRead: faker.random.boolean(),
}));

function Conversation() {
  return (
    <div className="h-screen flex flex-col dark:bg-kbook-default border-r border-gray-200">
      <div className="overflow-y-scroll overflow-x-hidden">
        <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-30" />
        {comments.map((comment, i) => {
          return <ConversationItem key={i} {...comment}></ConversationItem>;
        })}
      </div>

      <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-30" />
    </div>
  );
}

export default Conversation;
