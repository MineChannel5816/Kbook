import ConversationItem from "./ConversationItem";

function Conversation() {
  let comments = [
    {
      name: "Pino Peppino",
      imgProfile: "https://picsum.photos/200",
      lastMessage:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Donni Mollin",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "dummy text of the printing and typesetting industry.",
      date: new Date(2021, 1, 15),
      isRead: "1",
    },
    {
      name: "Gino Buonvino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "and typesetting",
      date: new Date(2021, 0, 2),
      isRead: "1",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 16),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 0, 30),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },

    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 1, 1),
      isRead: "0",
    },
    {
      name: "Luigi Agatino",
      imgProfile: "https://picsum.photos/200",
      lastMessage: "industry.",
      date: new Date(2021, 2, 1),
      isRead: "0",
    },
  ];

  return (
    <div className="App h-full max-w-sm bg-gray-50 absolute overflow-y-scroll p-2 pl-0">
      <hr className="mx-2" />
      {comments.map((comment, i) => {
        return (
          <ConversationItem
            key={i}
            name={comment.name}
            imgProfile="https://picsum.photos/200"
            lastMessage={comment.lastMessage}
            date={comment.date}
            isRead={comment.isRead}
          ></ConversationItem>
        );
      })}
    </div>
  );
}

export default Conversation;
