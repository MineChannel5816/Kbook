import ConversationItem from "./ConversationItem";

import type { Conversation } from "./App2";

//faker.locale = "it";

interface P {
  data: Conversation[];
  onClick: (chat: Conversation) => void;
}

function Conversations(props: P) {
  return (
    <div className="h-screen flex flex-col dark:bg-kbook-default border-r border-gray-200">
      <div className="overflow-y-scroll overflow-x-hidden">
        <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-30" />
        {props.data.map((c, i) => {
          return (
            <ConversationItem
              key={i}
              conversation={c}
              onClick={props.onClick}
            />
          );
        })}
        <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-30" />
      </div>
    </div>
  );
}

export default Conversations;
